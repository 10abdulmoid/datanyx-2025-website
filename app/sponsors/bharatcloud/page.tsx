"use client";

import React from "react";

export default function InfoCard() {
  return (
    <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6">
      <div className="w-full max-w-4xl z-10 backdrop-blur-xl bg-white/10 border border-white/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-center text-white">
        {/* Logo */}
        <div className="flex justify-center mb-5">
          <img
            src="/bharat_cloud.png"
            alt="bharatcloud Logo"
            className="w-40 h-40 object-contain"
          />
        </div>
        {/* Company Name */}
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
          BharatCloud
        </h1>

        {/* Subtitle */}
        <h2 className="text-lg sm:text-xl text-white/80 mb-6">
          India's Future-Ready Cloud Infrastructure Provider
        </h2>

        {/* Info Text */}
        <div className="text-left space-y-4 text-sm sm:text-base leading-relaxed text-white/90">
          <p>
            BharatCloud is one of India's rapidly advancing cloud technology providers, known for delivering secure, scalable and future-ready digital infrastructure solutions. With a strong progress driven foundation, BharatCloud empowers businesses, developers and institutions with high-performance computing, advanced storage, and reliable cloud deployment environments.
          </p>

          <p className="leading-relaxed">
            Their services are built on robust architecture, strong data protection standards and efficient automation practices that ensure speed, stability and uninterrupted workflows. By combining modern cloud engineering with practical usability, BharatCloud enables organisations to scale effortlessly, optimise costs and embrace digital transformation with confidence.
          </p>

          <p className="leading-relaxed">
            Every solution at BharatCloud reflects precision, transparency and long-term reliability. From virtual machines to managed databases, DevOps pipelines, AI-ready platforms and container based infrastructure, the team ensures seamless integration and frictionless operations. Their commitment extends to empowering teams through training resources, optimisation guidance and hands-on technical support for continuous performance improvement.
          </p>

          <p className="leading-relaxed">
            The organisation actively contributes to India's growing technology ecosystem by promoting cloud literacy, hosting learning programmes, and supporting developers, students and start-ups in adopting modern digital infrastructure for real-world innovation and growth.
          </p>

          {/* Section Title */}
          <h3 className="text-2xl font-semibold text-white pt-4 text-center">
            Partnership with Datanyx
          </h3>

          {/* Bullet Points */}
          <ul className="space-y-3 list-disc list-inside pl-4 text-white/90">
            <li>
              Partnering with BharatCloud gives Datanyx a powerful technology backbone, ensuring students gain exposure to real digital infrastructure that modern solutions are built on. With hands-on expertise in cloud engineering, bharatcloud helps participants understand how scalable systems support development at any level.
            </li>
            <li>
              Having a cloud technology partner reflects Datanyx's belief that student learning journey must be supported by strong digital foundations. Together, BharatCloud and Datanyx encourage engineering that is intelligent, scalable and designed to shape the future of modern computing.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}