import photoSorter0 from "../../../assets/images/projects/photo-sorter/photo-sorter-0.webp";
import photoSorter1 from "../../../assets/images/projects/photo-sorter/photo-sorter-1.webp";
import photoSorter2 from "../../../assets/images/projects/photo-sorter/photo-sorter-2.webp";
import photoSorter3 from "../../../assets/images/projects/photo-sorter/photo-sorter-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Photo Sorter",
  theme: "light",
  tags: ["next", "react", "typescript", "html", "css"],
  live: "https://photo-selector.vercel.app/",
  source: "https://github.com/GauravSahani21/Photo-Sorter",
  description:
    "A lightning-fast, privacy-first photo sorting and album organization web application built with Next.js 15, React 19, and Tailwind CSS. Photo Sorter enables photographers, travelers, and creators to batch load folders of photos, rapidly review images with seamless keyboard navigation (`1/A` to Accept, `2/H` to Hold, `3/R` to Reject), sort into custom color-coded albums, review curated sets, and export or save progress directly in the browser.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: photoSorter0,
        alt: "Photo Sorter main initial dashboard and album management sidebar",
        caption: "Photo Sorter Dashboard — Clean minimalist workspace featuring folder ingestion, real-time counters, and custom album controls",
      },
    },
    {
      type: "text",
      props: {
        title: "High-Speed Photo Triage & Zero-Upload Privacy",
        text: "Photographers often take thousands of photos per shoot, creating an overwhelming culling bottleneck. Traditional cloud tools require slow uploads before review begins. Photo Sorter eliminates this friction by leveraging modern browser File System APIs and React 19 to read and render high-resolution photos entirely client-side. No images ever leave the user's device, guaranteeing total privacy and instant zero-latency image browsing.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: photoSorter1,
        alt: "Interactive 1-by-1 photo sorting view with keyboard shortcuts and album selector",
        caption: "Sorting Engine — Streamlined single-photo inspection with instant keyboard shortcuts (A/H/R), active image counter, and target album assignment",
      },
    },
    {
      type: "text",
      props: {
        title: "Keyboard-Driven Workflow & Color-Coded Albums",
        text: "The sorting experience is engineered for maximum speed. Users can effortlessly navigate photo sequences using arrow keys and execute triage decisions using ergonomic single-key bindings: Press 1 or A to Accept, 2 or H to Hold, and 3 or R to Reject. Custom albums (e.g., Road Trip, Goa, Ladakh) can be dynamically created with distinctive color identifiers, ensuring organized multi-destination categorization in a single pass.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: photoSorter2,
        alt: "Accepted photos gallery with album tags and filter chips",
        caption: "Accepted Gallery — Filterable grid of approved photos categorized with color-coded album badges and quick deletion triggers",
      },
    },
    {
      type: "text",
      props: {
        title: "Curated Review, On-Hold Staging, and Progress Export",
        text: "Uncertain photos can be placed in an 'On Hold' staging area for a second-look pass, complete with rapid inline accept/reject controls. Once sorting is complete, users can export their curated selections or use the Save Progress / Load Progress feature to store the current session state as a lightweight JSON configuration, allowing extensive culling sessions to be resumed anytime without losing progress.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: photoSorter3,
        alt: "On Hold review grid with inline quick accept and reject buttons",
        caption: "On Hold Queue — Secondary review matrix with one-click decision toggles and consolidated sorting analytics",
      },
    },
  ],
} as const satisfies ProjectContent;
