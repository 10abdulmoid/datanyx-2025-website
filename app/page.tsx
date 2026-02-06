"use client";

import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/navbar";
import HeroSection from "../components/hero-section";
import RegistrationClosedBanner from '@/components/ui/RegistrationClosedBanner';
import FullscreenPreloader from "@/components/ui/PreLoader";

// Lazy load below-fold sections for faster initial load
const AboutSection = dynamic(() => import("../components/sections/about/about-section"));
const DomainsSection = dynamic(() => import("../components/sections/tracks/tracks-section"));
const ScheduleSection = dynamic(() => import("../components/sections/timeline/schedule-section"));
const PrizesSection = dynamic(() => import("@/components/sections/prizes/prizes-section"));
const SponsorsSection = dynamic(() => import("../components/sections/sponsors/sponsors-section"));
const FaqsSection = dynamic(() => import("../components/sections/faqs/faqs-section"));
const Organizers = dynamic(() => import("@/components/sections/organizers/organizers"));
const CommunityPartnersSection = dynamic(() => import("@/components/sections/community_partners/page"));
const Footer = dynamic(() => import("../components/footer"));

export default function Page() {
  const [scrollY, setScrollY] = useState(0);
  const [ready, setReady] = useState(false);

  const sessionSkip = true;
  useEffect(() => {
    if (!sessionSkip) return;
    const seen = sessionStorage.getItem("dnx_seen") === "1";
    if (seen) setReady(true);
  }, [sessionSkip]);

  const handlePreloaderDone = useCallback(() => {
    if (sessionSkip) sessionStorage.setItem("dnx_seen", "1");
    setReady(true);
  }, [sessionSkip]);

  // Scroll tracking
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Start at top and clear hash
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);

  const halfViewportHeight = typeof window !== "undefined" ? window.innerHeight / 2 : 400;
  const scrollProgress = Math.min(scrollY / halfViewportHeight, 1);

  return (
    <>
      {!ready && (
        <FullscreenPreloader
          src="/assets/datanyx25logo.png"
          durationMs={1500}
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
          {/* <AnnouncementBanner /> */}
          <RegistrationClosedBanner />
        </div>
        <HeroSection />
        <div
          className="relative z-10"
          style={{
            opacity: scrollProgress,
            transition: "opacity 0.3s ease-out",
            visibility: scrollProgress > 0.1 ? "visible" : "hidden",
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
        {/* Chat Interface - Lazy loaded */}
        {/* {ready && <ChatInterface />} */}
      </main>
    </>
  );
}
