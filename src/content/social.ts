export const social = [
  { url: "mailto:gauravsahani010@gmail.com", name: "mail" },
  { url: "https://github.com/GauravSahani21", name: "github" },
  { url: "https://linkedin.com/in/gauravsahani21/", name: "linkedin" },
  { url: "https://leetcode.com/u/Gaurav_21102004/", name: "leetcode" },
] as const satisfies { url: string; name: "mail" | "github" | "linkedin" | "leetcode" }[];
