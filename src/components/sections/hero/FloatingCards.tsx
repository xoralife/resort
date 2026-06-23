"use client";

import { motion } from "framer-motion";
import { Star, Tag, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { FLOATING_CARDS } from "@/data/hero";

const iconMap = {
  star: Star,
  discount: Tag,
  users: Users,
};

const positionStyles = {
  "top-right": "top-8 right-8",
  "bottom-left": "bottom-8 left-8",
  "bottom-right": "bottom-8 right-8",
};

export function FloatingCards() {
  return (
    <>
      {FLOATING_CARDS.map((card, i) => {
        const Icon = iconMap[card.icon as keyof typeof iconMap];
        return (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.2, duration: 0.6 }}
            className={cn(
              "absolute hidden lg:flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur-md px-4 py-3 shadow-lg",
              positionStyles[card.position as keyof typeof positionStyles]
            )}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{card.label}</p>
              <p className="text-sm font-semibold">{card.value}</p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}
