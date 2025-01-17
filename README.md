# IPLSocial

## Auteur
**Nom :** Filipe Lopes de Sousa  
**Email Vinci :** filipe.lopesdesousa@student.vinci.be  

---

## URL du projet
[GitHub Repository - IPL Social](https://github.com/filipe-lopesdesousa-vinci/IPLSocial)

---

## Description du projet
Ce projet a pour but de créer un environnement DevOps basique pour le projet "IPL Social".  
L'objectif est d'utiliser une pipeline CI via GitHub Actions afin d'automatiser les tests en suivant la méthodologie **TDD (Test Driven Development)**.

Une fonction de validation de mot de passe a été développée dans le fichier [`src/passwordChecker.js`](src/passwordChecker.js). Elle vérifie les critères suivants :
1. Contient au moins 8 caractères.
2. Contient au moins un caractère spécial.
3. Contient au moins un chiffre.
4. Ne contient pas la chaîne "IPL" (insensible à la casse).

Les tests associés sont écrits dans [`spec/passwordChecker.spec.js`](spec/passwordChecker.spec.js) et exécutés automatiquement lors de chaque merge ou pull request vers la branche `main`.

---

## Installation et Exécution
### Étape 1 : Cloner le dépôt
```bash
git clone https://github.com/filipe-lopesdesousa-vinci/IPLSocial.git
cd IPLSocial
```

### Étape 2 : Installer les dépendances
```bash
npm install
```

### Étape 3 : Exécuter les tests
```bash
npm run test
```

## Explication du code

Pour tester la validation d'un mot de passe, j'ai tester les differentes conditions une par une dans des branches séparées. J'ai commencer par tester la longueur du mot de passe, ensuite la presence de characteres speciaux, ensuite la presence d'un nombre et finalement la presence de la chaine de charactere IPL peut importe la casse.
J'ai finalement tout regroupé dans une fonction qui fait appel aux differentes donctions séparemment.