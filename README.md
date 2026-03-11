# Samuli Järvinen — Portfolio

Personal portfolio site showcasing my career as a **Senior Solutions Engineer** and **Senior Customer Success Architect** at GitHub.

**Live at:** [frye.github.io](https://frye.github.io/) · also mirrored at [frye.github.io/react-portfolio](https://frye.github.io/react-portfolio/)

## About

A single-page React portfolio focused on customer-facing roles — customer advocacy, technical presentations, value delivery, and strategic partnerships. Built with a dark navy theme, glassmorphism cards, animated gradient headings, and scroll-reveal effects.

### Tech Stack

- **React 19** + **Vite 7** — fast builds, hot module replacement
- **Plain CSS** with custom properties (no preprocessor needed)
- **GitHub Pages** for hosting

### Sections

- **Hero** — Full-bleed sailing photo background with profile picture overlay
- **About** — Bio and career stats
- **Experience** — Timeline of recent customer-facing roles
- **What I Do** — Grid of focus areas (advocacy, presentations, value, partnerships)
- **Footer** — GitHub, LinkedIn, and email links

## Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173/react-portfolio/)
npm run dev

# Lint
npm run lint

# Production build
npm run build
```

## Deployment

The site is deployed to two locations:

### 1. `frye.github.io/react-portfolio/` (this repo)

Uses `gh-pages` to publish the `dist/` folder to the `gh-pages` branch:

```bash
npm run deploy
```

This runs `vite build` then `gh-pages -d dist`. The `base` in `vite.config.js` is set to `/react-portfolio/`.

### 2. `frye.github.io/` (root domain)

Deployed to the separate [frye/frye.github.io](https://github.com/frye/frye.github.io) repo. To update:

```bash
# 1. Change base path to root
#    In vite.config.js, set: base: '/'

# 2. Build
npm run build

# 3. Clone the frye.github.io repo and replace contents
git clone https://github.com/frye/frye.github.io.git /tmp/frye.github.io
cd /tmp/frye.github.io
rm -rf assets *.html *.svg
cp -r <path-to-this-repo>/dist/* .
git add -A
git commit -m "Deploy portfolio site"
git push origin main

# 4. Revert base path back to /react-portfolio/ in vite.config.js
```

> **Important:** Remember to revert `base` back to `/react-portfolio/` after deploying to the root domain, so `npm run deploy` still works correctly for this repo.
