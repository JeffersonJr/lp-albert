import { motion } from "framer-motion";
import LeadForm from "./LeadForm";

const FinalCTA = () => {
    return (
        <section className="py-20 bg-gradient-teal relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent)]" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
                            Cada minuto sem o Albert é um lead perdido
                        </h2>
                        <p className="text-primary-foreground/70 text-lg">
                            Comece agora. Em 24 horas seu atendimento vai estar no piloto automático.
                        </p>
                    </div>

                    <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-7 border border-primary-foreground/20">
                        <LeadForm variant="dark" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
