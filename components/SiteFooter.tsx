import Link from "next/link";

import { CONTACT_PHONE, WHATSAPP_NUMBER } from "@/lib/config";

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200/70 bg-white/70 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-950 text-white shadow-sm">
                🚕
              </span>
              <div>
                <div className="text-sm font-semibold text-zinc-900">
                  Car Taxi Service
                </div>
                <div className="text-xs text-zinc-500">Ujjain • 24/7 Service</div>
              </div>
            </div>

            <p className="mt-3 max-w-md text-sm leading-6 text-zinc-600">
              Minimal, safe and on-time taxi service for airport, railway and local
              rides in Ujjain.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <div className="text-xs font-semibold text-zinc-900">Pages</div>
              <Link className="text-sm text-zinc-600 hover:text-zinc-950" href="/#home">
                Home
              </Link>
              <Link
                className="text-sm text-zinc-600 hover:text-zinc-950"
                href="/#services"
              >
                Services
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-xs font-semibold text-zinc-900">&nbsp;</div>
              <Link
                className="text-sm text-zinc-600 hover:text-zinc-950"
                href="/#routes"
              >
                Routes
              </Link>
              <a
                className="text-sm text-zinc-600 hover:text-zinc-950"
                href={`tel:${CONTACT_PHONE.replace(/\D/g, "")}`}
              >
                Call: {CONTACT_PHONE}
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-xs font-semibold text-zinc-900">&nbsp;</div>
              <Link
                className="text-sm text-zinc-600 hover:text-zinc-950"
                href="/#contact"
              >
                Contact
              </Link>
              <a
                className="text-sm text-zinc-600 hover:text-zinc-950"
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp: {CONTACT_PHONE}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Car Taxi Service. All rights reserved.</div>
          <div className="opacity-90">
            Design &amp; Developed by{" "}
            <a
              className="font-semibold text-zinc-700 hover:text-zinc-950"
              href="https://Hussainiitservices.com"
              target="_blank"
              rel="noreferrer"
            >
              Hussainiitservices.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

