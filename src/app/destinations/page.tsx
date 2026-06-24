"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { POPULAR_DESTINATIONS } from "@/data/destinations";

export default function DestinationsPage() {
  return (
    <main>
      <Header />
      <section className="border-b border-gray-100 bg-gray-50 pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
          >
            <h1 className="font-[family-name:var(--font-serif)] text-4xl font-bold text-gray-900 sm:text-5xl">
              Destinations
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-lg text-gray-500">
              Journey to the most coveted corners of the earth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {POPULAR_DESTINATIONS.map((dest, i) => (
              <motion.a
                key={dest.id}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="relative h-64 overflow-hidden sm:h-72">
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
                  <h3 className="mt-0.5 text-xl font-semibold text-white">{dest.name}</h3>
                  <div className="mt-0.5 flex items-center gap-1 text-sm text-white/70">
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

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-10 text-center"
          >
            <Button variant="outline" className="gap-2 px-6 text-sm">
              View All Destinations
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
