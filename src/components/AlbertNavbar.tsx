import { Zap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navItems = [
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Resultados", href: "#resultados" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Planos", href: "#planos" },
];

const AlbertNavbar = () => {
    const [open, setOpen] = useState(false);

    const scrollToForm = () => {
        document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl backdrop-saturate-150 border-b border-white/10 shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset]">
            <div className="container mx-auto flex items-center justify-between h-16 px-4">
                <a href="#" className="flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-albert-teal rounded-sm" aria-label="Voltar ao início">
                    <img 
                        src="https://albert.evolves.site/img/logo-green.png" 
                        alt="Albert IA Logo" 
                        className="h-8 w-auto" 
                        width="118" 
                        height="32"
                        loading="eager"
                        fetchPriority="high"
                    />
                </a>

                <div className="hidden lg:flex items-center gap-6">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <div className="hidden lg:block">
                    <Button variant="cta" onClick={scrollToForm}>
                        <Zap className="w-4 h-4 mr-1" />
                        Falar com Especialista
                    </Button>
                </div>

                <button 
                    className="lg:hidden p-2 -mr-2 text-foreground focus-visible:ring-2 focus-visible:ring-albert-teal rounded-lg transition-colors" 
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={open}
                >
                    {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {open && (
                <div className="lg:hidden bg-background/80 backdrop-blur-xl border-t border-white/10 px-4 pb-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="block py-4 text-base font-medium text-muted-foreground hover:text-foreground border-b border-border/50 last:border-0"
                        >
                            {item.label}
                        </a>
                    ))}
                    <Button variant="cta" size="lg" className="w-full mt-4" onClick={() => { setOpen(false); scrollToForm(); }}>
                        <Zap className="w-4 h-4 mr-1" />
                        Falar com Especialista
                    </Button>
                </div>
            )}
        </nav>
    );
};

export default AlbertNavbar;