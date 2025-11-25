"use client";

import React from "react";

export default function InfoCard() {
  return (
    <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6">
      <div className="w-full max-w-4xl z-10 backdrop-blur-xl bg-white/10 border border-white/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-center text-white">
        {/* Logo */}
        <div className="flex justify-center mb-5">
          <img
            src="/karachi.jpg"
            alt="Karachi Mehendi Logo"
            className="w-32 h-32 object-contain rounded-full"
          />
        </div>
        {/* Company Name */}
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
          Karachi Mehendi
        </h1>

        {/* Subtitle */}
        <h2 className="text-lg sm:text-xl text-white/80 mb-6">
          Natural & Authentic Henna
        </h2>

        {/* Info Text */}
        <div className="text-left space-y-4 text-sm sm:text-base leading-relaxed text-white/90">
          <p>
            Karachi Mehendi is a trusted name for natural and high quality henna. Their cones are made with safe, clean ingredients that give smooth application and a deep, long lasting colour. With a focus on purity and traditional artistry, they keep mehendi authentic and gentle on the skin.
          </p>

          <p className="leading-relaxed">
            They also create awareness about choosing natural mehendi and avoiding harmful quick stain products. Through simple guidance and community interaction, they encourage safer and informed choices.
          </p>

          {/* Section Title */}
          <h3 className="text-2xl font-semibold text-white pt-4 text-center">
            Let your hands tell a beautiful story. Karachi Mehendi × Datanyx
          </h3>

          {/* Bullet Points */}
          <ul className="space-y-3 list-disc list-inside pl-4 text-white/90">
            <li>
              Beyond their products, Karachi Mehendi supports cultural expression and safe beauty practices.
            </li>
            <li>
              The partnership between Karachi Mehendi and Datanyx brings cultural warmth and simple, meaningful learning to the event. Their presence helps students understand natural products, safe skincare and the cultural value of mehendi through small demonstrations and conversations.
            </li>
            <li>
              With Karachi Mehendi involved, students contribute to cultural content and awareness projects that highlight natural and safe practices. Together, Karachi Mehendi and Datanyx encourage learning that appreciates people, tradition and creative expression.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
