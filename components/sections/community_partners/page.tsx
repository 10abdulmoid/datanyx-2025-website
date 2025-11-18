const COMMUNITY_PARTNERS = [
  {
    name: "The Student Spot",
    src: "/student_spot.jpg",
  },
];

export default function CommunityPartnersSection() {
  return (
    <section
      id="community-partners"
      aria-labelledby="community-partners-title"
      className="scroll-mt-24 py-8 md:py-12 relative"
    >
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
          id="community-partners-title"
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
          COMMUNITY PARTNERS
        </h1>

        <div className="backdrop-blur-sm bg-black/20 rounded-xl p-6 border border-pink-500/20 shadow-lg shadow-pink-500/5">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
            {COMMUNITY_PARTNERS.map((p, i) => (
              <div
                key={p.name}
                className="rounded-xl border border-white/10 bg-black/20 p-6 backdrop-blur-sm hover:border-pink-500/30 transition-colors flex flex-col items-center"
                style={{
                  boxShadow: "0 0 20px rgba(236, 72, 153, 0.1)",
                  animation: `float ${
                    3 + (i % 2)
                  }s ease-in-out infinite ${i * 0.2}s`,
                }}
              >
                <div className="h-32 flex items-center justify-center mb-4">
                  <img
                    src={p.src || "/placeholder.svg"}
                    alt={`${p.name} logo`}
                    className="max-h-24 max-w-full object-contain rounded-lg"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-medium text-white">{p.name}</h4>
                </div>
              </div>
            ))}
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