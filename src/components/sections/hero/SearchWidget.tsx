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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
      className="relative z-20 mx-auto mt-10 w-full max-w-4xl px-4"
    >
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="grid grid-cols-1 divide-y divide-gray-100 sm:grid-cols-5 sm:divide-x sm:divide-y-0">
          <div className="flex items-center gap-3 px-4 py-3.5 sm:col-span-1">
            <MapPin className="h-4 w-4 shrink-0 text-gray-400" />
            <div className="min-w-0 flex-1">
              <label className="block text-xs font-medium text-gray-500">
                Destination
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="mt-0.5 w-full appearance-none bg-transparent text-sm text-gray-900 outline-none"
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

          <div className="flex items-center gap-3 px-4 py-3.5">
            <CalendarDays className="h-4 w-4 shrink-0 text-gray-400" />
            <div className="min-w-0 flex-1">
              <label className="block text-xs font-medium text-gray-500">
                Check In
              </label>
              <input
                type="date"
                className="mt-0.5 w-full bg-transparent text-sm text-gray-900 outline-none [color-scheme:light]"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-3.5">
            <CalendarDays className="h-4 w-4 shrink-0 text-gray-400" />
            <div className="min-w-0 flex-1">
              <label className="block text-xs font-medium text-gray-500">
                Check Out
              </label>
              <input
                type="date"
                className="mt-0.5 w-full bg-transparent text-sm text-gray-900 outline-none [color-scheme:light]"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-3.5">
            <Users className="h-4 w-4 shrink-0 text-gray-400" />
            <div className="min-w-0 flex-1">
              <label className="block text-xs font-medium text-gray-500">
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="mt-0.5 w-full appearance-none bg-transparent text-sm text-gray-900 outline-none"
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
            <Button className="w-full gap-2 py-4 text-sm font-medium sm:py-3.5">
              <Search className="h-4 w-4" />
              <span className="sm:sr-only lg:not-sr-only">Search</span>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
