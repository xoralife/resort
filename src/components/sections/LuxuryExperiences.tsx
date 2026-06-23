"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EXPERIENCES } from "@/data/destinations";

export function LuxuryExperiences() {
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
            Curated Experiences
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Elevate your stay with moments designed to inspire.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white transition-shadow duration-300 hover:shadow-sm sm:flex-row"
            >
              <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:w-64">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 256px"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {exp.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                  {exp.description}
                </p>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-8 text-center"
        >
          <Button variant="outline" className="gap-2 px-6 text-sm">
            View All Experiences
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
