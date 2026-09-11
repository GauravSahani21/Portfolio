import smartStorage0 from "../../../assets/images/projects/smartstorage/smartstorage-0.webp";
import smartStorage1 from "../../../assets/images/projects/smartstorage/smartstorage-1.webp";
import smartStorage2 from "../../../assets/images/projects/smartstorage/smartstorage-2.webp";
import smartStorage3 from "../../../assets/images/projects/smartstorage/smartstorage-3.webp";
import smartStorage4 from "../../../assets/images/projects/smartstorage/smartstorage-4.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "SmartStorage",
  theme: "dark",
  tags: ["react", "node", "mongodb", "javascript"],
  live: "https://smartstorage-2s6u.onrender.com",
  source: "https://github.com/GauravSahani21/SmartStorage",
  description:
    "Eine Full-Stack-Dokumentenmanagement-Plattform für Studierende (DigiLocker für Studierende), entwickelt zur sicheren Speicherung, Organisation, Weitergabe und Überprüfung akademischer Nachweise. Ausgestattet mit automatischer Dokumentenklassifizierung via Google Gemini 1.5 Flash KI, MongoDB GridFS für direkte Binärspeicherung ohne externe S3-Buckets, interaktiven Recharts-Analysen, jahresbasierten akademischen Zeitleisten, kollaborativen Lernräumen und fälschungssicherer QR-Code-Verifizierung mit dynamischer PDF-Wasserzeichenfunktion.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: smartStorage0,
        alt: "SmartStorage Landing-Page und akademischer Dokumententresor",
        caption: "SmartStorage Landing — Full-Stack-Dokumentenspeicher für Studierende, gesichert durch Gemini KI und kryptografische Verifizierung",
      },
    },
    {
      type: "text",
      props: {
        title: "KI-gestützter Dokumententresor & GridFS-Architektur",
        text: "Klassische Cloud-Speicherlösungen erfordern teure S3-Buckets, fragmentierte Ordnerstrukturen und aufwendiges manuelles Tagging. SmartStorage vereinfacht die Aufbewahrung akademischer Dokumente, indem Binärdateien direkt im MongoDB-Cluster über GridFS-Bucket-Streaming gespeichert werden. Ein modernes Frontend auf Basis von React 19 und Vite bietet Studierenden eine reaktionsschnelle Oberfläche für Notenspiegel, Urkunden, Zeugnisse und Studienausweise auf allen Geräten.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: smartStorage1,
        alt: "SmartStorage Dokumentenbibliothek mit Kategoriefiltern und Suche",
        caption: "Dokumentenbibliothek — Sofortiges Filtern nach Zeugnissen, Urkunden, Ausweisen und Zahlungsbelegen mit Volltextsuche",
      },
    },
    {
      type: "text",
      props: {
        title: "Automatisierte Klassifizierungspipeline mit Gemini 1.5 Flash",
        text: "Sobald ein Studierender ein PDF oder Bild hochlädt, startet SmartStorage eine automatische Erkennungspipeline. Mittels pdf-parse zur Textextraktion und Google Gemini 1.5 Flash über das Google Generative AI SDK analysiert die Plattform die Dokumentenstruktur und erkennt zuverlässig, ob es sich um ein Zeugnis, eine Urkunde, einen Zulassungsbescheid oder einen Studierendenausweis handelt. Wichtige Metadaten wie Hochschulname, Abschlussjahrgang, Notendurchschnitt und Matrikelnummer werden mit über 98 % Genauigkeit extrahiert.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: smartStorage2,
        alt: "Gemini KI-Klassifizierungsmodal mit Konfidenzwert und extrahierten Metadaten",
        caption: "KI-Klassifizierungs-Engine — Sofortige Dokumentenerkennung, Konfidenzbewertung und automatisierte Metadatenextraktion",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: smartStorage3,
        alt: "Speicheranalyse-Dashboard mit Recharts-Diagrammen und interaktiver Zeitleiste",
        caption: "Analytik & Zeitleiste — Recharts-Semestertrends, Speicherkontingent-Aufschlüsselung und chronologisch zugeordnete Studienmeilensteine",
      },
    },
    {
      type: "text",
      props: {
        title: "Kollaborative Lernräume & Manipulationssichere Verifizierung",
        text: "Über den persönlichen Speicher hinaus ermöglicht SmartStorage akademische Zusammenarbeit durch Study Rooms, in denen Lerngruppen Vorlesungsmitschriften, Lehrpläne und Altklausuren in Echtzeit austauschen. Für die Weitergabe an Arbeitgeber oder Hochschulen erzeugt SmartStorage verifizierbare Freigabelinks mit dynamischen QR-Codes und pdf-lib-Wasserzeichen ('CONFIDENTIAL / FOR VERIFICATION ONLY'), um Echtheit zu garantieren und unerwünschte Weitergaben zu verhindern.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: smartStorage4,
        alt: "Lernraum-Zusammenarbeit und Dokumentenverifizierung mit QR-Code und Wasserzeichen",
        caption: "Kollaborative Räume & Verifizierung — Scanbare QR-Authentifizierung, dynamische Wasserzeichengenerierung und gemeinsame Lernräume",
      },
    },
  ],
} as const satisfies ProjectContent;
