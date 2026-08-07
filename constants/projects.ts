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
  image: string;
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
    githubUrl: "https://github.com/yashbawane24/AI-Website-Builder-.git",
    liveUrl: "#",
    image: "/images/ai-website-builder.png",
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
    githubUrl: "https://github.com/yashbawane24/Smart-Grocery-Delivery-Platform.git",
    liveUrl: "#",
    image: "/images/smart-grocery-delivery.png",
  },
  {
    slug: "secure-docs-ai",
    title: "SecureDocs AI",
    summary:
      "AI-powered document security and intelligent document analysis system with role-based access.",
    description:
      "Built an intelligent document processing and security platform featuring AI-assisted document analysis, document encryption, role-based access control, and intuitive search functionality. Implemented secure API endpoints, document parsing, and dynamic UI for managing document workflows.",
    featured: true,
    category: "AI",
    tags: ["React", "Node.js", "Python", "AI API", "JWT Authentication", "Tailwind CSS", "PostgreSQL"],
    features: [
      "AI-powered intelligent document analysis & search",
      "Secure document encryption & role-based access control",
      "RESTful APIs for seamless document management",
      "Responsive user interface with real-time updates",
    ],
    githubUrl: "https://github.com/yashbawane24/SecureDocsAi.git",
    liveUrl: "#",
    image: "/images/secure-docs-ai.png",
  },
  {
    slug: "farmer-assistance-system",
    title: "Smart Farmer Assistance System",
    summary:
      "AI-driven agriculture platform providing real-time crop recommendations, weather forecasting, and farm management.",
    description:
      "Developed a comprehensive agricultural assistance platform empowering farmers with AI-driven crop advisory, soil analysis recommendations, local weather integration, and marketplace features for farm produce. Designed with intuitive UI for accessible farm operations management.",
    featured: true,
    category: "Platform",
    tags: ["React", "Python", "FastAPI", "Machine Learning", "Tailwind CSS", "Node.js", "REST APIs"],
    features: [
      "AI crop advisory & soil analysis recommendations",
      "Real-time weather integration & alerts",
      "Farm produce marketplace & inventory management",
      "Intuitive multi-lingual dashboard for farmers",
    ],
    githubUrl: "https://github.com/yashbawane24/Farmer-assistance-system.git",
    liveUrl: "#",
    image: "/images/farmer-assistance-system.png",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
