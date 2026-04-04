"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Thabo Mokoena",
    role: "Spaza Shop Owner",
    location: "Alexandra, Johannesburg",
    quote: "I used to keep my money under my mattress. Now I have a real bank account, and my customers can pay me digitally. My business has grown since I joined eChankura.",
  },
  {
    id: 2,
    name: "Nomvula Dlamini",
    role: "Fashion Designer",
    location: "Soweto, Johannesburg",
    quote: "The marketplace changed everything for me. I went from selling at the local market to shipping clothes all over South Africa. eChankura made me a real entrepreneur.",
  },
  {
    id: 3,
    name: "Sipho Nkosi",
    role: "University Student",
    location: "Durban, KZN",
    quote: "I started investing at my own pace. Now I own pieces of companies I never thought I could afford. This is financial freedom for our generation.",
  },
  {
    id: 4,
    name: "Lerato Molefe",
    role: "Food Vendor",
    location: "Khayelitsha, Cape Town",
    quote: "The banks always said no. eChankura said yes. Now I accept card payments at my food stall and my customers love it. My income has grown.",
  },
  {
    id: 5,
    name: "Mandla Zulu",
    role: "Taxi Owner",
    location: "Umlazi, Durban",
    quote: "Managing my fleet's finances used to be chaos. Now everything is in one app. I can see every payment, every expense. eChankura brought order to my business.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-32 bg-background grain relative overflow-hidden transition-colors duration-300">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-teal/5 to-royal-purple/5 rounded-full blur-[150px]" />

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
            <span className="text-foreground">Community</span>{" "}
            <span className="gradient-text">voices</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Real stories from real people who are building their financial futures with eChankura.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="p-8 md:p-12 rounded-3xl bg-card border border-border relative">
                {/* Quote mark */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8 text-6xl md:text-8xl font-serif text-border select-none">
                  &ldquo;
                </div>

                <div className="relative z-10">
                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
                    {testimonials[currentIndex].quote}
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    {/* Avatar placeholder */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal to-royal-purple flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-foreground font-semibold">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-muted text-sm">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-muted text-sm">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-border bg-card hover:bg-card-hover transition-colors flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 gradient-bg"
                      : "bg-border hover:bg-muted"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-border bg-card hover:bg-card-hover transition-colors flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Preview strip of other testimonials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials
            .filter((_, index) => index !== currentIndex)
            .slice(0, 4)
            .map((testimonial, index) => (
              <motion.button
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                onClick={() => setCurrentIndex(testimonials.indexOf(testimonial))}
                className="p-4 rounded-xl bg-card/50 border border-border hover:border-teal/50 transition-all text-left group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal/50 to-royal-purple/50 flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-medium">
                      {testimonial.name}
                    </p>
                    <p className="text-muted text-xs">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <p className="text-muted text-sm line-clamp-2">
                  &ldquo;{testimonial.quote.slice(0, 80)}...&rdquo;
                </p>
              </motion.button>
            ))}
        </div>
      </div>
    </section>
  );
}
