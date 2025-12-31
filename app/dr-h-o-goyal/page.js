"use client"

import Image from "next/image"
import Link from "next/link"
import { FaBrain, FaLeaf, FaSmile, FaStethoscope } from "react-icons/fa"

export default function DrHOPage() {
  return (
    <div className="w-full">

      {/* ===== BANNER ===== */}
      <Link href="/book-appointment" className="block relative -mt-[80px] h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c5f] via-[#1e5aa8] to-[#5fa8ff]" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex items-center justify-center h-full px-6 md:text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl pt-4 font-extrabold text-white transition-transform duration-500 hover:scale-105">
              Book Appointment
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-100">
              Schedule your visit with Neuro Clinic for trusted and advanced neurological care.
            </p>
          </div>
        </div>

        {/* CURVE */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 120" className="w-full h-[80px]" preserveAspectRatio="none">
            <path
              d="M0,40 C240,100 480,0 720,20 960,40 1200,80 1440,30 L1440,120 L0,120 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </Link>

      {/* ===== PROFILE SECTION ===== */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-start gap-12">
        
        {/* LEFT IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/dr.jpg"
            alt="Dr. H.O. Goyal"
            className="rounded-xl shadow-lg"
            width={400}
            height={500}
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Dr. H.O. Goyal
          </h2>

          <p className="text-gray-700">
            Dr. H.O. Goyal is an experienced Neuro Therapist specializing in alternative medicine, E.A.V., and Aroma therapies. His approach combines traditional healing techniques with modern neurological care to achieve holistic results.
          </p>

          <p className="text-gray-700">
            He is known for his compassionate and patient-centered approach, focusing on overall wellness rather than just treating symptoms. His therapies aim to improve mental clarity, emotional balance, and physical health.
          </p>

          <p className="text-gray-700">
            Dr. Goyal develops personalized treatment plans for each patient, considering individual needs and lifestyle factors. This ensures optimal results while maintaining a gentle, non-invasive approach.
          </p>

          <p className="text-gray-700">
            With years of experience, he has helped countless patients manage neurological concerns effectively, often reducing the need for conventional medication while supporting long-term health.
          </p>

          <p className="text-gray-700">
            Beyond therapy, Dr. Goyal is passionate about educating his patients, empowering them with knowledge and practices to sustain their neurological and overall well-being in everyday life.
          </p>
        </div>
      </section>

      {/* ===== SKILLS / SPECIALTIES SECTION ===== */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Areas of Expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Skill 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-2">
            <FaBrain className="text-blue-600 text-4xl mb-4" />
            <h3 className="font-semibold text-xl mb-2">Neuro Therapy</h3>
            <p className="text-gray-600 text-sm">Advanced neurological treatments for mental clarity and cognitive health.</p>
          </div>

          {/* Skill 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-2">
            <FaLeaf className="text-green-500 text-4xl mb-4" />
            <h3 className="font-semibold text-xl mb-2">Alternative Medicine</h3>
            <p className="text-gray-600 text-sm">Holistic therapies using natural remedies and traditional techniques.</p>
          </div>

          {/* Skill 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-2">
            <FaSmile className="text-yellow-500 text-4xl mb-4" />
            <h3 className="font-semibold text-xl mb-2">Aroma & E.A.V.</h3>
            <p className="text-gray-600 text-sm">Therapies to enhance emotional balance and overall well-being.</p>
          </div>

          {/* Skill 4 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-2">
            <FaStethoscope className="text-red-500 text-4xl mb-4" />
            <h3 className="font-semibold text-xl mb-2">Holistic Health</h3>
            <p className="text-gray-600 text-sm">Personalized plans focusing on long-term health and minimal medication.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
