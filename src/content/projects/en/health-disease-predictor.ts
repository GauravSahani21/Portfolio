import hdp0 from "../../../assets/images/projects/health-disease-predictor/hdp-0.webp";
import hdp1 from "../../../assets/images/projects/health-disease-predictor/hdp-1.webp";
import hdp2 from "../../../assets/images/projects/health-disease-predictor/hdp-2.webp";
import hdp3 from "../../../assets/images/projects/health-disease-predictor/hdp-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Health Disease Predictor",
  theme: "light",
  tags: ["react", "node", "redis", "kubernetes"],
  live: "https://health-disease-predictor-md47.onrender.com",
  source: "https://github.com/GauravSahani21/Health-Disease-Predictor",
  description:
    "An AI-powered health analysis platform combining the MERN stack with four analysis modes — Symptom Checker (NLP), Face Scan (AI Dermatology), Brain Scan (MRI), and Skin Analysis. Predictions include confidence scores, severity ratings, and visual explainability via SHAP &amp; Grad-CAM heatmaps.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: hdp0,
        alt: "Health Disease Predictor landing page",
        caption: "Landing Page — AI Core Active with live prediction preview",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: hdp1,
        alt: "AI Analysis Tools overview",
        caption: "AI Analysis Tools — Face Scan, Brain Scan, Skin Analysis & Symptom Checker",
      },
    },
    {
      type: "text",
      props: {
        title: "How It Works",
        text: "The React + Tailwind frontend routes each request through a JWT-authenticated Node.js/Express API gateway to the correct FastAPI ML microservice — DistilBERT for symptom/lab-report NLP, EfficientNet-B0 for skin images, Vision Transformer (ViT) for face scans. Results include ranked disease predictions, confidence scores, severity classifications, SHAP attention weights, and Grad-CAM heatmap overlays.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: hdp2,
        alt: "Symptom Checker / Health Check page",
        caption: "Symptom Checker — NLP-powered with lab report input and instant AI triage",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: hdp3,
        alt: "Face Scan / AI Dermatology page",
        caption: "Face Scan — Vision Transformer (ViT) dermatoscope via webcam or upload",
      },
    },
    {
      type: "text",
      props: {
        title: "Architecture & DevOps",
        text: "Six Docker-containerised services: React frontend → Express/Node.js API gateway → MongoDB (history) + S3/MinIO (images &amp; heatmaps) → Text ML (FastAPI :8001) + Image ML (FastAPI :8002). Production via Kubernetes manifests. CI/CD: GitHub Actions runs lint + tests on PRs, builds Docker images on merge, auto-deploys to staging. Security: JWT refresh tokens, Bcrypt, rate limiting, CORS, audit logging.",
      },
    },
  ],
} as const satisfies ProjectContent;
