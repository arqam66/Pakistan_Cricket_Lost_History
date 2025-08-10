# Pakistan Cricket — Lost History (Cricket Legacy)

A modern, responsive website celebrating Pakistan's cricketing heritage through a clean timeline of historic moments and legendary players.

**Live site:** [https://cricket-legacy.vercel.app](https://cricket-legacy.vercel.app)

---

## Table of Contents

* [About](#about)
* [Features](#features)
* [Live Demo](#live-demo)
* [Tech Stack](#tech-stack)
* [Prerequisites](#prerequisites)
* [Getting Started (Local)](#getting-started-local)
* [Project Structure](#project-structure)
* [Deployment](#deployment)
* [Contributing](#contributing)
* [License](#license)
* [Author / Contact](#author--contact)

---

## About

This project ("Cricket Legacy") is a single-page application built with React + TypeScript that visualizes memorable moments and players from cricket history with a mobile-first, performance-focused design.

Although the repository name is **Pakistan\_Cricket\_Lost\_History**, the app is implemented as a general cricket timeline experience (branded here as Cricket Legacy).

## Features

* Timeline of major cricket events
* Mobile-first, responsive layout
* Smooth transitions and lightweight UI
* Fast performance (Vite + optimized assets)
* Accessible structure and clean visual design

## Live Demo

The project is deployed on Vercel: `https://cricket-legacy.vercel.app`.

## Tech Stack

* Vite
* TypeScript
* React
* Tailwind CSS
* shadcn/ui (component primitives)

## Prerequisites

Make sure you have the following installed on your machine:

* Node.js (LTS recommended)
* npm (bundled with Node) or yarn/pnpm

## Getting Started (Local)

1. Clone the repository:

   ```bash
   git clone https://github.com/arqam66/Pakistan_Cricket_Lost_History.git
   ```

2. Move into the project folder:

   ```bash
   cd Pakistan_Cricket_Lost_History
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser at the URL printed in the terminal (default Vite port is 5173).

## Build for Production

To create an optimized production build:

```bash
npm run build
# preview production build locally
npm run preview
```

## Project Structure

```
Pakistan_Cricket_Lost_History/
├── public/                  # Static public assets (served as-is)
├── src/                     # Source code
│   ├── assets/               # Images, icons, other static assets
│   ├── components/           # Reusable UI components
│   ├── data/                  # Data for cricket events & players
│   ├── pages/                 # Page-level components
│   ├── styles/                # Global and component-specific styles
│   ├── App.tsx                # Root React component
│   ├── main.tsx               # App entry point
│   └── vite-env.d.ts          # Vite TypeScript env declarations
├── .gitignore                # Ignored files for git
├── index.html                # HTML entry template
├── package.json              # Scripts & dependencies
├── postcss.config.js         # PostCSS config for Tailwind
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript config
└── README.md                 # Project documentation
```

## Deployment

This project is configured for seamless Vercel deployments. Pushes to the `main` branch will trigger a redeploy (if the repository is linked to Vercel).

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Make your changes and add tests (if applicable)
4. Open a Pull Request and describe your changes

Please follow the existing code style and add documentation for any major changes.

## License

This project is licensed under the MIT License. See `LICENSE` for details.

## Author / Contact

* **arqam66** — developer
* GitHub: [https://github.com/arqam66](https://github.com/arqam66)
