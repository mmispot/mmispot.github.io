<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, X-Admin-Key');

$DATA_FILE = __DIR__ . '/../data/posts.json';
$ADMIN_KEY = 'miliOS2026'; // ← your password

function readPosts($file) {
  if (!file_exists($file)) return [];
  $json = file_get_contents($file);
  return json_decode($json, true) ?: [];
}

function writePosts($file, $posts) {
  file_put_contents($file, json_encode($posts, JSON_PRETTY_PRINT));
}

function isAdmin() {
  global $ADMIN_KEY;
  return ($_SERVER['HTTP_X_ADMIN_KEY'] ?? '') === $ADMIN_KEY;
}

$method = $_SERVER['REQUEST_METHOD'];

// GET — anyone can read
if ($method === 'GET') {
  echo json_encode(readPosts($DATA_FILE));
  exit;
}

// All write operations require admin key
if (!isAdmin()) {
  http_response_code(401);
  echo json_encode(['error' => 'Unauthorized']);
  exit;
}

$body = json_decode(file_get_contents('php://input'), true);
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
  $id = $_GET['id'] ?? '';
  $posts = array_values(array_filter($posts, fn($p) => $p['id'] !== $id));
  writePosts($DATA_FILE, $posts);
  echo json_encode(['ok' => true]);
  exit;
}