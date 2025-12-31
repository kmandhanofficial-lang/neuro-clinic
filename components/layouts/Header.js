"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 w-full z-50">

        <div className="max-w-7xl mx-auto px-4">
          <div
            className={`bg-white rounded-2xl shadow-lg transition-all duration-300
              ${scrolled ? "py-2" : "py-3"}
            `}
          >
            <div className="flex items-center justify-between px-6 h-16 md:h-20">

              {/* LOGO */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/dark.png"
                  alt="Neuro Clinic"
                  width={160}
                  height={60}
                  className="object-contain"
                  priority
                />
              </Link>

              {/* DESKTOP NAV */}
              <nav className="hidden md:flex items-center gap-8">
                {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                    className="font-medium text-[#1E3A8A] hover:text-red-600 transition"
                  >
                    {item}
                  </Link>
                ))}
              </nav>

              {/* RIGHT DESKTOP */}
              <div className="hidden md:flex items-center gap-4">
                <a
                  href="tel:+919896393678"
                  className="font-semibold text-[#1E3A8A]"
                >
                  📞 +91 98963 93678
                </a>

                <Link
                  href="/appointment"
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-semibold transition"
                >
                  Book Appointment
                </Link>
              </div>

              {/* MOBILE RIGHT */}
              <div className="flex md:hidden items-center gap-4">
                <a
                  href="tel:+919896393678"
                  className="text-2xl text-[#1E3A8A]"
                >
                  📞
                </a>

                <button
                  onClick={() => setMenuOpen(true)}
                  className="text-2xl text-[#1E3A8A]"
                >
                  ☰
                </button>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 md:hidden">
          <div className="absolute top-0 right-0 w-72 h-full bg-white p-6 shadow-xl">

            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl text-[#1E3A8A] mb-6"
            >
              ✕
            </button>

            <nav className="flex flex-col gap-4">
              {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="font-medium text-[#1E3A8A]"
                >
                  {item}
                </Link>
              ))}

              <Link
                href="/appointment"
                onClick={() => setMenuOpen(false)}
                className="mt-6 bg-red-600 text-white text-center py-3 rounded-full font-semibold"
              >
                Book Appointment
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
