"use client";

export default function ContactClient() {
  return (
    <>
    <main className="w-full">
      {/* CONTACT BANNER */}
      <section className="w-full -mt-[80px] relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c5f] via-[#1e5aa8] to-[#5fa8ff]" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
              Contact Us
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-100">
              Get in touch with us for any queries or support. We are here to help you!
            </p>
          </div>
        </div>
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
      </section>

    
      {/* ===== CONTACT SECTION ===== */}
      <section className="w-full py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* ===== LEFT: CONTACT INFO ===== */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Get In Touch
            </h2>

            <p className="text-gray-600 mb-8">
              Feel free to contact us for appointments, queries or expert
              neurological consultation.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-gray-800">📍 Address</h4>
                <p className="text-gray-600">
                  SCO-34, City Enclave, Bhabat Road,<br />
                  Zirakpur, Punjab – 140603
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-gray-800">📞 Phone</h4>
                <p className="text-gray-600">+91 98963 93678</p>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-gray-800">✉️ Email</h4>
                <p className="text-gray-600">info@neuroclinic.com</p>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-gray-800">🕒 Working Hours</h4>
                <p className="text-gray-600">
                  Mon – Sat: 9:00 AM – 7:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* ===== RIGHT: CONTACT FORM ===== */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-full transition"
              >
                Submit Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ===== FULL WIDTH MAP ===== */}
      <section className="w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps?q=Zirakpur%20Punjab&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
       </main>
    </>
    
  );
}
   
  