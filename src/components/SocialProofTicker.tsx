"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "R500M+", label: "In Transactions" },
  { value: "iOS & Android", label: "Available On" },
  { value: "Built For The Hustle", label: "eChankura" },
];

export default function SocialProofTicker() {
  // Duplicate items for seamless infinite scroll
  const duplicatedStats = [...stats, ...stats];

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
    </section>
  );
}
