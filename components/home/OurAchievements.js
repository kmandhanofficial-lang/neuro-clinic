"use client";

import { useEffect, useRef, useState } from "react";

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000; // 2 seconds
          const startTime = performance.now();

          const animate = (time) => {
            const progress = Math.min((time - startTime) / duration, 1);
            setCount(Math.floor(progress * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <h3 ref={ref} className="text-4xl font-bold text-indigo-300">
      {count}
      {suffix}
    </h3>
  );
}

export default function OurAchievements() {
  return (
    <section
      className="relative w-full py-28 px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/goal.png')" }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto md:text-center text-white">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Achievements
        </h2>

        <p className="text-lg text-slate-200 max-w-3xl mx-auto mb-16">
          Years of dedication, advanced neuro care and successful treatments
          that have transformed thousands of lives.
        </p>

        {/* GRID */}
        <div className="grid gap-8 text-center sm:grid-cols-2 md:grid-cols-4">

          <div className="bg-white/10 backdrop-blur-lg rounded-xl py-8 px-6">
            <Counter end={10} suffix="+" />
            <p className="mt-2 text-slate-200">Years of Experience</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl py-8 px-6">
            <Counter end={1500} suffix="+" />
            <p className="mt-2 text-slate-200">Patients Treated</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl py-8 px-6">
            <Counter end={98} suffix="%" />
            <p className="mt-2 text-slate-200">Patient Satisfaction</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl py-8 px-6">
            <Counter end={20} suffix="+" />
            <p className="mt-2 text-slate-200">Neuro Conditions Treated</p>
          </div>

        </div>
      </div>
    </section>
  );
}
