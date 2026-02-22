# EduEco

Projet React pour EduEco avec un backend Express (feedback).

## Demarrage

Frontend:

```bash
npm install
npm start
```

Backend:

```bash
cd backend
npm install
npm start
```

## Tests

Frontend:

```bash
npm test
```

Backend:

```bash
cd backend
npm test
```

## Build

```bash
npm run build
```

## Audit Lighthouse en mode production local

N'executez pas Lighthouse sur `npm start` (bundle dev non minifie, cache dev, websocket HMR).

```bash
npm run build
npm run serve:prod
```

Puis lancez Lighthouse sur `http://localhost:4173`.

La commande de build genere automatiquement `public/sitemap.xml` avant la compilation.
