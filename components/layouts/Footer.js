"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

/* SERVICES DATA */
const services = [
  { title: "Headache" },
  { title: "Hearing Problem" },
  { title: "Migraine" },
  { title: "Depression" },
  { title: "Cervical Pain" },
  { title: "Insomnia" },
];

export default function Footer() {
  return (
    <>
      {/* ===== FOOTER ===== */}
      <footer className="relative bg-[#0A1F44] text-white mt-24">

        {/* TOP CURVE */}
        <div className="absolute -top-1 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 100" className="w-full h-[90px]" preserveAspectRatio="none">
            <path
              d="M0,60 C240,0 480,100 720,70 960,40 1200,10 1440,30 L1440,0 L0,0 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-28 pb-12">

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* ABOUT + LOGO */}
            <div>
              <Image
                src="/dark.png"
                alt="Neuro Clinic Logo"
                width={180}
                height={70}
                className="mb-4"
              />
              <p className="text-sm text-gray-300 leading-relaxed">
                Expert neurological care with advanced diagnosis and compassionate
                treatment for brain, spine and nerve disorders.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/" className="hover:text-red-400">Home</Link></li>
                <li><Link href="/about" className="hover:text-red-400">About</Link></li>
                <li><Link href="/services" className="hover:text-red-400">Services</Link></li>
                <li><Link href="/gallery" className="hover:text-red-400">Gallery</Link></li>
                <li><Link href="/contact" className="hover:text-red-400">Contact</Link></li>
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Treatments</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:text-red-400"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faLocationDot} className="text-red-400" />
                  Sco-34, City Enclave, Bhabat Road, Zirakpur (PB)
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faPhone} className="text-red-400" />
                  <a href="tel:+919896393678" className="hover:text-red-400">
                    +91 98963 93678
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-red-400" />
                  neuroclinic@gmail.com
                </li>
              </ul>

              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 mt-5 bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full text-sm font-semibold transition"
              >
                <FontAwesomeIcon icon={faCalendarCheck} />
                Book Appointment
              </Link>
            </div>

          </div>

          {/* COPYRIGHT */}
          <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Neuro Clinic. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* ===== FLOATING WHATSAPP (DESKTOP) ===== */}
      <a
        href="https://wa.me/919896393678"
        target="_blank"
        className="hidden md:flex fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full items-center justify-center shadow-xl hover:scale-110 transition"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl" />
      </a>

      {/* ===== MOBILE FIXED BOTTOM BAR ===== */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg z-50">
        <div className="flex items-center justify-between px-4 py-3">

          <div className="font-bold text-[#0A1F44] text-lg">
            Neuro Clinic
          </div>

          <div className="flex gap-4">
            <a
              href="tel:+919896393678"
              className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faPhone} />
            </a>

            <a
              href="https://wa.me/919896393678"
              className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
