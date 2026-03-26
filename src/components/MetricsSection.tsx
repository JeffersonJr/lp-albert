import { motion } from "framer-motion";
import { TrendingUp, Users, BarChart3, Clock } from "lucide-react";

const metrics = [
  { icon: TrendingUp, value: "+400%", label: "Aumento em vendas", desc: "Média dos clientes nos primeiros 90 dias" },
  { icon: Users, value: "10.428", label: "Leads qualificados", desc: "Processados por mês pela plataforma" },
  { icon: BarChart3, value: "12.4x", label: "ROI médio", desc: "Retorno sobre o investimento mensal" },
  { icon: Clock, value: "3s", label: "Tempo de resposta", desc: "Do primeiro contato à qualificação" },
];

const MetricsSection = () => {
  return (
    <section className="py-16 bg-gradient-teal relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.08),transparent)]" />
      <div className="container mx-auto px-4 relative z-10">
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