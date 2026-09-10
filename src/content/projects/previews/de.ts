import thumbnailHealthDiseasePredictor from "../../../assets/thumbnails/health-disease-predictor.webp";
import thumbnailAutiSense from "../../../assets/thumbnails/autisense.webp";
import thumbnailCodeForge from "../../../assets/thumbnails/codeforge.webp";

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
] as const satisfies ProjectPreview[];
