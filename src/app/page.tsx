import AboutUsSections from "./components/sections/aboutUsSections";
import FAQSections from "./components/sections/faqsSections";
import FooterSections from "./components/sections/footerSections";
import HeroSections from "./components/sections/heroSections";
import OurWorkSections from "./components/sections/ourWorkSections";
import ServicesSections from "./components/sections/servicesSections";
import TestimonialSections from "./components/sections/testimonialSections";

export default function Home() {
  return (
    <main>
      <HeroSections />
      <AboutUsSections />
      <ServicesSections />
      <OurWorkSections />
      <TestimonialSections />
      <FAQSections />
      <FooterSections />
    </main>
  );
}
