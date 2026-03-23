"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "R1.8T+", label: "Unbanked market opportunity in Africa" },
  { value: "500K+", label: "Active users and growing" },
  { value: "350%", label: "Year-over-year growth" },
  { value: "R500M+", label: "Transaction volume processed" },
];

const trustSignals = [
  "FSCA Regulated",
  "SARB Compliant",
  "POPIA Certified",
  "ISO 27001 Security",
];

export default function InvestorSection() {
  return (
    <section className="py-20 md:py-32 bg-card relative overflow-hidden transition-colors duration-300">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50" />
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-royal-purple/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-royal-purple/10 text-royal-purple text-sm font-medium mb-6">
            For Investors
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            <span className="text-foreground">Back the</span>{" "}
            <span className="gradient-text">movement</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed">
            The unbanked market in Africa represents a{" "}
            <span className="gradient-text font-bold">R1.8 trillion+ opportunity</span>.
            <br className="hidden md:block" />
            We&apos;re building the infrastructure to capture it.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm text-center"
            >
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {metric.value}
              </p>
              <p className="text-muted text-sm">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Investment Thesis */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why eChankura?
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Massive TAM</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    350 million unbanked adults in Sub-Saharan Africa. Traditional banks won&apos;t reach them. We will.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-royal-purple/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-royal-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Full-Stack Platform</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Banking, commerce, and investing in one app. Every feature increases LTV and reduces CAC through network effects.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Mission-Aligned</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Financial inclusion isn&apos;t just good ethics — it&apos;s good business. ESG-focused investors see the upside.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Leadership & Compliance
            </h3>
            
            {/* Team credentials placeholder */}
            <div className="p-6 rounded-2xl bg-card border border-border mb-6">
              <p className="text-muted text-sm mb-4">Founded by fintech veterans with experience at:</p>
              <div className="flex flex-wrap gap-3">
                {["Standard Bank", "FNB", "Discovery", "PayFast", "Yoco"].map((company) => (
                  <span
                    key={company}
                    className="px-3 py-1.5 rounded-lg bg-card border border-border text-foreground text-sm"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-2 gap-3">
              {trustSignals.map((signal) => (
                <div
                  key={signal}
                  className="flex items-center gap-2 p-3 rounded-xl bg-card/50 border border-border"
                >
                  <svg className="w-5 h-5 text-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground text-sm font-medium">{signal}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center p-8 md:p-12 rounded-3xl bg-gradient-to-r from-royal-purple/10 to-teal/10 border border-border"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Interested in investing?
          </h3>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            Request our investor deck to learn more about our vision, traction, and how you can be part of the financial inclusion revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:investors@echankura.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 gradient-bg rounded-full text-white font-bold text-lg hover:opacity-90 transition-all"
            >
              Request Investor Deck
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://calendly.com/echankura"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-semibold text-lg hover:bg-card transition-all"
            >
              Schedule a Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
