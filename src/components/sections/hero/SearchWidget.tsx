"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEARCH_FIELDS } from "@/data/hero";

export function SearchWidget() {
  const [destination, setDestination] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
      className="relative z-20 mx-auto mt-12 w-full max-w-5xl px-4"
    >
      <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-1.5 shadow-2xl shadow-black/20 backdrop-blur-2xl">
        <div className="grid grid-cols-1 divide-y divide-white/10 rounded-xl bg-white/95 sm:grid-cols-5 sm:divide-x sm:divide-y-0">
          <div className="relative col-span-1 flex items-center gap-3 px-5 py-4 sm:col-span-1">
            <MapPin className="h-5 w-5 shrink-0 text-primary" />
            <div className="min-w-0 flex-1">
              <label className="block text-[11px] font-semibold tracking-wider text-gray-500 uppercase">
                Destination
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="mt-0.5 w-full appearance-none bg-transparent text-sm font-medium text-gray-900 outline-none"
              >
                <option value="">Where to?</option>
                {SEARCH_FIELDS.destinations.map((d) => (
                  <option key={d.value} value={d.value}>
                    {d.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3 px-5 py-4">
            <CalendarDays className="h-5 w-5 shrink-0 text-primary" />
            <div className="min-w-0 flex-1">
              <label className="block text-[11px] font-semibold tracking-wider text-gray-500 uppercase">
                Check In
              </label>
              <input
                type="date"
                className="mt-0.5 w-full bg-transparent text-sm font-medium text-gray-900 outline-none [color-scheme:light]"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 px-5 py-4">
            <CalendarDays className="h-5 w-5 shrink-0 text-primary" />
            <div className="min-w-0 flex-1">
              <label className="block text-[11px] font-semibold tracking-wider text-gray-500 uppercase">
                Check Out
              </label>
              <input
                type="date"
                className="mt-0.5 w-full bg-transparent text-sm font-medium text-gray-900 outline-none [color-scheme:light]"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 px-5 py-4">
            <Users className="h-5 w-5 shrink-0 text-primary" />
            <div className="min-w-0 flex-1">
              <label className="block text-[11px] font-semibold tracking-wider text-gray-500 uppercase">
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="mt-0.5 w-full appearance-none bg-transparent text-sm font-medium text-gray-900 outline-none"
              >
                {SEARCH_FIELDS.guests.map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center p-2">
            <Button className="w-full gap-2 py-6 text-sm font-semibold shadow-lg sm:py-5">
              <Search className="h-4 w-4" />
              <span className="sm:hidden lg:inline">Search</span>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
