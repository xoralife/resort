"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  return (
    <section className="border-t border-gray-100 bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="mx-auto max-w-xl text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Stay in the Loop
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Get exclusive offers, travel inspiration, and early access to new resorts.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.4 }}
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <div className="flex-1">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
              required
            />
          </div>
          <Button type="submit" className="gap-2 px-5">
            Subscribe
            <Send className="h-4 w-4" />
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
