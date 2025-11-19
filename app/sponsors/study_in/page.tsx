"use client";

import React from "react";

export default function InfoCard() {
  return (
    <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6">
      <div className="w-full max-w-4xl z-10 backdrop-blur-xl bg-white/10 border border-white/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-center text-white">
        {/* Logo */}
        <div className="flex justify-center mb-5">
          <img
            src="/study_in.jpg"
            alt="Study In"
            className="w-16 h-16 object-contain"
          />
        </div>
        {/* Company Name */}
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
          Study In
        </h1>

        {/* Subtitle */}
        <h2 className="text-lg sm:text-xl text-white/80 mb-6">
          India’s trusted overseas education platform
        </h2>

        {/* Info Text */}
        <div className="text-left space-y-4 text-sm sm:text-base leading-relaxed text-white/90">
          <p>
            Study In is India’s most trusted platform dedicated to helping students achieve their dream of pursuing higher education abroad. It provides reliable guidance, expert consulting, and end-to-end support to simplify every step of the overseas education journey.
          </p>

          <p>
            With global partnerships, experienced advisors, and a student-first approach, it ensures that each learner finds the right course, the right country, and the right career path.
          </p>

          <p>
            The platform supports students in exploring top study destinations including the USA, UK, Canada, Australia, Germany, and more, offering personalized counselling, documentation support, test preparation guidance, visa assistance, and scholarship advisory services.
          </p>

          {/* Section Title */}
          <h3 className="text-2xl font-semibold text-white pt-4 text-center">
            Dream. Choose. Fly. — Study In × Datanyx
          </h3>

          {/* Partnership Info */}
          <p>
            The partnership with Study In adds strong academic and career value to Datanyx. It is a trusted study-abroad consultancy that helps participants explore global education and understand how international qualifications can build up their careers.
          </p>

          <p>
            Through expert sessions, guidance booths, and interactive discussions, it provides understanding about careers, scholarships, and post-study work options, helping Datanyx offer more than just a competition.
          </p>

          <p>
            Datanyx participants gain access to exclusive discounted services and global study opportunities, making the event more future-ready. "Study In" and Datanyx together support continuous learning and sustainable development.
          </p>
        </div>
      </div>
    </div>
  );
}
