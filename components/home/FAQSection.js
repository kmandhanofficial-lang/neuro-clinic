"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What conditions are treated at Neuro Clinic?",
    answer:
      "We treat migraine, stress, insomnia, nerve pain, paralysis support, cervical issues, anxiety, and other neurological disorders using non-invasive therapies.",
  },
  {
    question: "Is the treatment safe and non-invasive?",
    answer:
      "Yes, all treatments are completely non-invasive, drug-free, and safe.",
  },
  {
    question: "How long does a treatment session take?",
    answer:
      "A typical session lasts between 30 to 45 minutes depending on the treatment.",
  },
  {
    question: "Do I need an appointment before visiting?",
    answer:
      "Yes, we recommend booking an appointment in advance.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // ✅ FIXED

  return (
    <section className="w-full py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="md:text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Answers to common questions about Neuro Clinic.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <span className="text-2xl font-bold text-indigo-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
