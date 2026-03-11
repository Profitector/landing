"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SavingsCalculator() {
  const [turnover, setTurnover] = useState(5000000);

  const formatNumber = (num: number) =>
    new Intl.NumberFormat("he-IL").format(num);

  const estimatedLoss = Math.round(turnover * 0.04);

  const percent = ((turnover - 100000) / (50000000 - 100000)) * 100;

  return (
    <section id="savings" className="bg-[#050505] py-10 md:py-16">
      <div className="mx-auto max-w-2xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-6 text-center md:mb-10">
            <span className="mb-4 inline-block rounded-full border border-[#2ECC71]/25 bg-[#2ECC71]/8 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#2ECC71]">
              מחשבון חיסכון
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              גלו תוך 10 שניות
              <br />
              <span className="gradient-text">כמה כסף אתם מאבדים</span>
            </h2>
            <p className="mt-3 text-white/50">
              הזיזו את הסליידר לפי המחזור השנתי שלכם
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-white/6 bg-[#0A0A0A] p-5 md:p-10">
            {/* Slider label */}
            <div className="mb-3 flex items-center justify-between text-sm text-white/50">
              <span>מחזור שנתי</span>
              <span className="font-semibold text-white">
                ₪{formatNumber(turnover)}
              </span>
            </div>

            {/* Custom track with fill */}
            <div className="relative mb-8">
              <div className="absolute top-1/2 left-0 right-0 h-1.5 -translate-y-1/2 overflow-hidden rounded-full bg-white/8">
                <div
                  className="h-full rounded-full bg-[#2ECC71] transition-all duration-100"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <input
                type="range"
                min={100000}
                max={50000000}
                step={100000}
                value={turnover}
                onChange={(e) => setTurnover(Number(e.target.value))}
                className="relative w-full cursor-pointer"
              />
            </div>

            {/* Range labels */}
            <div className="mb-8 flex justify-between text-xs text-white/40">
              <span>₪100K</span>
              <span>₪50M</span>
            </div>

            {/* Result */}
            <div className="rounded-xl border border-[#2ECC71]/20 bg-[#2ECC71]/5 p-6 text-center">
              <p className="mb-1 text-sm font-medium text-white/70">
                הפסד משוער בשנה
              </p>
              <p className="neon-number text-4xl font-bold sm:text-6xl md:text-7xl">
                ₪{formatNumber(estimatedLoss)}
              </p>
              <p className="mt-3 text-sm text-white/50">
                בממוצע, עסקים מפסידים{" "}
                <span className="font-semibold text-[#2ECC71]">4%</span>{" "}
                מהמחזור על טעויות חיוב של ספקים
              </p>
            </div>

            {/* CTA */}
            <div className="mt-6 text-center">
              <a
                href="#lead-form"
                className="btn-glow inline-block w-full rounded-full bg-[#2ECC71] px-8 py-3 text-sm font-bold text-black transition-all hover:scale-105 hover:bg-[#27ae60] md:w-auto"
              >
                אל תתנו לכסף הזה להיעלם →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
