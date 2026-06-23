"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DESTINATIONS } from "@/data/hero";

export function SearchWidget() {
  const [destination, setDestination] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="mx-auto mt-10 w-full max-w-4xl"
    >
      <div className="rounded-2xl bg-white/95 backdrop-blur-xl p-2 shadow-2xl shadow-black/10">
        <div className="flex flex-col gap-2 rounded-xl bg-white p-4 sm:flex-row sm:items-center sm:gap-0">
          <div className="flex flex-1 items-center gap-3 border-b border-gray-100 px-4 py-3 sm:border-b-0 sm:border-r">
            <MapPin className="h-5 w-5 shrink-0 text-primary" />
            <div className="flex-1">
              <label className="text-xs font-medium text-gray-500">
                Destination
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-gray-900 outline-none"
              >
                <option value="">Select destination</option>
                {DESTINATIONS.map((d) => (
                  <option key={d.value} value={d.value}>
                    {d.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3 sm:border-b-0 sm:border-r">
            <Calendar className="h-5 w-5 shrink-0 text-primary" />
            <div>
              <label className="text-xs font-medium text-gray-500">
                Check In
              </label>
              <input
                type="date"
                className="block w-full bg-transparent text-sm font-medium text-gray-900 outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3 sm:border-b-0 sm:border-r">
            <Calendar className="h-5 w-5 shrink-0 text-primary" />
            <div>
              <label className="text-xs font-medium text-gray-500">
                Check Out
              </label>
              <input
                type="date"
                className="block w-full bg-transparent text-sm font-medium text-gray-900 outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 sm:border-r">
            <Users className="h-5 w-5 shrink-0 text-primary" />
            <div>
              <label className="text-xs font-medium text-gray-500">
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-gray-900 outline-none"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="px-2 pb-2 sm:pb-0">
            <Button size="xl" className="w-full gap-2 sm:w-auto">
              <Search className="h-4 w-4" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
