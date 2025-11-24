import React from 'react';

const RegistrationClosedBanner = () => {
  return (
    <div className="w-full overflow-hidden bg-[#00ff9d] py-2 text-black font-bold uppercase tracking-widest shadow-[0_-4px_20px_rgba(0,255,157,0.3)]">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap py-1 flex items-center">
          {Array(10).fill(null).map((_, i) => (
            <React.Fragment key={i}>
              <span className="mx-4 text-sm md:text-base font-extrabold italic">Registrations are already closed</span>
              <span className="mx-4 text-sm md:text-base">•</span>
            </React.Fragment>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-1 flex items-center">
          {Array(10).fill(null).map((_, i) => (
            <React.Fragment key={i}>
              <span className="mx-4 text-sm md:text-base font-extrabold italic">Registrations are already closed</span>
              <span className="mx-4 text-sm md:text-base">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 20s linear infinite;
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
  );
};

export default RegistrationClosedBanner;
