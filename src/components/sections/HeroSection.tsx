import { HeroContent } from "./hero/HeroContent";
import { SearchWidget } from "./hero/SearchWidget";
import { FloatingCards } from "./hero/FloatingCards";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />

      {/* Decorative gradient orbs */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      {/* Content */}
      <HeroContent />

      {/* Search Widget */}
      <div className="relative z-10 w-full max-w-5xl px-4 pb-8">
        <SearchWidget />
      </div>

      {/* Floating Cards */}
      <FloatingCards />

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30">
          <div className="mt-2 h-2 w-1.5 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
