import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_BASE = "https://wa.me/5513997591781?text=";

const plans = [
    { name: "500", atendimentos: "500 atendimentos/mês", reunioes: "2 reuniões" },
    { name: "1000", atendimentos: "1.000 atendimentos/mês", reunioes: "2 reuniões" },
    { name: "1500", atendimentos: "1.500 atendimentos/mês", reunioes: "1 reunião mensal" },
    { name: "2000", atendimentos: "2.000 atendimentos/mês", reunioes: "Sob demanda" },
];

const features = [
    "Busca de imóveis",
    "Agendamento de visitas",
    "Envio de leads para o CRM",
    "Suporte",
    "Marca personalizada",
    "CRM Próprio",
];

const PricingSection = () => {
    const scrollToForm = () => {
        document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="planos" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-14">
                    <p className="text-sm font-semibold text-albert-teal uppercase tracking-wider mb-3">Investimento</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                        Escolha o plano ideal para sua operação
                    </h2>
                    <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
                        Foco em resultados. Implementação IMEDIATA. Comece a converter mais hoje.
                    </p>
                </div>

                {/* Desktop table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="hidden md:block max-w-5xl mx-auto overflow-hidden rounded-2xl border border-border"
                >
                    <div className="bg-background shadow-card overflow-x-auto">
                        <div className="min-w-[850px]">
                        {/* Header */}
                        <div className="grid grid-cols-5 border-b border-border">
                            <div className="p-6 flex items-end">
                                <h3 className="text-xl font-bold text-foreground">Atendimento Mensal</h3>
                            </div>
                            {plans.map((plan) => (
                                <div key={plan.name} className="p-6 text-center">
                                    <span className="text-3xl font-extrabold text-foreground">{plan.name}</span>
                                </div>
                            ))}
                        </div>

                        {/* Preço */}
                        <div className="grid grid-cols-5 border-b border-border/50">
                            <div className="p-5 pl-6 text-sm text-muted-foreground">Preço</div>
                            {plans.map((plan) => (
                                <div key={plan.name} className="p-5 text-center text-sm font-medium text-foreground">
                                    Sob consulta
                                </div>
                            ))}
                        </div>

                        {/* Fidelidade */}
                        <div className="grid grid-cols-5 border-b border-border/50 bg-muted/30">
                            <div className="p-5 pl-6 text-sm text-muted-foreground">Fidelidade</div>
                            {plans.map((plan) => (
                                <div key={plan.name} className="p-5 text-center text-sm font-medium text-foreground">
                                    Flexível
                                </div>
                            ))}
                        </div>

                        {/* Feature rows */}
                        {features.map((feature, i) => (
                            <div
                                key={feature}
                                className={`grid grid-cols-5 border-b border-border/50 ${i % 2 === 0 ? "" : "bg-muted/30"}`}
                            >
                                <div className="p-5 pl-6 text-sm text-muted-foreground">{feature}</div>
                                {plans.map((plan) => (
                                    <div key={plan.name} className="p-5 flex justify-center">
                                        <Check className="w-5 h-5 text-albert-teal" />
                                    </div>
                                ))}
                            </div>
                        ))}

                        {/* Reunião Estratégica */}
                        <div className="grid grid-cols-5">
                            <div className="p-5 pl-6 text-sm font-bold text-foreground">Reunião Estratégica (consultor)</div>
                            {plans.map((plan) => (
                                <div key={plan.name} className="p-5 text-center text-sm font-medium text-foreground">
                                    {plan.reunioes}
                                </div>
                            ))}
                        </div>
                        </div>
                    </div>
                </motion.div>

                {/* Mobile cards */}
                <div className="md:hidden space-y-4">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-background rounded-2xl p-6 border border-border shadow-card"
                        >
                            <div className="text-center mb-4">
                                <span className="text-3xl font-extrabold text-foreground">{plan.name}</span>
                                <p className="text-sm text-muted-foreground mt-1">{plan.atendimentos}</p>
                            </div>
                            <div className="flex items-center justify-between py-2 border-b border-border/50">
                                <span className="text-sm text-muted-foreground">Preço</span>
                                <span className="text-sm font-medium text-foreground">Sob consulta</span>
                            </div>
                            <div className="flex items-center justify-between py-2 border-b border-border/50">
                                <span className="text-sm text-muted-foreground">Fidelidade</span>
                                <span className="text-sm font-medium text-foreground">Flexível</span>
                            </div>
                            {features.map((feature) => (
                                <div key={feature} className="flex items-center justify-between py-2 border-b border-border/50">
                                    <span className="text-sm text-muted-foreground">{feature}</span>
                                    <Check className="w-4 h-4 text-albert-teal" />
                                </div>
                            ))}
                            <div className="flex items-center justify-between py-2">
                                <span className="text-sm font-bold text-foreground">Reunião Estratégica</span>
                                <span className="text-sm font-medium text-foreground">{plan.reunioes}</span>
                            </div>
                            <Button
                                variant="cta"
                                size="lg"
                                className="w-full mt-4"
                                onClick={scrollToForm}
                            >
                                Falar com consultor
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* CTA below table */}
                <div className="hidden md:flex justify-center mt-8">
                    <Button variant="cta" size="xl" onClick={scrollToForm}>
                        Falar com um consultor
                    </Button>
                </div>

                <p className="text-center text-xs text-muted-foreground mt-6">
                    ✓ Planos Flexíveis &nbsp;·&nbsp; ✓ Implementação IMEDIATA &nbsp;·&nbsp; ✓ Cancele quando quiser
                </p>
            </div>
        </section>
    );
};

export default PricingSection;