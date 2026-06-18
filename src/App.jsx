import { NavBar } from './components/NavBar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
      </main>
    </div>
  )
}

export default App
