import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        q: "Preciso de conhecimento técnico para usar o Albert?",
        a: "Não. Nossa equipe cuida de toda a implementação em menos de 24 horas. Você só precisa nos dar acesso ao WhatsApp e ao sistema de imóveis.",
    },
    {
        q: "O Albert substitui meus corretores?",
        a: "Não. O Albert faz o trabalho de um SDR: responde, qualifica e agenda. Seus corretores recebem leads quentes e prontos para fechar, focando no que fazem de melhor.",
    },
    {
        q: "Funciona com meu CRM atual?",
        a: "Sim. Integramos com os principais CRMs do mercado imobiliário, além de WhatsApp Business, portais de imóveis e sistemas de agendamento.",
    },
    {
        q: "E se eu não gostar?",
        a: "Sem risco. Não há fidelidade contratual. Se não gostar, cancela quando quiser. Sem burocracia.",
    },
    {
        q: "O Albert funciona para imobiliárias pequenas?",
        a: "Sim. O plano Essencial foi criado para imobiliárias que estão começando a escalar. E quanto menor a equipe, maior o impacto da automação.",
    },
];

const FAQSection = () => {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="py-20 bg-albert-surface">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                        Perguntas frequentes
                    </h2>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-background rounded-xl border border-border overflow-hidden">
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between p-5 text-left"
                            >
                                <span className="font-semibold text-foreground pr-4 text-sm">{faq.q}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                                />
                            </button>
                            <AnimatePresence>
                                {open === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
