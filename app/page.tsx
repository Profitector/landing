import Header from "./components/Header";
import Hero from "./components/Hero";
import SavingsCalculator from "./components/SavingsCalculator";
import HowItWorks from "./components/HowItWorks";
import ValueCards from "./components/ValueCards";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SavingsCalculator />
        <HowItWorks />
        <ValueCards />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
