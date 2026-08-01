export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  featured: boolean;
  category: "AI" | "Web App" | "Platform";
  tags: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    slug: "ai-website-builder",
    title: "AI Website Builder (Full-Stack SaaS)",
    summary:
      "AI-powered SaaS website builder that generates complete responsive websites from natural language prompts.",
    description:
      "Built an AI-powered website builder that generates complete websites from natural language prompts using AI APIs. Implemented secure JWT authentication, credit-based usage system, and Stripe payment integration. Designed a responsive UI using Tailwind CSS and deployed the application using Vercel and Render. Developed RESTful backend APIs with Express.js and PostgreSQL for scalable application architecture.",
    featured: true,
    category: "AI",
    tags: ["React", "Node.js", "Express.js", "PostgreSQL", "AI API", "Stripe", "JWT Authentication", "Tailwind CSS", "Vercel", "Render", "MongoDB"],
    features: [
      "AI-powered natural language website generation",
      "Secure JWT authentication & credit-based usage system",
      "Stripe payment gateway integration",
      "Responsive UI built with Tailwind CSS",
      "RESTful backend APIs with Express.js & PostgreSQL",
    ],
    githubUrl: "https://github.com/yashbawane24",
    liveUrl: "#",
  },
  {
    slug: "smart-grocery-delivery",
    title: "Smart Grocery Delivery Platform (Full-Stack)",
    summary:
      "Full-stack grocery delivery platform supporting customers, administrators, and delivery partners.",
    description:
      "Developed a full-stack grocery delivery platform supporting customers, administrators, and delivery partners. Implemented role-based authentication using JWT with secure login and authorization. Built an admin dashboard for managing products, orders, users, and delivery operations. Integrated real-time order tracking, delivery partner location updates, automated email notifications, and background job scheduling using Inngest.",
    featured: true,
    category: "Platform",
    tags: ["Tailwind CSS", "Node.js", "Express.js", "PostgreSQL (Neon)", "JWT Authentication", "Inngest", "REST APIs", "Git", "GitHub", "Vercel", "Render", "React"],
    features: [
      "Role-based authentication & authorization with JWT",
      "Admin dashboard for product, order & user management",
      "Real-time order tracking & delivery location updates",
      "Automated email notifications & background job scheduling with Inngest",
      "PostgreSQL (Neon) database integration",
    ],
    githubUrl: "https://github.com/yashbawane24",
    liveUrl: "#",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
