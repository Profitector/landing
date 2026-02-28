"use client";

import { motion } from "framer-motion";
import { Cloud, Cpu, Wallet } from "lucide-react";

const steps = [
  {
    icon: Cloud,
    title: "סריקה אוטומטית",
    description: "המערכת סורקת את כל החשבוניות שלך באופן אוטומטי",
  },
  {
    icon: Cpu,
    title: "ניתוח AI",
    description: "בינה מלאכותית מזהה חריגות ושגיאות במחירים",
  },
  {
    icon: Wallet,
    title: "החזר כספי",
    description: "קבלת הזיכויים שמגיעים לך מהספקים",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#0F1B2D] py-10 md:py-20">
      <div className="section-divider mx-auto mb-8 max-w-4xl md:mb-16 hidden md:block" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center"
        >
          <span className="inline-block rounded-full bg-[#2ECC71]/10 px-4 py-1 text-sm font-semibold text-[#2ECC71]">
            תהליך
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center text-3xl font-bold text-white md:text-4xl"
        >
          איך זה עובד?
        </motion.h2>

        <div className="relative grid gap-8 md:grid-cols-3">
          {/* Connector line (desktop only) */}
          <div className="absolute top-24 right-[16.7%] left-[16.7%] hidden h-px bg-linear-to-l from-transparent via-[#2ECC71]/30 to-transparent md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card glass-card-hover relative rounded-xl p-8 text-center transition-all duration-300"
            >
              <span className="absolute -top-3 right-4 rounded-full bg-[#2ECC71] px-3 py-1 text-xs font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#1A2B3C] shadow-lg shadow-[#2ECC71]/20">
                <step.icon className="h-10 w-10 text-[#2ECC71]" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">
                {step.title}
              </h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
