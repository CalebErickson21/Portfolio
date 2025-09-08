# Frontend Information
This `README.md` file provides all the information necessary about setup and running the frontend for this portfolio.

## Setup
This frontend is created using `Vite`, `React`, and `Tailwind CSS`. I chose to avoid using `Next.js` because it's not as lightweight as `React.js` and for the current state of the portfolio, we do not have a backend and only need basic routing, so `Next.js` provides a lot of unnecessary overhead.

In your project's root directory, run:
```sh
npm create vite@latest frontend -- --template react-ts
cd frontend/
npm install
npm run dev
```
You will see the boilerplate code spin up in your web broswer's **localhost**.

After this, we need to remove any boilerplate code so we can start from scratch. Go ahead and delete the code in the following files

- `Index.css`
- `App.css`
- Any unwanted `.html` code in `App.tsx`
- Any images in the `./public` directory

## Development Environment
To start the development environment, run:
```sh
npm run dev
```
This will start the app in your web browser's **localhost preview**.

## Production Environment
Currently, the production environment uses **Github Pages** as it's free for frontend only applications. If I ever decide to incorporate a backend (not sure why one would be necessary for a portfolio), production will likely switch to **Azure** or **Amazon Web Services (AWS)**.

---

# React + TypeScript + Vite Template README

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
