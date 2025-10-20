"use client";

import { useState, useEffect, useCallback } from "react";
import { SmoothCursor } from "@/components/ui/cursor";
import FullscreenPreloader from "@/components/ui/PreLoader";
import Background from "@/components/ui/background";
import { ReactLenis } from "@/utils/lenis";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const sessionSkip = false;

  useEffect(() => {
    if (!sessionSkip) return;
    const seen = sessionStorage.getItem("dnx_seen") === "1";
    if (seen) setReady(true);
  }, [sessionSkip]);

  const handlePreloaderDone = useCallback(() => {
    if (sessionSkip) sessionStorage.setItem("dnx_seen", "1");
    setReady(true);
  }, [sessionSkip]);

  return (
    <ReactLenis root>
      {!ready && (
        <FullscreenPreloader
          src="/assets/datanyx25logo.png"
          durationMs={2800}
          onDone={handlePreloaderDone}
        />
      )}
      <Background />
      <SmoothCursor
        size={17}
        color="black"
        showTrail={false}
        trailLength={8}
        magneticDistance={60}
        magneticElements="[data-magnetic]"
        springConfig={{ damping: 50, stiffness: 450, mass: 0.8, restDelta: 0.001 }}
      />
      {children}
    </ReactLenis>
  );
}
