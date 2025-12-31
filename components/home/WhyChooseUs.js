"use client";

import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="w-full py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2 relative h-80 lg:h-[400px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/assets/why-choose.jpg" // replace with your image
            alt="Why Choose Us"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Us
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We provide advanced, natural, and effective neuro treatments 
            designed to restore your health and improve your quality of life. 
            Our team of experts ensures personalized care with modern, 
            non-invasive methods.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-indigo-500 font-bold text-xl">✔</span>
              <span className="text-gray-700">Experienced & certified neurologists</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-500 font-bold text-xl">✔</span>
              <span className="text-gray-700">Non-invasive & natural treatments</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-500 font-bold text-xl">✔</span>
              <span className="text-gray-700">Personalized care for every patient</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-500 font-bold text-xl">✔</span>
              <span className="text-gray-700">Modern clinic with latest technology</span>
            </li>
          </ul>

          <button className="mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}
