"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-[#1A2B3C] pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl"
        >
          הספקים מעלים מחירים ב-5 אגורות?
          <br />
         <div className="mt-2"><span className="text-[#2ECC71]" >Profitector</span> תעצור את זה בזמן אמת</div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mb-6 max-w-2xl text-lg text-gray-300 md:text-xl"
        >
          המערכת האוטונומית שסורקת כל שורה בחשבוניות שלך ומזהה טעויות חיוב.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mb-10 max-w-2xl text-base text-gray-400"
        >
          הטכנולוגיה מוצאת, המומחים מלווים, הרווחיות מוגנת.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          href="#lead-form"
          className="inline-block rounded-full bg-[#2ECC71] px-10 py-4 text-lg font-semibold text-white transition-transform hover:scale-105 hover:bg-[#27ae60]"
        >
          לבדיקה חינם
        </motion.a>
      </div>
    </section>
  );
}
