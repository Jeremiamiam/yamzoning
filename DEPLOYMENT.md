# Guide de Déploiement Next.js

## Configuration de Base

### 1. Configuration Next.js
Dans `next.config.mjs`, utiliser cette configuration minimale :
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Génère une version statique
  images: {
    unoptimized: true, // Nécessaire pour le déploiement statique
  },
};

export default nextConfig;
```

### 2. Fichiers Nécessaires
- Créer un fichier vide `.nojekyll` à la racine du projet
- S'assurer que le fichier `.gitignore` contient :
  ```
  .next
  node_modules
  out
  ```

## Déploiement sur GitHub Pages

### 1. Configuration GitHub
1. Aller dans Settings > Pages
2. Source : GitHub Actions

### 2. GitHub Actions Workflow
Créer `.github/workflows/nextjs.yml` avec :
```yaml
name: Deploy Next.js site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: npm
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: npm ci
      - name: Build with Next.js
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 3. Premier Déploiement sur GitHub Pages
1. Pousser le code :
   ```bash
   git add .
   git commit -m "Initial deployment setup"
   git push
   ```
2. Vérifier le déploiement dans l'onglet "Actions"
3. Le site sera accessible à : `https://{username}.github.io/{repo-name}/`

## Déploiement sur un Domaine Personnalisé

### 1. Build Local
```bash
npm run build
```
Le build génère un dossier `out/` avec les fichiers statiques.

### 2. Hébergement
- Copier le contenu du dossier `out/` à la racine de votre hébergement
- S'assurer que le serveur est configuré pour servir une application Next.js statique

### 3. Configuration DNS
- Pointer votre domaine vers votre hébergement
- Attendre la propagation DNS (peut prendre jusqu'à 48h)

## Dépannage

### 1. Problèmes Courants
- **404 sur les Assets** : Vérifier que tous les fichiers du dossier `out/` sont correctement copiés
- **Images Non Chargées** : Vérifier `unoptimized: true` dans la config
- **Erreurs de Build** : Vérifier les logs dans la console ou GitHub Actions

### 2. Commandes Utiles
```bash
# Test local du build
npm run build
npx serve out

# Nettoyage
rm -rf .next out
npm clean-install
```

## Bonnes Pratiques

### 1. Gestion des Assets
- Utiliser le dossier `public/` pour les assets statiques
- Utiliser des chemins relatifs pour les images et ressources
- Éviter les URLs en dur dans le code

### 2. Vérifications Avant Déploiement
1. Tester le build localement
2. Vérifier les routes et liens
3. Tester les assets statiques
4. Vérifier la performance avec Lighthouse

### 3. Maintenance
- Garder Next.js et les dépendances à jour
- Surveiller les logs d'erreur
- Faire des backups réguliers
- Documenter les modifications majeures 