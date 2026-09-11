import createMernPro0 from "../../../assets/images/projects/create-mern-pro/create-mern-pro-0.webp";
import createMernPro1 from "../../../assets/images/projects/create-mern-pro/create-mern-pro-1.webp";
import createMernPro2 from "../../../assets/images/projects/create-mern-pro/create-mern-pro-2.webp";
import createMernPro3 from "../../../assets/images/projects/create-mern-pro/create-mern-pro-3.webp";
import createMernPro4 from "../../../assets/images/projects/create-mern-pro/create-mern-pro-4.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "create-mern-pro",
  theme: "dark",
  tags: ["node", "react", "mongodb", "typescript"],
  live: "https://www.npmjs.com/package/create-mern-pro",
  source: "https://github.com/GauravSahani21/create-mern-pro",
  description:
    "A professional, production-ready full-stack scaffolding CLI tool published on npm. create-mern-pro enables developers to instantly bootstrap modern MERN (MongoDB, Express, React, Node.js) stack applications with zero manual boilerplate. Features an interactive terminal UI, Vite + React frontend, Node.js/Express backend, optional JWT authentication, state management (Redux Toolkit or Zustand), TypeScript or JavaScript, and unified concurrent running.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: createMernPro0,
        alt: "create-mern-pro interactive terminal launch and ASCII gradient hero",
        caption: "CLI Launch & Hero — Interactive terminal onboarding with gradient ASCII art and package diagnostics",
      },
    },
    {
      type: "text",
      props: {
        title: "Developer Experience & Zero-Config Scaffolding",
        text: "Building production MERN applications traditionally requires hours of repetitive setup: configuring Vite, writing boilerplate Express servers, setting up MongoDB connections, structuring folder hierarchies, configuring CORS, and wiring state management. create-mern-pro automates this entire pipeline into a single interactive command (`npx create-mern-pro <app-name>`), delivering a clean, maintainable architecture ready for feature development.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: createMernPro1,
        alt: "Interactive stack configuration prompts",
        caption: "Interactive Stack Selector — Granular choices for TypeScript, MongoDB (Local/Atlas), JWT Auth, and State Stores",
      },
    },
    {
      type: "text",
      props: {
        title: "Modular Full-Stack Architecture",
        text: "create-mern-pro scaffolds an enterprise-grade monorepo cleanly separated into /client and /server packages. The frontend leverages React 18 powered by Vite for instant Hot Module Replacement (HMR) and Tailwind CSS for styling. The backend features Express with modular routing, centralized error handlers, and Mongoose connection pools. Developers can choose between strict TypeScript or JavaScript, plus Redux Toolkit, Zustand, or Context API for state management.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: createMernPro3,
        alt: "Monorepo directory structure and fullstack architecture",
        caption: "Monorepo Architecture — Clean separation of client and server with unified workspace configuration",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: createMernPro2,
        alt: "Scaffolding build engine and completion dashboard",
        caption: "Scaffolding Engine — Real-time generation spinners, dependency resolution, and initial Git repository commit",
      },
    },
    {
      type: "text",
      props: {
        title: "Built-In JWT Authentication & Concurrent Pipeline",
        text: "When enabled, the CLI injects a complete, production-tested authentication system: secure password hashing with Bcrypt, signed JWT bearer tokens, protected Express middleware, and client-side React AuthContext with persistent session hooks. A root package.json orchestrates frontend and backend simultaneously using Concurrently, allowing developers to start both servers with one command: `npm run dev`.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: createMernPro4,
        alt: "Live concurrent server running and npm ecosystem",
        caption: "Concurrent Execution — Simultaneous Express API (:5000) and Vite HMR (:5173) execution with consolidated logging",
      },
    },
  ],
} as const satisfies ProjectContent;
