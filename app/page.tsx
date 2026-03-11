import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollingTicker from "./components/ScrollingTicker";
import TrustBar from "./components/TrustBar";
import SavingsCalculator from "./components/SavingsCalculator";
import HowItWorks from "./components/HowItWorks";
import WhatItCatches from "./components/WhatItCatches";
import ValueCards from "./components/ValueCards";
import FAQ from "./components/FAQ";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import AccessibilityWidget from "./components/AccessibilityWidget";
import CookieBanner from "./components/CookieBanner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScrollingTicker />
        <TrustBar />
        <SavingsCalculator />
        <HowItWorks />
        <WhatItCatches />
        <ValueCards />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <AccessibilityWidget />
      <CookieBanner />
    </>
  );
}
