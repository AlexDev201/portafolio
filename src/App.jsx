import { NavBar } from './components/NavBar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectSection } from './components/ProjectSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col justify-between">
        <NavBar />
        <main className="pt-20 flex-grow">
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App

