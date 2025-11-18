"use client";

import React from "react";

export default function InfoCard() {
  return (
    <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6">
      <div className="w-full max-w-4xl z-10 backdrop-blur-xl bg-white/10 border border-white/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-center text-white">
        {/* Logo */}
        <div className="flex justify-center mb-5">
          <img
            src="/renavart_sponsor.png"
            alt="Renavart Recyclers Logo"
            className="w-24 h-24 object-contain rounded-2xl border border-white/40 bg-white/10"
          />
        </div>

        {/* Company Name */}
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
          Renavart Recyclers
        </h1>

        {/* Subtitle */}
        <h2 className="text-lg sm:text-xl text-white/80 mb-6">
          Tech-driven e-waste recycling for a greener future
        </h2>

        {/* Info Text */}
        <div className="text-left space-y-4 text-sm sm:text-base leading-relaxed text-white/90">
          <p>
            Renavart Recyclers is one of Hyderabad’s rising sustainability innovators, committed to tackling India’s growing e-waste challenge through responsible, tech-driven recycling solutions. With a focus on environmental preservation and resource recovery, Renavart transforms discarded electronics into reusable materials that support a greener circular economy.
          </p>

          <p>
            At Renavart, teams work with structured, science-based processes to collect, transport, dismantle, and recycle e-waste in a safe and compliant manner. Their approach ensures valuable metals and components are recovered efficiently, reducing the strain on natural resources and promoting cleaner waste-management practices.
          </p>

          <p>
            The organisation’s main purpose is to minimise carbon footprint by utilising energy-efficient technologies and reducing waste wherever possible.
          </p>

          <p>
            Beyond recycling, Renavart invests deeply in public awareness – conducting outreach programmes, educating institutions, and helping communities adopt more responsible disposal habits. Their mission extends far beyond waste processing: Renavart aims to redefine how society thinks about sustainability, encouraging individuals and organisations to make environmentally conscious choices that benefit future generations.
          </p>

          {/* Section Title */}
          <h3 className="text-2xl font-semibold text-white pt-4 text-center">
            Recycle. Renew. Restore. — Renavart Recyclers × Datanyx
          </h3>

          {/* Partnership Info */}
          <p>
            Partnering with Renavart Recyclers strengthens Datanyx’s commitment to sustainability. As a recycling-focused organisation, Renavart brings environmental credibility that elevates the event’s image among students, professionals, and sponsors.
          </p>

          <p>
            Through awareness sessions, demonstrations, and sustainability-driven interactions, Renavart adds educational depth to the event. Participants gain insights into e-waste, recycling technologies, and the importance of integrating green practices into modern tech.
          </p>

          <p>
            Renavart’s industry network and focus on eco-innovation offer Datanyx attendees access to unique learning opportunities, project pathways, and exposure to careers in sustainability and environmental technology.
          </p>

          <p>
            Their presence helps build a responsible tech community in Hyderabad. Together, both organizations inspire conscious innovation, promote long-term ecological thinking, and encourage participants to consider the environmental impact of technological progress.
          </p>

          <p>
            Having a sustainability-led company as a partner enhances Datanyx’s brand value and demonstrates its dedication to meaningful, socially responsible collaborations.
          </p>
        </div>
      </div>
    </div>
  );
}
