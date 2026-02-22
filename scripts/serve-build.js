const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

const buildDir = path.resolve(__dirname, '..', 'build');
const port = Number(process.env.PORT) || 4173;

const MIME_TYPES = {
  '.avif': 'image/avif',
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8'
};

function hasImmutableFingerprint(pathname) {
  // CRA build assets contain a content hash in filenames.
  return /\.[a-f0-9]{8,}\./i.test(pathname);
}

function setCacheHeaders(res, pathname) {
  const lowerPath = pathname.toLowerCase();

  if (lowerPath.endsWith('.html')) {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    return;
  }

  if (hasImmutableFingerprint(lowerPath)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    return;
  }

  if (/\.(js|mjs|css|png|jpg|jpeg|gif|svg|webp|avif|ico|woff|woff2)$/i.test(lowerPath)) {
    res.setHeader('Cache-Control', 'public, max-age=86400');
    return;
  }

  if (/\.(json|xml|txt)$/i.test(lowerPath)) {
    res.setHeader('Cache-Control', 'public, max-age=3600');
    return;
  }

  res.setHeader('Cache-Control', 'no-cache');
}

function safePathFromUrl(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split('?')[0].split('#')[0]);
  const normalized = path.normalize(cleanPath).replace(/^(\.\.[\\/])+/, '');
  const withoutLeadingSlash = normalized.replace(/^[/\\]+/, '');
  const resolved = path.resolve(buildDir, withoutLeadingSlash);

  if (!resolved.startsWith(buildDir)) {
    return null;
  }

  return resolved;
}

function serveFile(filePath, requestPath, res) {
  fs.stat(filePath, (statError, statResult) => {
    if (statError || !statResult.isFile()) {
      res.statusCode = 404;
      res.end('Not found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Length', statResult.size);
    setCacheHeaders(res, requestPath);

    const stream = fs.createReadStream(filePath);
    stream.on('error', () => {
      res.statusCode = 500;
      res.end('Internal server error');
    });
    stream.pipe(res);
  });
}

if (!fs.existsSync(buildDir)) {
  console.error('Build folder not found. Run "npm run build" first.');
  process.exit(1);
}

const server = http.createServer((req, res) => {
  const requestPath = req.url && req.url !== '/' ? req.url : '/index.html';
  const staticPath = safePathFromUrl(requestPath);

  if (!staticPath) {
    res.statusCode = 400;
    res.end('Bad request');
    return;
  }

  fs.stat(staticPath, (err, stats) => {
    if (!err && stats.isFile()) {
      serveFile(staticPath, requestPath, res);
      return;
    }

    const indexPath = path.join(buildDir, 'index.html');
    serveFile(indexPath, '/index.html', res);
  });
});

server.on('error', (error) => {
  if (error?.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Set another port with PORT=<port>.`);
  } else {
    console.error('Failed to start local build server:', error);
  }
  process.exit(1);
});

server.listen(port, () => {
  console.log(`Serving build on http://localhost:${port}`);
});
