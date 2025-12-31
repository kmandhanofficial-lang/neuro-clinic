"use client";

import Image from "next/image";

export default function AboutClient() {
  return (
    <main className="w-full">
      {/* ABOUT BANNER */}
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
            <span className="absolute top-1/2 left-10 text-white/20 text-4xl">🧠</span>
            <span className="absolute bottom-24 left-24 text-white/25 text-2xl">✚</span>

            {/* RIGHT */}
            <span className="absolute top-20 right-16 text-white/25 text-3xl">🧬</span>
            <span className="absolute top-1/2 right-12 text-white/20 text-4xl">✚</span>
            <span className="absolute bottom-28 right-24 text-white/25 text-2xl">🧠</span>
          </div>

          {/* TEXT */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                About Us
              </h1>

              <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-100">
                Dedicated to advanced, safe and compassionate neuro care
                focused on brain and nerve health.
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

      {/* INTRO SECTION */}
      <section className="w-full bg-white py-24 md:py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          
          {/* LEFT: CONTENT */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Who We Are
            </h2>
            <p className="mt-6 text-gray-700 text-lg md:text-xl leading-relaxed">
              We are committed to providing advanced neuro care, combining cutting-edge technology
              with a compassionate approach. Our team of experts ensures the highest standard of 
              brain and nerve health services. Our focus is on creating personalized care plans
              for each patient and leveraging the latest in medical science to improve outcomes.
            </p>
            <ul className="mt-8 space-y-3 text-gray-600 text-lg">
              <li>✔ Advanced medical facilities</li>
              <li>✔ Experienced and compassionate staff</li>
              <li>✔ Personalized patient care</li>
              <li>✔ Latest technology and treatments</li>
            </ul>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="md:w-1/2 w-full">
            <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/about.webp" // replace with your path
                alt="About Us"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
<section className="w-full bg-gray-50 py-24 md:py-32">
  <div className="max-w-7xl mx-auto px-6 md:text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
      Our <span className="text-blue-600">Mission & Vision</span>
    </h2>
    <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
      Committed to providing compassionate neuro and psychological care, our mission and vision guide everything we do.
    </p>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      
      {/* MISSION CARD */}
      <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform hover:-translate-y-2">
        {/* ICON */}
        <div className="bg-blue-600 p-5 rounded-full text-white mb-6 flex items-center justify-center w-16 h-16">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM12 14c-2.21 0-4 1.79-4 4v2h8v-2c0-2.21-1.79-4-4-4z" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          To empower individuals to achieve mental wellness and cognitive health through compassionate, personalized, and scientifically-backed neuro and psychological care.
        </p>
      </div>

      {/* VISION CARD */}
      <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform hover:-translate-y-2">
        {/* ICON */}
        <div className="bg-blue-600 p-5 rounded-full text-white mb-6 flex items-center justify-center w-16 h-16">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-gray-900">Our Vision</h3>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          To be a leading center for neuro and psychological wellness, fostering a future where every individual has access to holistic mental health support and brain care.
        </p>
      </div>

    </div>
  </div>
</section>

{/* CORE VALUES SECTION */}
<section className="w-full bg-gray-50 py-24 md:py-32">
  <div className="max-w-7xl mx-auto px-6 md:text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
      Our <span className="text-blue-600">Core Values</span>
    </h2>
    <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
      We believe in principles that guide our care, ensuring every patient receives ethical, compassionate, and effective treatment.
    </p>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* VALUE 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform hover:-translate-y-2">
        <div className="bg-blue-600 p-4 rounded-full text-white mb-4 w-14 h-14 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM12 14c-2.21 0-4 1.79-4 4v2h8v-2c0-2.21-1.79-4-4-4z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900">Compassion</h3>
        <p className="mt-2 text-gray-600 text-base">
          We provide care with empathy, understanding, and emotional support for every patient.
        </p>
      </div>

      {/* VALUE 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform hover:-translate-y-2">
        <div className="bg-blue-600 p-4 rounded-full text-white mb-4 w-14 h-14 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 11-4 0 2 2 0 014 0zm-8 0a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900">Integrity</h3>
        <p className="mt-2 text-gray-600 text-base">
          We uphold ethical standards and honesty in all our practices.
        </p>
      </div>

      {/* VALUE 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform hover:-translate-y-2">
        <div className="bg-blue-600 p-4 rounded-full text-white mb-4 w-14 h-14 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900">Excellence</h3>
        <p className="mt-2 text-gray-600 text-base">
          We strive for the highest standards in neuro and psychological care.
        </p>
      </div>

      {/* VALUE 4 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform hover:-translate-y-2">
        <div className="bg-blue-600 p-4 rounded-full text-white mb-4 w-14 h-14 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 4h10M5 11h14v10H5V11z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900">Innovation</h3>
        <p className="mt-2 text-gray-600 text-base">
          We adopt the latest research and technology to enhance patient outcomes.
        </p>
      </div>

      {/* VALUE 5 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform hover:-translate-y-2">
        <div className="bg-blue-600 p-4 rounded-full text-white mb-4 w-14 h-14 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h4l3 6h8l3-6h4" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900">Collaboration</h3>
        <p className="mt-2 text-gray-600 text-base">
          We work closely with patients, families, and colleagues for holistic care.
        </p>
      </div>

      {/* VALUE 6 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform hover:-translate-y-2">
        <div className="bg-blue-600 p-4 rounded-full text-white mb-4 w-14 h-14 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900">Compassion</h3>
        <p className="mt-2 text-gray-600 text-base">
          We treat every patient with empathy, care, and respect.
        </p>
      </div>

    </div>
  </div>
</section>

    </main>
  );
}
