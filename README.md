# Portfolio Data Architect SAP

Site web portfolio professionnel pour consultant SAP, spécialisé en BW/4HANA et solutions d'analytique.

## Description

Portfolio statique développé en HTML5, CSS3 et JavaScript vanilla. Design moderne avec thème sombre, navigation responsive, curseur personnalisé et animations au défilement.

## Sections

- **Accueil** : Présentation minimaliste
- **Projets** : Missions et réalisations SAP, présentées avec des panneaux animés
- **Compétences** : Technologies et expertises
- **Contact** : Formulaire de contact (intégration Formward)

## Technologies utilisées

- HTML5
- CSS3 (Variables CSS, Grid, Flexbox)
- JavaScript vanilla
- GSAP et ScrollTrigger pour les animations et panneaux au défilement
- Formward pour le formulaire de contact
- Polices WOFF2 hébergées localement

Les scripts JavaScript sont séparés selon leur responsabilité :

- `js/main.js` : thème, année du pied de page, formulaire de contact et curseur personnalisé
- `js/gsap.js` : animations GSAP et comportements ScrollTrigger

## Polices

Les polices sont chargées depuis `assets/fonts/`, sans requête vers Google Fonts :

- Space Grotesk : `assets/fonts/SpaceGrotesk/SpaceGrotesk[wght].woff2`
- Inter : `assets/fonts/Inter/InterVariable.woff2`
- Space Mono : `assets/fonts/SpaceMono/SpaceMono[wght].woff2`

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
│   ├── main.js
│   └── gsap.js
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

1. Modifier les informations personnelles dans `index.html`
2. Mettre à jour les projets dans la section `03 / Projets`
3. Ajuster les compétences dans la section `02 / À propos`
4. Configurer le formulaire de contact avec votre propre endpoint Formward dans `js/main.js`

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