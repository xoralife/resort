"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResortCard } from "./resorts/ResortCard";
import { FEATURED_RESORTS } from "@/data/resorts";

export function FeaturedResorts() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="mx-auto max-w-xl text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Featured Resorts
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Hand-picked escapes for the discerning traveler.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_RESORTS.map((resort, i) => (
            <ResortCard key={resort.id} resort={resort} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-10 text-center"
        >
          <Button variant="outline" className="gap-2 px-6 text-sm">
            View All Resorts
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
