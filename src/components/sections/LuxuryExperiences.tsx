"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EXPERIENCES } from "@/data/destinations";

export function LuxuryExperiences() {
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
            Beyond Accommodation
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Luxury Experiences
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Elevate your stay with extraordinary experiences curated just for you.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-500 hover:shadow-xl sm:flex-row"
            >
              <div className="relative h-56 w-full shrink-0 overflow-hidden sm:h-auto sm:w-72">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 288px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent sm:bg-gradient-to-r" />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-gray-900">
                  {exp.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {exp.description}
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark">
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <Button variant="outline" className="group gap-2 border-gray-300 px-8 py-5 text-sm font-semibold text-gray-700 hover:border-primary hover:text-primary">
            View All Experiences
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
