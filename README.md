# Viren Velacheri — Personal Portfolio

A static, responsive portfolio for GitHub Pages. The design takes inspiration from the editorial typography, warm paper palette, dotted field, and modular terracotta artwork of [Anthropic’s recursive self-improvement article](https://www.anthropic.com/institute/recursive-self-improvement). The V monogram and project illustrations are original artwork.

## Preview locally

From this directory, run:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. There is no build step or package installation.

## Edit or deploy

- `index.html` contains all portfolio content and metadata.
- `assets/css/style.css` controls the layout, responsive navigation, and motion preferences.
- `assets/js/main.js` provides the mobile menu and active-section navigation. Content, project disclosures, and navigation remain available without JavaScript.
- `assets/img/illustrations/` contains the three project diagrams; the modular V is inline SVG in `index.html`.
- `assets/resume/Viren_Velacheri_Resume.pdf` is linked from navigation and experience.
- Fonts are served locally from `assets/fonts/`; the included SIL Open Font License files cover DM Sans and Source Serif 4.

Publish these files to the repository’s GitHub Pages source branch as usual. Existing Google Tag Manager, analytics, and search verification settings have been retained. Experience dates and contact details come from the previous portfolio and should be updated here when they change.
