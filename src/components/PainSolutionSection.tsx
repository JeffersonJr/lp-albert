import { motion } from "framer-motion";
import { X, Check, AlertTriangle, ArrowRight } from "lucide-react";

const painPoints = [
    { icon: X, text: "Lead chega às 22h e só é respondido no dia seguinte", color: "destructive" as const },
    { icon: X, text: "Corretores sobrecarregados perdendo tempo com leads frios", color: "destructive" as const },
    { icon: X, text: "Concorrente responde primeiro e fecha a venda", color: "destructive" as const },
    { icon: X, text: "Custo alto com SDRs que não escalam", color: "destructive" as const },
];

const solutions = [
    { icon: Check, text: "Resposta em 3 segundos, qualquer hora do dia" },
    { icon: Check, text: "Leads chegam qualificados e com visita agendada" },
    { icon: Check, text: "Atendimento superior ao de qualquer concorrente" },
    { icon: Check, text: "Custo fixo previsível que escala sem contratar" },
];

const PainSolutionSection = () => {
    return (
        <section id="resultados" className="py-20 bg-albert-surface">
            <div className="container mx-auto px-4">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                        O problema que custa caro e ninguém fala
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        A cada minuto que um lead espera, sua chance de conversão cai 80%.
                        Veja como sua imobiliária opera hoje vs com o Albert.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
                    {/* Pain */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-background rounded-2xl p-7 border border-border shadow-card h-full flex flex-col"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-3 h-3 rounded-full bg-destructive" />
                            <h3 className="font-bold text-foreground text-lg">Sem o Albert</h3>
                        </div>
                        <div className="space-y-4">
                            {painPoints.map((p) => (
                                <div key={p.text} className="flex items-start gap-3">
                                    <p.icon className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                                    <p className="text-sm text-foreground">{p.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto pt-6">
                            <div className="bg-destructive/10 rounded-lg p-3 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4 text-destructive shrink-0" />
                                <p className="text-xs text-destructive font-medium">
                                    Resultado: 60% dos leads perdidos antes do primeiro contato
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-background rounded-2xl p-7 border-2 border-albert-teal shadow-card relative h-full flex flex-col"
                    >
                        <div className="absolute -top-3 right-6 bg-gradient-teal text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                            COM ALBERT IA
                        </div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-3 h-3 rounded-full bg-albert-teal" />
                            <h3 className="font-bold text-foreground text-lg">Com o Albert</h3>
                        </div>
                        <div className="space-y-4">
                            {solutions.map((s) => (
                                <div key={s.text} className="flex items-start gap-3">
                                    <s.icon className="w-5 h-5 text-albert-teal mt-0.5 shrink-0" />
                                    <p className="text-sm text-foreground">{s.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto pt-6">
                            <div className="bg-albert-teal-light rounded-lg p-3 flex items-center gap-2">
                                <Check className="w-4 h-4 text-albert-teal shrink-0" />
                                <p className="text-xs text-albert-teal font-medium">
                                    Resultado: 400% mais vendas com atendimento ininterrupto
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PainSolutionSection;