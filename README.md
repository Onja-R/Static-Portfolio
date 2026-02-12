# Portfolio SAP - Consultant BW/4HANA

Site web portfolio professionnel pour consultant SAP, spécialisé en BW/4HANA et solutions d'analytique.

## Description

Portfolio statique développé en HTML5, CSS3 et JavaScript vanilla. Design moderne avec thème sombre et navigation responsive.

## Sections

- **Accueil** : Présentation minimaliste
- **Projets** : Missions et réalisations SAP
- **Compétences** : Technologies et expertises
- **Contact** : Formulaire de contact (intégration Formspree)

## Technologies utilisées

- HTML5
- CSS3 (Variables CSS, Grid, Flexbox)
- JavaScript vanilla
- Formspree pour le formulaire de contact

## Structure du projet

```
/
├── index.html
├── projets.html
├── competences.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
└── README.md
```

## Installation locale

1. Cloner le dépôt :
```bash
git clone https://github.com/votre-nom-utilisateur/nom-du-depot.git
```

2. Ouvrir `index.html` dans un navigateur

## Déploiement sur GitHub Pages

1. Aller dans Settings > Pages
2. Source : Deploy from a branch
3. Branch : main + /root
4. Sauvegarder

Le site sera accessible à l'adresse : `https://votre-nom-utilisateur.github.io/nom-du-depot/`

## Personnalisation

### Modifier les informations personnelles

1. Remplacer "Votre Nom" dans tous les fichiers HTML
2. Mettre à jour les projets dans `projets.html`
3. Ajuster les compétences dans `competences.html`
4. Configurer le formulaire de contact avec votre propre endpoint Formspree

### Modifier les couleurs

Éditer les variables CSS dans `css/style.css` :

```css
:root {
    --bg-primary: #0a0e27;
    --bg-secondary: #151935;
    --text-primary: #e0e0e0;
    --text-secondary: #a0a0a0;
    --accent: #4a9eff;
    --accent-hover: #6bb3ff;
    --border: #2a2e45;
}
```

## Licence

Tous droits réservés © 2025

## Contact

Pour toute question ou collaboration : [Formulaire de contact](contact.html)