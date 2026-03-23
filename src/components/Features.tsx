"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    id: "banking",
    title: "Banking",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    shortDesc: "Safe accounts, instant transfers, zero fees",
    longDesc: "Open a fully-featured bank account in minutes. Send money instantly to anyone, pay bills, and manage your finances with zero monthly fees. Your money is protected by bank-grade security and FSCA regulation.",
    color: "teal",
  },
  {
    id: "ecommerce",
    title: "eCommerce",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    shortDesc: "Buy, sell, trade — your marketplace",
    longDesc: "Turn your hustle into a business. Set up your store, list products, accept payments, and reach thousands of buyers across South Africa. Low seller fees mean more profit in your pocket.",
    color: "purple",
  },
  {
    id: "investment",
    title: "Fractional Investment",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    shortDesc: "Own a piece of something bigger",
    longDesc: "Start investing with as little as R50. Own fractions of stocks, ETFs, and other assets that were previously out of reach. Build wealth at your own pace with automated savings and investment plans.",
    color: "teal",
  },
  {
    id: "kyc",
    title: "KYC/Onboarding",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    shortDesc: "Verified in minutes, not days",
    longDesc: "Our smart KYC process gets you up and running in under 5 minutes. Just your ID and a selfie. No paperwork, no branch visits, no waiting. Start using all features immediately after verification.",
    color: "purple",
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  return (
    <section id="features" className="py-20 md:py-32 bg-background grain transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-foreground">Everything</span>{" "}
            <span className="gradient-text">you need</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Four pillars. One app. Everything to help you bank, trade, invest, and grow — 
            all without the friction of traditional finance.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActiveFeature(feature.id)}
              onMouseLeave={() => setActiveFeature(null)}
              className="group relative"
            >
              <div className={`relative p-8 rounded-2xl bg-card border border-border transition-all duration-300 h-full ${
                activeFeature === feature.id ? "border-transparent" : ""
              }`}>
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 rounded-2xl gradient-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ padding: "1px" }}>
                  <div className="w-full h-full bg-card rounded-2xl" />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    feature.color === "teal" 
                      ? "bg-teal/10 text-teal" 
                      : "bg-royal-purple/10 text-royal-purple"
                  }`}>
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <AnimatePresence mode="wait">
                    {activeFeature === feature.id ? (
                      <motion.p
                        key="long"
                        initial={{ opacity: 0, height: "auto" }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-muted leading-relaxed"
                      >
                        {feature.longDesc}
                      </motion.p>
                    ) : (
                      <motion.p
                        key="short"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-muted"
                      >
                        {feature.shortDesc}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Mini App Screenshot Placeholder */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: activeFeature === feature.id ? 1 : 0,
                      height: activeFeature === feature.id ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 rounded-xl bg-card border border-border p-4 flex items-center justify-center">
                      <div className="w-full h-32 rounded-lg bg-gradient-to-br from-card to-background flex items-center justify-center">
                        <span className="text-sm text-muted">App Screenshot</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Arrow indicator */}
                  <div className={`mt-6 flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                    feature.color === "teal" ? "text-teal" : "text-royal-purple"
                  }`}>
                    <span>Learn more</span>
                    <motion.svg
                      animate={{ x: activeFeature === feature.id ? 4 : 0 }}
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
