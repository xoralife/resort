"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { POPULAR_DESTINATIONS } from "@/data/destinations";

export function PopularDestinations() {
  return (
    <section className="border-t border-gray-100 bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="mx-auto max-w-xl text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Popular Destinations
          </h2>
          <p className="mt-3 text-base text-gray-500">
            The world&apos;s most coveted destinations, waiting for you.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {POPULAR_DESTINATIONS.map((dest, i) => (
            <motion.a
              key={dest.id}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.06, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
              className={`group relative overflow-hidden rounded-xl ${i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
            >
              <div className={`relative ${i === 0 ? "h-80 sm:h-[440px]" : "h-52 sm:h-56"}`}>
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 fill-white/90 text-white/90" />
                  <span className="text-sm font-medium text-white">{dest.rating}</span>
                </div>
                <h3 className="mt-0.5 text-lg font-semibold text-white">
                  {dest.name}
                </h3>
                <p className="text-sm text-white/70">
                  {dest.resortCount} resorts
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
