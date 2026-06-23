import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedResorts } from "@/components/sections/FeaturedResorts";
import { ResortCategories } from "@/components/sections/ResortCategories";
import { PopularDestinations } from "@/components/sections/PopularDestinations";
import { LuxuryExperiences } from "@/components/sections/LuxuryExperiences";
import { Testimonials } from "@/components/sections/Testimonials";
import { Statistics } from "@/components/sections/Statistics";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedResorts />
      <ResortCategories />
      <PopularDestinations />
      <LuxuryExperiences />
      <Testimonials />
      <Statistics />
      <Newsletter />
      <Footer />
    </main>
  );
}
