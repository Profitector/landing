"use client";

import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "הצלחה מובטחת",
    description: "אנחנו מתחייבים לתוצאות, אתם משלמים רק על חיסכון אמיתי",
  },
  {
    number: "02",
    title: "דיוק מקסימלי",
    description: "טכנולוגיית AI מתקדמת שמזהה כל חריגה, גם הקטנה ביותר",
  },
  {
    number: "03",
    title: "שקט נפשי",
    description: "אתם מתמקדים בעסק, אנחנו דואגים לרווחיות",
  },
  {
    number: "04",
    title: "הטמעה מיידית",
    description: "התחלת עבודה תוך 24 שעות, ללא שינויים במערכות הקיימות",
  },
];

export default function ValueCards() {
  return (
    <section className="bg-[#0F1B2D] py-20">
      <div className="mx-auto max-w-6xl px-6">
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
              key={value.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-xl p-6 shadow-md transition-all duration-300"
            >
              <span className="mb-4 block text-4xl font-bold text-[#2ECC71]">
                {value.number}
              </span>
              <h3 className="mb-2 text-lg font-bold text-white">
                {value.title}
              </h3>
              <p className="text-sm text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
