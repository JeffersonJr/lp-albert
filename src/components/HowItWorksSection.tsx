import { motion } from "framer-motion";
import { MessageSquare, UserCheck, CalendarCheck, TrendingUp } from "lucide-react";

const steps = [
    {
        icon: MessageSquare,
        number: "01",
        title: "Lead entra em contato",
        desc: "Pelo WhatsApp, site ou portal de imóveis — o Albert captura instantaneamente.",
    },
    {
        icon: UserCheck,
        number: "02",
        title: "Qualificação automática",
        desc: "Entende o que o lead busca, orçamento, localização e urgência em uma conversa natural.",
    },
    {
        icon: CalendarCheck,
        number: "03",
        title: "Visita agendada",
        desc: "Agenda direto na agenda do corretor disponível, sem intervenção humana.",
    },
    {
        icon: TrendingUp,
        number: "04",
        title: "Venda fechada",
        desc: "Corretor recebe lead quente, com contexto completo. Só precisa fechar.",
    },
];

const HowItWorksSection = () => {
    return (
        <section id="como-funciona" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-14">
                    <p className="text-sm font-semibold text-albert-teal uppercase tracking-wider mb-3">
                        Simples de implementar
                    </p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                        Do lead à venda em 4 passos
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative bg-albert-surface rounded-2xl p-6 border border-border group hover:border-albert-teal/30 transition-colors"
                        >
                            <span className="text-5xl font-extrabold text-albert-teal/10 absolute top-4 right-5">
                                {step.number}
                            </span>
                            <div className="w-12 h-12 rounded-xl bg-albert-teal-light flex items-center justify-center mb-4 group-hover:bg-gradient-teal transition-colors">
                                <step.icon className="w-6 h-6 text-albert-teal group-hover:text-primary-foreground transition-colors" />
                            </div>
                            <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
