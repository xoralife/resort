import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Experiences",
  description: "Extraordinary experiences curated for the discerning traveler.",
};

export default function ExperiencesPage() {
  return (
    <main>
      <Header />
      <section className="min-h-[60vh] pt-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-serif)] text-5xl font-bold text-gray-900">
            Experiences
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
            Elevate your journey with moments that last a lifetime.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
