export interface Social {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "twitter";
}

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/yashbawane24", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yash-bawane-77778632a", icon: "linkedin" },
  { label: "Email", href: "mailto:yashbawane148@gmail.com", icon: "mail" },
];
