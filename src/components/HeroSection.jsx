export const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center">
                <pre className="font-mono text-[3rem] md:text-[5rem] text-white select-none leading-tight">
                    {`@Component
public class BackendDeveloper {
    @Autowired
    private Skills skills;

    @Value("\${developer.name}")
    private String name = "Giovanny";
}`}
                </pre>
            </div>

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                <div className="flex-1 space-y-6">
                    <div className="space-y-2">
                        <h2 className="font-mono text-gray-600 text-sm md:text-base">{"<greeting>"}</h2>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
                            ¡Hola! Soy <br />
                            <span className="text-gray-300">Giovanny Molina</span>
                        </h1>
                        <h2 className="font-mono text-gray-600 text-sm md:text-base">{"</greeting>"}</h2>
                    </div>

                    <p className="text-xl md:text-2xl text-gray-400 font-light border-l-2 border-gray-700 pl-4">
                        Desarrollador Backend <br />
                        <span className="text-white font-medium">Enfocado en Java y Spring Boot</span>
                    </p>

                    <div className="pt-8">
                        <a href="#projects" className="inline-block border border-gray-600 px-8 py-3 text-sm font-mono text-white hover:bg-white hover:text-black transition-colors duration-300">
                            EXPLORAR_PROYECTOS();
                        </a>
                    </div>
                </div>


                <div className="flex-shrink-0 relative mt-8 md:mt-0">
                    <div className="absolute inset-0 border border-gray-600 translate-x-4 translate-y-4"></div>
                    <div className="relative w-[260px] h-[260px] md:w-[324px] md:h-[324px] bg-[#111] border border-gray-700 overflow-hidden group">
                        <img 
                            src="/foto_portafolio.jpeg" 
                            alt="Giovanny Molina" 
                            className="w-full h-full object-cover filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};