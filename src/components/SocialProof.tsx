import { motion } from "framer-motion";

const logos = [
    { name: "Chaves na Mão", src: "https://albert.evolves.site/img/chaves%20na%20m%C3%A3o.svg" },
    { name: "Imovel Web", src: "https://albert.evolves.site/img/imovel%20web.svg" },
    { name: "Lopes", src: "https://albert.evolves.site/img/lopes.svg" },
    { name: "Net Imóveis", src: "https://albert.evolves.site/img/netimoveis.svg" },
    { name: "Quinto Andar", src: "https://albert.evolves.site/img/quinto%20andar.svg" },
    { name: "Viva Real", src: "https://albert.evolves.site/img/viva%20real.svg" },
    { name: "Zap Imóveis", src: "https://albert.evolves.site/img/zap.svg" },
];

const doubledLogos = [...logos, ...logos, ...logos, ...logos];

const SocialProof = () => (
    <section className="py-12 bg-background border-y border-border overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-8">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                Tecnologia utilizada pelos maiores portais do Brasil
            </p>
        </div>
        <div className="relative w-full">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
            <motion.div
                className="flex items-center gap-12 w-max"
                animate={{ x: ["0%", "-25%"] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
                {doubledLogos.map((logo, i) => (
                    <img
                        key={`${logo.name}-${i}`}
                        src={logo.src}
                        alt={logo.name}
                        className="h-7 md:h-9 grayscale opacity-50 hover:opacity-80 transition-opacity shrink-0"
                        width="120"
                        height="36"
                        loading="lazy"
                        decoding="async"
                    />
                ))}
            </motion.div>
        </div>
    </section>
);

export default SocialProof;