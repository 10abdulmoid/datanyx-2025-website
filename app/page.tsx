"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/navbar";
import HeroSection from "../components/hero-section";
import RegistrationClosedBanner from '@/components/ui/RegistrationClosedBanner';
import FullscreenPreloader from "@/components/ui/PreLoader";

// Lazy load below-fold sections — they aren't visible until the user scrolls
const AboutSection = dynamic(() => import("../components/sections/about/about-section"), { ssr: false });
const DomainsSection = dynamic(() => import("../components/sections/tracks/tracks-section"), { ssr: false });
const ScheduleSection = dynamic(() => import("../components/sections/timeline/schedule-section"), { ssr: false });
const PrizesSection = dynamic(() => import("@/components/sections/prizes/prizes-section"), { ssr: false });
const SponsorsSection = dynamic(() => import("../components/sections/sponsors/sponsors-section"), { ssr: false });
const FaqsSection = dynamic(() => import("../components/sections/faqs/faqs-section"), { ssr: false });
const Organizers = dynamic(() => import("@/components/sections/organizers/organizers"), { ssr: false });
const CommunityPartnersSection = dynamic(() => import("@/components/sections/community_partners/page"), { ssr: false });
const Footer = dynamic(() => import("../components/footer"), { ssr: false });

export default function Page() {
  const [ready, setReady] = useState(false);
  const scrollProgressRef = useRef(0);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef(0);

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

  // Throttled scroll tracking using rAF — avoids setState on every scroll event
  useEffect(() => {
    const updateOpacity = () => {
      const halfVH = window.innerHeight / 2;
      const progress = Math.min(window.scrollY / halfVH, 1);
      scrollProgressRef.current = progress;

      if (contentWrapperRef.current) {
        contentWrapperRef.current.style.opacity = String(progress);
        contentWrapperRef.current.style.visibility = progress > 0.1 ? "visible" : "hidden";
      }
      rafIdRef.current = 0;
    };

    const onScroll = () => {
      if (!rafIdRef.current) {
        rafIdRef.current = requestAnimationFrame(updateOpacity);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial update
    updateOpacity();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  // Start at top and clear hash
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {!ready && (
        <FullscreenPreloader
          src="/assets/datanyx25logo.png"
          durationMs={2800}
          onDone={handlePreloaderDone}
        />
      )}
      <main
        className="min-h-dvh scroll-smooth dark"
        style={{
          opacity: ready ? 1 : 0,
          pointerEvents: ready ? "auto" : "none",
          transition: "opacity 320ms ease",
        }}
      >
        <Navbar />
        <div className="fixed bottom-0 left-0 w-full z-[100] flex flex-col">
          <RegistrationClosedBanner />
        </div>
        <HeroSection />
        <div
          ref={contentWrapperRef}
          className="relative z-10"
          style={{
            opacity: 0,
            transition: "opacity 0.3s ease-out",
            visibility: "hidden",
          }}
        >
          <div className="absolute inset-0 -z-10 pointer-events-none" />
          <AboutSection />
          <DomainsSection />
          <ScheduleSection />
          <PrizesSection />
          <SponsorsSection />
          <CommunityPartnersSection />
          <FaqsSection />
          <Organizers />
          <Footer />
        </div>
      </main>
    </>
  );
}
