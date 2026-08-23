# Biswaranjan Das — Portfolio (React + Vite)

An Itachi-Uchiha-themed portfolio site. React components, Vite build tooling,
plain CSS per component. `index.html` is just the page shell — all real
content and structure live in `src/`.

## Project structure

```
index.html                  ← shell only: mounts React, loads fonts
src/
  main.jsx                  ← React entry point
  App.jsx                   ← assembles all sections in order
  data/
    content.js               ← ALL site copy lives here — edit this first
  components/
    Nav.jsx / Nav.css
    Hero.jsx / Hero.css              (bingo-book dossier + eye awakening animation)
    Nindo.jsx / Nindo.css            (About)
    Missions.jsx / Missions.css      (Experience timeline)
    Jutsu.jsx / Jutsu.css            (Skills)
    Evolution.jsx / Evolution.css    (Projects, as Sharingan stages)
    Academy.jsx / Academy.css        (Education)
    Contact.jsx / Contact.css        (Summoning Contract)
    Footer.jsx / Footer.css
    SharinganIcon.jsx        ← shared SVG icon, used by Nav/Hero/Evolution
    RainBackground.jsx / .css ← canvas rain + feathers + lightning flash
  hooks/
    useInView.js              ← scroll-reveal (IntersectionObserver)
    useRain.js                ← drives the rain canvas
  styles/
    variables.css             ← design tokens (colors)
    global.css                ← resets, base type, shared section/eyebrow rules
```

## Editing content

Almost everything you'll want to change — name, role, experience bullets,
skills, project descriptions, contact links — lives in **`src/data/content.js`**.
You shouldn't need to touch component files just to update copy.

To change colors, edit **`src/styles/variables.css`**.

To change a section's layout or add a new animation, that section's own
`.jsx`/`.css` pair is the place to look.

## Local development

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev
```

This starts a local dev server (usually `http://localhost:5173`) with hot
reload — edit any file and the browser updates instantly.

## Building for production

```bash
npm run build
```

Outputs a static site into `dist/`. That folder is what you deploy —
it's plain HTML/CSS/JS, no server required.

To preview the production build locally before deploying:

```bash
npm run preview
```

## Deploying to GitHub Pages (automatic — recommended)

This project includes `.github/workflows/deploy.yml`, which builds and
publishes the site automatically every time you push to `main`. This is
the setup you want if `https://biswadas30.github.io` is meant to be a
stable, shareable link — no manual build-and-upload step, ever. Push new
code, wait ~1 minute, the live link updates itself.

1. **Create the repo** on GitHub named exactly `biswadas30.github.io`
   (this makes it a "user site" served at the root domain, no sub-path).
   Public, no README/gitignore initialization needed — you already have both.

2. **Push this whole project** (source code, not the `dist/` build output)
   to the `main` branch:
   ```bash
   cd portfolio-react
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/BiswaDas30/biswadas30.github.io.git
   git push -u origin main
   ```

3. **Enable Pages via Actions**: in the repo, go to **Settings → Pages**.
   Under "Build and deployment", set **Source** to **GitHub Actions**
   (not "Deploy from a branch" — that older option would try to serve
   your raw source files instead of the built site).

4. That's it. The workflow runs automatically on this push and on every
   future push to `main`. Check the **Actions** tab to watch it build;
   once green, `https://biswadas30.github.io` is live and will always
   reflect whatever's on `main`.

Because this is the root `.github.io` repo, `vite.config.js` already has
`base: './'`, which is correct — leave it as is.

## Deploying to GitHub Pages (manual alternative)

If you'd rather not use Actions, you can build locally and push only the
built output:

```bash
npm run build
```

This outputs a static site into `dist/`. That folder is what you'd deploy —
copy its contents to the root of your repo (or use the `gh-pages` npm
package to automate pushing `dist/` to a branch). This works, but you'll
need to re-run it by hand after every content change — the Actions
approach above avoids that entirely.

## Notes on the animations

- The Sharingan icon used in the nav, hero, and each project card is one
  shared component (`SharinganIcon.jsx`) — it's not five hand-drawn SVGs.
- The hero eye's "awakening" sequence and the scroll-triggered tomoe
  snap-ins in the Evolution section both respect `prefers-reduced-motion`
  and fall back to a static, fully-visible state.
- The rain background is canvas-based (real physics, not a looping video
  or tiled image) and also respects `prefers-reduced-motion`.
