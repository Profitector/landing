"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "כמה זה עולה?",
    answer:
      "אנחנו עובדים על בסיס הצלחה בלבד. אתם משלמים רק אחוז מהחיסכון שמצאנו. אם לא מצאנו - לא משלמים. ₪0 סיכון.",
  },
  {
    question: "מה קורה אם לא נמצאות טעויות?",
    answer:
      "אם המערכת לא מוצאת חריגות - אתם מקבלים אישור שהספקים שלכם מתומחרים כראוי. שקט נפשי בחינם.",
  },
  {
    question: "כמה זמן לוקחת ההטמעה?",
    answer:
      "ההטמעה לוקחת עד 24 שעות. לא נדרשים שינויים במערכות הקיימות שלכם - רק גישה לחשבוניות.",
  },
  {
    question: "האם המידע שלי מאובטח?",
    answer:
      "לחלוטין. אנחנו עובדים בהתאם לתקני אבטחת מידע מחמירים. כל הנתונים מוצפנים ונשמרים בשרתים מאובטחים.",
  },
  {
    question: "לאיזה סוגי עסקים זה מתאים?",
    answer:
      "Profitector מתאים לכל עסק שעובד עם ספקים - קמעונאות, מסעדנות, ייצור, B2B, שירותים ועוד. ככל שהמחזור גדול יותר, כך הפוטנציאל לחיסכון עולה.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#030303] py-10 md:py-16">
      <div className="section-divider mx-auto mb-12 max-w-4xl hidden md:block" />
      <div className="mx-auto max-w-2xl px-6 sm:px-10 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-3xl font-bold text-white md:mb-12 md:text-4xl"
        >
          שאלות נפוצות
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="overflow-hidden rounded-xl border border-white/6 bg-[#0A0A0A] transition-colors hover:border-[#2ECC71]/20"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-right text-base font-semibold text-white transition-colors hover:text-[#2ECC71]"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-[#2ECC71] transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-white/50">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
