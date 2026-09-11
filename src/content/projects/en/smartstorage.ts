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
    "A full-stack document management platform for students (DigiLocker for Students) designed to securely store, organize, share, and verify academic records. Powered by Google Gemini 1.5 Flash AI for automatic document categorization, MongoDB GridFS for direct binary storage without external S3 buckets, interactive Recharts analytics, year-based academic timelines, collaborative study rooms, and tamper-proof QR code verification with dynamic PDF watermarking.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: smartStorage0,
        alt: "SmartStorage landing hero and student academic document vault preview",
        caption: "SmartStorage Landing — Full-stack student document repository secured by Gemini AI and cryptographic verification",
      },
    },
    {
      type: "text",
      props: {
        title: "AI-Powered Document Vault & GridFS Architecture",
        text: "Traditional cloud storage solutions require costly S3 buckets, disparate folder hierarchies, and cumbersome manual tagging. SmartStorage streamlines academic document preservation by storing binary files directly within MongoDB clusters using GridFS bucket streaming. A modern React 19 and Vite frontend provides students with a lightning-fast interface to access marksheets, degrees, transcripts, and ID cards across any device.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: smartStorage1,
        alt: "SmartStorage documents library dashboard with category filters and search",
        caption: "Documents Library — Instant filtering by Marksheets, Certificates, ID Cards, and Fee Receipts with full-text search",
      },
    },
    {
      type: "text",
      props: {
        title: "Gemini 1.5 Flash Automated Classification Pipeline",
        text: "When a student uploads a PDF or image, SmartStorage automatically triggers an intelligent categorization pipeline. Using pdf-parse for text extraction and Google Gemini 1.5 Flash via the Google Generative AI SDK, the platform inspects the document structure to identify whether it is an official transcript, degree certificate, admission letter, or identity card. The AI extracts vital metadata — institution name, graduation year, CGPA, and roll number — with over 98% confidence.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: smartStorage2,
        alt: "Gemini AI auto-classification modal with high confidence score and extracted metadata",
        caption: "AI Categorization Engine — Instant document recognition, confidence scoring, and automated metadata extraction",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: smartStorage3,
        alt: "Storage analytics dashboard with Recharts trends and interactive academic timeline",
        caption: "Analytics & Timeline — Recharts semester upload trends, category quota breakdown, and chronologically mapped academic milestones",
      },
    },
    {
      type: "text",
      props: {
        title: "Collaborative Study Rooms & Tamper-Evident Verification",
        text: "Beyond individual storage, SmartStorage fosters academic collaboration through Study Rooms where peer groups share lecture notes, syllabi, and past exam papers in real time. For external sharing with employers or universities, SmartStorage generates tamper-evident verification links equipped with dynamic scannable QR codes and pdf-lib watermarking ('CONFIDENTIAL / FOR VERIFICATION ONLY'), guaranteeing document authenticity while preventing unauthorized leaks.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: smartStorage4,
        alt: "Study room collaboration interface and document verification with QR code and watermark",
        caption: "Collaborative Rooms & Verification — Scannable QR authentication, dynamic watermark injection, and shared study rooms",
      },
    },
  ],
} as const satisfies ProjectContent;
