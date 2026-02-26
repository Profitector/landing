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
    <section className="bg-[#F4F7F6] py-20">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-white p-8 shadow-xl md:p-12"
        >
          <h2 className="mb-8 text-center text-2xl font-bold text-[#1A2B3C] md:text-3xl">
            כמה כסף העסק שלך מאבד בכל שנה?
          </h2>

          <div className="mb-8">
            <label className="mb-4 block text-lg font-medium text-[#1A2B3C]">
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
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#2ECC71] [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:active:cursor-grabbing [&::-moz-range-thumb]:h-8 [&::-moz-range-thumb]:w-8 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-[#2ECC71] [&::-moz-range-thumb]:shadow-lg [&::-moz-range-thumb]:transition-transform [&::-moz-range-thumb]:hover:scale-110 [&::-moz-range-thumb]:cursor-grab [&::-moz-range-thumb]:active:cursor-grabbing"
              />
            </div>
            <div className="mt-5 text-center text-3xl font-bold text-[#1A2B3C]">
              ₪{formatNumber(turnover)}
            </div>
          </div>

          <div className="rounded-xl bg-[#1A2B3C] p-6 text-center">
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
