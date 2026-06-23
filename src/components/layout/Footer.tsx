import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";

const footerLinks = [
  {
    title: "Resorts",
    links: ["Beachfront Villas", "Mountain Retreats", "Overwater Bungalows", "Urban Luxury", "Desert Oases", "Wellness Sanctuaries"],
  },
  {
    title: "Destinations",
    links: ["Maldives", "Bali", "Santorini", "Dubai", "Amalfi Coast", "Bora Bora"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Sustainability", "Partnerships", "Gift Cards"],
  },
  {
    title: "Support",
    links: ["Contact Us", "FAQ", "Cancellation Policy", "Privacy Policy", "Terms of Service", "Travel Insurance"],
  },
];

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-base font-bold text-white">R</span>
              </div>
              <span className="text-lg font-bold tracking-tight">Resort</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Redefining luxury hospitality across the world&apos;s most breathtaking destinations.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                1 Luxury Avenue, Beverly Hills, CA 90210
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                +1 (800) 555-LUXE
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                concierge@luxuryresort.com
              </div>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      <ChevronRight className="h-3 w-3 shrink-0 text-primary opacity-0 transition-all group-hover:opacity-100" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Luxury Resort. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs text-gray-500 transition-colors hover:text-white"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
