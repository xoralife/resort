"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/90 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-white">R</span>
          </div>
          <span
            className={cn(
              "text-lg font-bold tracking-tight transition-colors duration-500",
              scrolled ? "text-gray-900" : "text-white"
            )}
          >
            Resort
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary",
                scrolled ? "text-gray-700" : "text-white/80"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant={scrolled ? "ghost" : "outline"}
            size="sm"
            className={cn(
              "gap-2 rounded-full",
              !scrolled && "border-white/30 text-white hover:bg-white/10"
            )}
          >
            <User className="h-4 w-4" />
            Sign In
          </Button>
          <Button
            size="sm"
            className="rounded-full px-5"
          >
            Book Now
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "p-2 md:hidden",
            scrolled ? "text-gray-900" : "text-white"
          )}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-gray-100 bg-white md:hidden"
          >
            <nav className="space-y-1 px-4 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex gap-3 px-4">
                <Button size="sm" variant="outline" className="flex-1">
                  Sign In
                </Button>
                <Button size="sm" className="flex-1">
                  Book Now
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
