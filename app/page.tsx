import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Skills } from "@/components/Skills/Skills";
import { Projects } from "@/components/Projects/Projects";
import { Experience } from "@/components/Experience/Experience";
import { Services } from "@/components/Services/Services";
import { Contact } from "@/components/Contact/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects limit={4} />
      <Experience />
      <Services />
      <Contact />
    </>
  );
}
