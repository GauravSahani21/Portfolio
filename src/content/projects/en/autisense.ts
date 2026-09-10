import autisense0 from "../../../assets/images/projects/autisense/autisense-0.webp";
import autisense1 from "../../../assets/images/projects/autisense/autisense-1.webp";
import autisense2 from "../../../assets/images/projects/autisense/autisense-2.webp";
import autisense3 from "../../../assets/images/projects/autisense/autisense-3.webp";
import autisense4 from "../../../assets/images/projects/autisense/autisense-4.webp";
import autisense5 from "../../../assets/images/projects/autisense/autisense-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "AutiSense",
  theme: "light",
  tags: ["react", "node", "javascript", "html"],
  source: "https://github.com/GauravSahani21/AutiSense",
  live: "https://autisense-zhy4.onrender.com",
  description:
    "A multi-modal AI-powered early autism screening platform for preschool children (ages 2–6). AutiSense combines clinically-backed behavioral questionnaires (M-CHAT-R/F), real-time computer vision via MediaPipe for facial and eye gaze tracking, generative AI with Google Gemini Flash for psychological drawing analysis, and scikit-learn Random Forest machine learning to deliver comprehensive, empathetic developmental reports.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: autisense0,
        alt: "AutiSense landing page and biometric mobile preview",
        caption: "AutiSense Landing Hero — 98.2% AI confidence screening with live biometric monitoring and developmental metrics",
      },
    },
    {
      type: "text",
      props: {
        title: "Multi-Modal Diagnostic Architecture",
        text: "AutiSense synthesizes three complementary diagnostic streams into a unified composite evaluation: 1) Interactive M-CHAT-R/F behavioral screening across 20 validated questions; 2) Real-time computer vision using MediaPipe Tasks Vision to measure gaze fixation stability, blink rate, and facial expressiveness; and 3) Generative vision AI powered by Google Gemini Flash to evaluate psychological drawing milestones and motor control patterns.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: autisense1,
        alt: "Three Simple Steps screening workflow",
        caption: "Clinical Workflow — Three simple steps: Register child profile, complete guided M-CHAT assessment, and generate instant AI report",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: autisense2,
        alt: "Early Developmental Signs learning hub",
        caption: "Parent Education Hub — Key early developmental milestones covering eye contact, speech delays, sensory processing, and social interaction",
      },
    },
    {
      type: "text",
      props: {
        title: "System Architecture & Machine Learning",
        text: "The platform operates as three collaborative microservices: a React 18 + Vite frontend styled with tailored Tailwind CSS and MediaPipe client vision; a Node.js & Express API gateway managing JWT-authenticated parent, doctor, and admin portals backed by MongoDB; and a dedicated Python Flask microservice hosting a scikit-learn Random Forest classifier with 94% validation accuracy, item-weight explainability algorithms (XAI), and automated developmental intervention generators.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: autisense3,
        alt: "Parent Dashboard with tracked children and screening metrics",
        caption: "Parent Portal Dashboard — Real-time tracking of children profiles, risk alert monitoring, and historical screening logs",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: autisense4,
        alt: "Behavioral Indicators questionnaire screen",
        caption: "Screening Flow — Interactive step-by-step M-CHAT assessment with dynamic progress indicators and validation",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: autisense5,
        alt: "Final Clinical Report and Risk Assessment",
        caption: "Final Clinical Report — Synthesized multi-modal evaluation showing composite risk score (73/100), clinical summary, and personalized recommendations",
      },
    },
  ],
} as const satisfies ProjectContent;
