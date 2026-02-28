"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SavingsCalculator() {
  const [turnover, setTurnover] = useState(5000000);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("he-IL").format(num);
  };

  const estimatedLoss = Math.round(turnover * 0.04);

  return (
    <section id="savings" className="bg-darker py-10 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card glow-border rounded-2xl p-8 shadow-xl md:p-12"
        >
          <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
            כמה כסף העסק שלך מאבד בכל שנה?
          </h2>

          <div className="mb-8">
            <label className="mb-4 block text-lg font-medium text-gray-200">
              מחזור שנתי (₪)
            </label>
            <div className="relative">
              <input
                type="range"
                min={100000}
                max={50000000}
                step={100000}
                value={turnover}
                onChange={(e) => setTurnover(Number(e.target.value))}
                className="w-full cursor-pointer"
              />
            </div>
            <div className="mt-5 text-center text-3xl font-bold text-white">
              ₪{formatNumber(turnover)}
            </div>
          </div>

          <div className="glow-border rounded-xl bg-[#1A2B3C]/60 p-6 text-center backdrop-blur-sm">
            <p className="mb-2 text-lg text-gray-300">הפסד משוער בשנה</p>
            <p className="text-4xl font-bold text-[#2ECC71] md:text-5xl">
              ₪{formatNumber(estimatedLoss)}
            </p>
            <p className="mt-4 text-base text-gray-400">
              אל תתנו לכסף הזה להיעלם
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
