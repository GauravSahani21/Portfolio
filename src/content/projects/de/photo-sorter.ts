import photoSorter0 from "../../../assets/images/projects/photo-sorter/photo-sorter-0.webp";
import photoSorter1 from "../../../assets/images/projects/photo-sorter/photo-sorter-1.webp";
import photoSorter2 from "../../../assets/images/projects/photo-sorter/photo-sorter-2.webp";
import photoSorter3 from "../../../assets/images/projects/photo-sorter/photo-sorter-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Photo Sorter",
  theme: "light",
  tags: ["next", "react", "typescript", "html", "css"],
  live: "https://photo-selector.vercel.app/",
  source: "https://github.com/GauravSahani21/Photo-Sorter",
  description:
    "Eine blitzschnelle, datenschutzorientierte Webanwendung zur Fotosortierung und Albumorganisation, entwickelt mit Next.js 15, React 19 und Tailwind CSS. Photo Sorter ermöglicht es Fotografen, Reisenden und Kreativen, Bildordner stapelweise zu laden, Fotos mit nahtloser Tastaturnavigation (`1/A` für Annehmen, `2/H` für Zurückstellen, `3/R` für Ablehnen) zügig zu sichten, benutzerdefinierten Alben zuzuordnen und getroffene Auswahlen direkt im Browser zu exportieren.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: photoSorter0,
        alt: "Photo Sorter Start-Dashboard und Album-Verwaltungsleiste",
        caption: "Photo Sorter Dashboard — Minimalistischer Arbeitsbereich mit Ordnerimport, Echtzeit-Zählern und Album-Verwaltung",
      },
    },
    {
      type: "text",
      props: {
        title: "Rasante Bildauswahl & Lokaler Datenschutz",
        text: "Fotografen schießen oft tausende Fotos pro Session, wodurch die Auslese zu einem zeitraubenden Engpass wird. Klassische Cloud-Tools verlangen lange Uploadzeiten vor Beginn der Sichtung. Photo Sorter löst dieses Problem durch moderne Browser-File-System-APIs und React 19: Alle hochauflösenden Fotos werden vollständig lokal im Client verarbeitet. Keine Datei verlässt das Gerät des Nutzers – für absoluten Datenschutz und verzögerungsfreie Bildanzeige.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: photoSorter1,
        alt: "Interaktive Einzelfoto-Sortieransicht mit Tastatur-Shortcuts und Albumauswahl",
        caption: "Sortier-Engine — Strukturierte Einzelfoto-Inspektion mit Tastaturkürzeln (A/H/R), Bildzähler und Zielalbum-Zuweisung",
      },
    },
    {
      type: "text",
      props: {
        title: "Tastaturgesteuerter Workflow & Farbcodierte Alben",
        text: "Die Benutzerführung ist auf maximale Geschwindigkeit ausgelegt. Nutzer navigieren mühelos mit den Pfeiltasten durch Bildsequenzen und treffen Entscheidungen über ergonomische Tastaturkürzel: 1 oder A zum Akzeptieren, 2 oder H zum Zurückstellen und 3 oder R zum Ablehnen. Benutzerdefinierte Alben (z. B. Road Trip, Goa, Ladakh) können mit individuellen Farbkennzeichnungen dynamisch erstellt werden.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: photoSorter2,
        alt: "Galerie der akzeptierten Fotos mit Album-Tags und Filter-Chips",
        caption: "Akzeptierte Galerie — Filterbare Übersicht freigegebener Fotos mit farbigen Album-Badges und Schnelllösch-Funktion",
      },
    },
    {
      type: "text",
      props: {
        title: "Zwischenablage, Zurückgestellte Bilder und Fortschritts-Export",
        text: "Unsichere Fotos können in einen 'On Hold'-Wartebereich verschoben werden, um sie in einem zweiten Durchgang mit Direkt-Buttons schnell zu bewerten. Nach Abschluss der Sortierung können Auswahlen exportiert oder der aktuelle Zustand über 'Save Progress' als JSON-Datei gesichert werden, sodass umfangreiche Sortiersessions jederzeit nahtlos fortgesetzt werden können.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: photoSorter3,
        alt: "On-Hold-Übersicht mit direkten Akzeptieren- und Ablehnen-Schaltflächen",
        caption: "On-Hold-Warteschlange — Zweitprüfungsmatrix mit Ein-Klick-Aktionen und konsolidierten Sortierstatistiken",
      },
    },
  ],
} as const satisfies ProjectContent;
