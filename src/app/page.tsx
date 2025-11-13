import { FloatingNav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about";
import { SpotlightTimeline } from "@/components/spotlight";
import { ProjectsShowcase } from "@/components/projects";
import { CertificationsMarquee } from "@/components/certifications";
import { ContactSection } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <FloatingNav />
      <Hero />
      <AboutSection />
      <SpotlightTimeline />
      <ProjectsShowcase />
      <CertificationsMarquee />
      <ContactSection />
      <Footer />
    </main>
  );
}
