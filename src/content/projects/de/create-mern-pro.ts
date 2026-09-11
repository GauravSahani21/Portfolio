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
    "Ein professionelles, produktionsreifes Full-Stack-Scaffolding-CLI-Tool, veröffentlicht auf npm. create-mern-pro ermöglicht es Entwicklern, moderne MERN-Stack-Anwendungen (MongoDB, Express, React, Node.js) ohne manuelle Vorlagenkonfiguration in Sekundenschnelle zu erstellen. Mit interaktivem Terminal-UI, Vite + React Frontend, Node.js/Express Backend, optionaler JWT-Authentifizierung, State Management (Redux Toolkit oder Zustand), TypeScript/JavaScript und parallelem Dev-Server.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: createMernPro0,
        alt: "create-mern-pro interaktiver Terminal-Start und ASCII-Farbverlauf",
        caption: "CLI Launch & Hero — Interaktives Terminal-Onboarding mit Farbverlauf-ASCII-Art und Paketdiagnose",
      },
    },
    {
      type: "text",
      props: {
        title: "Entwicklererlebnis & Zero-Config Scaffolding",
        text: "Die Erstellung von produktionsreifen MERN-Anwendungen erfordert traditionell stundenlange repetitive Konfiguration: Vite einrichten, Express-Server-Boilerplate schreiben, MongoDB-Verbindungen anbinden, Ordnerhierarchien strukturieren, CORS konfigurieren und State Management integrieren. create-mern-pro automatisiert diese gesamte Pipeline in einem einzigen interaktiven Befehl (`npx create-mern-pro <app-name>`).",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: createMernPro1,
        alt: "Interaktive Stack-Konfigurationsabfragen",
        caption: "Interaktiver Stack-Selektor — Granulare Auswahlmöglichkeiten für TypeScript, MongoDB (Lokal/Atlas), JWT-Auth und State Stores",
      },
    },
    {
      type: "text",
      props: {
        title: "Modulare Full-Stack-Architektur",
        text: "create-mern-pro generiert ein Enterprise-taugliches Monorepo, sauber aufgeteilt in /client- und /server-Pakete. Das Frontend setzt auf React 18 mit Vite für blitzschnelles Hot Module Replacement (HMR) und Tailwind CSS für Stylings. Das Backend bietet Express mit modularer Routenstruktur, zentraler Fehlerbehandlung und Mongoose-Verbindungs-Pooling. Entwickler können zwischen TypeScript und JavaScript sowie Redux Toolkit, Zustand oder Context API wählen.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: createMernPro3,
        alt: "Monorepo-Verzeichnisstruktur und Fullstack-Architektur",
        caption: "Monorepo-Architektur — Saubere Trennung von Client und Server mit einheitlicher Workspace-Konfiguration",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: createMernPro2,
        alt: "Scaffolding-Engine und Erfolgs-Dashboard",
        caption: "Scaffolding Engine — Echtzeit-Generierungsanzeigen, Auflösung von Abhängigkeiten und initialer Git-Commit",
      },
    },
    {
      type: "text",
      props: {
        title: "Integrierte JWT-Authentifizierung & Parallele Ausführung",
        text: "Auf Wunsch integriert die CLI ein vollständiges, praxiserprobtes Authentifizierungssystem: sichere Passwort-Verschlüsselung mit Bcrypt, signierte JWT-Bearer-Tokens, geschützte Express-Middlewares und clientseitigen React AuthContext mit persistentem Sitzungsspeicher. Eine Root package.json orchestriert Frontend und Backend gleichzeitig mittels Concurrently über `npm run dev`.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: createMernPro4,
        alt: "Paralleler Serverbetrieb und npm-Ökosystem",
        caption: "Parallele Ausführung — Zeitgleiche Express-API (:5000) und Vite-HMR (:5173) Ausführung mit konsolidierten Logs",
      },
    },
  ],
} as const satisfies ProjectContent;
