"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO } from "@/data/hero";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function HeroContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-20 mx-auto max-w-5xl px-4 pt-32 text-center sm:pt-36 md:pt-44"
    >
      <motion.div variants={childVariants}>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-1.5 text-xs font-medium tracking-[0.2em] text-white/90 backdrop-blur-md uppercase">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          {HERO.tagline}
        </div>
      </motion.div>

      <motion.h1
        variants={childVariants}
        className="font-[family-name:var(--font-playfair)] text-5xl leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
      >
        {HERO.title}{" "}
        <span className="bg-gradient-to-r from-accent to-amber-400 bg-clip-text text-transparent">
          {HERO.highlight}
        </span>
      </motion.h1>

      <motion.p
        variants={childVariants}
        className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg md:text-xl"
      >
        {HERO.subtitle}
      </motion.p>

      <motion.div
        variants={childVariants}
        className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <Button
          size="xl"
          className="group relative overflow-hidden bg-primary px-8 py-6 text-base font-semibold text-white shadow-2xl shadow-primary/30 transition-all duration-300 hover:bg-primary-dark hover:shadow-primary/40"
        >
          <span className="relative z-10 flex items-center gap-2">
            {HERO.cta.primary}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Button>
        <Button
          variant="outline"
          size="xl"
          className="group border-white/30 px-8 py-6 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10"
        >
          <span className="flex items-center gap-2">
            <Play className="h-4 w-4 fill-white transition-transform duration-300 group-hover:scale-110" />
            {HERO.cta.secondary}
          </span>
        </Button>
      </motion.div>
    </motion.div>
  );
}
