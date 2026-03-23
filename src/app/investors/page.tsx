import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import InvestorSection from "@/components/InvestorSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Investors | eChankura",
  description: "Back the movement. Learn about investment opportunities with eChankura, the all-in-one fintech platform for the underbanked.",
};

export default function InvestorsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20">
        <InvestorSection />
      </main>
      <Footer />
    </>
  );
}
