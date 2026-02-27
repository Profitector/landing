import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import SavingsCalculator from "./components/SavingsCalculator";
import HowItWorks from "./components/HowItWorks";
import ValueCards from "./components/ValueCards";
import CTABanner from "./components/CTABanner";
import FAQ from "./components/FAQ";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <SavingsCalculator />
        <HowItWorks />
        <ValueCards />
        <CTABanner />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
