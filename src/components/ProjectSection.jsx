export const ProjectSection = () => {
    const projects = [
        {
            endpoint: "@GetMapping(\"/api/v1/instrumentation/reports\")",
            title: "Sistema de Reportes de Instrumentación",
            subtitle: "Ingenio Risaralda S.A. | Automatización Industrial",
            date: "Ago 2025 – Sep 2025",
            description: "Aplicación web que automatizó la generación y visualización de reportes de procesos industriales para el equipo de instrumentación, optimizando tiempos operativos significativamente.",
            bullets: [
                "Reducción del tiempo de generación de reportes de 2 horas manuales a solo unos segundos.",
                "Arquitectura robusta con Spring Boot para la lógica de instrumentación e integración con PostgreSQL.",
                "Dashboard dinámico e interactivo construido en React con visualización de métricas críticas mediante Recharts."
            ],
            technologies: ["Spring Boot", "React", "PostgreSQL", "Recharts", "Docker", "Git"],
            link: "https://github.com/AlexDev201/proyecto_reportes"
        },
        {
            endpoint: "@MessageMapping(\"/energy/monitor/realtime\")",
            title: "EcoSystem Energy",
            subtitle: "Proyecto de Aprendizaje Técnico | Monitoreo Eléctrico",
            date: "Jul 2025 – Ago 2025",
            description: "Plataforma web de monitoreo eléctrico en tiempo real para simulación y análisis de variables eléctricas, implementando comunicación bidireccional continua.",
            bullets: [
                "Transmisión continua de datos eléctricos en tiempo real utilizando WebSockets.",
                "Integración con la API externa de Ubidots para la generación automatizada de reportes y gráficas.",
                "Estructura desacoplada backend-frontend (Spring Boot y React) con comunicación híbrida REST/WebSockets."
            ],
            technologies: ["Spring Boot", "React", "PostgreSQL", "WebSockets", "Ubidots API", "Docker"],
            link: "https://github.com/AlexDev201/EcoSystem"
        }
    ];

    return (
        <section id="projects" className="relative py-24 md:py-32 overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] flex items-center justify-start pl-12">
                <pre className="font-mono text-[1.5rem] md:text-[2.5rem] text-white select-none leading-tight">
                    {`@RestController
@RequestMapping("/api/v1/projects")
public class ProjectController {
    @Autowired
    private ProjectService service;
}`}
                </pre>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="mb-16 space-y-3">
                    <p className="font-mono text-gray-600 text-xs tracking-widest uppercase">

                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                        Proyectos
                    </h2>
                    <div className="w-16 h-[2px] bg-gray-600 mt-4"></div>
                </div>

                <div className="space-y-12">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group relative border border-gray-800 bg-[#0d0d0d] p-6 md:p-8 hover:border-gray-500 transition-all duration-500 rounded-none"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6 border-b border-gray-800 pb-4">
                                <span className="font-mono text-xs md:text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                                    {project.endpoint}
                                </span>
                                <span className="font-mono text-[11px] text-gray-600">
                                    {project.date}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                                <div className="lg:col-span-8 space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-gray-200 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="font-mono text-xs text-gray-500 mt-1">
                                            {project.subtitle}
                                        </p>
                                    </div>

                                    <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                                        {project.description}
                                    </p>

                                    <ul className="space-y-2.5 pt-2">
                                        {project.bullets.map((bullet, bulletIdx) => (
                                            <li key={bulletIdx} className="flex items-start gap-3 text-xs md:text-sm text-gray-400 font-mono">
                                                <span className="text-gray-600 shrink-0 select-none">{">"}</span>
                                                <span className="leading-relaxed">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6 lg:space-y-12 lg:items-end">
                                    <div className="flex flex-wrap lg:justify-end gap-2">
                                        {project.technologies.map((tech, techIdx) => (
                                            <span
                                                key={techIdx}
                                                className="px-2.5 py-1 font-mono text-[10px] text-gray-400 bg-black border border-gray-800 rounded-none group-hover:border-gray-600 transition-colors duration-300"
                                            >
                                                [{tech}]
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-4 lg:pt-0">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 font-mono text-xs text-gray-400 hover:text-white border border-transparent hover:border-gray-700 px-4 py-2 bg-transparent hover:bg-white/5 transition-all duration-300"
                                        >
                                            <span className="text-gray-600">{"<"}</span>
                                            VIEW_CODE();
                                            <span className="text-gray-600">{"/>"}</span>
                                            <svg className="w-3.5 h-3.5 ml-1 text-gray-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
