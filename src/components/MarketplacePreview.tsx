"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Fashion & Clothing",
    items: "Popular category",
    image: "/images/clothing.jpg",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Electronics",
    items: "Popular category",
    image: "/images/electronics.jpg",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Home & Living",
    items: "Popular category",
    image: "/images/home.jpg",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    name: "Food & Groceries",
    items: "Popular category",
    image: "/images/grocery.jpg",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Beauty & Health",
    items: "Popular category",
    image: "/images/beauty.jpg",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    name: "Services",
    items: "Popular category",
    image: "/images/services.jpg",
    gradient: "from-slate-500 to-gray-500",
  },
  {
    name: "Arts & Crafts",
    items: "Popular category",
    image: "/images/arts.jpg",
    gradient: "from-red-500 to-pink-500",
  },
  {
    name: "Automotive",
    items: "Popular category",
    image: "/images/automotive.jpg",
    gradient: "from-indigo-500 to-blue-500",
  },
];

export default function MarketplacePreview() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="marketplace" className="py-20 md:py-32 bg-card grain relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              <span className="text-foreground">The eChankura</span>{" "}
              <span className="gradient-text">Market</span>
            </h2>
            <p className="text-muted text-lg max-w-xl">
              Buy and sell anything. From fashion to food, electronics to services — 
              join a marketplace where sellers are building businesses every day.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-border bg-card hover:bg-card-hover transition-colors flex items-center justify-center"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-border bg-card hover:bg-card-hover transition-colors flex items-center justify-center"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Categories Carousel */}
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex-shrink-0 snap-start"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="w-[280px] p-6 rounded-2xl bg-card border border-border hover:border-transparent relative group cursor-pointer"
                >
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 rounded-2xl gradient-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ padding: "1px" }}>
                    <div className="w-full h-full bg-card rounded-2xl" />
                  </div>

                  <div className="relative z-10">
                    {/* Category Image */}
                    <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-6 border border-border/50">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover"
                        sizes="280px"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-15`} />
                    </div>

                    {/* Category Info */}
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {category.name}
                    </h3>
                    <p className="text-muted text-sm mb-4">
                      {category.items}
                    </p>

                    {/* Sample items preview */}
                    <div className="flex -space-x-2 mb-4">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-card border-2 border-card"
                        />
                      ))}
                      <div className="w-8 h-8 rounded-full bg-card border-2 border-card flex items-center justify-center">
                        <span className="text-xs text-muted">+</span>
                      </div>
                    </div>

                    {/* Browse link */}
                    <div className="flex items-center gap-2 text-sm font-medium text-teal group-hover:text-foreground transition-colors">
                      <span>Browse category</span>
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Seller CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 p-8 md:p-12 rounded-3xl gradient-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Ready to start selling?
              </h3>
              <p className="text-muted max-w-lg">
                Join sellers on eChankura. Low fees, instant payments, 
                and a built-in customer base ready to buy.
              </p>
            </div>
            <motion.a
              href="#download"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 gradient-bg rounded-full text-white font-bold text-lg hover:opacity-90 transition-all"
            >
              Open Your Store
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
