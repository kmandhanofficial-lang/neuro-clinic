"use client";

import ServicesSlider from "@/components/home/ServicesSlider";

export default function AppointmentClient() {
  return (
    <main className="w-full">

      {/* ===== BANNER ===== */}
      <section className="w-full -mt-[80px] relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c5f] via-[#1e5aa8] to-[#5fa8ff]" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex items-center justify-center h-full px-6 md:text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
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
      </section>
{/* ===== APPOINTMENT INTRO SECTION ===== */}
<section className="w-full bg-white py-24 md:py-24">
  <div className="max-w-7xl mx-auto px-6 flex flex-col items-center md:text-center gap-16">
    
    {/* LEFT: CONTENT */}
    <div className="md:w-3/4 lg:w-2/3">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Book Your Appointment
      </h2>

      <p className="mt-6 text-gray-700 text-lg md:text-xl leading-relaxed">
        At Neuro Clinic, we make booking your appointment simple and stress-free.
        Our goal is to provide timely neurological care with a patient-first
        approach, ensuring comfort, clarity, and confidence at every step.
      </p>

      <p className="mt-4 text-gray-700 text-lg md:text-xl leading-relaxed">
        Whether you are experiencing headaches, nerve pain, dizziness, memory
        issues, or other neurological concerns, our specialists are here to
        guide you with accurate diagnosis and effective treatment plans.
      </p>

      <ul className="mt-8 space-y-3 text-gray-600 text-lg">
        <li>✔ Easy and quick appointment booking</li>
        <li>✔ Consultation with experienced neuro specialists</li>
        <li>✔ Personalized treatment plans</li>
        <li>✔ Advanced diagnostics and modern facilities</li>
      </ul>
    </div>

  </div>
</section>


      {/* ===== SERVICES SLIDER ===== */}
      <ServicesSlider />

      {/* ===== APPOINTMENT FORM ===== */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12">

          <h3 className="text-2xl md:text-3xl font-bold md:text-center text-[#0b2c5f]">
            Book Your Appointment
          </h3>

          <p className="md:text-center text-gray-600 mt-3 mb-10">
            Fill in the details below and our team will contact you shortly.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* NAME */}
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* PHONE */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* SERVICE */}
            <select
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Treatment</option>
              <option>Headache</option>
              <option>Migraine</option>
              <option>Depression</option>
              <option>Cervical Pain</option>
              <option>Insomnia</option>
            </select>

            {/* DATE */}
            <input
              type="date"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* TIME */}
            <input
              type="time"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* MESSAGE */}
            <textarea
              placeholder="Message / Symptoms"
              rows="4"
              className="md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            {/* BUTTON */}
            <button
              type="submit"
              className="md:col-span-2 bg-gradient-to-r from-[#0b2c5f] to-[#1e5aa8] text-white py-4 rounded-full font-semibold hover:opacity-90 transition"
            >
              Confirm Appointment
            </button>

          </form>
        </div>
      </section>

    </main>
  );
}
