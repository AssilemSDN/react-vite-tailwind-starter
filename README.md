# React-Vite-Tailwind starter

A reusable frontend starter built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- React 19 + TypeScript
- Vite and Tailwind CSS
- React Router
- Light, dark and system themes
- English and French translations with i18next
- Responsive reusable UI components
- Vitest, Oxlint and Oxfmt
- Yarn 4+ with the `node-modules` linker
- Docker and Nginx deployment
- Github Actions CI


## Requirements

- Node.js 22 LTS or 24 LTS
- Corepack
- Yarn 4.17.1
- Make (optionnal)

## Getting Started

Enable Corepack if needed:

```bash
corepack enable
```

Install dependencies:

```bash
yarn install --immutable
```

Start the development server:

```bash
yarn dev
```

The development server is available at http://localhost:5173.

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
yarn test         # Run tests in watch mode 
yarn test:run     # Run tests once
```

## Docker

```sh
make init-env
make start
```

The application is available at http://localhost:8080 by default.

```sh
make ps
make logs
make stop
```

## Project Structure

- `src/` : Application source code 
- `tooling/` : Vite, TypeScript, lint, and format configuration 
- `public/` Static assets 
- `docker/` Nginx configuration

## Customization

Update the navigation configuration, translation resources, layout components, and UI components to use this repository as a base for another project.

## License

MIT
