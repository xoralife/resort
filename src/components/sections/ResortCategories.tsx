"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/data/categories";

export function ResortCategories() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
            Browse by Style
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Resort Categories
          </h2>
          <p className="mt-4 text-base text-gray-500">
            From overwater bungalows to mountain chalets, find the style that speaks to you.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {CATEGORIES.map((cat, i) => (
            <motion.a
              key={cat.id}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="group relative flex h-56 items-end overflow-hidden rounded-2xl sm:h-64 lg:h-72"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="relative z-10 flex w-full items-end justify-between p-5 sm:p-6">
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white">
                    {cat.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">{cat.description}</p>
                  <p className="mt-1 text-xs font-medium text-white/50">
                    {cat.resortCount} resorts
                  </p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white/30">
                  <ArrowRight className="h-4 w-4 text-white" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
