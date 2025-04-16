// .eslintrc.js
module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@next/next/no-img-element': 'warn'
  },
  parser: '@typescript-eslint/parser', // Assure l'utilisation du parser TS
  plugins: [
    '@typescript-eslint', // Assure le chargement du plugin TS
  ],
  // Optionnel: Spécifiez des paramètres si nécessaire, ex: version de React
  // settings: {
  //   react: {
  //     version: 'detect',
  //   },
  // },
  // Optionnel: Patterns à ignorer (bien que .eslintignore soit souvent préféré avec ce format)
  // ignorePatterns: ['.next/', 'node_modules/'],
};
