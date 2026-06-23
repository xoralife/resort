"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { HeroContent } from "./hero/HeroContent";
import { SearchWidget } from "./hero/SearchWidget";
import { FloatingCards } from "./hero/FloatingCards";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/90" />

      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] via-transparent to-primary/[0.02]" />

      <Header />
      <HeroContent />
      <SearchWidget />
      <FloatingCards />

      <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] font-medium tracking-wider text-gray-400 uppercase">
            Scroll
          </span>
          <div className="flex h-7 w-4 items-start justify-center rounded-full border border-gray-300">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="mt-1.5 h-1.5 w-1 rounded-full bg-gray-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
