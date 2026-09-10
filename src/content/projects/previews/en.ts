import thumbnailHealthDiseasePredictor from "../../../assets/thumbnails/health-disease-predictor.webp";
import thumbnailAutiSense from "../../../assets/thumbnails/autisense.webp";
import thumbnailCodeForge from "../../../assets/thumbnails/codeforge.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Health Disease Predictor",
    slug: "health-disease-predictor",
    thumbnail: thumbnailHealthDiseasePredictor,
    description: "AI-powered health analysis platform",
  },
  {
    title: "AutiSense",
    slug: "autisense",
    thumbnail: thumbnailAutiSense,
    description: "Multi-modal AI early autism detection system",
  },
  {
    title: "CodeForge",
    slug: "codeforge",
    thumbnail: thumbnailCodeForge,
    description: "Next-gen competitive coding & cloud learning platform",
  },
] as const satisfies ProjectPreview[];
