import { useState } from "react";

export const FormularyEmail = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        const formId = import.meta.env.VITE_FORMSPREE_ID || "YOUR_FORMSPREE_FORM_ID";

        if (formId === "YOUR_FORMSPREE_FORM_ID") {
            setTimeout(() => {
                if (formData.name && formData.email && formData.message) {
                    setStatus("success");
                    setFormData({ name: "", email: "", subject: "", message: "" });
                } else {
                    setStatus("error");
                }
            }, 1200);
            return;
        }

        try {
            const response = await fetch(`https://formspree.io/f/${formId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                })
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error al enviar email:", error);
            setStatus("error");
        }
    };

    return (
        <div className="border border-gray-800 bg-[#0d0d0d] p-6 md:p-8 relative">

            <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40"></div>
                    <span className="font-mono text-xs text-gray-500 ml-2">ContactController.java</span>
                </div>
                <span className="font-mono text-[10px] text-gray-600">UTF-8</span>
            </div>

            {status === "success" ? (
                <div className="font-mono text-sm py-12 text-center space-y-4">
                    <p className="text-green-500">{"[INFO] - 200 OK: Mail sent successfully!"}</p>
                    <p className="text-gray-400">¡Gracias por escribir! Te responderé lo antes posible.</p>
                    <button
                        onClick={() => setStatus("idle")}
                        className="mt-4 border border-gray-700 px-4 py-2 text-xs text-white hover:bg-white hover:text-black transition-colors"
                    >
                        ENVIAR_OTRO_MENSAJE();
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                    <div className="font-mono text-xs text-gray-600">
                        <p>{"@PostMapping(\"/api/v1/contact\")"}</p>
                        <p>{"public ResponseEntity<String> sendEmail("}</p>
                    </div>

                    <div className="space-y-4 pl-4 border-l border-gray-800">
                        <div className="space-y-1">
                            <label className="block font-mono text-xs text-gray-500">
                                {"@RequestParam String name"}
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Tu nombre"
                                className="w-full bg-[#050505] border border-gray-800 focus:border-gray-500 text-white font-mono text-sm p-3 outline-none transition-colors"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="block font-mono text-xs text-gray-500">
                                {"@RequestParam String email"}
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="tu@email.com"
                                className="w-full bg-[#050505] border border-gray-800 focus:border-gray-500 text-white font-mono text-sm p-3 outline-none transition-colors"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="block font-mono text-xs text-gray-500">
                                {"@RequestBody MessageBody message"}
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                placeholder="Escribe tu mensaje aquí..."
                                className="w-full bg-[#050505] border border-gray-800 focus:border-gray-500 text-white font-mono text-sm p-3 outline-none transition-colors resize-none"
                            />
                        </div>
                    </div>

                    <div className="font-mono text-xs text-gray-600">
                        <p>{") {"}</p>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="border border-gray-600 px-6 py-3 font-mono text-sm text-white hover:bg-white hover:text-black transition-colors duration-300 disabled:opacity-50"
                        >
                            {status === "sending" ? "SENDING..." : "sendMail();"}
                        </button>

                        {status === "error" && (
                            <span className="font-mono text-xs text-red-500">
                                {"[ERROR] - Faltan campos requeridos."}
                            </span>
                        )}
                    </div>
                </form>
            )}
        </div>
    );
};
