"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  "/assets/banner/b2.png",
  "/assets/banner/b1.jpeg",
 
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
      {/* SLIDES */}
      {slides.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700
            ${index === current ? "opacity-100" : "opacity-0"}
          `}
        >
          <Image
            src={img}
            alt={`Banner ${index + 1}`}
            fill
            className="object-cover "
            priority={index === 0}
          />
        </div>
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Expert Neurology Care
          </h1>
          <p className="max-w-xl mb-6 text-lg">
            Advanced diagnosis & treatment for brain, spine and nerve disorders.
          </p>

          <a
            href="/appointment"
            className="inline-block bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-semibold transition"
          >
            Book Appointment
          </a>
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition
              ${current === index ? "bg-red-600" : "bg-white/70"}
            `}
          ></button>
        ))}
      </div>
    </section>

    <section className="w-full bg-[#0A1F44] overflow-hidden">
      <div className="relative flex">
        <div className="flex animate-marquee whitespace-nowrap py-3">
          <p className="text-white text-sm md:text-base font-medium mx-8">
            🧠 दिमाग, माइग्रेन, डिप्रेशन, चक्कर आना एवं नसों से संबंधित रोगों का सफल इलाज |
          </p>
          <p className="text-white text-sm md:text-base font-medium mx-8">
            🏥 Neuro Clinic Zirakpur – Brain, Spine & Nerve Specialist |
          </p>
          <p className="text-white text-sm md:text-base font-medium mx-8">
            📍 SCO-34, City Enclave, Bhabat Road, Zirakpur (PB) |
          </p>
          <p className="text-white text-sm md:text-base font-medium mx-8">
            📞 Appointment: 9896393678 |
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
