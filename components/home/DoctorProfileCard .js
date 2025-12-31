import React from "react";
import Link from "next/link";

const DoctorProfileCard = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT: Doctor Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/dr.jpg" 
            alt="Dr. H.O. Goyal"
            className="w-full md:w-[450px] lg:w-[500px] h-auto rounded-xl shadow-2xl object-cover"
          />
        </div>

        {/* RIGHT: Doctor Info */}
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-4">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
            Dr. H.O. Goyal
          </h3>

          <p className="text-gray-700 text-lg md:text-xl font-medium">
            MD. Alternative Medicine, Neuro Therapist (EAV & Aroma)
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Dr. H.O. Goyal is an expert in neurological care with extensive experience
            in treating headaches, dizziness, nerve pain, depression, migraines, hearing issues, and more.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Our clinic provides personalized treatment plans for all age groups
            using modern diagnostic techniques and patient-first approach.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We ensure comfort, clarity, and confidence at every step of your
            neurological care journey.
          </p>

          <Link href="/dr-h-o-goyal">
            <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Know More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfileCard;
