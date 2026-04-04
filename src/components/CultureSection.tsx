"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  { alt: "Market vendor using phone", text: "eChankura is yours" },
  { alt: "Student checking investments", text: null },
  { alt: "Small business owner", text: "eChankura is here" },
  { alt: "Township entrepreneur", text: null },
  { alt: "Family managing finances", text: null },
  { alt: "Street vendor accepting payment", text: null },
];

const appScreenshots = [
  {
    src: "/images/cards.png",
    alt: "eChankura cards and quick actions",
    caption: "All your money tools in one place",
  },
  {
    src: "/images/features/banking.png",
    alt: "eChankura banking features",
    caption: "Banking that moves at your speed",
  },
  {
    src: "/images/features/ecommerce.png",
    alt: "eChankura ecommerce experience",
    caption: "Buy, sell, and grow in the market",
  },
  {
    src: "/images/features/investment.png",
    alt: "eChankura investment dashboard",
    caption: "Build wealth with simple investments",
  },
  {
    src: "/images/features/kyc.png",
    alt: "eChankura onboarding and KYC",
    caption: "Fast onboarding, trusted security",
  },
];

export default function CultureSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % appScreenshots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setActiveSlide((current) =>
      current === 0 ? appScreenshots.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveSlide((current) => (current + 1) % appScreenshots.length);
  };

  const getSlideAt = (offset: number) => {
    const length = appScreenshots.length;
    return appScreenshots[(activeSlide + offset + length) % length];
  };

  return (
    <section className="py-20 md:py-32 bg-card grain relative overflow-hidden transition-colors duration-300">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />
      
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
            <span className="text-foreground">Built for</span>{" "}
            <span className="gradient-text">the hustle</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            We see you. The market vendor. The student. The dreamer. 
            eChankura was built by people who understand what it means to build from nothing.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl ${
                index === 0 || index === 2 ? "row-span-2" : ""
              } ${index === 0 ? "md:row-span-2" : ""}`}
            >
              {/* Placeholder Image with gradient */}
              <div className={`w-full bg-gradient-to-br from-card to-midnight-light border border-border ${
                index === 0 || index === 2 ? "h-[320px] md:h-full" : "h-[200px] md:h-[240px]"
              }`}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${
                      index % 2 === 0 ? "from-teal/20 to-teal/5" : "from-royal-purple/20 to-royal-purple/5"
                    } flex items-center justify-center`}>
                      <svg className={`w-8 h-8 ${index % 2 === 0 ? "text-teal" : "text-royal-purple"}`} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <p className="text-muted text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>

              {/* Overlay text */}
              {image.text && (
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex items-end p-6">
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-2xl md:text-3xl font-bold gradient-text"
                  >
                    {image.text}
                  </motion.p>
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal/10 to-royal-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* App Screenshots Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative h-[420px] sm:h-[520px] md:h-[560px] lg:h-[600px]">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                const swipeThreshold = 70;
                if (info.offset.x > swipeThreshold) {
                  goToPrevious();
                } else if (info.offset.x < -swipeThreshold) {
                  goToNext();
                }
              }}
              className="h-full w-full touch-pan-y cursor-grab active:cursor-grabbing"
            >
              <div className="grid h-full grid-cols-3 items-center gap-3 md:gap-6 lg:gap-8">
                {[-1, 0, 1].map((offset) => {
                  const screenshot = getSlideAt(offset);
                  const isCenter = offset === 0;

                  return (
                    <div
                      key={`${screenshot.src}-${offset}`}
                      className={`relative h-[250px] sm:h-[340px] md:h-[420px] lg:h-[460px] select-none transition-all duration-500 ${
                        isCenter
                          ? "opacity-100 scale-100"
                          : "opacity-35 scale-90"
                      }`}
                    >
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        fill
                        draggable={false}
                        className="object-contain pointer-events-none"
                        sizes="(max-width: 640px) 33vw, 30vw"
                        priority={isCenter}
                      />
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-border text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Previous screenshot"
            >
              <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-border text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Next screenshot"
            >
              <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {appScreenshots.map((screenshot, index) => (
                <button
                  key={screenshot.src + "-dot"}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeSlide === index
                      ? "w-8 bg-royal-purple"
                      : "w-2 bg-foreground/30 hover:bg-foreground/50"
                  }`}
                  aria-label={`Go to screenshot ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-2xl md:text-3xl font-bold gradient-text mb-2">
              eChankura in action
            </p>
            <p className="text-muted text-sm md:text-base">
              {appScreenshots[activeSlide].caption}
            </p>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground max-w-3xl mx-auto leading-relaxed">
            &quot;Traditional banks looked at us and saw risk. 
            <span className="gradient-text"> eChankura looked at us and saw potential.</span>&quot;
          </blockquote>
          <p className="mt-6 text-muted">— Nomvula M., Spaza Shop Owner, Soweto</p>
        </motion.div>
      </div>
    </section>
  );
}
