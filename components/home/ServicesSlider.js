"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  { title: "Headache", image: "/assets/services/s1.jpg" },
  { title: "Hearing Problem", image: "/assets/services/s2.jpg" },
  { title: "Migraine", image: "/assets/services/s3.webp" },
  { title: "Depression", image: "/assets/services/s4.webp" },
  { title: "Cervical Pain", image: "/assets/services/s5.webp" },
  { title: "Insomnia", image: "/assets/services/s6.webp" },
  { title: "Vertigo", image: "/assets/services/s7.jpg" },
  { title: "Memory Loss", image: "/assets/services/s8.jpg" },
  { title: "Paralysis", image: "/assets/services/s9.webp" },
  { title: "Alzheimer", image: "/assets/services/s10.webp" },
  { title: "Parkinson", image: "/assets/services/s11.webp" },
];

// Duplicate services array for infinite scroll effect
const sliderItems = [...services, ...services];

export default function ServicesSlider() {
  return (
    <section className="w-full py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="md:text-center p-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-900">
             Advanced Care for Brain, Spine & Nerves
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our treatments with advanced and natural solutions.
          </p>
        </div>

        {/* Slider */}
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
          >
            {sliderItems.map((service, index) => (
              <div key={index} className="min-w-[250px] md:min-w-[300px] h-64 md:h-72 relative rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                
                {/* Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/10  bg-opacity-40"></div>

                {/* Service name card */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full font-semibold shadow">
                  {service.title}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
