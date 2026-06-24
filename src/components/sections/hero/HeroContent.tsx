"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO } from "@/data/hero";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function HeroContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-20 mx-auto max-w-5xl px-4 pt-28 text-center sm:pt-32 md:pt-40"
    >
      <motion.div variants={childVariants}>
        <span className="inline-block rounded-full border border-gray-200 bg-white/70 px-4 py-1 text-xs font-medium text-gray-500 tracking-wider uppercase backdrop-blur-sm">
          {HERO.tagline}
        </span>
      </motion.div>

      <motion.h1
        variants={childVariants}
        className="mt-6 font-[family-name:var(--font-serif)] text-5xl leading-[1.1] tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl"
      >
        {HERO.title}{" "}
        <span className="text-primary">{HERO.highlight}</span>
      </motion.h1>

      <motion.p
        variants={childVariants}
        className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg"
      >
        {HERO.subtitle}
      </motion.p>

      <motion.div
        variants={childVariants}
        className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
      >
        <a href="#featured">
          <Button className="px-7 py-5 text-sm font-semibold">
            <span className="flex items-center gap-2">
              {HERO.cta.primary}
              <ArrowRight className="h-4 w-4" />
            </span>
          </Button>
        </a>
        <a href="#">
          <Button
            variant="outline"
            className="border-gray-300 px-7 py-5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            <span className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              {HERO.cta.secondary}
            </span>
          </Button>
        </a>
      </motion.div>
    </motion.div>
  );
}
