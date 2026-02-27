"use client";

import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="bg-darker py-20">
      <div className="section-divider mx-auto mb-16 max-w-4xl" />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glow-border rounded-2xl bg-linear-to-br from-[#1A2B3C]/80 to-[#0F1B2D] p-12 md:p-16"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            עסקים מפסידים בממוצע{" "}
            <span className="gradient-text">4%</span> מהמחזור
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            על טעויות חיוב של ספקים. בואו נבדוק את שלכם — בחינם.
          </p>
          <a
            href="#lead-form"
            className="btn-glow inline-block rounded-full bg-[#2ECC71] px-10 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-[#27ae60]"
          >
            לבדיקה חינם →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
