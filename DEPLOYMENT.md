# Guide de Déploiement Next.js sur GitHub Pages

## Configuration Initiale

### 1. Configuration Next.js
Dans `next.config.mjs`, ajouter :
```javascript
const nextConfig = {
  output: 'export', // Génère une version statique
  basePath: '/{nom-du-repo}', // Remplacer {nom-du-repo} par le nom de votre dépôt GitHub
  images: {
    unoptimized: true, // Nécessaire pour le déploiement statique
  },
};
```

### 2. Fichiers Nécessaires
- Créer un fichier vide `.nojekyll` à la racine du projet pour désactiver Jekyll sur GitHub Pages
- S'assurer que le fichier `.gitignore` contient :
  ```
  .next
  node_modules
  out
  ```

## Configuration GitHub

### 1. Paramètres du Dépôt
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

## Déploiement

### 1. Premier Déploiement
1. Pousser le code sur la branche main :
   ```bash
   git add .
   git commit -m "Initial deployment setup"
   git push
   ```
2. Vérifier le statut du déploiement dans l'onglet "Actions" du dépôt GitHub

### 2. URL de l'Application
- L'application sera accessible à : `https://{username}.github.io/{nom-du-repo}/`
- Exemple : `https://jeremiamiam.github.io/yamzoning/`

## Dépannage

### Problèmes Courants
1. **404 sur la Page d'Accueil**
   - Vérifier que `basePath` dans `next.config.mjs` correspond exactement au nom du dépôt
   - S'assurer que le fichier `.nojekyll` existe

2. **Images Non Chargées**
   - Vérifier que `images.unoptimized` est bien à `true`
   - Utiliser des chemins relatifs pour les images

3. **Erreurs de Build**
   - Vérifier les logs dans GitHub Actions
   - S'assurer que toutes les dépendances sont correctement listées dans `package.json`

### Commandes Utiles
```bash
# Tester le build en local
npm run build

# Vérifier la version statique
npx serve out

# Nettoyer le cache
rm -rf .next out
npm clean-install
```

## Bonnes Pratiques

1. **Gestion des Routes**
   - Utiliser `Link` de Next.js avec des chemins relatifs
   - Ne pas hardcoder les URLs complètes

2. **Assets**
   - Placer les images dans `public/`
   - Utiliser `next/image` avec des chemins relatifs

3. **Environnement**
   - Utiliser `.env.local` pour les variables locales
   - Configurer les secrets dans GitHub si nécessaire

## Mise à Jour du Site

1. Faire les modifications
2. Tester en local : `npm run dev`
3. Commit et push sur main
4. Le déploiement se fait automatiquement via GitHub Actions 