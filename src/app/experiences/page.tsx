"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EXPERIENCES } from "@/data/destinations";

export default function ExperiencesPage() {
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
              Experiences
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-lg text-gray-500">
              Elevate your journey with moments that last a lifetime.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white transition-shadow duration-300 hover:shadow-sm sm:flex-row"
              >
                <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:w-72">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 288px"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary-light">
                    <Sparkles className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{exp.description}</p>
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

      <Footer />
    </main>
  );
}
