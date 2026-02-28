"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 4, suffix: "%", prefix: "", label: "הפסד ממוצע שמצאנו" },
  { value: 24, suffix: "h", prefix: "", label: "זמן הטמעה" },
  { value: 100, suffix: "%", prefix: "", label: "על בסיס הצלחה" },
  { value: 0, suffix: "", prefix: "₪", label: "עלות אם לא נמצא חיסכון" },
];

function AnimatedCounter({
  value,
  suffix,
  prefix,
  isInView,
}: {
  value: number;
  suffix: string;
  prefix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Number(current.toFixed(1)));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  const display = Number.isInteger(value) ? Math.round(count) : count.toFixed(1);

  return (
    <span className="gradient-text text-4xl font-bold md:text-5xl">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="bg-darker py-4 md:py-10">
      <div className="section-divider mx-auto mb-6 max-w-4xl md:mb-12 hidden md:block" />
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                isInView={isInView}
              />
              <p className="mt-2 text-sm text-gray-400 md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="section-divider mx-auto mt-12 max-w-4xl" />
    </section>
  );
}
