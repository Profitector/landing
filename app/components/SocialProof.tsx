"use client";

import { motion } from "framer-motion";

const brands = [
  "רשת הזהב",
  "מגה סטור",
  "אלפא פוד",
  "טכנו פלוס",
  "מרקט פרים",
  "ביז גרופ",
];

export default function SocialProof() {
  return (
    <section className="border-y border-white/5 bg-[#030303] py-8">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-gray-600"
        >
          מצטרפים לעסקים שכבר מגנים על הרווחיות שלהם
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
              className="flex h-9 min-w-25 items-center justify-center rounded-lg border border-white/6 bg-white/3 px-5"
            >
              <span className="text-sm font-semibold tracking-wide text-gray-500">
                {brand}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
