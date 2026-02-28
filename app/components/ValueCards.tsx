"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Brain, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const values: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ShieldCheck,
    title: "הצלחה מובטחת",
    description: "אנחנו מתחייבים לתוצאות, אתם משלמים רק על חיסכון אמיתי",
  },
  {
    icon: Target,
    title: "דיוק מקסימלי",
    description: "טכנולוגיית AI מתקדמת שמזהה כל חריגה, גם הקטנה ביותר",
  },
  {
    icon: Brain,
    title: "שקט נפשי",
    description: "אתם מתמקדים בעסק, אנחנו דואגים לרווחיות",
  },
  {
    icon: Zap,
    title: "הטמעה מיידית",
    description: "התחלת עבודה תוך 24 שעות, ללא שינויים במערכות הקיימות",
  },
];

export default function ValueCards() {
  return (
    <section id="why-us" className="bg-darker py-10 md:py-20">
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
            יתרונות
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center text-3xl font-bold text-white md:text-4xl"
        >
          למה לבחור ב-Profitector
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover group rounded-xl border-t-2 border-t-transparent p-6 shadow-md transition-all duration-300 hover:border-t-[#2ECC71] hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#2ECC71]/10">
                <value.icon className="h-6 w-6 text-[#2ECC71]" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                {value.title}
              </h3>
              <p className="text-sm text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="mb-6 text-lg text-gray-300">
            עסקים מפסידים בממוצע <span className="gradient-text font-bold">4%</span> מהמחזור על טעויות חיוב של ספקים
          </p>
          <a
            href="#lead-form"
            className="btn-glow inline-block rounded-full bg-[#2ECC71] px-10 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-[#27ae60]"
          >
            בואו נבדוק את שלכם — בחינם →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
