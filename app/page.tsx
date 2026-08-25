import Link from "next/link";

export default function Home() {
  const steps = [
    {
      number: 1,
      title: "Tell us about your trip",
      description:
        "Share your destination, dates, budget, and preferences so we know what matters most to you.",
    },
    {
      number: 2,
      title: "Get your personalized itinerary",
      description:
        "Trip-Wise uses AI to create a day-by-day plan tailored to your travel style and interests.",
    },
    {
      number: 3,
      title: "Travel your way",
      description:
        "Review, edit, and customize your itinerary until every day feels exactly right.",
    },
  ] as const;
//Separate data from the UI
  const features = [
    {
      icon: "✨",
      title: "Personalized Plans",
      description:
        "Every itinerary reflects your interests, pace, and travel style — not a one-size-fits-all template.",
    },
    {
      icon: "🧭",
      title: "Smart Itineraries",
      description:
        "AI organizes your days logically, balancing must-see sights with downtime so nothing feels rushed.",
    },
    {
      icon: "💰",
      title: "Plan Within Your Budget",
      description:
        "Set your spending limits upfront and get recommendations that keep your trip affordable without compromise.",
    },
  ] as const; //It makes the data more stable from a TypeScript perspective.

  return (
    <main className="flex flex-1 flex-col">
      <div className="flex flex-1 items-center justify-center px-6 py-16 sm:px-10 lg:px-16">
        <section className="flex w-full max-w-5xl flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-16">
          <div className="flex flex-col items-center text-center md:max-w-xl md:items-start md:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Plan smarter. Travel better.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Tell us where you want to go, and Trip-Wise builds a personalized
              itinerary so you spend less time researching and more time exploring.
            </p>
            <button
              type="button"
              className="mt-8 rounded-full bg-sky-600 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600"
            >
              Start Planning
            </button>
          </div>

          <div
            className="flex h-56 w-full max-w-sm shrink-0 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-teal-100 p-8 dark:from-sky-950 dark:to-teal-950 sm:h-64 md:h-72 md:w-80"
            aria-hidden="true"
          >
            <span className="text-6xl sm:text-7xl" role="img" aria-label="Airplane">
              ✈️
            </span>
            <div className="mt-6 flex gap-3">
              <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-zinc-700 shadow-sm dark:bg-zinc-800/80 dark:text-zinc-200">
                🗺️ Destinations
              </span>
              <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-zinc-700 shadow-sm dark:bg-zinc-800/80 dark:text-zinc-200">
                📅 Itinerary
              </span>
              
            </div>
          </div>
        </section>
      </div>

      <section
        id="how-it-works"
        aria-labelledby="how-it-works-heading"
        className="border-t border-zinc-200 px-6 py-16 dark:border-zinc-800 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-5xl">
          <header className="mx-auto max-w-2xl text-center">
            <h2
              id="how-it-works-heading"
              className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
            >
              How Trip-Wise works
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              From your first idea to a ready-to-go itinerary, Trip-Wise guides
              you through three simple steps.
            </p>
          </header>

          <ol className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
            {steps.map(({ number, title, description }) => (
              <li
                key={number}
                className="flex flex-col items-center rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900/50 md:items-start md:text-left"
              >
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-600 text-base font-semibold text-white dark:bg-sky-500"
                >
                  {number}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="features"
        aria-labelledby="features-heading"
        className="border-t border-zinc-200 px-6 py-16 dark:border-zinc-800 sm:px-10 lg:px-16"
      >
        {/* UI Correct connection between section and heading. */}
        <div className="mx-auto max-w-5xl">
          <header className="mx-auto max-w-2xl text-center">
            <h2
              id="features-heading"
              className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
            >
              Why Trip-Wise?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Trip planning should feel exciting, not overwhelming. Trip-Wise
              gives you the tools to plan with confidence.
            </p>
          </header>

          <ul className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
            {/* Data → UI - destructuring  replace: features.map((feature) => (
  <h3>{feature.title}</h3>
  <p>{feature.description}</p>
))*/}
            
            {features.map(({ icon, title, description }) => (
              <li
                key={title}
                className="flex flex-col items-center rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900/50 md:items-start md:text-left"
              >
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-teal-100 text-2xl dark:from-sky-950 dark:to-teal-950"
                >
                  {icon}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="cta"
        aria-labelledby="cta-heading"
        className="border-t border-zinc-200 px-6 py-16 dark:border-zinc-800 sm:px-10 lg:px-16"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-center">
          <div className="flex w-full max-w-2xl flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-gradient-to-br from-sky-50 to-teal-50 p-10 text-center dark:border-zinc-800 dark:from-sky-950/50 dark:to-teal-950/50 sm:p-12">
            <h2
              id="cta-heading"
              className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
            >
              Ready to plan your next adventure?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Tell us where you want to go, and Trip-Wise will help you build a
              personalized itinerary.
            </p>
            <Link
              href="/create-trip"
              className="mt-8 rounded-full bg-sky-600 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600"
            >
              Start Planning
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
