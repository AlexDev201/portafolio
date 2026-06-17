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

                {/* Foto de perfil placeholder */}
                <div className="flex-shrink-0 relative mt-8 md:mt-0">
                    {/* Decoración tipo marco desplazado */}
                    <div className="absolute inset-0 border border-gray-600 translate-x-4 translate-y-4"></div>

                    {/* Contenedor principal de la imagen */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80 bg-[#111] border border-gray-700 flex flex-col items-center justify-center group overflow-hidden">
                        {/* Aquí irá la imagen real cuando la tengas con un tag <img /> */}
                        <svg className="w-16 h-16 text-gray-600 mb-4 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <p className="font-mono text-gray-500 text-xs text-center px-4">
                            [ FOTO_DE_PERFIL ]<br />
                            Recomendación: B/N
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};