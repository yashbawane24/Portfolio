export interface SkillItem {
  name: string;
  category?: string;
  iconSlug?: string;
  customSvg?: string;
  color?: string; // Optional accent color for hover glow
}

export interface SkillCategoryRow {
  title: string;
  direction: "left" | "right";
  speed?: number; // Duration in seconds
  skills: SkillItem[];
}

export const skillCategories: SkillCategoryRow[] = [
  {
    title: "Programming, Frontend & AI",
    direction: "left",
    speed: 30,
    skills: [
      { name: "C++", iconSlug: "cplusplus", color: "#00599C" },
      { name: "Python", iconSlug: "python", color: "#3776AB" },
      { name: "Java", iconSlug: "openjdk", color: "#ED8B00" },
      { name: "JavaScript", iconSlug: "javascript", color: "#F7DF1E" },
      { name: "TypeScript", iconSlug: "typescript", color: "#3178C6" },
      { name: "HTML5", iconSlug: "html5", color: "#E34F26" },
      { name: "CSS3", iconSlug: "css3", color: "#1572B6" },
      { name: "Tailwind CSS", iconSlug: "tailwindcss", color: "#06B6D4" },
      { name: "React", iconSlug: "react", color: "#61DAFB" },
      { name: "Next.js", iconSlug: "nextdotjs", color: "#FFFFFF" },
      { name: "OpenAI API", iconSlug: "openai", color: "#00E5FF" },
      {
        name: "Prompt Engineering",
        customSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
        color: "#7C3AED",
      },
    ],
  },
  {
    title: "Backend, Database & Tools",
    direction: "right",
    speed: 34,
    skills: [
      { name: "Node.js", iconSlug: "nodedotjs", color: "#5FA04E" },
      { name: "Express.js", iconSlug: "express", color: "#FFFFFF" },
      {
        name: "REST API",
        customSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>`,
        color: "#00E5FF",
      },
      { name: "JWT", iconSlug: "jsonwebtokens", color: "#FB015B" },
      { name: "MongoDB", iconSlug: "mongodb", color: "#47A248" },
      { name: "PostgreSQL", iconSlug: "postgresql", color: "#4169E1" },
      { name: "MySQL", iconSlug: "mysql", color: "#4479A1" },
      { name: "Git", iconSlug: "git", color: "#F05032" },
      { name: "GitHub", iconSlug: "github", color: "#FFFFFF" },
      { name: "VS Code", iconSlug: "visualstudiocode", color: "#007ACC" },
      { name: "Postman", iconSlug: "postman", color: "#FF6C37" },
      { name: "Vercel", iconSlug: "vercel", color: "#FFFFFF" },
      { name: "Render", iconSlug: "render", color: "#46E3B7" },
    ],
  },
];
