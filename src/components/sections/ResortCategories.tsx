"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CATEGORIES } from "@/data/categories";

export function ResortCategories() {
  return (
    <section className="border-t border-gray-100 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="mx-auto max-w-xl text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Browse by Style
          </h2>
          <p className="mt-3 text-base text-gray-500">
            From beachfront villas to mountain retreats, find your perfect escape.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <motion.a
              key={cat.id}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.06, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="group relative flex h-52 items-end overflow-hidden rounded-xl sm:h-60"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="relative z-10 w-full p-5">
                <h3 className="text-lg font-semibold text-white">
                  {cat.title}
                </h3>
                <p className="mt-0.5 text-sm text-white/70">{cat.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
