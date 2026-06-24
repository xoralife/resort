"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Resort } from "@/types";

interface ResortCardProps {
  resort: Resort;
  index: number;
}

export function ResortCard({ resort, index }: ResortCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
      className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition-shadow duration-300 hover:shadow-sm dark:border-gray-800 dark:bg-dark/50 dark:hover:shadow-black/20"
    >
      <div className="relative h-56 overflow-hidden sm:h-60">
        <Image
          src={resort.images[0]}
          alt={resort.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      <div className="p-5">
        <div className="mb-1 flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-primary text-primary" />
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {resort.rating}
          </span>
          <span className="text-sm text-gray-400 dark:text-gray-500">
            ({resort.reviewCount})
          </span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {resort.name}
        </h3>

        <div className="mt-1 flex items-center gap-1 text-sm text-gray-400 dark:text-gray-500">
          <MapPin className="h-3.5 w-3.5" />
          {resort.location}, {resort.country}
        </div>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          {resort.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {resort.amenities.slice(0, 3).map((a) => (
            <span
              key={a}
              className="rounded-md bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400"
            >
              {a}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-800">
          <div>
            <span className="text-xl font-semibold text-gray-900 dark:text-white">
              ${resort.pricePerNight}
            </span>
            <span className="text-sm text-gray-400 dark:text-gray-500"> / night</span>
          </div>
          <Button size="sm" className="px-4">
            Book Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
