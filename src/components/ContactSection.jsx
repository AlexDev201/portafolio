import { FormularyEmail } from "./FormularyEmail";

export const ContactSection = () => {
    const contactLinks = [
        {
            name: "email",
            label: "giovanny.alexander.molina@gmail.com",
            url: "mailto:giovanny.alexander.molina@gmail.com",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
            )
        },
        {
            name: "linkedin",
            label: "linkedin.com/in/giovanny-molina",
            url: "https://www.linkedin.com/in/giovanny-alexander-molina-serna-6a882b290/",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            )
        },
        {
            name: "github",
            label: "github.com/AlexDev201",
            url: "https://github.com/AlexDev201",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
            )
        }
    ];

    return (
        <section id="contact" className="relative py-24 md:py-32 overflow-hidden border-t border-white/5">

            <div className="absolute inset-0 pointer-events-none opacity-[0.02] flex items-center justify-end pr-12">
                <pre className="font-mono text-[1.5rem] md:text-[2.5rem] text-white select-none leading-tight text-right">
                    {`@Autowired
private ContactService contactService;`}
                </pre>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">

                <div className="mb-16 space-y-3">
                    <p className="font-mono text-gray-600 text-xs tracking-widest uppercase">

                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                        Contáctame
                    </h2>
                    <div className="w-16 h-[2px] bg-gray-600 mt-4"></div>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    <div className="lg:col-span-5 space-y-8">
                        <div className="font-mono text-sm text-gray-400 space-y-2">
                            <p className="text-gray-600">{"@Autowired"}</p>
                            <p>
                                <span className="text-gray-500">private</span>{" "}
                                <span className="text-white">ContactService</span>{" "}
                                <span className="text-gray-300">contactService</span>;
                            </p>
                        </div>

                        <p className="text-gray-400 text-base font-light leading-relaxed">
                            Si tienes alguna propuesta de proyecto, vacante de desarrollo backend,
                            o simplemente quieres hablar sobre arquitectura de software, bases de datos o APIs,
                            siéntete libre de escribirme o conectar conmigo en mis redes.
                        </p>


                        <div className="space-y-4 pt-4">
                            {contactLinks.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.url}
                                    target={link.name !== "email" ? "_blank" : undefined}
                                    rel={link.name !== "email" ? "noopener noreferrer" : undefined}
                                    className="flex items-center gap-4 p-4 border border-gray-800 bg-[#0d0d0d] hover:border-gray-500 transition-all duration-300 group"
                                >
                                    <div className="text-gray-500 group-hover:text-white transition-colors">
                                        {link.icon}
                                    </div>
                                    <div className="font-mono text-xs md:text-sm">
                                        <span className="text-gray-600 group-hover:text-gray-400 transition-colors">
                                            {link.name}.connect() {"->"}
                                        </span>{" "}
                                        <span className="text-gray-300 group-hover:text-white transition-colors">
                                            {link.label}
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <FormularyEmail />
                    </div>
                </div>
            </div>
        </section>
    );
};
