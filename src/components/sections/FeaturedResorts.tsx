"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResortCard } from "./resorts/ResortCard";
import { FEATURED_RESORTS } from "@/data/resorts";

export function FeaturedResorts() {
  return (
    <section className="relative bg-gray-50 py-20 sm:py-28">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 h-96 w-96 bg-primary/[0.03] blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-accent/[0.03] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
            Curated Collection
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Featured Resorts
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500">
            Discover our hand-picked selection of the world&apos;s most extraordinary
            resorts, each offering a unique gateway to paradise.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_RESORTS.map((resort, i) => (
            <ResortCard key={resort.id} resort={resort} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            className="group gap-2 border-gray-300 px-8 py-5 text-sm font-semibold text-gray-700 hover:border-primary hover:text-primary"
          >
            View All Resorts
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
