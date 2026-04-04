import Link from "next/link";

const navItems: Array<{ href: string; label: string }> = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#routes", label: "Routes" },
  { href: "/#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-3 text-zinc-900"
          aria-label="Car Taxi Service Home"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-950 text-white shadow-sm">
            🚕
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">Car Taxi Service</span>
            <span className="text-xs text-zinc-500">Ujjain</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-700 hover:text-zinc-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="hidden rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 sm:inline-flex"
          >
            Book Now
          </Link>
          <Link
            href="/#contact"
            className="inline-flex rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 sm:hidden"
          >
            Book
          </Link>
        </div>
      </div>
    </header>
  );
}

