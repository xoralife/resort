"use client";

import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 sm:py-28">
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Stay Inspired
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Subscribe to receive exclusive offers, travel inspiration, and insider access to our newest resorts before anyone else.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
        >
          <div className="flex-1">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
              required
            />
          </div>
          <Button type="submit" className="gap-2 px-6 py-3.5">
            Subscribe
            <Send className="h-4 w-4" />
          </Button>
        </motion.form>

        <p className="mt-4 text-center text-xs text-gray-400">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
