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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
            <div className="container mx-auto flex items-center justify-between h-16 px-4">
                <a href="#" className="flex items-center gap-2">
                    <img src="https://albert.evolves.site/img/logo-green.png" alt="Albert IA" className="h-8" />
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <div className="hidden md:block">
                    <Button variant="cta" onClick={scrollToForm}>
                        <Zap className="w-4 h-4 mr-1" />
                        Falar com Especialista
                    </Button>
                </div>

                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-background border-t border-border px-4 pb-4">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
                        >
                            {item.label}
                        </a>
                    ))}
                    <Button variant="cta" className="w-full mt-2" onClick={() => { setOpen(false); scrollToForm(); }}>
                        <Zap className="w-4 h-4 mr-1" />
                        Falar com Especialista
                    </Button>
                </div>
            )}
        </nav>
    );
};

export default AlbertNavbar;