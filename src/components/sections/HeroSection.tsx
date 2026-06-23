"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { HeroContent } from "./hero/HeroContent";
import { SearchWidget } from "./hero/SearchWidget";
import { FloatingCards } from "./hero/FloatingCards";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video-ready background layer — swap <img> for <video> when ready */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Multi-layer gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/40 to-dark/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/10" />

      {/* Decorative gradient orbs */}
      <div className="absolute -top-48 -right-48 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[120px]" />
      <div className="absolute top-1/3 left-1/4 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[100px]" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Header */}
      <Header />

      {/* Main content */}
      <HeroContent />

      {/* Search Widget */}
      <SearchWidget />

      {/* Floating stat cards */}
      <FloatingCards />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] font-medium tracking-[0.15em] text-white/50 uppercase">
            Scroll
          </span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="mt-1.5 h-2 w-1 rounded-full bg-white/60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
