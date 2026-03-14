"use client";

import { motion } from "framer-motion";

const catches = [
  {
    marker: "■",
    title: "התראות שחיקת מרווחים",
    en: "Margin Erosion Alerts",
    description:
      "מזהה כאשר המרווחים שלכם נשחקים לאט על פני קווי מוצרים, לקוחות או אזורים. תופס את הדימום האיטי שגיליונות האקסל מפספסים.",
  },
  {
    marker: "▲",
    title: "זיהוי דליפות תמחור",
    en: "Pricing Leak Detection",
    description:
      "מסמן הנחות לא מאושרות, תמחור לא עקבי ועסקאות שנמצאות מתחת לרצפה שלכם. כל שקל חשוב כשאתם מתרחבים.",
  },
  {
    marker: "●",
    title: "התראות מקדימות",
    en: "Predictive Warnings",
    description:
      "AI מדמה את מסלול הרווח שלכם ומתריע לפני שסף מסוכן נפרץ. ראו בעיות שבוע מראש - לא רבעון מאוחר.",
  },
  {
    marker: "★",
    title: "המלצות לתיקון",
    en: "Fix-It Recommendations",
    description:
      'לא רק "המרווחים ירדו". Profitector אומר לכם אילו לקוחות, אילו מוצרים, ובדיוק מה לשנות. פעולתי, לא אקדמי.',
  },
];

export default function WhatItCatches() {
  return (
    <section className="bg-[#050505] py-10 md:py-16">
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
            מה אנחנו תופסים
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-center text-3xl font-bold text-white md:text-4xl"
        >
          הכסף שלא ידעתם שאתם מפסידים
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 text-center text-white/50 md:mb-14"
        >
          ארבע שכבות זיהוי שפועלות 24/7 על כל עסקה
        </motion.p>

        <div className="grid gap-5 md:grid-cols-2">
          {catches.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-white/6 bg-[#0A0A0A] p-7 transition-all duration-300 hover:border-[#2ECC71]/25 hover:bg-[#0D0D0D]"
            >
              <div className="mb-4 flex items-center gap-3 text-right" dir="rtl">
                <span className="text-2xl text-[#2ECC71] shrink-0">{item.marker}</span>
                <div className="min-w-0">
                  <p className="font-bold text-white">{item.title}</p>
                  <p className="text-xs text-white/50">{item.en}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/50 text-right" dir="rtl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
