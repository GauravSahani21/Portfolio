import connectUp0 from "../../../assets/images/projects/connectup/connectup-0.webp";
import connectUp1 from "../../../assets/images/projects/connectup/connectup-1.webp";
import connectUp2 from "../../../assets/images/projects/connectup/connectup-2.webp";
import connectUp3 from "../../../assets/images/projects/connectup/connectup-3.webp";
import connectUp4 from "../../../assets/images/projects/connectup/connectup-4.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "ConnectUp",
  theme: "dark",
  tags: ["next", "websockets", "react", "mongodb", "typescript"],
  live: "https://connectup-j8fy.onrender.com/",
  source: "https://github.com/GauravSahani21/ConnectUp",
  description:
    "Eine moderne Full-Stack-Echtzeitkommunikationsplattform, entwickelt mit Next.js 16, Socket.IO, WebRTC und MongoDB. ConnectUp bietet nahtloses Messaging auf Desktop- und Mobilgeräten, Peer-to-Peer-HD-Sprach- und Videoanrufe mit eigenem Signalisierungsserver, einen integrierten Google Gemini KI-Chatbot-Assistenten, multimediale Dateifreigabe mit Sprachnachrichten-Wellenformen und GPS-Standortteilung sowie ein E-Mail-basiertes Freundschaftssystem.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: connectUp0,
        alt: "ConnectUp Echtzeit-Chat-Dashboard und mobile Vorschau",
        caption: "ConnectUp Überblick — Bidirektionales Echtzeit-Messaging über Socket.IO mit Multi-Device-Synchronisation",
      },
    },
    {
      type: "text",
      props: {
        title: "Next.js 16 App Router & Bidirektionale Socket.IO-Engine",
        text: "ConnectUp kombiniert Next.js 16 und React 19 mit einem dedizierten Node.js Socket.IO-Server für verzögerungsfreie Nachrichtenübermittlung, Tippanzeigen in Echtzeit und Online-/Offline-Präsenzstatus. MongoDB und Mongoose gewährleisten eine zuverlässige Persistierung von Chatverläufen, angehefteten Nachrichten, Lesebestätigungen und Benutzerdaten mit SWR-basierten optimistischen UI-Updates.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: connectUp1,
        alt: "ConnectUp WebRTC Peer-to-Peer Videoanruf-Oberfläche mit Steuerelementen",
        caption: "WebRTC Videoanrufe — Hochauflösende Peer-to-Peer-Audio- und Videoanrufe mit eigenem ICE-Signalisierungsserver und Bild-in-Bild-Stream",
      },
    },
    {
      type: "text",
      props: {
        title: "WebRTC Peer-to-Peer HD-Anrufpipeline",
        text: "Die Anwendung integriert native Browser-WebRTC-Schnittstellen und Socket.IO-Signalisierung für verzögerungsfreie 1-zu-1-Audio- und Videoanrufe. Mit eingehenden Anrufbenachrichtigungen, dynamischem Umschalten von Kamera, Mikrofon und Bildschirmfreigabe sowie Echtzeit-Verbindungsüberwachung bietet ConnectUp erstklassige Gesprächsqualität.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: connectUp2,
        alt: "Google Gemini 1.5 Flash KI-Chatbot-Assistent in ConnectUp",
        caption: "Gemini KI-Assistent — Kontextbezogener KI-Assistent, direkt in die Chat-Arbeitsumgebung eingebunden",
      },
    },
    {
      type: "text",
      props: {
        title: "Google Gemini KI-Assistent & Intelligente Chat-Automatisierung",
        text: "Für gesteigerte Produktivität integriert ConnectUp einen intelligenten KI-Assistenten auf Basis von Google Gemini 1.5 Flash. Benutzer können die KI direkt im Arbeitsbereich nutzen, um Besprechungsnotizen zusammenzufassen, Antworten zu formulieren, Codeblöcke zu erzeugen oder Nachrichten in Echtzeit zu übersetzen.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: connectUp3,
        alt: "Multimediales Messaging mit Sprachnachrichten, Wisch-Antworten und Standortfreigabe",
        caption: "Interaktive Messaging-Funktionen — Audio-Sprachnachrichten mit Wiedergabe-Wellenform, intuitive Wisch-Antworten und Live-Standortteilung",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: connectUp4,
        alt: "Freundschaftsanfragen, Anrufbenachrichtigungen und Profileinstellungen",
        caption: "Soziales Netzwerk & Profile — E-Mail-basierte Freundeseinladungen, Anruf-Popups und anpassbare Benutzerprofile",
      },
    },
  ],
} as const satisfies ProjectContent;
