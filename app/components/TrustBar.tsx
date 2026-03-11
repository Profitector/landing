"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 4, suffix: "%", prefix: "", label: "הפסד ממוצע שמצאנו" },
  { value: 24, suffix: "h", prefix: "", label: "זמן הטמעה" },
  { value: 100, suffix: "%", prefix: "", label: "על בסיס הצלחה" },
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
    <span className="gradient-text text-3xl font-bold md:text-5xl">
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
    <section className="bg-[#030303] py-8 md:py-12">
      <div className="section-divider mx-auto mb-6 max-w-4xl md:mb-10" />
      <div ref={ref} className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

          {/* ₪0 Risk-Reversal Highlight - first in RTL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="glow-border col-span-2 flex flex-col items-center justify-center rounded-2xl bg-[#2ECC71]/6 px-6 py-5 text-center md:col-span-1 md:py-7"
          >
            <p className="neon-number text-5xl font-bold md:text-6xl">₪0</p>
            <p className="mt-2 text-sm font-semibold text-white">עלות אם לא נמצא חיסכון</p>
            <p className="mt-1 text-xs text-white/40">מודל הצלחה בלבד - ללא סיכון</p>
          </motion.div>

          {/* 3 Regular stats */}
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              className="flex flex-col items-center justify-center rounded-2xl border border-white/6 bg-[#0A0A0A] px-4 py-7 text-center"
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                isInView={isInView}
              />
              <p className="mt-2 text-xs text-white/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="section-divider mx-auto mt-6 max-w-4xl md:mt-10" />
    </section>
  );
}
