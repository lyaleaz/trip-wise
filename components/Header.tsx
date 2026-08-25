import Link from "next/link";

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "/trips", label: "My Trips" },
] as const;

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="shrink-0 text-lg font-bold tracking-tight text-sky-600 dark:text-sky-400"
        >
          Trip-Wise
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-4 sm:gap-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 sm:text-base"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#start-planning"
                className="inline-flex rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 sm:px-6 sm:py-2.5 sm:text-base"
              >
                Start Planning
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
