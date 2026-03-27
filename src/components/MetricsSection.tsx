import { motion } from "framer-motion";
import { TrendingUp, Users, BarChart3, Clock } from "lucide-react";

const metrics = [
  { icon: Clock, value: "< 60s", label: "1º Atendimento", desc: "Velocidade que converte o lead no auge do interesse" },
  { icon: TrendingUp, value: "90%", label: "Aproveitamento", desc: "Recupere leads que seriam perdidos pelo esquecimento" },
  { icon: Users, value: "100%", label: "Follow-up", desc: "Automação humanizada em todos os pontos de contato" },
  { icon: BarChart3, value: "100%", label: "Qualificação", desc: "Sua equipe foca apenas em quem está pronto para comprar" },
];

const MetricsSection = () => {
  return (
    <section className="py-16 bg-gradient-teal relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.08),transparent)]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6 leading-tight">
              Pare de queimar dinheiro com a demora comercial
            </h2>
            <p className="text-lg text-primary-foreground/70">
              Enquanto você demora horas para responder, seu concorrente fecha com o Albert. 
              Automatize a qualificação e o follow-up para focar no que importa: <strong>vender</strong>.
            </p>
          </motion.div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <m.icon className="w-6 h-6 text-primary-foreground/60 mx-auto mb-3" />
              <p className="text-4xl font-extrabold text-primary-foreground mb-1">{m.value}</p>
              <p className="text-sm font-semibold text-primary-foreground/90 mb-1">{m.label}</p>
              <p className="text-xs text-primary-foreground/50">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;