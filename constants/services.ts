export interface Service {
  title: string;
  description: string;
  icon: "code" | "layers" | "sparkles" | "figma" | "server" | "smartphone";
}

export const services: Service[] = [
  {
    title: "Web Development",
    description: "Fast, responsive websites built with modern frameworks and clean architecture.",
    icon: "code",
  },
  {
    title: "Full Stack Development",
    description: "End-to-end products — from database design to a polished, production UI.",
    icon: "layers",
  },
  {
    title: "AI Integration",
    description: "Adding AI-powered features like generation, classification, and detection to real products.",
    icon: "sparkles",
  },
  {
    title: "UI/UX Design",
    description: "Interfaces that feel intentional, accessible, and fast — not just pretty.",
    icon: "figma",
  },
  {
    title: "API Development",
    description: "Secure, well-documented REST APIs with authentication and rate limiting.",
    icon: "server",
  },
  {
    title: "Responsive Websites",
    description: "Pixel-solid layouts across desktop, tablet, and mobile.",
    icon: "smartphone",
  },
];
