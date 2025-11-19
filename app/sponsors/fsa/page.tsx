"use client";

import React from "react";

export default function InfoCard() {
  return (
    <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6">
      <div className="w-full max-w-4xl z-10 backdrop-blur-xl bg-white/10 border border-white/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-center text-white">
        {/* Logo */}
        <div className="flex justify-center mb-5">
          <img
            src="/fsa_sponsor.png"
            alt="Full Stack Academy"
            className="w-16 h-16 object-contain"
          />
        </div>
        {/* Company Name */}
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
          Full Stack Academy
        </h1>

        {/* Subtitle */}
        <h2 className="text-lg sm:text-xl text-white/80 mb-6">
          Hyderabad's premier tech training institute
        </h2>

        {/* Info Text */}
        <div className="text-left space-y-4 text-sm sm:text-base leading-relaxed text-white/90">
          <p>
            Full Stack Academy (FSA) is Hyderabad’s premier tech training institute, dedicated to building future-ready software professionals. With multiple branches in the city, FSA offers hands-on, industry-driven programs that bridge the gap between education and employment.
          </p>

          <p>
            At FSA, students learn from seasoned industry experts and work on real-world projects to hone skills in MERN full-stack development, AWS &amp; DevOps, Data Analytics, AI, and other in-demand technologies.
          </p>

          <p>
            More than just coding, Full Stack Academy invests in career success: rigorous placement support, mock interviews, and partnerships with hiring companies help students launch their tech careers.
          </p>

          <p>
            They also run a scholarship program (Sahayata Trust Scholarship) for underprivileged graduates, helping them access quality tech education in Hyderabad and beyond.
          </p>

          {/* Section Title */}
          <h3 className="text-2xl font-semibold text-white pt-4 text-center">
            Code. Learn. Compete. — Full Stack Academy × Datanyx
          </h3>

          {/* Partnership Info */}
          <p>
            Partnering with Full Stack Academy elevates Datanyx’s academic and technical credibility. As a leading tech training institute in Hyderabad, FSA brings strong industry recognition that enhances the event’s reputation among students, professionals, and sponsors.
          </p>

          <p>
            Through hands-on workshops, technical talks, and interactive sessions, FSA adds educational value to the event. These sessions introduce participants to real-world tools, frameworks, and development practices that elevate the overall quality of the datathon.
          </p>

          <p>
            With Full Stack Academy’s placement network and career guidance programs, Datanyx participants gain access to upskilling opportunities, certification courses, and potential interview pathways, making the event more attractive and career-focused.
          </p>

          <p>
            Full Stack Academy contributes to building a sustainable tech and data community in Hyderabad. Together, both organizations foster innovation, support new talent, and promote continuous learning beyond the event itself.
          </p>

          <p>
            Having a well-established academy as a sponsor strengthens Datanyx’s brand value. It shows that respected institutions trust the event’s vision, making future partnerships and sponsorships easier to secure.
          </p>
        </div>
      </div>
    </div>
  );
}
