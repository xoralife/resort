"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MapPin, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Resort } from "@/types";

interface ResortCardProps {
  resort: Resort;
  index: number;
}

export function ResortCard({ resort, index }: ResortCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-500 hover:shadow-xl"
    >
      <div className="relative h-64 overflow-hidden sm:h-72">
        <Image
          src={resort.images[0]}
          alt={resort.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        <button
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-colors hover:bg-white/40"
          aria-label="Add to favorites"
        >
          <Heart className="h-4 w-4 text-white" />
        </button>

        <Badge
          variant="accent"
          className="absolute top-4 left-4 px-3 py-1 text-[11px] font-semibold tracking-wider uppercase shadow-lg"
        >
          Featured
        </Badge>
      </div>

      <div className="p-5 sm:p-6">
        <div className="mb-1 flex items-center gap-1.5">
          <Star className="h-4 w-4 fill-accent text-accent" />
          <span className="text-sm font-semibold text-gray-900">
            {resort.rating}
          </span>
          <span className="text-sm text-gray-400">
            ({resort.reviewCount} reviews)
          </span>
        </div>

        <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-gray-900">
          {resort.name}
        </h3>

        <div className="mt-1.5 flex items-center gap-1.5 text-sm text-gray-500">
          <MapPin className="h-3.5 w-3.5" />
          {resort.location}, {resort.country}
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-500">
          {resort.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {resort.amenities.slice(0, 3).map((a) => (
            <span
              key={a}
              className="rounded-full bg-gray-100 px-3 py-1 text-[11px] font-medium text-gray-600"
            >
              {a}
            </span>
          ))}
          {resort.amenities.length > 3 && (
            <span className="rounded-full bg-gray-100 px-3 py-1 text-[11px] font-medium text-gray-400">
              +{resort.amenities.length - 3}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              ${resort.pricePerNight}
            </span>
            <span className="text-sm text-gray-400"> / night</span>
          </div>
          <Button size="sm" className="rounded-full px-5">
            Book Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
