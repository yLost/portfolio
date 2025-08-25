import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProjectsSection } from "./components/ProjectsSection";
import { ServicesSection } from "./components/ServicesSection";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black dark">
        <Header />
        <main>
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
