# Starting template for React 19 projects - includes: React 19 + TypeScript + Vite + Vitest + Prettier + React Router Library

Prerequisites:

Vitest requires Vite >=v5.0.0 and Node >=v18.0.0

React Router v7 requires the following minimum versions:

node@20
react@18
react-dom@18

Current template version working on:

nvm -v
0.39.7

npm -v
10.7.0

node -v
v20.15.1

Husky - npm not found error:
https://typicode.github.io/husky/how-to.html#solution

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```

## Vitest with React Testing Library

vitest.setup.ts file contain some predefined test actions like cleanup

https://testing-library.com/docs/

## Husky - git pre commit actions

Solution for npm command not found.

Husky sources ~/.config/husky/init.sh before each Git hook. Copy your version manager initialization code here to ensure it runs in GUIs.

Example with nvm:

shell

# ~/.config/husky/init.sh

export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
Alternatively, if your shell startup file is fast and lightweight, source it directly:

shell

# ~/.config/husky/init.sh

. ~/.zshrc

## React Router

https://reactrouter.com/start/library/installation
