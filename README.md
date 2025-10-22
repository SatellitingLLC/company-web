# Satelliting Web

## Overview
Satelliting Web is the marketing and project showcase site for Satelliting LLC, a remote-first digital studio. The experience highlights recent launches, explains the studio's operating model, and provides clear contact pathways for prospective partners.

## Features
- **Dynamic theming**: `src/App.jsx` manages light and dark themes with a toggle exposed in `src/components/Footer.jsx`.
- **Navigation & routing**: `src/components/Navigation.jsx` and React Router power the multi-page layout for Home, About, and Contact views under `src/pages/`.
- **Project portfolio**: `src/pages/Home.jsx` renders case studies from `src/data/projects.js`.
- **Narrative about page**: `src/pages/About.jsx` details differentiators, process, and values with enriched card layouts.
- **Contact details hub**: `src/pages/Contact.jsx` replaces intake forms with direct email guidance tailored for remote collaboration.
- **SEO essentials**: `public/sitemap.xml` and structured page content help search engines index core routes.

## Tech Stack
- **Framework**: React 19 with React Router 6.
- **Build tool**: Vite 7 for local dev, bundling, and preview.
- **Styling**: Tailwind CSS with DaisyUI components for rapid UI theming.
- **Icons**: Font Awesome (solid, regular, and brand packs).

## Getting Started
- **Prerequisites**: Node.js 20+ and npm 10+ (or compatible pnpm/yarn).
- **Install dependencies**:
  ```bash
  npm install
  ```
- **Run locally**:
  ```bash
  npm run dev
  ```
- **Lint source**:
  ```bash
  npm run lint
  ```

## Available Scripts
- **`npm run dev`**: Starts Vite in development mode with HMR.
- **`npm run build`**: Generates production assets in `dist/`.
- **`npm run preview`**: Serves the production build locally.
- **`npm run lint`**: Runs ESLint across the project.

## Project Structure
- **`src/App.jsx`**: Theme management and route definitions.
- **`src/pages/`**: Page-level React components (`Home.jsx`, `About.jsx`, `Contact.jsx`).
- **`src/components/`**: Shared UI such as `Navigation.jsx` and `Footer.jsx`.
- **`src/data/`**: Structured content like `projects.js` powering the portfolio grid.
- **`public/`**: Static assets served as-is (e.g., `sitemap.xml`).

## Deployment
- **Build**: `npm run build` outputs optimized assets to `dist/`.
- **GitHub Pages (recommended)**:
  - Push the project to a GitHub repository.
  - Configure `vite.config.js` `base` if using a project page (e.g., `/repo-name/`).
  - Add a GitHub Actions workflow to run `npm ci`, `npm run build`, and deploy the `dist/` directory (see Pages docs for `deploy-pages` action).
- **Other hosts**: Any static host (Netlify, Vercel, Cloudflare Pages) can serve the contents of `dist/` directly.

## Content Updates
- **Projects**: Modify or extend `src/data/projects.js` to adjust featured work.
- **Page copy**: Update messaging inside the relevant component under `src/pages/`.
- **Brand assets**: Replace files in `src/assets/` and adjust imports as needed.

## License
This project is proprietary to Satelliting LLC. Contact the maintainer for usage or redistribution questions.
