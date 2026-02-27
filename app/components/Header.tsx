"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 left-0 z-50 border-b border-[#2ECC71]/20 bg-[#0F1B2D]/95 backdrop-blur-md shadow-lg shadow-[#2ECC71]/5"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <Image
          src="/logo4.png"
          alt="Profitector"
          width={1300}
          height={100}
          className="h-12 w-auto object-contain"
          priority
        />
        <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
          <a href="#savings" className="transition-colors hover:text-[#2ECC71]">מחשבון חיסכון</a>
          <a href="#how-it-works" className="transition-colors hover:text-[#2ECC71]">איך זה עובד</a>
          <a href="#why-us" className="transition-colors hover:text-[#2ECC71]">למה אנחנו</a>
          <a href="#faq" className="transition-colors hover:text-[#2ECC71]">שאלות נפוצות</a>
        </nav>
        <a
          href="#lead-form"
          className="btn-glow rounded-full bg-[#2ECC71] px-6 py-2 font-semibold text-white transition-all hover:scale-105 hover:bg-[#27ae60]"
        >
          לבדיקה חינם
        </a>
      </div>
    </motion.header>
  );
}
