import thumbnailHealthDiseasePredictor from "../../../assets/thumbnails/health-disease-predictor.webp";
import thumbnailAutiSense from "../../../assets/thumbnails/autisense.webp";
import thumbnailCodeForge from "../../../assets/thumbnails/codeforge.webp";
import thumbnailCreateMernPro from "../../../assets/thumbnails/create-mern-pro.webp";

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
  {
    title: "create-mern-pro",
    slug: "create-mern-pro",
    thumbnail: thumbnailCreateMernPro,
    description: "Production-ready MERN stack scaffolding CLI tool",
  },
] as const satisfies ProjectPreview[];
