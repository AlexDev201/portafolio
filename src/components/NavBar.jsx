import { useLanguage } from "../context/LanguageContext";

export const NavBar = () => {
    const { language, toggleLanguage, t } = useLanguage();

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 z-50">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between font-mono text-sm">

                <div className="text-gray-200 font-bold tracking-wider">
                    <a href="#" className="hover:text-white transition-colors">
                        <span className="text-gray-600">{"<"}</span>
                        Giovanny_Molina
                        <span className="text-gray-600">{"/>"}</span>
                    </a>
                </div>

                <div className="flex items-center gap-4 md:gap-8">
                    <div className="flex space-x-3 md:space-x-8 text-xs md:text-sm">
                        <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                            {t.nav.about}
                        </a>
                        <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">
                            {t.nav.projects}
                        </a>
                        <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                            {t.nav.contact}
                        </a>
                    </div>

                    {/* Botón de traducción intuitivo */}
                    <button
                        onClick={toggleLanguage}
                        className="inline-flex items-center gap-2 px-3 py-1.5 border border-gray-700 bg-[#0d0d0d] hover:border-gray-500 rounded-full font-mono text-xs text-gray-300 hover:text-white transition-all duration-300 cursor-pointer shadow-sm active:scale-95 select-none"
                        title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                        aria-label="Toggle language"
                    >
                        <span className="text-sm leading-none">🌐</span>
                        <div className="flex items-center gap-1 text-[11px]">
                            <span className={language === "es" ? "text-white font-bold underline underline-offset-2" : "text-gray-500"}>ES</span>
                            <span className="text-gray-600">|</span>
                            <span className={language === "en" ? "text-white font-bold underline underline-offset-2" : "text-gray-500"}>EN</span>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
};