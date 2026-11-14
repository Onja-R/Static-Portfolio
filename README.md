# Portfolio Data Architect SAP

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
- Polices WOFF2 hébergées localement

## Polices

Les polices sont chargées depuis `assets/fonts/`, sans requête vers Google Fonts :

- Space Grotesk : `assets/fonts/SpaceGrotesk/SpaceGrotesk[wght].woff2`
- Inter : `assets/fonts/Inter/InterVariable.woff2`
- IBM Plex Mono : `assets/fonts/IBMPlexMono/IBMPlexMono[wght].woff2`

Leurs déclarations `@font-face` et les familles de polices utilisées par le site sont définies dans `css/style.css`.

## Structure du projet

```
/
├── index.html
├── projets.html
├── competences.html
├── contact.html
├── assets/
│   └── fonts/
│       ├── IBMPlexMono/
│       ├── Inter/
│       └── SpaceGrotesk/
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
git clone https://github.com/Onja-R/Static-Portfolio.git
```

2. Ouvrir `index.html` dans un navigateur

## Déploiement sur GitHub Pages

1. Aller dans Settings > Pages
2. Source : Deploy from a branch
3. Branch : main + /root
4. Sauvegarder

Le site sera accessible à l'adresse : `https://onja-r.github.io/Static-Portfolio/`

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

Tous droits réservés © 2026

## Contact

Pour toute question ou collaboration : [Formulaire de contact]