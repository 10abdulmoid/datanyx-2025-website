"use client";

import dynamic from "next/dynamic";
import { memo } from "react";

// Lazy load Particles component with loading fallback
const Particles = dynamic(() => import("@/components/ui/Particles"), {
  ssr: false,
  loading: () => <div className="fixed top-0 left-0 w-full h-full z-10 bg-black" />,
});

const Background = memo(() => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10">
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={150}
        particleSpread={10}
        speed={0.2}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={true}
      />
    </div>
  );
});

Background.displayName = "Background";

export default Background;
