import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with our concierge team.",
};

export default function ContactPage() {
  return (
    <main>
      <Header />
      <section className="min-h-[60vh] pt-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-serif)] text-5xl font-bold text-gray-900">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
            Our concierge team is ready to assist you.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
