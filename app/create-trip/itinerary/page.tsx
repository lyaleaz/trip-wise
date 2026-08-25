
"use client";

export default function Itinerary() {
    return (
        <main className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-zinc-900">
                        Your Personalized Itinerary
                    </h1>

                    <p className="mt-2 text-lg text-zinc-600">
                        Here is your trip plan based on your preferences.
                    </p>
                </div>

                {/* Trip summary */}
                <div className="mb-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-zinc-900">
                        Italy
                    </h2>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div>
                            <p className="text-sm text-zinc-500">
                                Dates
                            </p>
                            <p className="font-medium text-zinc-900">
                                Aug 25 – Aug 29, 2026
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-zinc-500">
                                Travelers
                            </p>
                            <p className="font-medium text-zinc-900">
                                1 Traveler
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-zinc-500">
                                Travel pace
                            </p>
                            <p className="font-medium capitalize text-zinc-900">
                                Relaxed
                            </p>
                        </div>
                    </div>
                </div>

                {/* Day 1 */}
                <div className="mb-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-zinc-900">
                            Day 1 — Rome
                        </h2>

                        <p className="mt-1 text-sm text-zinc-500">
                            Arrival and exploring the historic center
                        </p>
                    </div>

                    <div className="space-y-5">

                        <div className="flex gap-4">
                            <div className="w-16 shrink-0 text-sm font-medium text-sky-600">
                                09:00
                            </div>

                            <div>
                                <h3 className="font-medium text-zinc-900">
                                    Breakfast
                                </h3>

                                <p className="mt-1 text-sm text-zinc-600">
                                    Start your day with a traditional Italian breakfast.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-16 shrink-0 text-sm font-medium text-sky-600">
                                10:30
                            </div>

                            <div>
                                <h3 className="font-medium text-zinc-900">
                                    Colosseum
                                </h3>

                                <p className="mt-1 text-sm text-zinc-600">
                                    Explore one of Rome's most famous historical landmarks.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-16 shrink-0 text-sm font-medium text-sky-600">
                                13:00
                            </div>

                            <div>
                                <h3 className="font-medium text-zinc-900">
                                    Lunch
                                </h3>

                                <p className="mt-1 text-sm text-zinc-600">
                                    Enjoy authentic Italian food at a local restaurant.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-16 shrink-0 text-sm font-medium text-sky-600">
                                15:00
                            </div>

                            <div>
                                <h3 className="font-medium text-zinc-900">
                                    Roman Forum
                                </h3>

                                <p className="mt-1 text-sm text-zinc-600">
                                    Walk through the ancient heart of Rome.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-16 shrink-0 text-sm font-medium text-sky-600">
                                19:00
                            </div>

                            <div>
                                <h3 className="font-medium text-zinc-900">
                                    Dinner
                                </h3>

                                <p className="mt-1 text-sm text-zinc-600">
                                    Relax and enjoy a traditional Italian dinner.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Day 2 */}
                <div className="mb-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-zinc-900">
                            Day 2 — Rome
                        </h2>

                        <p className="mt-1 text-sm text-zinc-500">
                            Art, culture, and local experiences
                        </p>
                    </div>

                    <div className="space-y-5">

                        <div className="flex gap-4">
                            <div className="w-16 shrink-0 text-sm font-medium text-sky-600">
                                09:30
                            </div>

                            <div>
                                <h3 className="font-medium text-zinc-900">
                                    Vatican Museums
                                </h3>

                                <p className="mt-1 text-sm text-zinc-600">
                                    Discover famous artworks and historical collections.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-16 shrink-0 text-sm font-medium text-sky-600">
                                13:00
                            </div>

                            <div>
                                <h3 className="font-medium text-zinc-900">
                                    Lunch in Trastevere
                                </h3>

                                <p className="mt-1 text-sm text-zinc-600">
                                    Explore local food and enjoy a relaxed lunch.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-16 shrink-0 text-sm font-medium text-sky-600">
                                15:30
                            </div>

                            <div>
                                <h3 className="font-medium text-zinc-900">
                                    Explore Trastevere
                                </h3>

                                <p className="mt-1 text-sm text-zinc-600">
                                    Walk through the neighborhood and discover local shops and streets.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-16 shrink-0 text-sm font-medium text-sky-600">
                                19:00
                            </div>

                            <div>
                                <h3 className="font-medium text-zinc-900">
                                    Dinner
                                </h3>

                                <p className="mt-1 text-sm text-zinc-600">
                                    Finish the day with a relaxed Italian dinner.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                    <button
                        className="rounded-full bg-sky-600 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-sky-700"
                    >
                        Save Trip
                    </button>

                    <button
                        className="rounded-full border border-zinc-300 px-8 py-3 text-base font-semibold text-zinc-700 transition-colors hover:bg-zinc-50"
                    >
                        Create Another Trip
                    </button>

                </div>

            </div>
        </main>
    );
}