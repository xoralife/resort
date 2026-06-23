import { MapPin, Phone, Mail } from "lucide-react";

const footerLinks = [
  {
    title: "Resorts",
    links: ["Beachfront", "Mountain", "Overwater", "Urban", "Desert", "Wellness"],
  },
  {
    title: "Destinations",
    links: ["Maldives", "Bali", "Santorini", "Dubai", "Amalfi", "Bora Bora"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Sustainability", "Gift Cards"],
  },
  {
    title: "Support",
    links: ["Contact", "FAQ", "Privacy", "Terms", "Insurance"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                <span className="text-xs font-bold text-white">R</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">Resort</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Luxury hospitality across the world&apos;s most breathtaking destinations.
            </p>
            <div className="mt-5 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin className="h-4 w-4 shrink-0 text-gray-400" />
                1 Luxury Ave, Beverly Hills, CA
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Phone className="h-4 w-4 shrink-0 text-gray-400" />
                +1 (800) 555-LUXE
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Mail className="h-4 w-4 shrink-0 text-gray-400" />
                concierge@luxuryresort.com
              </div>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                {group.title}
              </h4>
              <ul className="mt-3 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Luxury Resort. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Facebook", "Instagram", "X", "LinkedIn"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-gray-400 transition-colors hover:text-gray-900"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
