import connectUp0 from "../../../assets/images/projects/connectup/connectup-0.webp";
import connectUp1 from "../../../assets/images/projects/connectup/connectup-1.webp";
import connectUp2 from "../../../assets/images/projects/connectup/connectup-2.webp";
import connectUp3 from "../../../assets/images/projects/connectup/connectup-3.webp";
import connectUp4 from "../../../assets/images/projects/connectup/connectup-4.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "ConnectUp",
  theme: "dark",
  tags: ["next", "websockets", "react", "mongodb", "typescript"],
  live: "https://connectup-j8fy.onrender.com/",
  source: "https://github.com/GauravSahani21/ConnectUp",
  description:
    "A full-stack real-time communication platform built with Next.js 16, Socket.IO, WebRTC, and MongoDB. ConnectUp delivers seamless messaging across desktop and mobile devices, peer-to-peer HD voice and video calling with custom signaling, an integrated Google Gemini AI chatbot assistant, rich multimedia sharing with audio waveforms and live location pins, and an email-driven friend discovery network.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: connectUp0,
        alt: "ConnectUp real-time chat dashboard and responsive mobile preview",
        caption: "ConnectUp Overview — Real-time bidirectional messaging powered by Socket.IO with multi-device synchronization",
      },
    },
    {
      type: "text",
      props: {
        title: "Next.js 16 App Router & Bidirectional Socket.IO Engine",
        text: "ConnectUp leverages Next.js 16 and React 19 combined with a standalone Node.js Socket.IO server to orchestrate instantaneous message delivery, typing indicator broadcasts, and real-time online/offline presence tracking. MongoDB and Mongoose provide robust data persistence for conversation threads, pinned messages, read receipts, and user metadata with SWR-driven optimistic updates.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: connectUp1,
        alt: "ConnectUp WebRTC peer-to-peer video calling interface with controls",
        caption: "WebRTC Video Calling — High-definition peer-to-peer audio and video calls with custom ICE signaling and floating video stream",
      },
    },
    {
      type: "text",
      props: {
        title: "WebRTC Peer-to-Peer HD Calling Pipeline",
        text: "The application features fully integrated audio and video communication utilizing native browser WebRTC APIs and Socket.IO signaling. Users can initiate instant 1-on-1 calls with real-time incoming call modal notifications, dynamic media stream track switching (camera flip, mic mute, screen share), connection health monitoring, and comprehensive call history logs.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: connectUp2,
        alt: "Google Gemini 1.5 Flash AI chatbot assistant panel within ConnectUp",
        caption: "Gemini AI Assistant — Context-aware conversational AI assistant integrated directly into the messaging workspace",
      },
    },
    {
      type: "text",
      props: {
        title: "Google Gemini AI Assistant & Contextual Support",
        text: "Empowering user productivity, ConnectUp embeds a dedicated conversational AI assistant powered by Google Gemini 1.5 Flash. Users can query the AI directly within their workspace to summarize lengthy meeting notes, draft polished message replies, generate code snippets, and translate messages across languages in real time.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: connectUp3,
        alt: "Rich multimedia messaging with voice notes, swipe-to-reply, and location sharing",
        caption: "Interactive Messaging Suite — Audio voice notes with playback waveforms, intuitive swipe-to-reply, and live GPS pin sharing",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: connectUp4,
        alt: "Friend request management hub, incoming call alerts, and profile settings",
        caption: "Social Network & User Profiles — Email-based friend invitations, incoming call overlays, and customized user profiles",
      },
    },
  ],
} as const satisfies ProjectContent;
