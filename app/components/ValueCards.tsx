"use client";

import { motion } from "framer-motion";

export default function ValueCards() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-[#030303] py-10 md:py-16">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Green glow pulse from center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(46,204,113,0.06),transparent)]" />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-xl font-medium text-gray-400 md:text-2xl"
        >
          שולי הרווח שלכם ראויים לשומר - לא לאקסל.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
        >
          Profitector בונה את{" "}
          <span className="gradient-text">שכבת הגנת הרווח</span>
          <br />
          שכל עסק צומח צריך.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-8 max-w-2xl text-lg text-white/50 md:mb-12"
        >
          אף אחד עדיין לא בנה את זה. אנחנו כאן.
        </motion.p>

        {/* Two callout boxes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-8 grid gap-4 sm:grid-cols-2 md:mb-12"
        >
          <div className="glow-border rounded-2xl bg-[#0A0A0A] px-8 py-7 text-center">
            <p className="neon-number text-4xl font-bold sm:text-5xl">100%</p>
            <p className="mt-2 font-semibold text-white">על בסיס הצלחה</p>
            <p className="mt-1 text-sm text-white/40">
              לא מצאנו? לא משלמים.
            </p>
          </div>
          <div className="glow-border rounded-2xl bg-[#0A0A0A] px-8 py-7 text-center">
            <p className="neon-number text-4xl font-bold sm:text-5xl">₪0</p>
            <p className="mt-2 font-semibold text-white">אם לא נמצא חיסכון</p>
            <p className="mt-1 text-sm text-white/40">ללא סיכון, ללא התחייבות</p>
          </div>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 }}
          href="#lead-form"
          className="btn-glow inline-block w-full rounded-full bg-[#2ECC71] px-10 py-3.5 text-base font-bold text-black transition-all hover:scale-105 hover:bg-[#27ae60] md:w-auto"
        >
          בואו נבדוק את שלכם - בחינם →
        </motion.a>
      </div>
    </section>
  );
}
