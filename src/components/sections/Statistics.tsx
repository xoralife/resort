"use client";

import { motion } from "framer-motion";
import { STATS_DATA } from "@/data/testimonials";
import { Building2, Users, Star, HeartHandshake } from "lucide-react";

const icons = [Building2, Users, Star, HeartHandshake];

export function Statistics() {
  return (
    <section className="relative bg-primary py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS_DATA.map((stat, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-white/70">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
