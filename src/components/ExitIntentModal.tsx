import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExitIntentModal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasShown) {
                setIsVisible(true);
                setHasShown(true);
                // Save to session storage to avoid annoying users multiple times in one session
                sessionStorage.setItem("exitIntentShown", "true");
            }
        };

        const checkSession = sessionStorage.getItem("exitIntentShown");
        if (checkSession) {
            setHasShown(true);
        } else {
            document.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [hasShown]);

    const closeModal = () => setIsVisible(false);

    const scrollToForm = () => {
        setIsVisible(false);
        document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-background rounded-3xl shadow-2xl overflow-hidden border border-border"
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors z-10"
                        >
                            <X className="w-5 h-5 text-muted-foreground" />
                        </button>

                        <div className="p-8 md:p-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-albert-teal/10 text-albert-teal text-xs font-bold mb-6">
                                <Zap className="w-3.5 h-3.5" />
                                NÃO DEIXE DINHEIRO NA MESA
                            </div>

                            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight mb-4">
                                Sua imobiliária está perdendo <span className="text-albert-teal text-gradient">60% dos leads</span> agora mesmo.
                            </h2>

                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                A maioria dos clientes desiste se não for atendida nos primeiros 5 minutos. O Albert responde em <strong className="text-foreground">3 segundos</strong>, 24h por dia.
                            </p>

                            <div className="flex flex-col gap-3">
                                <Button
                                    variant="cta"
                                    size="xl"
                                    className="w-full text-base group"
                                    onClick={scrollToForm}
                                >
                                    Quero recuperar meus leads
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full border-border hover:bg-muted"
                                    onClick={closeModal}
                                >
                                    Vou pensar mais um pouco
                                </Button>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                                <MessageSquare className="w-3.5 h-3.5" />
                                Resultados em 24h. Planos Flexíveis.
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ExitIntentModal;
