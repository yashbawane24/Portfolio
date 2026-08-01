export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: ["C++", "Python", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "Tailwind", "React", "Next.js"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "JWT"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Render"],
  },
  {
    category: "AI",
    skills: ["OpenAI APIs", "Prompt Engineering", "AI Integrations"],
  },
];
