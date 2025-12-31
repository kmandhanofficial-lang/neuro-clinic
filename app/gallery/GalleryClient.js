"use client";

import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  "/assets/gallery/g1.jpg",
  "/assets/gallery/g7.jpg",
  "/assets/gallery/g3.jpg",
  "/assets/gallery/g4.jpg",
  "/assets/gallery/g8.jpg",
  "/assets/gallery/g6.jpg",
  "/assets/gallery/g5.jpg",
];

export default function GalleryClient() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      {/* ===== GALLERY BANNER (ABOUT STYLE) ===== */}
      <div className="bg-white"> 
      <section className="w-full -mt-[80px]">
        <div className="relative w-full h-[600px] md:h-[650px] overflow-hidden">
          {/* GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c5f] via-[#1e5aa8] to-[#5fa8ff]" />
          <div className="absolute inset-0 bg-black/30" />

          {/* FLOATING ICONS */}
          <div className="absolute inset-0 pointer-events-none">
            <span className="absolute top-24 left-16 text-white/30 text-3xl">✚</span>
            <span className="absolute top-1/2 left-10 text-white/20 text-4xl">🖼️</span>
            <span className="absolute bottom-24 left-24 text-white/25 text-2xl">✚</span>

            <span className="absolute top-20 right-16 text-white/25 text-3xl">📷</span>
            <span className="absolute top-1/2 right-12 text-white/20 text-4xl">✚</span>
            <span className="absolute bottom-28 right-24 text-white/25 text-2xl">🖼️</span>
          </div>

          {/* TEXT */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Our Gallery
              </h1>
              <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-100">
                A glimpse of our completed projects, fabrication excellence
                and engineering achievements.
              </p>
            </div>
          </div>

          {/* WAVE */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1440 120" className="w-full h-[80px]" preserveAspectRatio="none">
              <path
                d="M0,40 C240,100 480,0 720,20 960,40 1200,80 1440,30 L1440,120 L0,120 Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="max-w-5xl bg-white mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Engineering Excellence in Action
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Our gallery highlights real-world projects, innovative designs and
          high-quality fabrication work delivered to our clients.
        </p>
      </section>

      {/* ===== GALLERY GRID ===== */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(img)}
              className="cursor-pointer overflow-hidden rounded-xl shadow-md group"
            >
              <Image
                src={img}
                alt={`Gallery Image ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>
      </div>

      {/* ===== POPUP / LIGHTBOX ===== */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          {/* CLOSE */}
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white text-4xl font-bold"
          >
            ×
          </button>

          {/* IMAGE */}
          <div className="relative max-w-5xl w-full">
            <Image
              src={activeImage}
              alt="Full View"
              width={1200}
              height={800}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
        
      )}
    </>
  );
}
