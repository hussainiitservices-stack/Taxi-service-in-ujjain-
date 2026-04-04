import Link from "next/link";
import { Car, Mail, MapPinned, ShieldCheck, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/animations/Reveal";
import HeroCarScene from "@/components/three/HeroCarScene";
import { RouteCard, type RouteCardModel } from "@/components/cards/RouteCard";
import ContactForm from "@/components/contact/ContactForm";
import { CONTACT_PHONE } from "@/lib/config";

const services = [
  {
    title: "Airport & Railway Pickup",
    description: "On-time pickup with tracking. Comfortable rides to your destination.",
    icon: Zap,
  },
  {
    title: "Local City Taxi",
    description: "Ujjain city rides with safe driving and clean cars.",
    icon: MapPinned,
  },
  {
    title: "Outstation Trips",
    description: "Intercity cab bookings for weekends and holidays.",
    icon: ShieldCheck,
  },
  {
    title: "Corporate & Group Booking",
    description: "Flexible timings for office, events and group travel.",
    icon: Mail,
  },
];

const popularRoutes: RouteCardModel[] = [
  {
    id: "u-airport-to-local",
    from: "Ujjain Airport",
    to: "Ujjain Local",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Indore%20Airport%20terminal%20in%20march%202021.png",
  },
  {
    id: "u-ujjain-local",
    from: "Ujjain City",
    to: "Ujjain City (Local)",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mahakaleshwar_ujjain.jpg",
  },
  {
    id: "u-ujjain-to-indore",
    from: "Ujjain",
    to: "Indore",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Rajwada-Indore.jpg",
  },
  {
    id: "u-ujjain-to-omkareshwar",
    from: "Ujjain",
    to: "Omkareshwar",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Omkareshwar%20Temple%2002.jpg",
  },
  {
    id: "u-ujjain-to-maheshwar",
    from: "Ujjain",
    to: "Maheshwar",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/0102321%20Maheshwar%20Ghats%20and%20Fort%2C%20Ahilya%20Bai%20Monuments%2C%20Madhya%20Pradesh%20055.jpg",
  },
  {
    id: "u-ujjain-to-mandu",
    from: "Ujjain",
    to: "Mandu",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Jahaj%20Mahal%20Mandu%20inside%20view.jpg",
  },
  {
    id: "u-ujjain-to-dewas",
    from: "Ujjain",
    to: "Dewas",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Maa%20Tulja%20Bhawani%20Temple%2C%20Tekri%20Dewas.jpg",
  },
  {
    id: "u-ujjain-to-baglamukhi",
    from: "Ujjain",
    to: "Baglamukhi",
    imageUrl:
      "https://commons.wikimedia.org/wiki/Special:FilePath/MAA%20BAGALAMUKHI.jpg",
  },
];

export default function Home() {
  return (
    <div className="relative flex flex-col flex-1 bg-gradient-to-b from-zinc-50 to-white font-sans">
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10">
        <section
          id="home"
          className="relative scroll-mt-24 overflow-hidden rounded-[2rem] border border-zinc-200/70 bg-white/70 p-6 md:p-10"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="absolute -right-24 -top-10 h-56 w-56 rounded-full bg-indigo-400/20 blur-3xl" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/70 px-4 py-2 text-sm text-zinc-700 shadow-sm">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-950 text-white">
                    <Car size={16} />
                  </span>
                  Affordable rides in Ujjain, all day.
                </div>
              </Reveal>

              <Reveal delay={0.1} className="mt-5">
                <h1 className="text-balance text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
                  Car Taxi Service in Ujjain
                </h1>
              </Reveal>

              <Reveal delay={0.2} className="mt-4">
                <p className="max-w-xl text-pretty text-base leading-7 text-zinc-600 md:text-lg">
                  Safe, fast and affordable taxi booking for airport, railway and
                  local routes. Clean cars, polite drivers and on-time pickups.
                </p>
              </Reveal>

              <Reveal delay={0.25} className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="justify-center">
                  <Link href="/#contact">Book a ride</Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="justify-center">
                  <Link href="/#routes">Popular routes</Link>
                </Button>
              </Reveal>

              <Reveal delay={0.3} className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl border border-zinc-200/70 bg-white/70 px-4 py-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-700">
                    ✅
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900">24/7 Service</div>
                    <div className="text-xs text-zinc-600">Call/WhatsApp: {CONTACT_PHONE}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-zinc-200/70 bg-white/70 px-4 py-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-700">
                    🧼
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900">Clean Cars</div>
                    <div className="text-xs text-zinc-600">Comfort first</div>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="rounded-[2rem] border border-zinc-200/70 bg-white/70 p-5 md:p-6">
                <div className="text-sm font-semibold text-zinc-900">
                  Quick booking
                </div>
                <div className="mt-4">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mt-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200/70 bg-gradient-to-br from-zinc-900 to-zinc-800 p-4">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.35),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.25),transparent_55%)]" />
              <div className="relative h-[260px] sm:h-[340px] md:h-[420px]">
                <HeroCarScene className="h-full w-full" />
              </div>
              <div className="relative mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <div className="text-sm font-semibold text-white">Real-time booking</div>
                <div className="text-xs text-white/80">Fast response on WhatsApp</div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="services" className="mt-14 scroll-mt-24">
          <div className="flex items-end justify-between gap-4">
            <Reveal>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                  Services
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Minimal options, maximum comfort.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="text-sm font-semibold text-zinc-500">Taxi services</span>
            </Reveal>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {services.map((s, idx) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={0.08 * idx}>
                  <Card className="h-full">
                    <CardHeader className="p-0 mb-2">
                      <CardTitle className="flex items-center gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-950 text-white shadow-sm">
                          <Icon size={18} />
                        </span>
                        {s.title}
                      </CardTitle>
                    </CardHeader>
                    <CardDescription>{s.description}</CardDescription>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="routes" className="mt-14 scroll-mt-24">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                  Popular Routes
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Famous destinations with comfortable rides.
                </p>
              </div>
              <a
                href="#contact"
                className="text-sm font-semibold text-zinc-900 hover:text-zinc-700"
              >
                Book now
              </a>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {popularRoutes.map((route, idx) => (
              <Reveal key={route.id} delay={0.08 * idx}>
                <RouteCard route={route} />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-14 scroll-mt-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200/70 bg-gradient-to-br from-zinc-50 to-white p-6 md:p-10">
              <div className="absolute -right-20 top-10 h-60 w-60 rounded-full bg-emerald-500/15 blur-3xl" />
              <div className="relative">
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                  Call / WhatsApp
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  For fastest booking, call or WhatsApp: <span className="font-semibold text-zinc-900">{CONTACT_PHONE}</span>
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="justify-center">
                    <a href={`tel:${CONTACT_PHONE.replace(/\\D/g, "")}`}>Call {CONTACT_PHONE}</a>
                  </Button>
                  <Button asChild size="lg" variant="secondary" className="justify-center">
                    <a href="#routes">View routes</a>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  );
}
