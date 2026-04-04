import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofTicker from "@/components/SocialProofTicker";
import Features from "@/components/Features";
import CultureSection from "@/components/CultureSection";
import HowItWorks from "@/components/HowItWorks";
import MarketplacePreview from "@/components/MarketplacePreview";
import AppDownloadCTA from "@/components/AppDownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SocialProofTicker />
        <Features />
        <CultureSection />
        <HowItWorks />
        <MarketplacePreview />
        <AppDownloadCTA />
      </main>
      <Footer />
    </>
  );
}
