import Classes from "../components/Classes";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import NewsSection from "../components/NewsSection";
import PricingSection from "../components/PricingSection";
import TeamSection from "../components/TeamSection";
import TimetableSection from "../components/TimetableSection";
import FrontAbout from "../components/frontabout";
import Header from "./../components/Header";
import HeroSection from "./../components/HeroSection";
import IntroSection from "./../components/IntroSection";
import TestimonialSection from "./../components/TestimonialSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FrontAbout />
      <Classes />
      <IntroSection />
      <PricingSection />
      <TestimonialSection />
      <TeamSection />
      <TimetableSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
