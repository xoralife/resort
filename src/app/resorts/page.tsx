"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ResortCard } from "@/components/sections/resorts/ResortCard";
import { FEATURED_RESORTS } from "@/data/resorts";

export default function ResortsPage() {
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
              Luxury Resorts
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-lg text-gray-500">
              Discover our curated collection of the world&apos;s finest resorts.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_RESORTS.map((resort, i) => (
              <ResortCard key={resort.id} resort={resort} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
