import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      {/* Contenido principal de la página, con padding superior para compensar el NavBar fijo */}
      <main className="pt-24 px-6 max-w-6xl mx-auto">
        <div className="h-[2000px]"> {/* Placeholder de altura para probar el scroll */}
          <p className="font-mono text-gray-600">// Contenido en construcción...</p>
        </div>
      </main>
    </div>
  )
}

export default App
