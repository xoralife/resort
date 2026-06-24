"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tag, Clock, CheckCircle2, Copy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OFFERS } from "@/data/offers";

function OfferCard({ offer, index }: { offer: (typeof OFFERS)[number]; index: number }) {
  const [copied, setCopied] = useState(false);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
      className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition-shadow duration-300 hover:shadow-sm"
    >
      <div className="relative h-48 overflow-hidden sm:h-56">
        <Image
          src={offer.image}
          alt={offer.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-bold text-white shadow-sm">
          <Tag className="h-3 w-3" />
          {offer.discount}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">{offer.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{offer.description}</p>

        <div className="mt-3 space-y-1.5">
          {offer.highlights.map((h) => (
            <div key={h} className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" />
              {h}
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
          <Clock className="h-3.5 w-3.5" />
          Valid until {offer.validUntil}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <code className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-mono font-semibold text-primary tracking-wider">
            {offer.code}
          </code>
          <button
            onClick={() => copyCode(offer.code)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition-colors hover:border-primary hover:text-primary"
            title="Copy code"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>
        {copied && <p className="mt-1.5 text-xs font-medium text-primary">Copied!</p>}

        <Button className="mt-4 w-full gap-2 text-sm">
          Book Now
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}

export default function OffersPage() {
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
              Exclusive Offers
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-lg text-gray-500">
              Unlock special rates and packages for your next luxury escape.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {OFFERS.map((offer, i) => (
              <OfferCard key={offer.id} offer={offer} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
