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
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center text-3xl font-bold text-[#1A2B3C] md:text-4xl"
        >
          איך זה עובד
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-xl bg-[#F4F7F6] p-8 text-center"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#1A2B3C]">
                <step.icon className="h-10 w-10 text-[#2ECC71]" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#1A2B3C]">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
