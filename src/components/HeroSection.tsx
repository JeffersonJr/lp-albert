import { motion } from "framer-motion";
import { Shield, Clock, Zap } from "lucide-react";
import LeadForm from "@/components/LeadForm";

const HeroSection = () => {
    return (
        <section className="relative pt-28 pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-albert-surface" />
            <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-albert-teal/[0.04] blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-albert-teal/[0.03] blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left — Copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="pt-4"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-albert-teal-light text-albert-teal text-sm font-semibold mb-6">
                            <Zap className="w-4 h-4" />
                            Usado por +500 imobiliárias no Brasil
                        </div>

                        <h1 className="text-4xl md:text-5xl xl:text-[3.4rem] font-extrabold text-foreground leading-[1.15] mb-6 pb-2">
                            Você está perdendo{" "}
                            <span className="text-gradient">60% dos leads</span>{" "}
                            por demora no atendimento
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
                            O Albert responde seus leads em <strong className="text-foreground">3 segundos</strong>, qualifica automaticamente e agenda visitas — mesmo de madrugada, domingo ou feriado. Sem contratar ninguém.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock className="w-4 h-4 text-albert-teal" />
                                <span>Ativação Rápida</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Shield className="w-4 h-4 text-albert-teal" />
                                <span>Planos Flexíveis</span>
                            </div>
                        </div>

                        {/* Social proof micro */}
                        <div className="flex items-center gap-3 pt-4 border-t border-border">
                            <div className="flex -space-x-2">
                                {["RS", "MC", "JP", "AS"].map((initials, i) => (
                                    <div
                                        key={i}
                                        className="w-8 h-8 rounded-full bg-gradient-teal flex items-center justify-center text-primary-foreground text-xs font-bold border-2 border-background"
                                    >
                                        {initials}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-albert-gold text-sm">★</span>
                                    ))}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    +500 imobiliárias com 98% de satisfação
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        <div className="bg-background rounded-2xl shadow-card-hover border border-border p-7 lg:p-8">
                            <div className="text-center mb-6">
                                <h2 className="text-xl font-bold text-foreground mb-1">
                                    Fale com um especialista
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    Preencha e um consultor entrará em contato
                                </p>
                            </div>
                            <LeadForm id="hero-form" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
