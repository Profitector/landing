"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CONSENT_KEY = "cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) {
        setVisible(true);
      }
    } catch {
      // noop
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 inset-x-0 z-60 border-t border-white/10 bg-[#050505]/95 backdrop-blur-md px-6 py-4 shadow-[0_-4px_30px_rgba(0,0,0,0.4)]"
        >
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm text-white/70 text-center sm:text-start">
              אתר זה משתמש בעוגיות (Cookies) כדי לשפר את חוויית הגלישה שלך.
              המשך הגלישה מהווה הסכמה לשימוש בעוגיות.{" "}
              <a
                href="/privacy-policy"
                className="text-[#2ECC71] underline transition-colors hover:text-[#6EE7A0]"
              >
                למידע נוסף
              </a>
            </p>
            <button
              onClick={accept}
              className="btn-glow shrink-0 rounded-full bg-[#2ECC71] px-6 py-2 text-sm font-bold text-black transition-all hover:scale-105 hover:bg-[#27ae60] cursor-pointer"
            >
              אישור
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
