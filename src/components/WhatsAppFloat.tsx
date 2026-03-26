import { MessageCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const WHATSAPP_LINK = "https://wa.me/5513997591781?text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Albert%20IA";

const WhatsAppFloat = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector("footer");
            if (!footer) return;
            const footerTop = footer.getBoundingClientRect().top;
            setVisible(footerTop > window.innerHeight);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: visible ? 1 : 0, opacity: visible ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            aria-label="Falar no WhatsApp"
        >
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-semibold hidden sm:inline">Quero testar o Albert</span>
        </motion.a>
    );
};

export default WhatsAppFloat;