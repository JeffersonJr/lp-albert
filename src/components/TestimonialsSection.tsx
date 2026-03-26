import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "Antes do Albert, perdíamos leads por falta de resposta rápida. Hoje, 100% são atendidos em segundos e já chegam qualificados pro corretor.",
        name: "Ricardo Silva",
        role: "Diretor Comercial — Imobiliária Rio",
        initials: "RS",
        metric: "+320% leads qualificados",
    },
    {
        quote: "O agendamento automático de visitas foi um divisor de águas. O corretor só abre a agenda e sai para vender. Triplicamos as visitas.",
        name: "Mariana Costa",
        role: "CEO — Elite Properties",
        initials: "MC",
        metric: "3x mais visitas agendadas",
    },
    {
        quote: "Implementamos em um dia. Sem mudar processo, sem treinar equipe. O Albert simplesmente começou a trabalhar e os resultados vieram.",
        name: "João Pedro",
        role: "Gerente de Operações — MyHouse",
        initials: "JP",
        metric: "ROI de 12x em 60 dias",
    },
];

const TestimonialsSection = () => {
    return (
        <section id="depoimentos" className="py-20 bg-albert-surface">
            <div className="container mx-auto px-4">
                <div className="text-center mb-14">
                    <p className="text-sm font-semibold text-albert-teal uppercase tracking-wider mb-3">
                        Resultados reais
                    </p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                        Quem usa, não volta atrás
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-background rounded-2xl p-6 border border-border shadow-card flex flex-col"
                        >
                            <div className="flex gap-1 mb-1">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 fill-albert-gold text-albert-gold" />
                                ))}
                            </div>
                            <span className="text-xs font-semibold text-albert-teal mb-4">{t.metric}</span>
                            <p className="text-foreground text-sm leading-relaxed mb-6 flex-1">"{t.quote}"</p>
                            <div className="flex items-center gap-3 pt-4 border-t border-border">
                                <div className="w-10 h-10 rounded-full bg-gradient-teal flex items-center justify-center text-primary-foreground text-sm font-bold">
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                                    <p className="text-xs text-muted-foreground">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
