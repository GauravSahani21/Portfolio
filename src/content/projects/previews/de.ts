import thumbnailHealthDiseasePredictor from "../../../assets/thumbnails/health-disease-predictor.webp";
import thumbnailAutiSense from "../../../assets/thumbnails/autisense.webp";
import thumbnailCodeForge from "../../../assets/thumbnails/codeforge.webp";
import thumbnailCreateMernPro from "../../../assets/thumbnails/create-mern-pro.webp";
import thumbnailSmartStorage from "../../../assets/thumbnails/smartstorage.webp";
import thumbnailConnectUp from "../../../assets/thumbnails/connectup.webp";
import thumbnailPhotoSorter from "../../../assets/thumbnails/photo-sorter.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Health Disease Predictor",
    slug: "health-disease-predictor",
    thumbnail: thumbnailHealthDiseasePredictor,
    description: "KI-gestützte Gesundheitsanalyseplattform",
  },
  {
    title: "AutiSense",
    slug: "autisense",
    thumbnail: thumbnailAutiSense,
    description: "Multimodales KI-Früherkennungssystem für Autismus",
  },
  {
    title: "CodeForge",
    slug: "codeforge",
    thumbnail: thumbnailCodeForge,
    description: "Kompetitive Coding- & Cloud-Lernplattform der nächsten Generation",
  },
  {
    title: "create-mern-pro",
    slug: "create-mern-pro",
    thumbnail: thumbnailCreateMernPro,
    description: "Produktionsreifes MERN-Stack-Scaffolding-CLI-Tool",
  },
  {
    title: "SmartStorage",
    slug: "smartstorage",
    thumbnail: thumbnailSmartStorage,
    description: "KI-gestützter akademischer Dokumententresor für Studierende",
  },
  {
    title: "ConnectUp",
    slug: "connectup",
    thumbnail: thumbnailConnectUp,
    description: "Echtzeit-Chat- & WebRTC-Videoanrufplattform mit Gemini-KI",
  },
  {
    title: "Photo Sorter",
    slug: "photo-sorter",
    thumbnail: thumbnailPhotoSorter,
    description: "Schnelle Foto-Sortier- & Album-Organisations-App mit Tastatursteuerung",
  },
] as const satisfies ProjectPreview[];
