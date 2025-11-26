import Link from "next/link";

const SPONSORS = [
  {
    name: "AWS",
    src: "AWS.png",
    tier: "Platinum Sponsor",
  },
  {
    name: "StudyIn",
    src: "/study_in.jpg",
    tier: "Gold Sponsor",
  },
  {
    name: "Olive Hospital",
    src: "/olive_hospital.png",
    tier: "Gold Sponsor",
  },
  {
    name: "Renavart",
    src: "/renavart_sponsor.png",
    tier: "Silver Sponsor",
  },
  {
    name: "BharathCloud",
    src: "/bharat_cloud.png",
    tier: "Silver Sponsor",
  },
  {
    name: "Chika-A Coffee Collective",
    src: "/chika.png",
    tier: "Silver Sponsor",
  },
  {
    name: "Karachi",
    src: "/karachi.jpg",
    tier: "Bronze Sponsor",
  },
  {
    name: "Full Stack Academy",
    src: "/fsa_sponsor.png",
    tier: "Educational Partner",
  },
  {
    name: "EPW INDIA LIMITED",
    src: "/epw.png",
    tier: "Hydration Partner",
  },
];

const SPONSOR_LINKS: Record<string, string> = {
  "Olive Hospital": "/sponsors/olive_hospital",
  "Chika-A Coffee Collective": "/sponsors/chika_cafe",
  "EPW INDIA LIMITED": "/sponsors/epw",
  "Full Stack Academy": "/sponsors/fsa",
  Renavart: "/sponsors/renavart",
  StudyIn: "/sponsors/study_in",
  Karachi: "/sponsors/karachi",
  BharathCloud: "/sponsors/bharathcloud",
};

export function SponsorsSection() {
  return (
    <section
      id="sponsors"
      aria-labelledby="sponsors-title"
      className="scroll-mt-24 py-8 md:py-12 relative"
    >
      {/* Space-themed background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500/20 via-transparent to-transparent"></div>
        <div className="absolute top-30 right-1/5 w-1 h-1 rounded-full bg-pink-300 animate-ping"></div>
        <div
          className="absolute top-60 left-1/3 w-1 h-1 rounded-full bg-fuchsia-300 animate-ping"
          style={{ animationDelay: "1.1s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/4 w-1 h-1 rounded-full bg-rose-300 animate-ping"
          style={{ animationDelay: "0.7s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h1
          className="text-center text-white font-black tracking-wide mb-8 sm:mb-10"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.1,
            color: "#fff",
            textShadow: "none",
            WebkitTextFillColor: "initial",
            background: "none",
          }}
        >
          SPONSORS
        </h1>

        <div className="backdrop-blur-sm bg-black/20 rounded-xl p-6 border border-pink-500/20 shadow-lg shadow-pink-500/5">
          {/* Group sponsors by tier */}
          <div className="space-y-10">
            {/* Platinum Sponsors */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent">
                Platinum Sponsors
              </h3>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
                {SPONSORS.filter((s) => s.tier === "Platinum Sponsor").map(
                  (s, i) => (
                    <div
                      key={s.name}
                      className="rounded-xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm hover:border-pink-500/30 transition-colors flex flex-col items-center"
                      style={{
                        boxShadow: "0 0 20px rgba(236, 72, 153, 0.1)",
                        animation: `float ${
                          3 + (i % 2)
                        }s ease-in-out infinite ${i * 0.2}s`,
                      }}
                    >
                      {SPONSOR_LINKS[s.name] ? (
                        <Link
                          href={SPONSOR_LINKS[s.name]}
                          className="w-full flex flex-col items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="h-32 flex items-center justify-center mb-4">
                            <img
                              src={s.src || "/placeholder.svg"}
                              alt={`${s.name} logo`}
                              className={`${s.name === "BharatCloud" ? "max-h-48" : "max-h-24"} max-w-full object-contain rounded-lg`}
                            />
                          </div>
                          <div className="text-center">
                            <h4 className="text-lg font-medium text-white">{s.name}</h4>
                            <span className="inline-block mt-1 px-3 py-1 rounded-full bg-gradient-to-r from-gray-300 to-gray-100 text-xs font-semibold text-black">
                              {s.tier}
                            </span>
                          </div>
                        </Link>
                      ) : (
                        <>
                          <div className="h-32 flex items-center justify-center mb-4">
                            <img
                              src={s.src || "/placeholder.svg"}
                              alt={`${s.name} logo`}
                              className={`${s.name === "BharatCloud" ? "max-h-48" : "max-h-24"} max-w-full object-contain rounded-lg`}
                            />
                          </div>
                          <div className="text-center">
                            <h4 className="text-lg font-medium text-white">{s.name}</h4>
                            <span className="inline-block mt-1 px-3 py-1 rounded-full bg-gradient-to-r from-gray-300 to-gray-100 text-xs font-semibold text-black">
                              {s.tier}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Gold Sponsors */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent">
                Gold Sponsors
              </h3>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
                {SPONSORS.filter((s) => s.tier === "Gold Sponsor").map(
                  (s, i) => (
                    <div
                      key={s.name}
                      className="rounded-xl border border-white/10 bg-black/20 p-5 backdrop-blur-sm hover:border-yellow-500/30 transition-colors flex flex-col items-center"
                      style={{
                        boxShadow: "0 0 20px rgba(245, 158, 11, 0.1)",
                        animation: `float ${
                          3 + (i % 2)
                        }s ease-in-out infinite ${i * 0.2}s`,
                      }}
                    >
                      {SPONSOR_LINKS[s.name] ? (
                        <Link
                          href={SPONSOR_LINKS[s.name]}
                          className="w-full flex flex-col items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="h-32 flex items-center justify-center mb-4">
                            <img
                              src={s.src || "/placeholder.svg"}
                              alt={`${s.name} logo`}
                              className={`${s.name === "Olive Hospital" ? "max-h-36" : "max-h-32"} max-w-full object-contain rounded-lg`}
                            />
                          </div>
                          <div className="text-center">
                            <h4 className="text-lg font-medium text-white">{s.name}</h4>
                            <span className="inline-block mt-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 text-xs font-semibold text-black">
                              {s.tier}
                            </span>
                          </div>
                        </Link>
                      ) : (
                        <>
                          <div className="h-32 flex items-center justify-center mb-4">
                            <img
                              src={s.src || "/placeholder.svg"}
                              alt={`${s.name} logo`}
                              className={`${s.name === "BharatCloud" ? "max-h-48" : "max-h-24"} max-w-full object-contain rounded-lg`}
                            />
                          </div>
                          <div className="text-center">
                            <h4 className="text-lg font-medium text-white">{s.name}</h4>
                            <span className="inline-block mt-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 text-xs font-semibold text-black">
                              {s.tier}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Silver Sponsors */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent">
                Silver Sponsors
              </h3>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
                {SPONSORS.filter((s) => s.tier === "Silver Sponsor").map(
                  (s, i) => (
                    <div
                      key={s.name}
                      className="rounded-xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm hover:border-gray-400/30 transition-colors flex flex-col items-center"
                      style={{
                        boxShadow: "0 0 15px rgba(148, 163, 184, 0.1)",
                        animation: `float ${
                          3 + (i % 2)
                        }s ease-in-out infinite ${i * 0.2}s`,
                      }}
                    >
                      {SPONSOR_LINKS[s.name] ? (
                        <Link
                          href={SPONSOR_LINKS[s.name]}
                          className="w-full flex flex-col items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="h-32 flex items-center justify-center mb-4">
                            <img
                              src={s.src || "/placeholder.svg"}
                              alt={`${s.name} logo`}
                              className={`${s.name === "BharatCloud" ? "max-h-48" : "max-h-24"} max-w-full object-contain rounded-lg`}
                            />
                          </div>
                          <div className="text-center">
                            <h4 className="text-base font-medium text-white">{s.name}</h4>
                            <span className="inline-block mt-1 px-2 py-1 rounded-full bg-gradient-to-r from-gray-400 to-slate-300 text-xs font-semibold text-black">
                              {s.tier}
                            </span>
                          </div>
                        </Link>
                      ) : (
                        <>
                          <div className="h-32 flex items-center justify-center mb-4">
                            <img
                              src={s.src || "/placeholder.svg"}
                              alt={`${s.name} logo`}
                              className={`${s.name === "BharatCloud" ? "max-h-48" : "max-h-24"} max-w-full object-contain rounded-lg`}
                            />
                          </div>
                          <div className="text-center">
                            <h4 className="text-base font-medium text-white">{s.name}</h4>
                            <span className="inline-block mt-1 px-2 py-1 rounded-full bg-gradient-to-r from-gray-400 to-slate-300 text-xs font-semibold text-black">
                              {s.tier}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Bronze Sponsors */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent">
                Bronze Sponsors
              </h3>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
                {SPONSORS.filter((s) => s.tier === "Bronze Sponsor").map(
                  (s, i) => (
                    <div
                      key={s.name}
                      className="rounded-xl border border-white/10 bg-black/20 p-5 backdrop-blur-sm hover:border-amber-700/30 transition-colors flex flex-col items-center"
                      style={{
                        boxShadow: "0 0 20px rgba(180, 83, 9, 0.1)",
                        animation: `float ${
                          3 + (i % 2)
                        }s ease-in-out infinite ${i * 0.2}s`,
                      }}
                    >
                      {SPONSOR_LINKS[s.name] ? (
                        <Link
                          href={SPONSOR_LINKS[s.name]}
                          className="w-full flex flex-col items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="h-32 flex items-center justify-center mb-4">
                            <img
                              src={s.src || "/placeholder.svg"}
                              alt={`${s.name} logo`}
                              className="max-h-32 max-w-full object-contain rounded-lg"
                            />
                          </div>
                          <div className="text-center">
                            <h4 className="text-lg font-medium text-white">{s.name}</h4>
                            <span className="inline-block mt-1 px-3 py-1 rounded-full bg-gradient-to-r from-amber-700 to-orange-600 text-xs font-semibold text-black">
                              {s.tier}
                            </span>
                          </div>
                        </Link>
                      ) : (
                        <>
                          <div className="h-32 flex items-center justify-center mb-4">
                            <img
                              src={s.src || "/placeholder.svg"}
                              alt={`${s.name} logo`}
                              className="max-h-32 max-w-full object-contain rounded-lg"
                            />
                          </div>
                          <div className="text-center">
                            <h4 className="text-lg font-medium text-white">{s.name}</h4>
                            <span className="inline-block mt-1 px-3 py-1 rounded-full bg-gradient-to-r from-amber-700 to-orange-600 text-xs font-semibold text-black">
                              {s.tier}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Educational Partner */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent">
                Educational Partner
              </h3>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
                {SPONSORS.filter((s) => s.tier === "Educational Partner").map(
                  (s, i) => (
                    <div
                      key={s.name}
                      className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm hover:border-green-600/30 transition-colors flex flex-col items-center"
                      style={{
                        boxShadow: "0 0 15px rgba(22, 163, 74, 0.12)",
                        animation: `float ${
                          3 + (i % 2)
                        }s ease-in-out infinite ${i * 0.2}s`,
                      }}
                    >
                      {SPONSOR_LINKS[s.name] ? (
                        <Link
                          href={SPONSOR_LINKS[s.name]}
                          className="w-full flex flex-col items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="h-32 flex items-center justify-center mb-4">
                            <img
                              src={s.src || "/placeholder.svg"}
                              alt={`${s.name} logo`}
                              className={`${s.name === "BharatCloud" ? "max-h-48" : "max-h-24"} max-w-full object-contain rounded-lg`}
                            />
                          </div>
                          <div className="text-center">
                            <h4 className="text-sm font-medium text-white">{s.name}</h4>
                            <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-xs font-semibold text-black">
                              {s.tier}
                            </span>
                          </div>
                        </Link>
                      ) : (
                        <>
                          <div className="h-32 flex items-center justify-center mb-4">
                            <img
                              src={s.src || "/placeholder.svg"}
                              alt={`${s.name} logo`}
                              className={`${s.name === "BharatCloud" ? "max-h-48" : "max-h-24"} max-w-full object-contain rounded-lg`}
                            />
                          </div>
                          <div className="text-center">
                            <h4 className="text-sm font-medium text-white">{s.name}</h4>
                            <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-xs font-semibold text-black">
                              {s.tier}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>

            

            {/* Hydration Partner */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent">
                Hydration Partner
              </h3>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
                {SPONSORS.filter((s) => s.tier === "Hydration Partner").map(
                  (s, i) => (
                    <div
                      key={s.name}
                      className="rounded-xl border border-white/10 bg-black/40 p-3 backdrop-blur-sm hover:border-cyan-600/30 transition-colors flex flex-col items-center"
                      style={{
                        boxShadow: "0 0 15px rgba(8, 145, 178, 0.12)",
                        animation: `float ${
                          3 + (i % 2)
                        }s ease-in-out infinite ${i * 0.2}s`,
                      }}
                    >
                      {SPONSOR_LINKS[s.name] ? (
                        <Link
                          href={SPONSOR_LINKS[s.name]}
                          className="w-full flex flex-col items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="h-32 flex items-center justify-center mb-4">
                            <img
                              src={s.src || "/placeholder.svg"}
                              alt={`${s.name} logo`}
                              className={`${s.name === "BharatCloud" ? "max-h-48" : "max-h-24"} max-w-full object-contain rounded-lg`}
                            />
                          </div>
                          <div className="text-center">
                            <h4 className="text-sm font-medium text-white">{s.name}</h4>
                            <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-cyan-600 to-sky-500 text-xs font-semibold text-black">
                              {s.tier}
                            </span>
                          </div>
                        </Link>
                      ) : (
                        <>
                          <div className="h-32 flex items-center justify-center mb-4">
                            <img
                              src={s.src || "/placeholder.svg"}
                              alt={`${s.name} logo`}
                              className={`${s.name === "BharatCloud" ? "max-h-48" : "max-h-24"} max-w-full object-contain rounded-lg`}
                            />
                          </div>
                          <div className="text-center">
                            <h4 className="text-sm font-medium text-white">{s.name}</h4>
                            <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-cyan-600 to-sky-500 text-xs font-semibold text-black">
                              {s.tier}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }
        `}</style>
      </div>
    </section>
  );
}

export default SponsorsSection;
