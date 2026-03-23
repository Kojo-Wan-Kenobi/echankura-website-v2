"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500K+", label: "Active Users" },
  { value: "R500M+", label: "Transactions Processed" },
  { value: "50K+", label: "Marketplace Sellers" },
  { value: "4.8★", label: "App Store Rating" },
  { value: "iOS & Android", label: "Available On" },
  { value: "24/7", label: "Customer Support" },
];

const pressLogos = [
  "TechCrunch",
  "Disrupt Africa",
  "Ventureburn",
  "ITWeb",
  "MyBroadband",
];

export default function SocialProofTicker() {
  // Duplicate items for seamless infinite scroll
  const duplicatedStats = [...stats, ...stats];
  const duplicatedLogos = [...pressLogos, ...pressLogos];

  return (
    <section className="bg-card border-y border-border py-6 overflow-hidden transition-colors duration-300">
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card to-transparent z-10" />

        {/* Stats Ticker */}
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="flex items-center gap-12 whitespace-nowrap"
        >
          {duplicatedStats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl font-bold gradient-text">
                  {stat.value}
                </span>
                <span className="text-sm text-muted">
                  {stat.label}
                </span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-border" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Press Logos - Second row */}
      <div className="mt-6 relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card to-transparent z-10" />

        <motion.div
          animate={{ x: ["-50%", 0] }}
          transition={{
            x: {
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="flex items-center gap-12 whitespace-nowrap"
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-4"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted uppercase tracking-wider">As seen on</span>
                <span className="text-base font-semibold text-foreground/60">
                  {logo}
                </span>
              </div>
              <div className="w-1 h-1 rounded-full bg-border" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
