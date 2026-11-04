# Viren Velacheri — Personal Portfolio

A static, responsive portfolio for GitHub Pages. The design takes inspiration from the quiet editorial typography, warm paper palette, reading column, and side index of [Forethought’s research articles](https://www.forethought.org/research/preparing-for-the-intelligence-explosion). Original project images, company logos, and skill icons are preserved. The marginal line illustration is original artwork.

## Preview locally

From this directory, run:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000`. There is no build step or package installation.

## Edit or deploy

- `index.html` contains all portfolio content and metadata.
- `assets/css/style.css` controls the layout, responsive navigation, and motion preferences.
- `assets/js/main.js` provides the mobile menu and active-section navigation. Content, image links, and navigation remain available without JavaScript.
- `assets/img/` contains the retained project photography, headshot, company logos, and skill icons. `assets/img/illustrations/folded-lines.svg` is the small decorative margin illustration.
- `assets/resume/Viren_Velacheri_Resume.pdf` is linked from navigation and experience.
- Fonts are served locally from `assets/fonts/`; the included SIL Open Font License files cover DM Sans, Newsreader, and the retained Source Serif 4 files.

Publish these files to the repository’s GitHub Pages source branch as usual. Existing Google Tag Manager, analytics, and search verification settings have been retained. Experience dates and contact details come from the previous portfolio and should be updated here when they change.
