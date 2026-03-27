import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, Briefcase, Coins, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_LINK = "https://wa.me/5513997591781?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Albert%20IA";
const FORM_ENDPOINT = "https://formsubmit.co/ajax/jefferson.campos@microsistec.com.br";

interface FormData {
    name: string;
    email: string;
    phone: string;
    cargo: string;
    investimento: string;
}

const LeadForm = ({ id, variant = "light" }: { id?: string; variant?: "light" | "dark" }) => {
    const [form, setForm] = useState<FormData>({ 
        name: "", 
        email: "", 
        phone: "", 
        cargo: "", 
        investimento: "" 
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.cargo || !form.investimento) {
            toast({ title: "Preencha todos os campos obrigatórios", variant: "destructive" });
            return;
        }
        setLoading(true);

        try {
            const response = await fetch(FORM_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    Nome: form.name,
                    Email: form.email,
                    WhatsApp: form.phone,
                    Cargo: form.cargo,
                    Investimento: form.investimento,
                    _subject: `Novo lead Albert IA - ${form.name}`,
                    _template: "table",
                }),
            });

            if (!response.ok) throw new Error("Erro ao enviar");

            setSubmitted(true);
            toast({ title: "Recebemos seu contato! 🎉", description: "Um especialista entrará em contato em breve." });
        } catch {
            toast({ title: "Erro ao enviar. Tente novamente.", variant: "destructive" });
        } finally {
            setLoading(false);
        }
    };

    const isDark = variant === "dark";
    const inputClasses = isDark
        ? "w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 transition-all text-sm appearance-none"
        : "w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-albert-teal/30 transition-all text-sm appearance-none";

    const maskPhone = (value: string) => {
        const cleaned = value.replace(/\D/g, "");
        const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
        if (!match) return value;
        const part1 = match[1] ? `(${match[1]}` : "";
        const part2 = match[2] ? `) ${match[2]}` : "";
        const part3 = match[3] ? `-${match[3]}` : "";
        return `${part1}${part2}${part3}`.trim().slice(0, 15);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const masked = maskPhone(e.target.value);
        setForm({ ...form, phone: masked });
    };

    if (submitted) {
        return (
            <motion.div
                id={id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`rounded-2xl p-8 text-center ${isDark ? "" : "bg-albert-teal-light border border-albert-teal/20"}`}
            >
                <CheckCircle className={`w-16 h-16 mx-auto mb-4 ${isDark ? "text-primary-foreground" : "text-albert-teal"}`} />
                <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-primary-foreground" : "text-foreground"}`}>
                    Perfeito! Recebemos seu contato.
                </h3>
                <p className={`mb-6 ${isDark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    Um especialista vai entrar em contato em até 2 horas úteis.
                </p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <Button variant={isDark ? "ctaLight" : "cta"} size="lg">
                        Falar agora no WhatsApp
                    </Button>
                </a>
            </motion.div>
        );
    }

    return (
        <form id={id} onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
                <User className={`absolute left-3 top-3.5 w-4 h-4 ${isDark ? "text-primary-foreground/40" : "text-muted-foreground"}`} />
                <input
                    type="text"
                    placeholder="Seu nome completo *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`${inputClasses} pl-10`}
                    maxLength={100}
                    required
                />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                    <Mail className={`absolute left-3 top-3.5 w-4 h-4 ${isDark ? "text-primary-foreground/40" : "text-muted-foreground"}`} />
                    <input
                        type="email"
                        placeholder="E-mail *"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={`${inputClasses} pl-10`}
                        maxLength={255}
                        required
                    />
                </div>
                <div className="relative">
                    <Phone className={`absolute left-3 top-3.5 w-4 h-4 ${isDark ? "text-primary-foreground/40" : "text-muted-foreground"}`} />
                    <input
                        type="tel"
                        placeholder="WhatsApp *"
                        value={form.phone}
                        onChange={handlePhoneChange}
                        className={`${inputClasses} pl-10`}
                        required
                    />
                </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                    <Briefcase className={`absolute left-3 top-3.5 w-4 h-4 ${isDark ? "text-primary-foreground/40" : "text-muted-foreground"}`} />
                    <select
                        value={form.cargo}
                        onChange={(e) => setForm({ ...form, cargo: e.target.value })}
                        className={`${inputClasses} pl-10 pr-10`}
                        required
                    >
                        <option value="" disabled>Seu Cargo *</option>
                        <option value="Dono de imobiliária">Dono de imobiliária</option>
                        <option value="Corretor autônomo">Corretor autônomo</option>
                    </select>
                    <div className="absolute right-3 top-4 pointer-events-none">
                        <svg className={`w-4 h-4 ${isDark ? "text-primary-foreground/40" : "text-muted-foreground"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" className="rotate-90 origin-center" />
                        </svg>
                    </div>
                </div>
                <div className="relative">
                    <Coins className={`absolute left-3 top-3.5 w-4 h-4 ${isDark ? "text-primary-foreground/40" : "text-muted-foreground"}`} />
                    <select
                        value={form.investimento}
                        onChange={(e) => setForm({ ...form, investimento: e.target.value })}
                        className={`${inputClasses} pl-10 pr-10`}
                        required
                    >
                        <option value="" disabled>Investimento *</option>
                        <option value="Até R$ 300,00">Até R$ 300,00</option>
                        <option value="Até R$ 800,00">Até R$ 800,00</option>
                        <option value="A partir de R$ 1.000">A partir de R$ 1.000</option>
                    </select>
                    <div className="absolute right-3 top-4 pointer-events-none">
                        <svg className={`w-4 h-4 ${isDark ? "text-primary-foreground/40" : "text-muted-foreground"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" className="rotate-90 origin-center" />
                        </svg>
                    </div>
                </div>
            </div>

            <Button
                type="submit"
                variant={isDark ? "ctaLight" : "cta"}
                size="xl"
                className="w-full mt-2"
                disabled={loading}
            >
                {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                ) : (
                    <Send className="w-5 h-5 mr-2" />
                )}
                {loading ? "Enviando..." : "Quero o Albert atendendo meus leads"}
            </Button>
            
            <div className={`text-xs text-center leading-relaxed h-auto ${isDark ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                <span className="inline-block whitespace-nowrap">✓ Planos Flexíveis &nbsp;·&nbsp;</span>
                <span className="inline-block whitespace-nowrap">✓ Resultados reais &nbsp;·&nbsp;</span>
                <span className="inline-block whitespace-nowrap text-nowrap">✓ Atendimento personalizado &nbsp;·&nbsp;</span>
                <span className="block sm:inline-block whitespace-nowrap">✓ Cancele quando quiser</span>
            </div>
        </form>
    );
};

export default LeadForm;