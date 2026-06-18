import { NavBar } from './components/NavBar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectSection } from './components/ProjectSection';

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </main>
    </div>
  )
}

export default App
