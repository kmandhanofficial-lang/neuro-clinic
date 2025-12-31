"use client";

import Image from "next/image";
import ServicesSection from "@/components/home/ServicesSection";

export default function ServicesClient() {
  return (
    <main className="w-full">
      {/* SERVICES BANNER */}
      <section className="w-full -mt-[80px]">
        <div className="relative w-full h-[600px] md:h-[650px] overflow-hidden">
          
          {/* BLUE → LIGHT BLUE GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c5f] via-[#1e5aa8] to-[#5fa8ff]" />
          
          {/* SOFT DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/30" />
          
          {/* FLOATING WHITE ICONS */}
          <div className="absolute inset-0 pointer-events-none">
            {/* LEFT */}
            <span className="absolute top-24 left-16 text-white/30 text-3xl animate-pulse">✚</span>
            <span className="absolute top-1/2 left-10 text-white/20 text-4xl">🛠️</span>
            <span className="absolute bottom-24 left-24 text-white/25 text-2xl">✚</span>

            {/* RIGHT */}
            <span className="absolute top-20 right-16 text-white/25 text-3xl">🧰</span>
            <span className="absolute top-1/2 right-12 text-white/20 text-4xl">✚</span>
            <span className="absolute bottom-28 right-24 text-white/25 text-2xl">🛠️</span>
          </div>

          {/* CENTERED TEXT */}
          <div className="relative z-10 h-full flex items-center justify-center text-left px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Our Services
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-100">
                Delivering professional solutions with precision and expertise. 
                Explore our range of services designed to meet your needs.
              </p>
            </div>
          </div>

          {/* WAVE CURVE BOTTOM */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg
              viewBox="0 0 1440 120"
              className="w-full h-[80px]"
              preserveAspectRatio="none"
            >
              <path
                d="M0,40 C240,100 480,0 720,20 960,40 1200,80 1440,30 L1440,120 L0,120 Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* INTRO BELOW BANNER */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore Our Expert Services
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We provide a wide range of professional services, ensuring quality and precision in every project. Discover how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <ServicesSection />
    </main>
  );
}
