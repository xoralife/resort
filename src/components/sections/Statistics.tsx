"use client";

import { motion } from "framer-motion";
import { STATS_DATA } from "@/data/testimonials";
import { Building2, Users, Star, HeartHandshake } from "lucide-react";

const icons = [Building2, Users, Star, HeartHandshake];

export function Statistics() {
  return (
    <section className="border-t border-gray-100 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS_DATA.map((stat, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
                className="text-center"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-500">
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
