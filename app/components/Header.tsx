"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#savings", label: "מחשבון חיסכון" },
  { href: "#how-it-works", label: "איך זה עובד" },
  { href: "#why-us", label: "למה אנחנו" },
  { href: "#faq", label: "שאלות נפוצות" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-[#050505]/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        {/* Logo — mobile: left (order-2); desktop: right (md:order-1) */}
        <a href="#" dir="ltr" className="order-2 flex items-center gap-2 text-[1.55rem] font-bold leading-none tracking-tight text-white font-(family-name:--font-logo) md:order-1">
          <Shield className="h-6 w-6 text-[#2ECC71]" />
          <span>profitector<span className="text-[#2ECC71]">.ai</span></span>
        </a>

        {/* Desktop nav */}
        <nav className="order-2 hidden items-center gap-8 text-[0.9rem] text-white/60 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-[#2ECC71]">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#lead-form"
          className="btn-glow order-3 hidden rounded-full bg-[#2ECC71] px-6 py-2.5 text-sm font-bold text-black transition-all hover:scale-105 hover:bg-[#27ae60] md:inline-block"
        >
          לבדיקה חינם
        </a>

        {/* Hamburger — mobile: far right (easy for right-handed users), large tap target */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="פתח תפריט"
          className="order-1 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 px-4 text-white/70 transition-colors hover:border-white/30 hover:text-white md:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/8 bg-[#050505]/98 md:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-base font-medium text-white/70 transition-colors hover:text-[#2ECC71]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 pt-3 border-t border-white/10">
                <a
                  href="#lead-form"
                  onClick={() => setMobileOpen(false)}
                  className="btn-glow block rounded-full bg-[#2ECC71] px-6 py-3 text-center text-sm font-bold text-black transition-all hover:bg-[#27ae60]"
                >
                  לבדיקה חינם
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
