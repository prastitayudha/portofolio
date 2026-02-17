import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { ExecutiveSummary } from "@/components/executive-summary";
import { Competencies } from "@/components/competencies";
import { Experience } from "@/components/experience";
import { Achievements } from "@/components/achievements";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navigation />
      <Hero />
      <ExecutiveSummary />
      <Competencies />
      <Experience />
      <Achievements />
      <Contact />
      {/* Additional sections will be added here */}
    </main>
  );
}
