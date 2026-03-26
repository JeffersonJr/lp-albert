import AlbertNavbar from "@/components/AlbertNavbar";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import PainSolutionSection from "@/components/PainSolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MetricsSection from "@/components/MetricsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import AlbertFooter from "@/components/AlbertFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <WhatsAppFloat />
            <AlbertNavbar />
            <HeroSection />
            <SocialProof />
            <PainSolutionSection />
            <HowItWorksSection />
            <MetricsSection />
            <TestimonialsSection />
            <PricingSection />
            <FAQSection />
            <FinalCTA />
            <AlbertFooter />
        </div>
    );
};

export default Index;