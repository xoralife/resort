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
  "top-24 right-6",
  "bottom-36 left-6",
  "bottom-36 right-6",
] as const;

const delays = [0.9, 1.2, 1.5];

export function FloatingCards() {
  return (
    <>
      {STATS.map((stat, i) => {
        const Icon = iconMap[stat.icon as keyof typeof iconMap];
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, x: i === 1 ? -30 : 30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              delay: delays[i],
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1] as const,
            }}
            className={cn(
              "absolute z-30 hidden rounded-2xl border border-white/20 bg-white/80 px-5 py-4 shadow-xl shadow-black/5 backdrop-blur-xl lg:flex lg:flex-col",
              positions[i]
            )}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xl font-bold leading-none text-gray-900">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-gray-500">
                  {stat.label}
                </p>
              </div>
            </div>
            <p className="mt-1.5 text-[11px] font-medium text-gray-400">
              {stat.sublabel}
            </p>
          </motion.div>
        );
      })}
    </>
  );
}
