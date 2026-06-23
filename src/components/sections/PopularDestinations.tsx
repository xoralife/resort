"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import { POPULAR_DESTINATIONS } from "@/data/destinations";

export function PopularDestinations() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
            Explore the World
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Popular Destinations
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Journey to the most coveted destinations on earth, each offering its own unique magic.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {POPULAR_DESTINATIONS.map((dest, i) => (
            <motion.a
              key={dest.id}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
              className={`group relative overflow-hidden rounded-2xl ${i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
            >
              <div className={`relative ${i === 0 ? "h-96 sm:h-[520px]" : "h-64 sm:h-72"}`}>
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <div className="flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                  <span className="text-sm font-semibold text-white">{dest.rating}</span>
                </div>
                <h3 className="mt-1 font-[family-name:var(--font-playfair)] text-xl font-bold text-white sm:text-2xl">
                  {dest.name}
                </h3>
                <div className="mt-1 flex items-center gap-1.5 text-sm text-white/70">
                  <MapPin className="h-3.5 w-3.5" />
                  {dest.country}
                </div>
                <p className="mt-1 text-xs font-medium text-white/50">
                  {dest.resortCount} luxury resorts
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
