"use client";

import Link from "next/link";

export default function IntroCenter() {
  return (
    <section className="w-full bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto md:text-center">

        {/* SMALL TAG */}
        <span className="inline-block text-sm font-semibold text-[#1E3A8A] tracking-wider uppercase">
          Free Medical Camp
        </span>

        {/* MAIN TITLE */}
        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
          Neuro Clinic
        </h1>

        <p className="mt-3 text-lg text-[#BE185D] font-semibold">
          Natural & Drug-Free Neuro Treatment Center
        </p>

        {/* INTRO PARAGRAPH 1 */}
        <p className="mt-8 text-lg leading-relaxed text-gray-700 max-w-4xl mx-auto">
          Neuro Clinic is a specialized healthcare center led by
          <strong> Dr. H.O. Goyal</strong>, MD in Alternative Medicine and
          experienced Neuro Therapist. We focus on identifying the root cause
          of health problems and treating them naturally without medicines
          or injections.
        </p>

        {/* INTRO PARAGRAPH 2 */}
        <p className="mt-4 text-lg leading-relaxed text-gray-700 max-w-4xl mx-auto">
          Our clinic offers effective solutions for diabetes control,
          hair fall and baldness, nerve pain, and other neuro-related disorders.
          Using advanced E.A.V and Aroma Therapy techniques, we deliver
          safe, side-effect-free treatments with visible results in
          30 to 40 days.
        </p>

        {/* CTA */}
        <div className="mt-12 flex justify-center gap-5 flex-wrap">
          <Link
            href="tel: 98963 93678"
            className="bg-[#1E3A8A] text-white px-10 py-3 rounded-md font-semibold hover:bg-[#162e6f] transition"
          >
            Call Now
          </Link>

          <Link
            href="/appointment"
            className="border border-gray-900 text-gray-900 px-10 py-3 rounded-md font-semibold hover:bg-gray-900 hover:text-white transition"
          >
            Book Appointment
          </Link>
        </div>

      </div>
    </section>
  );
}
