import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Skills />
      <Certifications />
      <Projects />
      <Achievements />
      <Education />
      <Experience />
      <Contact />

      {/* Footer */}
      <footer className="bg-card py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Sai Krishna Sajjanam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
