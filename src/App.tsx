import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ContactSection />
    </>
  );
}

export default App;