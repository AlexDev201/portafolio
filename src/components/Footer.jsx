export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="border-t border-white/5 bg-[#080808] py-8 text-center font-mono text-xs text-gray-600">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p>
                    © {currentYear} Giovanny Molina. All rights reserved.
                </p>
                <p className="text-gray-700 hover:text-gray-500 transition-colors duration-300">
                    {"// Powered by Spring Boot & React"}
                </p>
            </div>
        </footer>
    );
};
