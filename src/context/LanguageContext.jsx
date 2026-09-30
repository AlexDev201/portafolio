import { createContext, useContext, useState, useEffect } from "react";

export const translations = {
    es: {
        nav: {
            about: "|Sobre_Mí|",
            experience: "|Experiencia|",
            projects: "|Proyectos|",
            contact: "|Contacto|",
        },
        hero: {
            greetingIntro: "<greeting>",
            greetingOutro: "</greeting>",
            hi: "¡Hola! Soy",
            role: "Desarrollador Backend",
            focus: "Java · Spring Boot · Go · Microservicios",
            experience: "+1 año construyendo APIs REST y servicios backend",
            exploreBtn: "EXPLORAR_PROYECTOS();"
        },
        about: {
            sectionTag: "// VALOR PROPUESTO & PERFIL PROFESIONAL",
            title: "Sobre Mí",
            repositoryHeader: "public class DeveloperProfile implements ValueProposition {",
            bioLine1: "Desarrollador Backend Junior con más de un año de experiencia construyendo APIs REST y servicios con Java & Spring Boot y, actualmente, microservicios en Go. Arquitectura en capas, modelado de bases de datos relacionales, integración de servicios externos y Clean Code, seguro y escalable.",
            bioLine2: "Mi propuesta de valor se enfoca en entender rápidamente el negocio, adaptarme a las metas del equipo e integrarme activamente para aportar valor real desde el primer día.",
            enfoqueEmpresarial: "Soluciones escalables, APIs robustas y valor tangible al negocio",
            varEnfoqueEmpresarial: "enfoqueEmpresarial",
            fortalezaClave: "Inmersión en el proyecto + rápida adaptabilidad tecnológica",
            varFortalezaClave: "fortalezaClave",
            metodología: "Trabajo en equipo, Clean Code y resolución proactiva",
            varMetodologia: "metodología",
            pillarsTitle: "// LO QUE PUEDO OFRECER A TU EMPRESA",
            pillars: [
                {
                    title: "Adaptabilidad Rápida",
                    desc: "Facilidad para integrarme a nuevos stacks tecnológicos, arquitecturas existentes y dinámicas de trabajo sin perder ritmo de entrega."
                },
                {
                    title: "Inmersión en el Proyecto",
                    desc: "Comprensión profunda del negocio y los requerimientos para proponer soluciones funcionales, eficientes y alineadas con los objetivos de la empresa."
                },
                {
                    title: "Sólidas Habilidades Backend",
                    desc: "Construcción de APIs robustas, seguridad, modelado de bases de datos y aplicación constante de Clean Code, SOLID y buenas prácticas."
                },
                {
                    title: "Trabajo en Equipo & Sinergia",
                    desc: "Comunicación asertiva, colaboración activa en revisiones de código, apoyo mutuo y enfoque constante en los objetivos compartidos."
                }
            ],
            stackHeader: "// Stack & Herramientas",
            downloadCv: "DESCARGAR_CV();",
            info: {
                labelNombre: "nombre",
                labelRol: "rol",
                labelEspecializacion: "especialización",
                labelUbicacion: "ubicación",
                labelDisponibilidad: "disponibilidad",
                labelIdiomas: "idiomas",
                valueNombre: "Giovanny Molina",
                valueRol: "Backend Developer",
                valueEspecializacion: "Java · Spring Boot · Go",
                valueUbicacion: "Pereira, Colombia",
                valueDisponibilidad: "Inmediata",
                valueIdiomas: "Español (nativo), Inglés (B1)"
            },
            principlesHeader: "/* Compromisos con el Equipo */",
            principles: [
                "Rápida adaptabilidad tecnológica",
                "Inmersión proactiva en el dominio",
                "Trabajo en equipo y comunicación fluida",
                "Clean Code y Principios SOLID",
                "Diseño de REST APIs escalables",
                "Orientación a resultados de negocio"
            ]
        },
        experience: {
            sectionTag: "// TRAYECTORIA PROFESIONAL",
            title: "Experiencia",
            items: [
                {
                    command: "$ cat trayectoria/backend_junior.go",
                    role: "Desarrollador Backend Junior",
                    company: "Servicio Nacional de Aprendizaje (SENA)",
                    date: "Jul 2026 – Actualidad",
                    code: "package microservicios\n\nimport \"context\"\n\nfunc (s *BackendJunior) Desarrollar(ctx context.Context) error {\n\t// Go · arquitectura en capas · diseño de APIs y BDs\n\treturn s.entregarValor()\n}",
                    bullets: [
                        "Desarrollo de servicios backend en Go dentro de una arquitectura de microservicios, adoptando las prácticas y estándares del equipo.",
                        "Participación en el diseño de APIs y aplicación de arquitectura en capas para mantener servicios modulares y mantenibles.",
                        "Apoyo en el diseño de bases de datos y en la comprensión de la arquitectura general de la solución."
                    ]
                },
                {
                    command: "$ cat trayectoria/erp_integrations.py",
                    role: "Auxiliar de Desarrollo de Software",
                    company: "ERP Empresarial (proyecto privado, independiente)",
                    date: "Ene 2026 – Mar 2026",
                    code: "# erp/integrations.py\n\ndef sincronizar_agendas(request):\n\t\"\"\"Django · Google Calendar API · SOLID\"\"\"\n\treturn HttpResponse(\"agenda sincronizada\")",
                    bullets: [
                        "Desarrollo y mantenimiento de funcionalidades backend de un ERP con Python y Django para centralizar la gestión interna.",
                        "Integración de la API de Google Calendar para sincronizar agendas y automatizar procesos internos.",
                        "Revisión de código, aplicación de principios SOLID y trabajo con Git y Kanban dentro del equipo."
                    ]
                },
                {
                    command: "$ cat trayectoria/ReporteController.java",
                    role: "Desarrollador Backend",
                    company: "Ingenio Risaralda S.A.",
                    date: "Feb 2025 – Oct 2025",
                    code: "@RestController\n@RequestMapping(\"/api/v1/reportes\")\npublic class ReporteController {\n\n\t// Spring Boot · PostgreSQL · Docker\n\t// ~2 horas de reportes manuales → minutos\n}",
                    bullets: [
                        "Backend con Java, Spring Boot y PostgreSQL que automatizó la generación de reportes de procesos industriales, reduciendo el tiempo de ~2 horas manuales a minutos.",
                        "Implementación de la lógica de negocio y APIs REST que alimentan un dashboard de métricas para el equipo técnico; entorno contenerizado con Docker.",
                        "Análisis de datos de producción con Python (Pandas, Matplotlib) para identificar patrones en variables operacionales."
                    ]
                }
            ]
        },
        projects: {
            sectionTag: "// PORTAFOLIO DE PROYECTOS",
            title: "Proyectos",
            items: [
                {
                    endpoint: "@GetMapping(\"/api/v1/instrumentation/reports\")",
                    title: "Sistema de Reportes de Instrumentación",
                    subtitle: "Ingenio Risaralda S.A. | Automatización Industrial",
                    date: "Feb 2025 – Oct 2025",
                    description: "Aplicación web que automatizó la generación y visualización de reportes de procesos industriales para el equipo de instrumentación, optimizando tiempos operativos significativamente.",
                    bullets: [
                        "Reducción del tiempo de generación de reportes de ~2 horas manuales a minutos.",
                        "Arquitectura robusta con Spring Boot para la lógica de instrumentación e integración con PostgreSQL.",
                        "Análisis de datos de producción con Python (Pandas, Matplotlib) y dashboard dinámico construido en React con Recharts."
                    ]
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
                    ]
                }
            ],
            viewCode: "VIEW_CODE();"
        },
        contact: {
            sectionTag: "// CANALES DE COMUNICACIÓN",
            title: "Contáctame",
            intro: "Si tienes alguna propuesta de proyecto o simplemente quieres hablar sobre arquitectura de software, bases de datos o APIs, siéntete libre de escribirme o conectar conmigo en mis redes."
        },
        form: {
            successHeader: "[INFO] - 200 OK: Mail sent successfully!",
            successMessage: "¡Gracias por escribir! Te responderé lo antes posible.",
            sendAnother: "ENVIAR_OTRO_MENSAJE();",
            nameLabel: "@RequestParam String name",
            namePlaceholder: "Tu nombre",
            emailLabel: "@RequestParam String email",
            emailPlaceholder: "tu@email.com",
            messageLabel: "@RequestBody MessageBody message",
            messagePlaceholder: "Escribe tu mensaje aquí...",
            submitBtn: "sendMail();",
            sending: "SENDING...",
            errorRequired: "[ERROR] - Faltan campos requeridos."
        },
        footer: {
            rights: "Todos los derechos reservados.",
            powered: "// Desarrollado con React & Vite"
        }
    },
    en: {
        nav: {
            about: "|About_Me|",
            experience: "|Experience|",
            projects: "|Projects|",
            contact: "|Contact|",
        },
        hero: {
            greetingIntro: "<greeting>",
            greetingOutro: "</greeting>",
            hi: "Hi! I'm",
            role: "Backend Developer",
            focus: "Java · Spring Boot · Go · Microservices",
            experience: "1+ year building REST APIs and backend services",
            exploreBtn: "EXPLORE_PROJECTS();"
        },
        about: {
            sectionTag: "// VALUE PROPOSITION & PROFESSIONAL PROFILE",
            title: "About Me",
            repositoryHeader: "public class DeveloperProfile implements ValueProposition {",
            bioLine1: "Junior Backend Developer with over a year of experience building REST APIs and services with Java & Spring Boot, and currently, Go microservices. Layered architecture, relational database modeling, external service integrations, and clean, secure, scalable code.",
            bioLine2: "My value proposition focuses on quickly understanding the business domain, seamlessly adapting to team goals, and actively contributing to deliver real value from day one.",
            enfoqueEmpresarial: "Scalable solutions, robust APIs, and tangible business value",
            varEnfoqueEmpresarial: "businessFocus",
            fortalezaClave: "Project domain immersion + rapid technological adaptability",
            varFortalezaClave: "keyStrength",
            metodología: "Teamwork, Clean Code, and proactive problem solving",
            varMetodologia: "methodology",
            pillarsTitle: "// WHAT I OFFER TO YOUR COMPANY",
            pillars: [
                {
                    title: "Rapid Adaptability",
                    desc: "Ability to quickly integrate into new tech stacks, existing architectures, and team workflows without sacrificing delivery velocity."
                },
                {
                    title: "Deep Project Immersion",
                    desc: "Thorough understanding of business context and requirements to propose functional, efficient solutions aligned with company objectives."
                },
                {
                    title: "Strong Backend Skills",
                    desc: "Building robust REST APIs, security, database modeling, and consistent application of Clean Code, SOLID, and software patterns."
                },
                {
                    title: "Teamwork & Synergy",
                    desc: "Assertive communication, active code review participation, mutual support, and constant focus on shared team targets."
                }
            ],
            stackHeader: "// Stack & Tools",
            downloadCv: "DOWNLOAD_CV();",
            info: {
                labelNombre: "name",
                labelRol: "role",
                labelEspecializacion: "specialization",
                labelUbicacion: "location",
                labelDisponibilidad: "availability",
                labelIdiomas: "languages",
                valueNombre: "Giovanny Molina",
                valueRol: "Backend Developer",
                valueEspecializacion: "Java · Spring Boot · Go",
                valueUbicacion: "Pereira, Colombia",
                valueDisponibilidad: "Immediate",
                valueIdiomas: "Spanish (native), English (B1)"
            },
            principlesHeader: "/* Team Commitments */",
            principles: [
                "Rapid tech stack adaptability",
                "Proactive business domain immersion",
                "Effective teamwork & clear communication",
                "Clean Code & SOLID principles",
                "Scalable REST API design",
                "Business results orientation"
            ]
        },
        experience: {
            sectionTag: "// PROFESSIONAL TRACK RECORD",
            title: "Experience",
            items: [
                {
                    command: "$ cat trajectory/backend_junior.go",
                    role: "Junior Backend Developer",
                    company: "Servicio Nacional de Aprendizaje (SENA)",
                    date: "Jul 2026 – Present",
                    code: "package microservices\n\nimport \"context\"\n\nfunc (s *BackendJunior) Develop(ctx context.Context) error {\n\t// Go · layered architecture · API & DB design\n\treturn s.deliverValue()\n}",
                    bullets: [
                        "Developing backend services in Go within a microservices architecture, adopting the team's practices and standards.",
                        "Participating in API design and applying layered architecture to keep services modular and maintainable.",
                        "Supporting database design and building an understanding of the overall solution architecture."
                    ]
                },
                {
                    command: "$ cat trajectory/erp_integrations.py",
                    role: "Software Development Assistant",
                    company: "Enterprise ERP (private, independent project)",
                    date: "Jan 2026 – Mar 2026",
                    code: "# erp/integrations.py\n\ndef sync_calendars(request):\n\t\"\"\"Django · Google Calendar API · SOLID\"\"\"\n\treturn HttpResponse(\"calendar synced\")",
                    bullets: [
                        "Developed and maintained backend features of an enterprise ERP with Python and Django to centralize internal management.",
                        "Integrated the Google Calendar API to sync agendas and automate internal processes.",
                        "Code review, application of SOLID principles, and teamwork with Git and Kanban."
                    ]
                },
                {
                    command: "$ cat trajectory/ReporteController.java",
                    role: "Backend Developer",
                    company: "Ingenio Risaralda S.A.",
                    date: "Feb 2025 – Oct 2025",
                    code: "@RestController\n@RequestMapping(\"/api/v1/reports\")\npublic class ReporteController {\n\n\t// Spring Boot · PostgreSQL · Docker\n\t// ~2 hours of manual reports → minutes\n}",
                    bullets: [
                        "Designed and developed the backend with Java, Spring Boot, and PostgreSQL that automated industrial process report generation, cutting turnaround from ~2 manual hours to minutes.",
                        "Implemented business logic and REST APIs powering a metrics dashboard for the technical team; containerized environment with Docker.",
                        "Analyzed production data with Python (Pandas, Matplotlib) to identify patterns in operational variables."
                    ]
                }
            ]
        },
        projects: {
            sectionTag: "// PROJECT PORTFOLIO",
            title: "Projects",
            items: [
                {
                    endpoint: "@GetMapping(\"/api/v1/instrumentation/reports\")",
                    title: "Instrumentation Reporting System",
                    subtitle: "Ingenio Risaralda S.A. | Industrial Automation",
                    date: "Feb 2025 – Oct 2025",
                    description: "Web application that automated the generation and visualization of industrial process reports for the instrumentation team, significantly optimizing operational turnaround times.",
                    bullets: [
                        "Reduced report generation time from ~2 manual hours down to minutes.",
                        "Robust architecture using Spring Boot for instrumentation business logic and PostgreSQL integration.",
                        "Production data analysis with Python (Pandas, Matplotlib) and dynamic React dashboard built with Recharts."
                    ]
                },
                {
                    endpoint: "@MessageMapping(\"/energy/monitor/realtime\")",
                    title: "EcoSystem Energy",
                    subtitle: "Technical Learning Project | Electrical Monitoring",
                    date: "Jul 2025 – Aug 2025",
                    description: "Real-time electrical monitoring web platform built for simulation and analysis of electrical parameters using continuous bi-directional communication.",
                    bullets: [
                        "Continuous real-time electrical data streaming utilizing WebSockets.",
                        "Integration with external Ubidots API for automated report generation and charting.",
                        "Decoupled backend-frontend architecture (Spring Boot & React) with hybrid REST/WebSockets communication."
                    ]
                }
            ],
            viewCode: "VIEW_CODE();"
        },
        contact: {
            sectionTag: "// COMMUNICATION CHANNELS",
            title: "Contact Me",
            intro: "If you have a project proposal or simply want to chat about software architecture, databases, or APIs, feel free to drop a message or connect with me on social media."
        },
        form: {
            successHeader: "[INFO] - 200 OK: Mail sent successfully!",
            successMessage: "Thank you for reaching out! I'll get back to you as soon as possible.",
            sendAnother: "SEND_ANOTHER_MESSAGE();",
            nameLabel: "@RequestParam String name",
            namePlaceholder: "Your name",
            emailLabel: "@RequestParam String email",
            emailPlaceholder: "your@email.com",
            messageLabel: "@RequestBody MessageBody message",
            messagePlaceholder: "Type your message here...",
            submitBtn: "sendMail();",
            sending: "SENDING...",
            errorRequired: "[ERROR] - Required fields are missing."
        },
        footer: {
            rights: "All rights reserved.",
            powered: "// Powered by React & Vite"
        }
    }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const savedLang = localStorage.getItem("portfolio_lang");
        return savedLang === "en" ? "en" : "es";
    });

    useEffect(() => {
        localStorage.setItem("portfolio_lang", language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => (prev === "es" ? "en" : "es"));
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
