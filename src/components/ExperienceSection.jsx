import { useLanguage } from "../context/LanguageContext";

const TOKEN_RE = /(\/\/.*$|#.*$|""".*$)|("(?:[^"\\]|\\.)*")|(\b(?:package|func|return|import|def|public|class|error|context|void|String|HttpResponse)\b)/g;

const renderCodeLine = (line, lineIdx) => {
    const tokens = [];
    let last = 0;
    let match;
    TOKEN_RE.lastIndex = 0;

    while ((match = TOKEN_RE.exec(line)) !== null) {
        if (match.index > last) {
            tokens.push(<span key={`${lineIdx}-${last}`} className="text-gray-500">{line.slice(last, match.index)}</span>);
        }
        const className = match[1] ? "text-gray-600" : match[2] ? "text-gray-400" : "text-white";
        tokens.push(<span key={`${lineIdx}-${match.index}`} className={className}>{match[0]}</span>);
        last = TOKEN_RE.lastIndex;
    }
    if (last < line.length) {
        tokens.push(<span key={`${lineIdx}-${last}`} className="text-gray-500">{line.slice(last)}</span>);
    }
    return tokens.length > 0 ? tokens : <span key={`${lineIdx}-empty`} className="text-gray-500"> </span>;
};

const CodeWindow = ({ command, code }) => {
    const fileName = command.replace("$ cat ", "");

    return (
        <div className="border border-gray-800 bg-[#0a0a0a] rounded-sm overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-800 bg-[#0d0d0d]">
                <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                <span className="ml-3 font-mono text-[10px] text-gray-600">{fileName}</span>
            </div>
            <pre className="font-mono text-[11px] md:text-xs leading-relaxed p-4 overflow-x-auto whitespace-pre">
                {code.split("\n").map((line, idx) => (
                    <div key={idx} className="min-h-[1.2em]">{renderCodeLine(line, idx)}</div>
                ))}
            </pre>
        </div>
    );
};

export const ExperienceSection = () => {
    const { t } = useLanguage();

    return (
        <section id="experience" className="relative py-24 md:py-32 overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] flex items-center justify-end pr-12">
                <pre className="font-mono text-[1.5rem] md:text-[2.5rem] text-white select-none leading-tight text-right">
                    {`$ git log --author="Giovanny" --oneline
a1b2c3d microservicios en Go
e4f5g6h backend ERP con Django
i7j8k9l automatización de reportes`}
                </pre>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="mb-16 space-y-3">
                    <p className="font-mono text-gray-500 text-xs tracking-widest uppercase">
                        {t.experience.sectionTag}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                        {t.experience.title}
                    </h2>
                    <div className="w-16 h-[2px] bg-gray-600 mt-4"></div>
                </div>

                <div className="relative space-y-12">
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800 hidden lg:block"></div>

                    {t.experience.items.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative border border-gray-800 bg-[#0d0d0d] p-6 md:p-8 hover:border-gray-500 transition-all duration-500 lg:ml-8"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6 border-b border-gray-800 pb-4">
                                <span className="font-mono text-xs md:text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                                    {item.command}
                                </span>
                                <span className="font-mono text-[11px] text-gray-600">
                                    {item.date}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                                <div className="lg:col-span-7 space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-gray-200 transition-colors">
                                            {item.role}
                                        </h3>
                                        <p className="font-mono text-xs text-gray-500 mt-1">
                                            {item.company}
                                        </p>
                                    </div>

                                    <ul className="space-y-2.5 pt-2">
                                        {item.bullets.map((bullet, bulletIdx) => (
                                            <li key={bulletIdx} className="flex items-start gap-3 text-xs md:text-sm text-gray-400 font-mono">
                                                <span className="text-gray-600 shrink-0 select-none">{">"}</span>
                                                <span className="leading-relaxed">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="lg:col-span-5">
                                    <CodeWindow command={item.command} code={item.code} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
