# React-Vite-Tailwind starter

[![CI](https://github.com/AssilemSDN/react-vite-tailwind-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/AssilemSDN/react-vite-tailwind-starter/actions/workflows/ci.yml)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

A reusable frontend starter built with React, TypeScript, Vite, and Tailwind CSS.

It provides a structured foundation for building responsive and accessible web applications, with routing, internationalization, theme management, reusable UI components, automated checks, tests, and a solid foundation for production deployment.

Accessibility is treated as a core development requirement rather than an afterthought. The starter includes semantic HTML, keyboard-friendly interactions, focus management, accessible form controls, ARIA attributes where appropriate, and support for user color-scheme preferences.

## Features

- React 19 + TypeScript 6
- Vite 8 and Tailwind CSS 4
- React Router
- Light, dark and system themes
- English and French translations with i18next
- Responsive application layout
- Reusable UI components
- Accessibility-focused components with semantic HTML, keyboard support, focus management, and appropriate ARIA attributes
- Vitest and Testing Library
- Oxlint and Oxfmt
- Yarn 4+ with the `node-modules` linker
- Github Actions CI
- Multi-stage Docker image
- Nginx configuration for SPA routing, caching, compression and security headers

## Requirements

- `Node.js` ^20.19.0 or >=22.12.0 (recommended)
- `Corepack`
- `Yarn` 4.17.1
- `Make`, optional
- `Docker` and `Docker Compose`, optional

## Accessibility

Accessibility has been considered throughout the application architecture and component design.

The starter includes:

- Semantic HTML elements
- Keyboard-accessible navigation and interactive components
- Visible focus states
- Focus management for modal dialogs
- Properly associated form labels and controls
- Accessible error and help messages
- ARIA attributes where native HTML alone is insufficient
- Language updates through the `<html lang>` attribute
- Light, dark, and system theme preferences
- Responsive navigation across desktop and mobile layouts

Reusable components are designed to preserve native browser behavior whenever possible rather than replacing it with custom interaction patterns.

Accessibility should still be reviewed whenever new pages, components, colors, or interactions are added. This project has not been formally audited and does not claim complete WCAG compliance.

## Getting Started

### 1. Create a repository from the template

Click **Use this template** at the top of the repository page, then select **Create a new repository**.

Once created, clone your new repository:

```bash
$ git clone https://github.com/<your-username>/<your-repository>.git
$ cd <your-repository>
```

### 2. Enable Corepack

```bash
$ corepack enable
```

The Yarn version is defined in `package.json`:

```json
{
  "packageManager": "yarn@4.17.1"
}
```

You can verify the active version with:

```bash
$ yarn --version
```

### 3. Install dependencies

```bash
$ yarn install --immutable
```

### 4. Start the development server

```bash
$ yarn dev
```

The application will be available at: http://localhost:5173

## Available Scripts

| Commande            | Description                                       |
| ------------------- | ------------------------------------------------- |
| `yarn dev`          | Start the Vite development server                 |
| `yarn build`        | Type-check and build the production application   |
| `yarn preview`      | Preview the production build locally              |
| `yarn typecheck`    | Run TypeScript checks                             |
| `yarn lint`         | Run Oxlint                                        |
| `yarn lint:fix`     | Fix supported lint issues                         |
| `yarn format`       | Format the project with Oxfmt                     |
| `yarn format:check` | Check the project formatting                      |
| `yarn check`        | Run type-checking, linting, and formatting checks |
| `yarn test`         | Run tests in watch mode                           |
| `yarn test:run`     | Run the complete test suite once                  |

Before submitting a change, run:

```bash
$ yarn check
$ yarn test:run
$ yarn build
```

## Project Structure

- `src/` : Application source code
- `tooling/` : Vite, TypeScript, lint, and format configuration
- `public/` Static assets
- `docker/` Nginx configuration

### Routing and Navigation

- Application paths are defined in: `src/app/routes.ts`
- Navigation items are configured in: `src/app/navigation.ts`

The navigation configuration controls:

- Route paths
- Page components
- Navigation labels
- Icons
- Sidebar visibility
- Mobile bottom navigation visibility

Most pages are lazy-loaded to reduce the initial application bundle.

### Internationalization

The starter supports:

- English
- French

Translation resources are located in:

- `src/i18n/locales/en.ts`
- `src/i18n/locales/fr.ts`

The initial language is selected from:

1. The language stored in localStorage
2. The browser language
3. French as the fallback language

The selected language is persisted automatically, and the `<html lang>` attribute is updated whenever the language changes.

### Theme Management

The application supports three theme preferences:

- system
- light
- dark

The selected preference is stored in localStorage.

When the system preference is selected, the application follows the operating system color scheme and reacts to system theme changes.

The script located at: `public/theme-init.js` applies the theme before React starts, preventing an incorrect theme flash during the initial page load.

Theme-related files are located in: `src/theme/`

### UI Components

Reusable UI components are located in: `src/components/ui/`.

The starter currently includes components such as:

- Breadcrumb
- Button
- Card
- Field
- Form
- Input
- Label
- Modal
- Select

Example implementations are available on the components page.

When adding a new component, keep styling based on the semantic design tokens defined in `src/index.css` rather than using page-specific values directly.

### Testing

Tests are written with Vitest and Testing Library.

Current tests cover parts of the following areas:

- Theme resolution
- Translation resources
- Reusable UI component contracts

New reusable components and user-facing interactions should include corresponding tests.

### CI

The GitHub Actions workflow is located at: `.github/workflows/ci.yml`. It runs on pushes, pull requests, and manual workflow dispatches.

The workflow performs the following checks:

1. Enables Corepack and Yarn 4
2. Configures Node.js 22
3. Installs dependencies with the immutable lockfile
4. Runs type-checking, linting, and formatting checks
5. Runs the test suite
6. Builds the application
7. Builds the Docker image

### Docker

#### Environment configuration

Create the local Docker environment file:

```bash
$ make init-env
```

This creates `.env.dev` from `.env.example`.

Default values:

```
DOCKER_IMAGE_NAME_WEBAPP=my-project-ui
DOCKER_IMAGE_TAG_WEBAPP=v0.0.1
DOCKER_CONTAINER_BASENAME_APP=my-project
DOCKER_WEBAPP_PORT=8080
```

Update these values to match your project before deployment.

### Start the application

```bash
$ make start
```

The application will be available at: http://localhost:8080

### Available Make commands

| Commande              | Description                          |
| --------------------- | ------------------------------------ |
| `make init-env`       | Create the local environment file    |
| `make build`          | Build the Docker image               |
| `make build-no-cache` | Build the Docker image without cache |
| `make stop`           | Stop the application                 |
| `make start`          | Start the application                |
| `make restart`        | Restart the application              |
| `make ps`             | Display running services             |
| `make logs`           | Follow container logs                |

### Choose an environment

A different environment file can be selected with:

```bash
make start ENV_FILE=.env.production
```

### Production Deployment

The Docker image uses a multi-stage build:

1. Node.js builds the application.
2. Nginx serves the generated static files.

The included Nginx configuration provides:

- SPA route fallback to `index.html`
- Gzip compression
- Long-term caching for generated assets
- Disabled server version tokens
- Content Security Policy
- Permissions Policy
- Clickjacking protection
- MIME type sniffing protection
- Referrer policy
- Container health check

#### Content Security Policy

The default Content Security Policy only allows requests to the same origin: `connect-src 'self'`. If the application communicates with an external API, analytics service, CDN, or authentication provider, update `docker/nginx.conf` accordingly.

The default configuration also disables Web Workers: `worker-src 'none'`. Update this directive when adding features that depend on Web Workers or Service Workers.

## Customization

Before using this repository for a new application, update at least:

- The project name in package.json
- Docker image and container names in .env.example
- Application routes in src/app/routes.ts
- Navigation items in src/app/navigation.ts
- Translations resources
- Application pages and example content
- The favicon in public/favicon.svg
- Repository URLs and badges in this README

## License

MIT
