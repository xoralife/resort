import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Offers",
  description: "Exclusive offers and packages for your dream getaway.",
};

export default function OffersPage() {
  return (
    <main>
      <Header />
      <section className="min-h-[60vh] pt-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-serif)] text-5xl font-bold text-gray-900">
            Offers
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
            Exclusive packages and seasonal deals for your next escape.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
