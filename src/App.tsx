import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { StatsSection } from "./components/StatsSection";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { ProductShowcase } from "./components/ProductShowcase";
import { TestimonialSection } from "./components/TestimonialSection";
import { CTASection } from "./components/CTASection";
import { FooterSection } from "./components/FooterSection";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturesGrid />
      <ProductShowcase />
      <TestimonialSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}
