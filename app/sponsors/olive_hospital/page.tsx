"use client";

import React from "react";

export default function InfoCard() {
  return (
    <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6">
      <div className="w-full max-w-4xl z-10 backdrop-blur-xl bg-white/10 border border-white/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-center text-white">
        {/* Logo */}
        <div className="flex justify-center mb-5">
          <img
            src="/olive_hospital.png"
            alt="Olive Hospital Logo"
            className="w-24 h-24 object-contain rounded-2xl border border-white/40 bg-white/10"
          />
        </div>

        {/* Company Name */}
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
          Olive Hospital
        </h1>

        {/* Subtitle */}
        <h2 className="text-lg sm:text-xl text-white/80 mb-6">
          Compassionate, technology-enabled healthcare in Hyderabad
        </h2>

        {/* Info Text */}
        <div className="text-left space-y-4 text-sm sm:text-base leading-relaxed text-white/90">
          <p>
            Olive Hospital is one of Hyderabad’s trusted and steadily advancing healthcare institutions, dedicated to offering ethical, accessible, and high-quality medical services. With a strong patient-first philosophy, Olive delivers multi-specialty care supported by experienced doctors, modern facilities, and evidence-based treatment practices.
          </p>

          <p>
            Healthcare at Olive is guided by compassion, scientific accuracy, and responsible care. The team follows well-defined clinical protocols for diagnosis, treatment, and recovery, ensuring safety, clarity, and respect throughout every patient journey. Their focus on technology-supported healthcare helps improve results, reduce delays, and create a smooth and reassuring treatment experience.
          </p>

          <p>
            The organisation strives to strengthen community health through awareness initiatives, preventive checkups, and affordable treatment options for individuals across different backgrounds. Their commitment extends beyond the hospital by promoting health education, early intervention, and informed decision-making for healthier futures.
          </p>

          {/* Section Title */}
          <h3 className="text-2xl font-semibold text-white pt-4 text-center">
            Care. Heal. Serve. — Olive Hospital × Datanyx
          </h3>

          {/* Partnership Info */}
          <p>
            Partnering with Olive Hospital gives Datanyx a meaningful dimension by connecting innovation with real human needs. With strong experience in patient care and medical operations, Olive helps students see how technology can truly improve lives and support society.
          </p>

          <p>
            Through interactive sessions, expert conversations, and real healthcare challenges, participants explore how data, AI, and digital systems can improve diagnosis, simplify clinical workflows, and expand access to quality care.
          </p>

          <p>
            With Olive involved, students gain opportunities for healthcare-focused ideas, mentorship, internships, and research pathways that may benefit patients, families, and communities. Together, Olive Hospital and Datanyx encourage innovation that is thoughtful, compassionate, and driven by long-lasting impact.
          </p>

          <p>
            Having a healthcare organisation as a partner reflects Datanyx’s commitment that technology should serve people, and that true progress is achieved when innovation improves life and wellbeing.
          </p>
        </div>
      </div>
    </div>
  );
}
