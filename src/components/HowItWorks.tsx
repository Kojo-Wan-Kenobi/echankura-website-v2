"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Download & Register",
    description: "Get the app from App Store or Google Play. Complete our quick KYC with just your ID and a selfie.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Set Up Your Account",
    description: "Link your bank, fund your wallet, and set up your marketplace profile if you want to sell. Everything in one place.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Start Building",
    description: "Send money, shop the marketplace, start investing. Your financial future starts with a single tap.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background grain relative overflow-hidden transition-colors duration-300">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-royal-purple/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-foreground">How it</span>{" "}
            <span className="gradient-text">works</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Getting started with eChankura is simple. Three steps and you&apos;re building your financial future.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-32 left-[16.666%] right-[16.666%] h-0.5">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full h-full bg-gradient-to-r from-teal via-royal-purple to-teal origin-left"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="text-center">
                  {/* Number Circle */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative mx-auto mb-8"
                  >
                    {/* Outer glow ring */}
                    <div className={`absolute inset-0 w-24 h-24 rounded-full ${
                      index === 0 ? "bg-teal/20" : index === 1 ? "bg-royal-purple/20" : "bg-teal/20"
                    } blur-xl`} />
                    
                    {/* Main circle */}
                    <div className={`relative w-24 h-24 rounded-full mx-auto flex items-center justify-center ${
                      index === 1 ? "gradient-bg" : "bg-card border-2 border-border"
                    }`}>
                      <span className={`text-3xl font-bold ${
                        index === 1 ? "text-white" : "gradient-text"
                      }`}>
                        {step.number}
                      </span>
                    </div>

                    {/* Connector dots - Mobile */}
                    {index < steps.length - 1 && (
                      <div className="md:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                        <div className="w-1 h-1 rounded-full bg-border" />
                        <div className="w-1 h-1 rounded-full bg-border" />
                        <div className="w-1 h-1 rounded-full bg-border" />
                      </div>
                    )}
                  </motion.div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center ${
                    index === 0 ? "bg-teal/10 text-teal" : index === 1 ? "bg-royal-purple/10 text-royal-purple" : "bg-teal/10 text-teal"
                  }`}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted mb-6">Ready to start your journey?</p>
          <motion.a
            href="#download"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 gradient-bg rounded-full text-white font-bold text-lg hover:opacity-90 transition-all glow-teal"
          >
            Get Started Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
