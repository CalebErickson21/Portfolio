# Frontend

Vite + React + TypeScript SPA for the portfolio. Root-level purpose, startup, and deployment live in the [repository README](../README.md). This doc covers source layout, conventions, and day-to-day frontend work.

## Why this stack

Vite + React is enough for a static multipage portfolio: client routing, theming, and typed content modules — without Next.js/SSR overhead or a backend.

## Scripts

```sh
npm install
npm run dev       # http://localhost:5173 (default)
npm run build     # tsc -b && vite build → dist/
npm run preview   # preview production build
npm run lint      # eslint .
```

## Source layout

```
src/
├── assets/           # Images, downloadables (e.g. resume PDF)
├── components/       # Feature/UI composition (PascalCase files)
│   └── ui/           # shadcn / Magic UI / Aceternity primitives (kebab-case)
├── contexts/         # App-wide providers
├── data/             # Typed site content — prefer editing here for copy/links
├── lib/              # Low-level helpers (cn, etc.)
├── pages/            # Route screens + Layout shell
├── utils/
│   ├── Router.tsx    # createBrowserRouter route tree
│   ├── Types.ts      # Shared interfaces / unions
│   └── Classes.ts    # Reusable Tailwind class tokens
├── index.css         # Tailwind, theme tokens, global styles
└── main.tsx          # Bootstrap, theme init, RouterProvider
```

### Path alias

`@/` maps to `src/` (Vite + `tsconfig`). Prefer alias imports:

```ts
import { projects } from "@/data/Project";
import { cn } from "@/lib/utils";
```

## Routing

Routes are declared in `src/utils/Router.tsx` with React Router’s data router. `Layout` wraps pages (navbar, background, footer, scroll-to-top). Nested routes:

| Path              | Page              |
| ----------------- | ----------------- |
| `/`               | Home              |
| `/about`          | About             |
| `/experience`     | Experience list   |
| `/experience/:id` | Experience detail |
| `/projects`       | Projects list     |
| `/projects/:id`   | Project detail    |
| `/contact`        | Contact           |
| `*`               | NotFound          |

Detail routes are typically dialog/outlet patterns over the list views — keep IDs in sync with `data/` (`id` fields).

## Content model

Site copy and structured content live in `src/data/`, not hard-coded in page JSX when avoidable:

| Module          | Role                                      |
| --------------- | ----------------------------------------- |
| `About.ts`      | Intro, pillars, education, publications, hobbies, media |
| `Contact.ts`    | Contact copy and methods                  |
| `Experience.ts` | Jobs / roles                              |
| `Project.ts`    | Projects (featured, links, infra notes)   |
| `Skill.ts`      | Skills cloud                              |
| `Links.ts`      | Nav + social links                        |

Shapes live in `src/utils/Types.ts`. When adding a project or experience:

1. Extend the relevant array in `data/` with a stable `id`.
2. Drop media in `assets/` and import it in the data module.
3. Ensure routes/`featured`/link fields match how cards and dialogs render.

## Conventions

### Naming

- **Components & pages:** PascalCase files and named exports (`export const ProjectCard = …`).
- **UI primitives** under `components/ui/:\*\* kebab-case (shadcn/registry style).
- **Data modules:** PascalCase matching the domain (`Project.ts`, `Experience.ts`).
- **Types:** `SomethingInterface`, `SomethingType` in `Types.ts`.
- **Shared class strings:** `somethingClass` in `Classes.ts`.
- Tabs for indentation; match neighboring files.

### Components

- Keep pages thin: compose feature components + data imports.
- Put reusable visual patterns in `components/`; put registry primitives in `components/ui/`.
- Shared surfaces/buttons/links: prefer tokens from `@/utils/Classes` over one-off class soup.
- Merge classes with `cn()` from `@/lib/utils`.

### Styling & theme

- Tailwind v4 via `@tailwindcss/vite`; entry is `src/index.css`.
- Brand/semantic colors are CSS variables (`--brand-accent`, `--background`, `--surface`, `--text-primary`, …) exposed as Tailwind colors (`bg-brand-accent`, `text-text-primary`, …).
- Light/dark: `document.documentElement` `.dark` class, initialized in `main.tsx` from `localStorage` / `prefers-color-scheme`.
- Prefer design tokens over raw hex in components.

### UI libraries

Configured in `components.json` (style: base-luma, Lucide icons):

- **shadcn/ui** — base primitives in `components/ui/`
- **Magic UI** / **Aceternity** — additional registry components

Add new primitives with the shadcn CLI against this project’s aliases; avoid hand-rolling duplicates of existing `ui/` pieces.

### Icons

- **lucide-react** for general UI icons
- **react-icons** where brand icons are needed (GitHub, LinkedIn, etc.)

### TypeScript

- Strict mode; use `import type` for type-only imports (`verbatimModuleSyntax`).
- Prefer explicit interfaces in `Types.ts` over inline object types for domain data.

## Theming & motion

Dark/light toggle lives in the navbar UI. Motion comes from `motion` and Magic UI wrappers (`BlurFade`, `TypingAnimation`, etc.). Prefer existing animation primitives for consistency.

## Assets

- Raster/media: `src/assets/`
- Downloadables (resume): `src/assets/downloadables/`
- Import assets in data or components so Vite hashes them in production builds.

## Quality checks

Before opening a PR:

```sh
npm run lint
npm run build
```

Fix type and lint errors locally; `build` runs `tsc -b` then Vite.
