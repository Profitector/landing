"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] pt-24 pb-12 md:pt-32 md:pb-28">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Radial green glow center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(46,204,113,0.08),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-2">

          {/* Right column - Text content (RTL) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="text-center lg:text-right"
          >
            {/* Eyebrow label */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2ECC71]/25 bg-[#2ECC71]/8 px-4 py-1.5 text-sm font-semibold text-[#2ECC71]"
            >
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#2ECC71]" />
              AI Profit Protection
            </motion.div>

            <h1 className="mb-5 text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl xl:text-6xl">
              <span className="block text-white">הרווחים שלכם</span>
              <span className="block">
                <span className="text-strike gradient-text">דולפים.</span>
              </span>
              <span className="mt-1 block text-2xl font-bold text-gray-300 md:text-3xl lg:text-4xl">
                אנחנו מוצאים אותם.
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-white/70 lg:mx-0">
              מערכת ה-AI שמגינה על שולי הרווח שלכם בזמן אמת - מזהה דליפות,
              מתריעה על שחיקת מרווחים, ומספקת המלצות פעולה לפני שהנזק נגרם.
            </p>

            <motion.a
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              href="#lead-form"
              className="btn-glow inline-block w-full rounded-full bg-[#2ECC71] px-10 py-4 text-lg font-bold text-black transition-all hover:scale-105 hover:bg-[#27ae60] md:w-auto"
            >
              לבדיקה חינם →
            </motion.a>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/50 lg:justify-start">
              <span className="flex items-center gap-1.5">
                <span className="text-[#2ECC71]">✓</span> ללא התחייבות
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#2ECC71]">✓</span> תוצאות תוך 48 שעות
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#2ECC71]">✓</span> על בסיס הצלחה בלבד
              </span>
            </div>
          </motion.div>

          {/* Left column - Dashboard image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="relative"
          >
            {/* Ambient glow */}
            <div className="absolute -inset-4 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(46,204,113,0.12),transparent_70%)]" />

            <div className="glow-border-strong glow-animate relative overflow-hidden rounded-2xl">
              <Image
                src="/graph1.png"
                alt="Profitector Dashboard"
                width={600}
                height={420}
                className="w-full rounded-2xl"
                priority
              />
            </div>

            {/* Decorative "live" label */}
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/40">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#2ECC71]" />
              עדכון בזמן אמת · מופעל על ידי AI
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
