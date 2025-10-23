<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Student Portfolio (JS/JSX)

This is a React portfolio built with JavaScript/JSX. Components live under `components/`, the theme context under `contexts/`, and custom hooks under `hooks/`.

## Introduction

A clean, fast, and customizable portfolio to showcase your work, skills, and story. It’s built with React + Vite, uses lightweight styles, and includes a simple theming system so you can make it yours in minutes.

If you’re a student, recent grad, or anyone building a personal site, this repo gives you a solid starting point with sensible defaults and room to grow.

## Project overview

- Single-page app with sections for About, Education, Projects, Tech Stack, Resume, and Contact
- Smooth entrance animations and scroll reveal for a polished feel
- Theme context with easy light/dark handling and centralized styling
- Minimal configuration via `config/app.config.js`
- Production-ready build via Vite, with GitHub Pages deployment baked in

### Features

- Fast local dev with hot-reload (Vite)
- Frictionless deploys to GitHub Pages (workflow included)
- Framer Motion-based animations for section and element reveals
- Straightforward component structure with a shared `Section` wrapper
- Minimal dependencies and a small bundle footprint

### Tech stack

- React 19
- Vite 6
- Framer Motion 11
- JSX + modern ES modules

## Quick start

Prerequisites: Node.js 20+ and npm

Install and run locally (Windows cmd):

```cmd
npm install
npm run dev
```

Build and preview production:

```cmd
npm run build
npm run preview
```

Entry point: `index.html` boots `/index.jsx`.

## Project structure

```
App.jsx
index.html
index.jsx
metadata.json
package.json
README.md
styles.css
vite.config.js
components/
	About.jsx
	Certifications.jsx
	Contact.jsx
	Education.jsx
	Footer.jsx
	Header.jsx
	Hero.jsx
	LoadingScreen.jsx
	Projects.jsx
	Resume.jsx
	Section.jsx
	TechStack.jsx
config/
	app.config.js
contexts/
	ThemeContext.jsx
hooks/
	useScrollReveal.js
```

## Development scripts

These are available via npm scripts (from `package.json`):

- `npm run dev` — Start the local dev server
- `npm run build` — Create a production build in `dist/`
- `npm run preview` — Preview the built site locally

## Configuration and customization

- `config/app.config.js` — Central place for site metadata and settings (titles, links, social, etc.). Update these to personalize your site.
- `contexts/ThemeContext.jsx` — Theme provider and toggling logic. Extend to add themes or persist preferences.
- `hooks/useScrollReveal.js` — Small helper to animate items as they enter the viewport.
- `components/Section.jsx` — Shared layout + reveal wrapper to keep sections consistent.

Styling: Global styles are in `styles.css`. Add component-level styles or CSS variables as needed.

## Accessibility and performance

- Prefer semantic HTML in components (`header`, `nav`, `main`, `section`, `footer`).
- Include descriptive `alt` text for images (e.g., in `Hero` and project thumbnails).
- Keep animations subtle and respect motion preferences if you extend them (`prefers-reduced-motion`).
- Use compressed images and SVGs for best load times.


## Deploy to GitHub Pages

This repo includes an Actions workflow at `.github/workflows/deploy.yml` that:

- Builds the site with Vite
- Automatically computes the correct `base` path for Pages
- Publishes `dist/` to GitHub Pages on pushes to `main` or `master`

### 1) Push to a GitHub repo

```cmd
git init
git add -A
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### 2) Enable Pages

- In GitHub: Settings → Pages → Build and deployment → Source: GitHub Actions
- On your next push to `main`, the "Deploy to GitHub Pages" workflow will run and publish the site

The workflow auto-detects whether the repo is a user/org site (`<user>.github.io`, base `/`) or a project site (base `/<repo>/`). No manual `vite.config.js` changes are required.

 

## Troubleshooting

- Assets 404 on GitHub Pages: ensure Pages is enabled via GitHub Actions, and that the workflow completed successfully.
- Wrong asset paths on Pages: confirm the site URL is `https://<user>.github.io/<repo>/` (project site). The workflow injects the correct `--base` automatically.
- Local dev errors: try clearing caches and reinstalling.

```cmd
rd /s /q node_modules
del /q package-lock.json
npm install
npm run dev
```

## Contributing

Issues and improvements are welcome. If you plan larger changes, consider opening an issue first to discuss direction.

---

If this template helps you ship your portfolio faster, share a star and pay it forward to someone who needs a site.
