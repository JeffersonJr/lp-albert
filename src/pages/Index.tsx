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
import ExitIntentModal from "@/components/ExitIntentModal";

const Index = () => {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-albert-teal/[0.1] selection:text-albert-teal">
            <ExitIntentModal />
            <WhatsAppFloat />
            <AlbertNavbar />
            
            <main id="main-content">
                <HeroSection />
                <SocialProof />
                <PainSolutionSection />
                <HowItWorksSection />
                <MetricsSection />
                <TestimonialsSection />
                <PricingSection />
                <FAQSection />
                <FinalCTA />
            </main>

            <AlbertFooter />
        </div>
    );
};

export default Index;