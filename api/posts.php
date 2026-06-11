<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Admin-Token');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }

$DATA_FILE   = __DIR__ . '/../data/posts.json';
$TOKENS_FILE = __DIR__ . '/../data/tokens.json';
$TOKEN_TTL   = 60 * 60 * 8; // must match login.php

// ─────────────────────────────────────────
//  Helpers
// ─────────────────────────────────────────
function readPosts($file) {
    if (!file_exists($file)) return [];
    return json_decode(file_get_contents($file), true) ?: [];
}

function writePosts($file, $posts) {
    file_put_contents($file, json_encode($posts, JSON_PRETTY_PRINT));
}

function readTokens($file) {
    if (!file_exists($file)) return [];
    return json_decode(file_get_contents($file), true) ?: [];
}

// ─────────────────────────────────────────
//  Token validation
//  Uses hash_equals() to prevent timing attacks.
// ─────────────────────────────────────────
function isAdmin($tokensFile, $ttl) {
    $incoming = $_SERVER['HTTP_X_ADMIN_TOKEN'] ?? '';
    if (!$incoming) return false;

    $now    = time();
    $tokens = readTokens($tokensFile);

    foreach ($tokens as $t) {
        if (
            ($now - $t['created']) < $ttl &&
            hash_equals($t['token'], $incoming)
        ) {
            return true;
        }
    }
    return false;
}

// ─────────────────────────────────────────
//  Routes
// ─────────────────────────────────────────
$method = $_SERVER['REQUEST_METHOD'];

// GET — public, anyone can read posts
if ($method === 'GET') {
    echo json_encode(readPosts($DATA_FILE));
    exit;
}

// All write operations require a valid session token
if (!isAdmin($TOKENS_FILE, $TOKEN_TTL)) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

$body  = json_decode(file_get_contents('php://input'), true);
$posts = readPosts($DATA_FILE);

// POST — create new post
if ($method === 'POST') {
    $posts[] = $body;
    writePosts($DATA_FILE, $posts);
    echo json_encode($body);
    exit;
}

// PUT — update existing post
if ($method === 'PUT') {
    $id = $body['id'] ?? '';
    foreach ($posts as &$p) {
        if ($p['id'] === $id) { $p = $body; break; }
    }
    writePosts($DATA_FILE, $posts);
    echo json_encode($body);
    exit;
}

// DELETE — delete post by id
if ($method === 'DELETE') {
    $id    = $_GET['id'] ?? '';
    $posts = array_values(array_filter($posts, fn($p) => $p['id'] !== $id));
    writePosts($DATA_FILE, $posts);
    echo json_encode(['ok' => true]);
    exit;
}
