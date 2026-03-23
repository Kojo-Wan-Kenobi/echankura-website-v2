"use client";

import { motion } from "framer-motion";

const images = [
  { alt: "Market vendor using phone", text: "eChankura is yours" },
  { alt: "Student checking investments", text: null },
  { alt: "Small business owner", text: "eChankura is here" },
  { alt: "Township entrepreneur", text: null },
  { alt: "Family managing finances", text: null },
  { alt: "Street vendor accepting payment", text: null },
];

export default function CultureSection() {
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

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-border"
        >
          <div className="aspect-video bg-gradient-to-br from-card to-background flex items-center justify-center relative">
            {/* Play button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full gradient-bg flex items-center justify-center glow-teal relative z-10"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </motion.button>

            {/* Video placeholder text */}
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-foreground font-bold text-xl md:text-2xl mb-2">
                See eChankura in action
              </p>
              <p className="text-muted text-sm md:text-base">
                Watch how real people are using eChankura to transform their financial lives
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-background/80 border border-border text-sm text-muted">
              0:30
            </div>
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
