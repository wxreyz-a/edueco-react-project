const fs = require('fs');
const path = require('path');

const baseUrl = 'https://edueco.fr/';

const routes = [
  '/', '/contact', '/livre',
  '/parties-chapitre-un', '/chapitre-un-partie-une', '/chapitre-un-partie-deux',
  '/chapitre-un-partie-trois', '/chapitre-un-partie-quatre', '/parties-chapitre-deux',
  '/chapitre-deux-partie-une', '/chapitre-deux-partie-deux', '/chapitre-deux-partie-trois',
  '/chapitre-deux-partie-quatre', '/parties-chapitre-trois', '/chapitre-trois-partie-une',
  '/chapitre-trois-partie-deux', '/chapitre-trois-partie-trois', '/chapitre-trois-partie-quatre',
  '/parties-chapitre-quatre', '/chapitre-quatre-partie-une', '/chapitre-quatre-partie-deux',
  '/chapitre-quatre-partie-trois', '/chapitre-quatre-partie-quatre', '/apprendre',
  '/formation-complete', '/faire-un-budget', '/epargne', '/investissement', '/credit',
  '/assurance', '/fiscalite', '/immobilier', '/retraite', '/bourse', '/crypto', '/guides',
  '/guide-budget', '/guide-epargne', '/guide-investissement', '/conseils-fiscalite',
  '/strategies-investissement', '/conseils-retraite', '/actualites', '/ressources',
  '/investir-2025', '/trump-tarifs', '/calculateur-epargne', '/simulateur-investissement', '/mentions-legales',
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `
  <url>
    <loc>${baseUrl}${route}</loc>
  </url>
`).join('')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);

console.log('✅ Sitemap généré dans /public/sitemap.xml');
