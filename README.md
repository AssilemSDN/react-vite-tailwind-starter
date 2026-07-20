# React-Vite-Tailwind starter

A reusable frontend starter built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- React + TypeScript
- Vite
- Tailwind CSS
- React Router
- English and French translations with i18next
- Reusable UI components
- Responsive header and sidebar layout
- Oxlint and Oxfmt
- Yarn 4+ with the `node-modules` linker

## Getting Started

Enable Corepack if needed:

```bash
corepack enable
```

Install dependencies:

```bash
yarn install
```

Start the development server:

```bash
yarn dev
```

## Available Scripts

```bash
yarn dev          # Start the development server
yarn build        # Build the application
yarn typecheck    # Run TypeScript checks
yarn lint         # Run Oxlint
yarn lint:fix     # Fix lint issues when possible
yarn format       # Format the project with Oxfmt
yarn format:check # Check formatting
yarn check        # Run all project checks
```

## Project Structure

```text
src/
├── app/
├── components/
│   ├── layout/
│   └── ui/
├── i18n/
├── layouts/
├── lib/
├── pages/
└── types/

tooling/
├── vite.config.ts
├── tsconfig.app.json
├── tsconfig.node.json
├── .oxlintrc.json
└── .oxfmtrc.json
```

## Customization

Update the navigation configuration, translation resources, layout components, and UI components to use this repository as a base for another project.

## License

MIT