"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../components/navbar";
import HeroSection from "../components/hero-section";
import AnnouncementBanner from "@/components/ui/AnnouncementBanner";
import AboutSection from "../components/sections/about/about-section";
import DomainsSection from "../components/sections/tracks/tracks-section";
import ScheduleSection from "../components/sections/timeline/schedule-section";
import PrizesSection from "@/components/sections/prizes/prizes-section";
import SponsorsSection from "../components/sections/sponsors/sponsors-section";
import FaqsSection from "../components/sections/faqs/faqs-section";
import Organizers from "@/components/sections/organizers/organizers";
import Footer from "../components/footer";
import FullscreenPreloader from "@/components/ui/PreLoader";
import CommunityPartnersSection from "@/components/sections/community_partners/page";
// import ChatInterface from "../components/ChatInterface";

export default function Page() {
  const [scrollY, setScrollY] = useState(0);
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
        <AnnouncementBanner />
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
