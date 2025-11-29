"use client";

import React from "react";
import LightRays from "@/components/ui/LightRays";

export default function MyCustomLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-black text-white font-sans selection:bg-white/30">
      {/* LightRays Background - Fixed to cover the screen */}
      <div className="fixed inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="opacity-60"
        />
      </div>
      
      {/* Content Wrapper - Ensures content is above the background */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
