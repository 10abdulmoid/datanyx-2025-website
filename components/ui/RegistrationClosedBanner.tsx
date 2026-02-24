import React from 'react';

const RegistrationClosedBanner = () => {
  return (
    <div className="block w-full relative z-[100]">
      <div className="relative w-full overflow-hidden bg-[#00ff9d] py-2 md:py-2.5 text-black font-black uppercase tracking-widest shadow-[0_-4px_20px_rgba(0,255,157,0.4)] border-t border-white/20">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap py-1 flex items-center">
            {Array(10).fill(null).map((_, i) => (
              <React.Fragment key={i}>
                <span className="mx-6 text-sm md:text-base font-black italic tracking-wider flex items-center gap-2">
                  🏆 HACKATHON SUCCESSFULLY COMPLETED ON 30TH NOVEMBER 🏆
                </span>
                <span className="mx-4 text-sm md:text-base opacity-50">•</span>
              </React.Fragment>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-1 flex items-center">
            {Array(10).fill(null).map((_, i) => (
              <React.Fragment key={i}>
                <span className="mx-6 text-sm md:text-base font-black italic tracking-wider flex items-center gap-2">
                  🏆 HACKATHON SUCCESSFULLY COMPLETED ON 30TH NOVEMBER 🏆
                </span>
                <span className="mx-4 text-sm md:text-base opacity-50">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>
        <style jsx>{`
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .animate-marquee2 {
            animation: marquee2 40s linear infinite;
          }
          
          /* Pause animation on hover */
          .group:hover .animate-marquee,
          .group:hover .animate-marquee2 {
            animation-play-state: paused;
          }

          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
          @keyframes marquee2 {
            0% { transform: translateX(100%); }
            100% { transform: translateX(0%); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default RegistrationClosedBanner;
