"use client";

export default function ContactUs() {
  return (
    <section className="w-full py-24 px-4 bg-slate-100">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="md:text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with Neuro Clinic for expert consultation and treatment.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT SIDE – DETAILS */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Clinic Details
            </h3>

            <div className="space-y-5 text-gray-700">
              <p>
                <span className="font-semibold text-gray-900">Doctor:</span>{" "}
                Dr. H.O. Goyal <br />
                <span className="text-sm text-gray-500">
                  MD (Alternative Medicine), Neuro Therapist
                </span>
              </p>

              <p>
                <span className="font-semibold text-gray-900">Address:</span>{" "}
                SCO-34, City Enclave, Bhabat Road, Zirakpur (PB)
              </p>

              <p>
                <span className="font-semibold text-gray-900">Phone:</span>{" "}
                <a
                  href="tel:9896393678"
                  className="text-indigo-600 hover:underline"
                >
                  98963 93678
                </a>
              </p>

              <p>
                <span className="font-semibold text-gray-900">Working Hours:</span>{" "}
                Monday – Saturday : 10:00 AM – 6:00 PM
              </p>
            </div>
          </div>

         {/* RIGHT SIDE – FORM (DARK) */}
<div className="bg-slate-900 rounded-2xl shadow-xl p-8 text-white">
  <h3 className="text-2xl font-semibold mb-6">
    Send Us a Message
  </h3>

  <form className="space-y-5">
    <input
      type="text"
      placeholder="Your Name"
      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />

    <input
      type="tel"
      placeholder="Phone Number"
      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />

    <textarea
      rows={4}
      placeholder="Your Message"
      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />

    <button
      type="submit"
      className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition"
    >
      Submit
    </button>
  </form>
</div>


        </div>

      </div>
    </section>
  );
}
