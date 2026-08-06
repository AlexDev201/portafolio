import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export const NavBar = () => {
    const { language, toggleLanguage, t } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between font-mono text-xs sm:text-sm">

                {/* Brand Logo */}
                <div className="text-gray-200 font-bold tracking-wider shrink-0 text-sm sm:text-base">
                    <a href="#" onClick={closeMobileMenu} className="hover:text-white transition-colors">
                        <span className="text-gray-600">{"<"}</span>
                        <span>Giovanny_Molina</span>
                        <span className="text-gray-600">{"/>"}</span>
                    </a>
                </div>

                {/* Right Area: Desktop Links + Language Toggle + Mobile Hamburger */}
                <div className="flex items-center gap-3 sm:gap-6">
                    
                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8 text-sm">
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

                    {/* Language Switcher Button (Always Visible) */}
                    <button
                        onClick={toggleLanguage}
                        className="shrink-0 inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-1.5 border border-gray-700/80 bg-[#0d0d0d] hover:bg-[#141414] hover:border-gray-500 rounded-full font-mono text-xs text-gray-300 hover:text-white transition-all duration-300 cursor-pointer shadow-sm active:scale-95 select-none"
                        title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                        aria-label="Toggle language"
                    >
                        <svg 
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 shrink-0" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            strokeWidth="1.75"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z" />
                        </svg>
                        <div className="flex items-center gap-1 text-[11px]">
                            <span className={language === "es" ? "text-white font-bold bg-white/10 px-1.5 py-0.5 rounded" : "text-gray-500 hover:text-gray-400 px-1 py-0.5"}>
                                ES
                            </span>
                            <span className="text-gray-700 font-light">|</span>
                            <span className={language === "en" ? "text-white font-bold bg-white/10 px-1.5 py-0.5 rounded" : "text-gray-500 hover:text-gray-400 px-1 py-0.5"}>
                                EN
                            </span>
                        </div>
                    </button>

                    {/* Mobile Hamburger Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none rounded-md hover:bg-white/5 transition-colors"
                        aria-label="Toggle navigation menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay / Panel */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#0d0d0d] border-b border-gray-800 px-6 py-5 space-y-4 font-mono text-sm animate-fadeIn">
                    <div className="text-[10px] text-gray-600 tracking-widest uppercase border-b border-gray-800 pb-2">
                        // navigation_menu.sh
                    </div>
                    <div className="flex flex-col space-y-3 pt-1">
                        <a 
                            href="#about" 
                            onClick={closeMobileMenu}
                            className="flex items-center gap-2 text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 py-1.5 border-b border-gray-800/40"
                        >
                            <span className="text-gray-600 text-xs">{">"}</span>
                            {t.nav.about}
                        </a>
                        <a 
                            href="#projects" 
                            onClick={closeMobileMenu}
                            className="flex items-center gap-2 text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 py-1.5 border-b border-gray-800/40"
                        >
                            <span className="text-gray-600 text-xs">{">"}</span>
                            {t.nav.projects}
                        </a>
                        <a 
                            href="#contact" 
                            onClick={closeMobileMenu}
                            className="flex items-center gap-2 text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 py-1.5"
                        >
                            <span className="text-gray-600 text-xs">{">"}</span>
                            {t.nav.contact}
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};