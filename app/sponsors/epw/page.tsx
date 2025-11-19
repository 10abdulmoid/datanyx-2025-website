"use client";

import React from "react";

export default function InfoCard() {
  return (
    <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6">
      <div className="w-full max-w-4xl z-10 backdrop-blur-xl bg-white/10 border border-white/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-center text-white">
        {/* Logo */}
        <div className="flex justify-center mb-5">
          <img
            src="/epw.png"
            alt="EPW India Limited"
            className="w-16 h-16 object-contain"
          />
        </div>
        {/* Company Name */}
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
          EPW India Limited
        </h1>

        {/* Subtitle */}
        <h2 className="text-lg sm:text-xl text-white/80 mb-6">
          Renewed technology for a sustainable future
        </h2>

        {/* Info Text */}
        <div className="text-left space-y-4 text-sm sm:text-base leading-relaxed text-white/90">
          <p>
            EPW India Limited is one of India’s leading IT electronics refurbishing companies, dedicated to giving digital devices a second life while reducing the environmental impact of e-waste. With a specialised focus on laptops, desktops, workstations, and IT equipment, EPW delivers high-quality renewed devices that meet industry performance standards while remaining cost-effective and environmentally conscious.
          </p>

          <p>
            Through advanced diagnostic processes, professional-grade repairs, data sanitization, and quality testing, EPW ensures every refurbished device is reliable, safe, and ready for long-term use. Their solutions help businesses, students, and institutions gain access to affordable technology while reducing their carbon footprint.
          </p>

          <p>
            Beyond refurbishment, EPW promotes a sustainability-first approach that minimises e-waste, advances circular economy practices, and makes technology more accessible without compromising the environment. Their work sits at the intersection of innovation, environmental responsibility, and social impact.
          </p>

          {/* Section Title */}
          <h3 className="text-2xl font-semibold text-white pt-4 text-center">
            Renewed Tech. Amplified Impact. — EPW India Limited × Datanyx
          </h3>

          {/* Partnership Info */}
          <p>
            Partnering with EPW India Limited adds strong environmental value to Datanyx. As an organization rooted in responsible technology practices, EPW strengthens the event’s commitment to sustainability and conscious resource use. Their brand presence signals that Datanyx is not just a tech event but a platform aligned with eco-friendly and future-forward values.
          </p>

          <p>
            EPW’s participation also extends into direct community support. In addition to their sustainability expertise, EPW is supporting Datanyx as a Hydration Partner, helping ensure participant well-being by providing water for the event through one of their partner companies. This thoughtful contribution keeps attendees comfortable, refreshed, and focused throughout the datathon.
          </p>

          <p>
            Through this collaboration, EPW India Limited demonstrates how sustainability and community care can work hand in hand. Their involvement reinforces Datanyx’s mission of encouraging responsible, inclusive, and socially aware innovation, while promoting a culture that values both progress and purpose.
          </p>
        </div>
      </div>
    </div>
  );
}
