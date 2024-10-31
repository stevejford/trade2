import { HeroSection } from "@/components/home/hero-section";
import { SignupCTA } from "@/components/home/signup-cta";
import { FeaturesSection } from "@/components/home/features-section";
import { HowItWorks } from "@/components/home/how-it-works";
import { PopularAreasSection } from "@/components/home/popular-areas-section";
import { FeaturedTradespeopleSection } from "@/components/home/featured-tradespeople-section";
import { BlogSection } from "@/components/home/blog-section";
import { BenefitsSection } from "@/components/home/benefits-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SignupCTA />
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <FeaturesSection />
        <HowItWorks />
      </div>
      <PopularAreasSection />
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <FeaturedTradespeopleSection />
        <BenefitsSection />
      </div>
      <BlogSection />
    </main>
  );
}