import { NavBar } from './components/NavBar';
import { HeroSection } from './components/HeroSection';

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      {/* Contenido principal de la página, con padding superior para compensar el NavBar fijo */}
      <main className="pt-20">
        <HeroSection />
        {/* Los demás componentes irán aquí debajo */}
      </main>
    </div>
  )
}

export default App
