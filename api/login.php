<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST')    { http_response_code(405); exit; }

// ─────────────────────────────────────────
//  YOUR BCRYPT HASH goes here.
//  Run generate-hash.php ONCE to get it,
//  then paste the output below and delete
//  generate-hash.php from your server.
// ─────────────────────────────────────────
$PASS_HASH = '$2y$12$FVHbxos0QAIDlrZyV1MzgeMkNa1gr6ldFSlkujDXVayntjYFvF.e2';

// ─────────────────────────────────────────
//  Session token storage
//  Tokens live in data/tokens.json
//  Each token expires after 8 hours.
// ─────────────────────────────────────────
$TOKENS_FILE  = __DIR__ . '/../data/tokens.json';
$TOKEN_TTL    = 60 * 60 * 8; // 8 hours in seconds

function readTokens($file) {
    if (!file_exists($file)) return [];
    return json_decode(file_get_contents($file), true) ?: [];
}

function writeTokens($file, $tokens) {
    file_put_contents($file, json_encode($tokens, JSON_PRETTY_PRINT));
}

function pruneExpired($tokens, $ttl) {
    $now = time();
    return array_values(array_filter($tokens, fn($t) => ($now - $t['created']) < $ttl));
}

// ─────────────────────────────────────────
//  Check password
// ─────────────────────────────────────────
$body = json_decode(file_get_contents('php://input'), true);
$pw   = $body['password'] ?? '';

if (!password_verify($pw, $PASS_HASH)) {
    // Artificial delay to slow brute-force attempts
    sleep(1);
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

// ─────────────────────────────────────────
//  Issue a token
// ─────────────────────────────────────────
$token  = bin2hex(random_bytes(32)); // 64-char secure random hex string
$tokens = pruneExpired(readTokens($TOKENS_FILE), $TOKEN_TTL);
$tokens[] = ['token' => $token, 'created' => time()];
writeTokens($TOKENS_FILE, $tokens);

echo json_encode(['token' => $token]);
