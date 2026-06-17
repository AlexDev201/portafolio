export const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 z-50">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between font-mono text-sm">
                {/* Logo / Nombre */}
                <div className="text-gray-200 font-bold tracking-wider">
                    <a href="#" className="hover:text-white transition-colors">
                        <span className="text-gray-600">{"<"}</span>
                        Giovanny_Molina
                        <span className="text-gray-600">{"/>"}</span>
                    </a>
                </div>

                {/* Enlaces */}
                <div className="hidden md:flex space-x-8">
                    <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                        [Sobre_Mí]
                    </a>
                    <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">
                        [Proyectos]
                    </a>
                    <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                        [Contacto]
                    </a>
                </div>
            </div>
        </nav>
    );
};