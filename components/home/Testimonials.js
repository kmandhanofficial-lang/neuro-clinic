"use client";

import Slider from "react-slick";
import Image from "next/image";

const testimonials = [
  {
    name: "Simran ",
    review:
      "I suffered from migraines for years. After treatment here, I finally feel relief and peace. Highly professional clinic.",
    image: "/assets/testimonials/t1.jpg",
  },
  {
    name: "Suresh Verma",
    review:
      "Excellent neuro care with natural therapies. The staff is supportive and the environment is very calm.",
    image: "/assets/testimonials/t2.jpg",
  },
  {
    name: "Pooja Singh",
    review:
      "My sleep cycle has improved drastically. Non-invasive treatment and very effective results.",
    image: "/assets/testimonials/t3.jpg",
  },
  {
    name: "Anita Kumar",
    review:
      "Best neuro clinic experience so far. Modern methods and genuine care for patients.",
    image: "/assets/testimonials/t4.jpg",
  },
];

export default function TestimonialsSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="w-full py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="md:text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Patient Testimonials
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Real experiences from patients who trusted our neuro care treatments.
          </p>
        </div>

        {/* SLIDER */}
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 h-full text-center">

                {/* IMAGE */}
                <div className="relative w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-indigo-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* REVIEW */}
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  “{item.review}”
                </p>

                {/* NAME */}
                <h4 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h4>

              </div>
            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
}
