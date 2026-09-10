import codeforge0 from "../../../assets/images/projects/codeforge/codeforge-0.webp";
import codeforge1 from "../../../assets/images/projects/codeforge/codeforge-1.webp";
import codeforge2 from "../../../assets/images/projects/codeforge/codeforge-2.webp";
import codeforge3 from "../../../assets/images/projects/codeforge/codeforge-3.webp";
import codeforge4 from "../../../assets/images/projects/codeforge/codeforge-4.webp";
import codeforge5 from "../../../assets/images/projects/codeforge/codeforge-5.webp";
import codeforge6 from "../../../assets/images/projects/codeforge/codeforge-6.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "CodeForge",
  theme: "dark",
  tags: ["next", "react", "websockets", "node"],
  live: "https://codeforge-1-6xue.onrender.com/",
  source: "https://github.com/GauravSahani21/CodeForge",
  description:
    "A next-generation competitive coding platform and cloud learning environment designed for developers who want to write real code instead of function stubs. CodeForge features an integrated cloud IDE with multi-language compiler support, real-time multiplayer coding duels (Versus Mode) over WebSockets, an interactive algorithm roadmap tech tree, comprehensive DSA courses, and GitHub-style streak heatmaps.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: codeforge0,
        alt: "CodeForge landing page and online compiler hero",
        caption: "CodeForge Landing Hero — 'Code. Learn. Conquer.' with integrated code runner and real-time feature highlights",
      },
    },
    {
      type: "text",
      props: {
        title: "Online Compiler & Full Program Execution",
        text: "Unlike traditional competitive programming platforms that limit users to isolated function stubs, CodeForge challenges developers to construct complete, runnable programs with standard I/O parsing. The integrated compiler engine provides instant code execution across 13+ programming languages with syntax highlighting, auto-completion, and sub-second test evaluation.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: codeforge5,
        alt: "Online IDE with Two Sum challenge and testcase console",
        caption: "Online IDE & Code Workspace — Split-pane challenge solver with multi-language syntax highlighting, custom testcase console, and instant execution",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: codeforge1,
        alt: "Problems catalog and challenge directory",
        caption: "Problems Directory — Comprehensive challenge catalog categorized by difficulty (Easy, Medium, Hard) and algorithmic paradigms",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: codeforge2,
        alt: "Interactive Algorithm Roadmap visual tech tree",
        caption: "Algorithm Roadmap — Interactive tech tree guiding learners from Arrays & Hashing through Dynamic Programming and Advanced Graphs",
      },
    },
    {
      type: "text",
      props: {
        title: "Real-Time Versus Duels & Learning Hub",
        text: "CodeForge brings gamified competition to software engineering with 'Versus Mode', enabling peer-to-peer real-time coding battles powered by WebSockets. Players can create or join private duel lobbies with custom timers, problem pools, and live opponent progress tracking. In parallel, the Learning Hub provides 8 structured courses spanning Python, JavaScript, Java, C++, and advanced data structures.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: codeforge3,
        alt: "Versus Mode coding duel lobby",
        caption: "Versus Mode — Real-time multiplayer coding duels with room creation, live timers, and head-to-head racing",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: codeforge4,
        alt: "Learning Hub structured curriculum",
        caption: "Learning Hub — Structured curriculum offering hands-on lessons, quizzes, and language fundamentals",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: codeforge6,
        alt: "Global Leaderboard with developer rankings and streaks",
        caption: "Global Leaderboard — Community rankings tracked by problems solved, real-time completion progress, and active day streaks",
      },
    },
  ],
} as const satisfies ProjectContent;
