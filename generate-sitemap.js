const fs = require('fs');
const path = require('path');

const baseUrl = 'https://edueco.fr/';

// Read src/App.js to extract routes dynamically
const appJsPath = path.join(__dirname, 'src', 'App.js');
const appJsContent = fs.readFileSync(appJsPath, 'utf-8');

// Regex to match route paths in <Route path="..."
const routePathRegex = /<Route\s+path=['"]([^'"]+)['"]/g;

const routes = [];
let match;
while ((match = routePathRegex.exec(appJsContent)) !== null) {
  routes.push(match[1]);
}

// Ensure root path is included
if (!routes.includes('/')) {
  routes.unshift('/');
}

// Ensure the public directory exists
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`).join('')}
</urlset>`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

console.log('✅ Sitemap généré dans /public/sitemap.xml');
