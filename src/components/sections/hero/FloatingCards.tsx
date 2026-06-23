"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { STATS } from "@/data/hero";

const iconMap = {
  star: Star,
  shield: ShieldCheck,
  building: Building2,
};

const positions = [
  "top-28 right-8",
  "bottom-40 left-8",
  "bottom-40 right-8",
] as const;

const delays = [0.8, 1.0, 1.2];

export function FloatingCards() {
  return (
    <>
      {STATS.map((stat, i) => {
        const Icon = iconMap[stat.icon as keyof typeof iconMap];
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: delays[i],
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1] as const,
            }}
            className={cn(
              "absolute z-30 hidden rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm lg:flex lg:items-center lg:gap-3",
              positions[i]
            )}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-light">
              <Icon className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-base font-semibold text-gray-900">
                {stat.value}
              </p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}
