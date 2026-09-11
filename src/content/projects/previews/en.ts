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
  {
    title: "SmartStorage",
    slug: "smartstorage",
    thumbnail: thumbnailSmartStorage,
    description: "AI-powered academic document vault & DigiLocker for students",
  },
  {
    title: "ConnectUp",
    slug: "connectup",
    thumbnail: thumbnailConnectUp,
    description: "Real-time chat & WebRTC video calling platform with Gemini AI",
  },
  {
    title: "Photo Sorter",
    slug: "photo-sorter",
    thumbnail: thumbnailPhotoSorter,
    description: "Rapid photo triage & album organization app with keyboard navigation",
  },
] as const satisfies ProjectPreview[];
