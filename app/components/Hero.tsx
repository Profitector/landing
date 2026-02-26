"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0F1B2D] pt-24 pb-20">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#1A2B3C]/40 via-[#0F1B2D] to-[#0F1B2D]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Right column - Text content (RTL) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-right"
          >
            <h1 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              <span className="text-[#2ECC71]">Profitector</span>
              <br />
              <span className="mt-2 block">מפסיקים להפסיד כסף</span>
              <span className="block">על טעויות ספקים</span>
            </h1>
            <p className="mx-auto mb-6 max-w-2xl text-lg text-gray-300 md:text-xl lg:mx-0">
              מערכת AI אוטונומית לביקורת רכש והחזרים.
            </p>

            <p className="mx-auto mb-10 max-w-2xl text-base text-gray-400 lg:mx-0">
              הטכנולוגיה מוצאת, המומחים מלווים, הרווחיות מוגנת.
            </p>

            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              href="#lead-form"
              className="inline-block rounded-full bg-[#2ECC71] px-10 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-[#27ae60] hover:shadow-lg hover:shadow-[#2ECC71]/30"
            >
              לבדיקה חינם
            </motion.a>
          </motion.div>

          {/* Left column - Dashboard mockup with glow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="glow-border-strong glow-animate rounded-2xl overflow-hidden bg-[#1A2B3C]/30 p-2">
              <Image
                src="/graph1.png"
                alt="Profitector Dashboard"
                width={600}
                height={400}
                className="w-full rounded-xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
