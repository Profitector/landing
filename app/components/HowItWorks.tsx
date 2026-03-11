"use client";

import { motion } from "framer-motion";
import { Link2, ScanSearch, ShieldCheck } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Link2,
    title: "חיבור",
    description: "חברו חשבוניות, הוצאות ונתוני תשלומים. Profitector ממפה את כל זרימת ההכנסות שלכם תוך דקות.",
  },
  {
    num: "02",
    icon: ScanSearch,
    title: "ניטור",
    description: "AI עוקב אחרי כל עסקה, מזהה שחיקת מרווחים וחריגות תמחור. 24/7, ללא גיליונות אקסל.",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "הגנה",
    description: "קבלו התראות לפני שדליפות הופכות להפסדים. המלצות פעולה ממוקדות — לא רק דשבורדים.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#030303] py-10 md:py-16">
      <div className="section-divider mx-auto mb-12 max-w-4xl hidden md:block" />
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center"
        >
          <span className="inline-block rounded-full border border-[#2ECC71]/25 bg-[#2ECC71]/8 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#2ECC71]">
            שלוש שכבות הגנה
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 text-center text-3xl font-bold text-white md:mb-16 md:text-4xl"
        >
          איך זה עובד?
        </motion.h2>

        <div className="relative grid gap-6 md:grid-cols-3">
          {/* Connector line (desktop only) */}
          <div className="absolute top-8 right-[16.7%] left-[16.7%] hidden h-px bg-linear-to-l from-transparent via-[#2ECC71]/15 to-transparent md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl border border-white/6 bg-[#0A0A0A] p-6 transition-all duration-300 hover:border-[#2ECC71]/20 hover:bg-[#0D0D0D] hover:shadow-[0_0_30px_rgba(46,204,113,0.06)] md:p-8"
            >
              {/* Step number — absolute, huge, purely decorative */}
              <span
                className="pointer-events-none absolute top-2 left-4 select-none font-mono text-7xl font-bold text-[#2ECC71]"
                style={{ opacity: 0.05 }}
                aria-hidden="true"
              >
                {step.num}
              </span>

              {/* Icon — floating, no container */}
              <div
                className="relative mb-5 flex h-10 w-10 items-center justify-center text-[#2ECC71]"
                style={{ filter: "drop-shadow(0 0 8px rgba(46,204,113,0.5))" }}
              >
                <step.icon
                  className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.5}
                />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold tracking-tight text-white">{step.title}</h3>

              {/* Body text */}
              <p className="text-[0.9rem] leading-8 text-white/60">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
