"use client";

import Image from "next/image";

const services = [
  { title: "Headache", desc: "Chronic and acute headache treatment using safe, natural neuro therapies.", image: "/assets/services/s1.jpg" },
  { title: "Hearing Problem", desc: "Improving nerve response and auditory balance without surgical procedures.", image: "/assets/services/s2.jpg" },
  { title: "Migraine", desc: "Long-term migraine relief through advanced neuro-stimulation techniques.", image: "/assets/services/s3.webp" },
  { title: "Depression", desc: "Natural brain therapy to improve mood, focus and emotional balance.", image: "/assets/services/s4.webp" },
  { title: "Cervical Pain", desc: "Neck and cervical nerve pain treatment with non-invasive methods.", image: "/assets/services/s5.webp" },
  { title: "Insomnia", desc: "Sleep disorder treatment to restore natural sleep cycles.", image: "/assets/services/s6.webp" },
];

// soft gradients (alag-alag)
const gradients = [
  "from-green-100 to-green-200",
  "from-blue-100 to-blue-200",
  "from-purple-100 to-purple-200",
  "from-pink-100 to-pink-200",
  "from-indigo-100 to-indigo-200",
  "from-cyan-100 to-cyan-200",
];

export default function NeuroServices() {
  return (
    <section className="w-full py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="md:text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Our Neuro Treatments
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Advanced and natural treatments for neurological and nerve-related conditions.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
            >
              {/* TOP IMAGE AREA */}
              <div className="relative w-full h-[220px] bg-white flex items-center justify-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={260}
                  height={200}
                  className="object-contain"
                />
              </div>

              {/* CONTENT */}
              <div
                className={`p-8 bg-gradient-to-b ${gradients[index]} text-center`}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-700 mb-6">
                  {service.desc}
                </p>

                <button className="bg-blue-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-600 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
