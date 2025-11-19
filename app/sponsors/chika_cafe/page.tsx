"use client";

import React from "react";

export default function InfoCard() {
  return (
    <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6">
      <div className="w-full max-w-4xl z-10 backdrop-blur-xl bg-white/10 border border-white/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-center text-white">
        {/* Logo */}
        <div className="flex justify-center mb-5">
          <img
            src="/chika_sponsors.jpg"
            alt="Chika Coffee Shop Logo"
            className="w-16 h-16 object-contain"
          />
        </div>
        {/* Company Name */}
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
          Chika Coffee Shop
        </h1>

        {/* Subtitle */}
        <h2 className="text-lg sm:text-xl text-white/80 mb-6">
          Welcome to Chika – A Coffee Collective
        </h2>

        {/* Info Text */}
        <div className="text-left space-y-4 text-sm sm:text-base leading-relaxed text-white/90">
          <p>
            Located in the heart of Banjara Hills, Hyderabad, Chika Coffee is more than just a café, it's a celebration of India's rich coffee heritage. Inspired by the shade-grown coffee estates of Chikmagalur (from which its name derives), Chika is a community-driven coffee roastery and café that brings together coffee lovers and professionals.
          </p>

          <p className="leading-relaxed">
            At Chika Coffee Collective, they are passionate about bringing you the finest Indian specialty coffees. With a focus on sustainability, quality, and the unique flavors of India, they aim to provide an exceptional coffee experience that will delight your senses.
          </p>

          <p className="leading-relaxed">
            Step into Chika and you'll feel transported: warm, earthy interiors that evoke the lush hills of Karnataka; rustic wooden beams; stained-glass arched windows; and thoughtful seating that supports both lively conversations and quiet moments. The café even houses its roasting machine behind glass, a striking centerpiece that invites guests to witness the coffee-roasting craft in real time.
          </p>

          {/* Section Title */}
          <h3 className="text-2xl font-semibold text-white pt-4 text-center">
            Sip. Code. Repeat. Chika at Datanyx
          </h3>

          {/* Bullet Points */}
          <ul className="space-y-3 list-disc list-inside pl-4 text-white/90">
            <li>
              A dedicated coffee stall ensures that participants stay energized during the long hours of the datathon. Fresh brews, cold coffees, and quick bites keep students active, focused, and in high spirits, boosting productivity and engagement.
            </li>
            <li>
              A specialty coffee brand onsite adds a premium feel to the event. The aroma, the setup, and the café vibe make Datanyx 2025 feel lively, welcoming, and professional, improving overall event ambience.
            </li>
            <li>
              A well-designed Chika stall brings great photo and reel opportunities. Participants posting their "Datanyx x Chika Coffee" moments naturally increase the event's online visibility.
            </li>
            <li>
              Serving high-quality coffee reflects well on Datanyx's hospitality standards. It shows that the event organizers care about participant comfort and experience, something sponsors, guests, and judges also appreciate.
            </li>
            <li>
              Chika may continue supporting Datanyx in future editions, creating a recurring, mutually beneficial relationship between the brand and the event.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
