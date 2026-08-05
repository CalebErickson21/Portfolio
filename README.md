# Portfolio

Personal portfolio site for **Caleb Erickson** — a multipage React app that presents experience, projects, skills, and contact info. Content lives in typed TypeScript modules (no backend or database).

**Live:** [caleberickson21.github.io](https://caleberickson21.github.io) (GitHub Pages → Vercel)

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** + **shadcn/ui** (Base UI), Magic UI, Aceternity UI
- **React Router** for client-side routing
- **Motion** for animation

## Repository layout

```
portfolio/
├── README.md           # This file — purpose, layout, startup, deployment
└── frontend/           # Vite React app (see frontend/README.md)
    ├── src/
    │   ├── assets/     # Images, resume PDF, and other static media
    │   ├── components/ # App components (+ components/ui for primitives)
    │   ├── contexts/   # React providers
    │   ├── data/       # Typed content (projects, experience, about, …)
    │   ├── lib/        # Shared helpers (e.g. cn)
    │   ├── pages/      # Route-level screens
    │   └── utils/      # Router, shared types, shared class tokens
    ├── index.html
    ├── package.json
    └── vite.config.ts
```

The repo is frontend-only today. A future backend would live alongside `frontend/` at the root.

## Getting started

Requires **Node.js** (LTS recommended) and npm.

```sh
cd frontend
npm install
npm run dev
```

Vite prints a local URL (typically `http://localhost:5173`).

| Command           | Description                            |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Dev server with HMR                    |
| `npm run build`   | Typecheck + production build → `dist/` |
| `npm run preview` | Serve the production build locally     |
| `npm run lint`    | ESLint                                 |

More frontend detail: [`frontend/README.md`](./frontend/README.md).

## Deployment

There is no custom server. The static Vite build is hosted on **Vercel**, chosen for automatic CI/CD through GitHub: pushes to the connected branch trigger a build and deploy without a separate release process.

1. Push to `main` (or the branch connected in Vercel).
2. Vercel’s GitHub integration runs CI/CD — installs dependencies in `frontend/`, runs `npm run build`, and serves `frontend/dist`.
3. **GitHub Pages** at `caleberickson21.github.io` redirects to the Vercel deployment so the public URL stays tied to GitHub while Vercel handles hosting.

### Vercel project settings (typical)

| Setting          | Value           |
| ---------------- | --------------- |
| Root directory   | `frontend`      |
| Build command    | `npm run build` |
| Output directory | `dist`          |
| Install command  | `npm install`   |

SPA deep links (`/projects/:id`, `/experience/:id`, etc.) need a rewrite so unknown paths fall back to `index.html` (Vercel’s default for Vite/SPA projects usually covers this).

### Updating site content

Edit the modules under `frontend/src/data/` (projects, experience, about, contact, skills, nav links). Commit and push; Vercel’s CI/CD redeploys automatically.
