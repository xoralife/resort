"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_CONTENT } from "@/data/hero";

export function HeroContent() {
  return (
    <div className="relative z-10 mx-auto max-w-5xl px-4 pt-28 text-center sm:pt-32 md:pt-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wider text-white/90 uppercase backdrop-blur-sm">
          Luxury Resort Collection
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mt-6 font-[family-name:var(--font-playfair)] text-5xl leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
      >
        {HERO_CONTENT.title}{" "}
        <span className="text-accent">{HERO_CONTENT.titleHighlight}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg"
      >
        {HERO_CONTENT.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="mt-8 flex items-center justify-center gap-4"
      >
        <Button size="xl" className="shadow-lg shadow-primary/30">
          {HERO_CONTENT.primaryCta}
        </Button>
        <Button variant="outline" size="xl" className="gap-2">
          <Play className="h-4 w-4 fill-white" />
          {HERO_CONTENT.secondaryCta}
        </Button>
      </motion.div>
    </div>
  );
}
