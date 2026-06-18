export const AboutSection = () => {
    return (
        <section id="about" className="relative py-24 md:py-32 overflow-hidden">


            <div className="absolute inset-0 pointer-events-none opacity-[0.02] flex items-start justify-end pr-12 pt-24">
                <pre className="font-mono text-[1.5rem] md:text-[2.5rem] text-white select-none leading-tight text-right">
                    {`@Service
public class AboutMe {
    @Value("passion")
    private String drive;

    @Override
    public String toString() {
        return "Backend Dev";
    }
}`}
                </pre>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">


                <div className="mb-16 space-y-3">
                    <p className="font-mono text-gray-600 text-xs tracking-widest uppercase">

                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                        Sobre Mí
                    </h2>
                    <div className="w-16 h-[2px] bg-gray-600 mt-4"></div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">


                    <div className="md:col-span-7 space-y-8">


                        <div className="font-mono text-xs text-gray-600 space-y-1">
                            <p>{"@Repository"}</p>
                            <p>{"public class DeveloperProfile {"}</p>
                        </div>


                        <div className="border-l-2 border-gray-700 pl-6">
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                                Desarrollador de software enfocado en la creación de soluciones robustas y escalables. Con una base sólida en bases de datos
                                relacionales, me apasiona escribir código limpio y mantenible.
                            </p>
                        </div>


                        <div className="font-mono text-xs text-gray-600">
                            <p>{"}"}</p>
                        </div>


                        <div className="mt-8 space-y-3 font-mono text-sm">
                            <div className="flex items-start gap-3">
                                <span className="text-gray-600 shrink-0">{">"}</span>
                                <p className="text-gray-400">
                                    <span className="text-gray-500">String</span>{" "}
                                    <span className="text-white">enfoque</span>{" = "}
                                    <span className="text-gray-300">"Código limpio, APIs eficientes, Bases de datos, seguridad y escalabilidad"</span>;

                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-gray-600 shrink-0">{">"}</span>
                                <p className="text-gray-400">
                                    <span className="text-gray-500">String</span>{" "}
                                    <span className="text-white">metodología</span>{" = "}
                                    <span className="text-gray-300">"Aprendizaje continuo y mejora iterativa"</span>;
                                </p>
                            </div>
                        </div>


                        <div className="mt-10 space-y-4">
                            <p className="font-mono text-xs text-gray-600">{"// Mis herramientas"}</p>
                            <div className="flex flex-wrap gap-4">
                                <TechIcon name="Java" icon={<JavaIcon />} />
                                <TechIcon name="Spring" icon={<SpringIcon />} />
                                <TechIcon name="Spring Boot" icon={<SpringBootIcon />} />
                                <TechIcon name="Security" icon={<SpringSecurityIcon />} />
                                <TechIcon name="JPA" icon={<JpaIcon />} />
                                <TechIcon name="PostgreSQL" icon={<PostgresIcon />} />
                                <TechIcon name="Docker" icon={<DockerIcon />} />
                                <TechIcon name="Git" icon={<GitIcon />} />
                            </div>
                        </div>

                        <div className="mt-10">
                            <a
                                href="/CV_Giovanny_Molina.pdf"
                                download
                                className="inline-flex items-center gap-3 border border-gray-600 px-8 py-3 text-sm font-mono text-white hover:bg-white hover:text-black transition-colors duration-300 group"
                            >
                                <DownloadIcon />
                                DESCARGAR_CV();
                            </a>
                        </div>
                    </div>


                    <div className="md:col-span-5 space-y-6">


                        <div className="border border-gray-800 bg-[#0d0d0d] p-6 space-y-5">


                            <div className="flex items-center gap-2 pb-4 border-b border-gray-800">
                                <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
                                <span className="ml-3 font-mono text-xs text-gray-600">developer_info.sh</span>
                            </div>


                            <div className="space-y-4 font-mono text-sm">
                                <InfoLine label="nombre" value="Giovanny Molina" />
                                <InfoLine label="rol" value="Backend Developer" />
                                <InfoLine label="especialización" value="Java & Spring Boot" />
                                <InfoLine label="ubicación" value="Pereira, Colombia" />
                                <InfoLine label="idiomas" value="Español, English" />
                            </div>
                        </div>

                        <div className="border border-gray-800 bg-[#0d0d0d] p-6">
                            <p className="font-mono text-xs text-gray-600 mb-4">{"/* Principios de desarrollo */"}</p>
                            <ul className="space-y-3">
                                <PrincipleItem text="Arquitectura Limpia" />
                                <PrincipleItem text="Principios SOLID" />
                                <PrincipleItem text="Clean Code" />
                                <PrincipleItem text="Diseño de RestAPIs" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const InfoLine = ({ label, value }) => (
    <div className="flex justify-between items-baseline gap-4">
        <span className="text-gray-600 shrink-0">{label}:</span>
        <span className="text-gray-300 text-right">{value}</span>
    </div>
);

const PrincipleItem = ({ text }) => (
    <li className="flex items-center gap-3 text-sm text-gray-400 font-mono group hover:text-white transition-colors duration-300 cursor-default">
        <span className="text-gray-700 group-hover:text-gray-400 transition-colors duration-300">→</span>
        {text}
    </li>
);

const TechIcon = ({ name, icon }) => (
    <div className="flex flex-col items-center gap-2 group cursor-default">
        <div className="w-12 h-12 border border-gray-800 bg-[#0d0d0d] flex items-center justify-center group-hover:border-gray-600 transition-all duration-300 group-hover:scale-110">
            {icon}
        </div>
        <span className="font-mono text-[10px] text-gray-600 group-hover:text-gray-400 transition-colors duration-300">{name}</span>
    </div>
);

const JavaIcon = () => (
    <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="currentColor"><path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149m-.575-2.627s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218m4.84-4.458c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 0-8.216 2.051-4.292 6.573m7.56 10.966s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892m7.824 4.374c4.503-2.34 2.421-4.589.968-4.285-.356.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.929 4.562 0 0 .07-.062.091-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.889 4.832 0 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.189-7.627" /></svg>
);

const SpringIcon = () => (
    <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="currentColor"><path d="M21.8 2.2c-1.7 2.7-4.2 4.6-7.3 5.6-.5-1-1.2-1.9-2-2.7C15.1 2.6 18.2 1 21.8 2.2zM5.7 3C3.3 5.5 2 8.8 2 12.3c0 5.5 4.5 9.7 9.9 9.7 2.7 0 5.2-1.1 7-3 .4-.4.7-.8 1-1.3-1.4.5-3 .4-4.3-.3-1.1-.6-1.9-1.6-2.3-2.7-.3.1-.7.2-1 .2-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5c.7 0 1.4.2 2 .5.1-1.1.5-2.2 1-3.1C13.5 2.5 11.6 2 9.6 2 8.1 2 6.8 2.4 5.7 3z" /></svg>
);

const PostgresIcon = () => (
    <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="currentColor"><path d="M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.14.403 2.804.775 1.814 1.82.827 2.865.305 4.482.415 6.682c.03.607.203 1.597.49 2.879s.69 2.783 1.193 4.152c.503 1.37 1.054 2.6 1.915 3.436.43.419 1.022.771 1.72.742.49-.02.933-.235 1.315-.552.186.245.385.352.566.451.228.125.45.21.68.266.413.103 1.12.241 1.948.1.282-.047.579-.139.875-.27.011.21.024.463.035.657.014.292.038.618.086.984.048.364.126.778.282 1.166.078.194.179.39.322.56.143.17.357.342.63.378.14.019.283-.003.397-.056a.882.882 0 0 0 .298-.213c.238-.259.39-.6.49-.937.1-.337.16-.658.217-1.014l.063-.394c.07-.44.131-.82.16-1.374l.022-.478c.346.15.696.242 1.025.273.522.048 1.06-.07 1.455-.382.519-.408.835-.606 1.156-.8a3.107 3.107 0 0 0 .694-.57c.262-.288.47-.643.58-1.04.057-.205.08-.37.088-.505.647-.244 1.19-.57 1.612-.975.566-.545.932-1.193 1.065-1.912.133-.718.029-1.503-.244-2.264l.104-.334c.299-1.023.545-2.27.455-3.478-.05-.652-.207-1.323-.572-1.9C20.698.694 19.883.2 18.907.073 18.344-.002 17.728-.025 17.128 0zm.07.888c.552-.022 1.12 0 1.617.065.744.097 1.304.44 1.684.963.38.524.52 1.122.564 1.71.081 1.08-.142 2.253-.438 3.266a3.444 3.444 0 0 0-.076.262c-.65-1.177-1.652-1.952-2.672-2.455-1.103-.544-2.239-.797-3.146-.95a13.366 13.366 0 0 0-2.142-.197c.39-.543.833-.974 1.331-1.27.699-.416 1.527-.562 2.443-.528a5.122 5.122 0 0 1 .835.134c-.032-.067-.026-.148.025-.218.064-.088.178-.14.283-.116a7.778 7.778 0 0 0-.553-.08c-1.044-.117-2.039.002-2.865.497a5.39 5.39 0 0 0-1.426 1.38 13.877 13.877 0 0 0-1.99-.055c-.626.03-1.276.1-1.888.247-.618.15-1.21.378-1.69.723-.226-.06-.478-.104-.783-.12-1.607-.082-3.234.39-3.965.684l-.037.017C3.03 4.1 2.882 3.19 2.86 2.718c-.053-.532-.001-.97.14-1.332.14-.362.362-.664.69-.947.656-.566 1.677-.879 2.708-.924 1.59-.069 3.136.391 3.985.725l.143.052a.166.166 0 0 0 .183-.05c.424-.524 1.31-1.05 2.548-1.168a9.2 9.2 0 0 1 3.94.514.166.166 0 0 0 .142-.014A9.89 9.89 0 0 1 17.197.888z" /></svg>
);

const DockerIcon = () => (
    <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="currentColor"><path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186h-2.119a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z" /></svg>
);

const GitIcon = () => (
    <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="currentColor"><path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.66 2.66a1.838 1.838 0 1 1-1.103 1.033l-2.48-2.48v6.53a1.838 1.838 0 1 1-1.512-.09V8.753a1.838 1.838 0 0 1-.998-2.41L7.629 3.614.452 10.793a1.55 1.55 0 0 0 0 2.188l10.48 10.477a1.55 1.55 0 0 0 2.186 0l10.428-10.34a1.55 1.55 0 0 0 0-2.188" /></svg>
);

const SpringBootIcon = () => (
    <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="currentColor"><path d="M23.693 10.706l-4.73-8.185c-.31-.536-.9-.865-1.54-.865H6.577c-.64 0-1.23.33-1.54.865l-4.73 8.185c-.31.535-.31 1.196 0 1.731l4.73 8.185c.31.536.9.866 1.54.866h10.846c.64 0 1.23-.33 1.54-.866l4.73-8.185c.31-.535.31-1.196 0-1.731zM12.57 18.14c0 .27-.22.49-.49.49h-.99a.49.49 0 0 1-.49-.49v-.97c0-.27.22-.49.49-.49h.99c.27 0 .49.22.49.49v.97zm0-3.39c0 .27-.22.49-.49.49h-.99a.49.49 0 0 1-.49-.49V7.37c0-.27.22-.49.49-.49h.99c.27 0 .49.22.49.49v7.38z" /></svg>
);

const SpringSecurityIcon = () => (
    <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.83-3.13 9.37-7 10.5-3.87-1.13-7-5.67-7-10.5V6.3l7-3.12zm-2 5.82v2h4v-2h-4zm0 4v2h4v-2h-4z" /></svg>
);

const JpaIcon = () => (
    <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" /><path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" /></svg>
);

const DownloadIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);
