"use client";

import { useState, useEffect } from "react";
import { Accessibility, Plus, Minus, Eye, SunMoon, Link2, RotateCcw, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface A11yState {
  fontSize: number;
  highContrast: boolean;
  grayscale: boolean;
  highlightLinks: boolean;
}

const DEFAULT_STATE: A11yState = {
  fontSize: 100,
  highContrast: false,
  grayscale: false,
  highlightLinks: false,
};

const STORAGE_KEY = "a11y-preferences";

function getInitialState(): A11yState {
  if (typeof window === "undefined") return DEFAULT_STATE;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...DEFAULT_STATE, ...(JSON.parse(stored) as Partial<A11yState>) };
    }
  } catch {
    /* noop */
  }
  return DEFAULT_STATE;
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<A11yState>(getInitialState);

  useEffect(() => {
    const html = document.documentElement;
    html.style.fontSize = `${state.fontSize}%`;
    html.classList.toggle("a11y-high-contrast", state.highContrast);
    html.classList.toggle("a11y-grayscale", state.grayscale);
    html.classList.toggle("a11y-highlight-links", state.highlightLinks);
  }, [state]);

  const update = (partial: Partial<A11yState>) => {
    setState((prev) => {
      const next = { ...prev, ...partial };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setState(DEFAULT_STATE);
  };

  const options = [
    {
      label: "הגדלת טקסט",
      icon: Plus,
      action: () => update({ fontSize: Math.min(state.fontSize + 10, 150) }),
      active: state.fontSize > 100,
    },
    {
      label: "הקטנת טקסט",
      icon: Minus,
      action: () => update({ fontSize: Math.max(state.fontSize - 10, 80) }),
      active: state.fontSize < 100,
    },
    {
      label: "ניגודיות גבוהה",
      icon: SunMoon,
      action: () => update({ highContrast: !state.highContrast }),
      active: state.highContrast,
    },
    {
      label: "גווני אפור",
      icon: Eye,
      action: () => update({ grayscale: !state.grayscale }),
      active: state.grayscale,
    },
    {
      label: "הדגשת קישורים",
      icon: Link2,
      action: () => update({ highlightLinks: !state.highlightLinks }),
      active: state.highlightLinks,
    },
    {
      label: "איפוס",
      icon: RotateCcw,
      action: reset,
      active: false,
    },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 left-0 mb-2 w-56 rounded-xl glass-card p-3 shadow-xl"
          >
            <div className="mb-2 flex items-center justify-between border-b border-white/10 pb-2">
              <h3 className="text-sm font-semibold text-white">הגדרות נגישות</h3>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="סגור תפריט נגישות"
              >
                <X size={16} />
              </button>
            </div>

            <ul className="space-y-1">
              {options.map((opt) => {
                const Icon = opt.icon;
                return (
                  <li key={opt.label}>
                    <button
                      onClick={opt.action}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                        opt.active
                          ? "bg-[#2ECC71]/20 text-[#2ECC71]"
                          : "text-gray-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <Icon size={18} className="shrink-0" />
                      <span>{opt.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="תפריט נגישות"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2ECC71] text-white shadow-lg transition-transform hover:scale-110 btn-glow cursor-pointer"
      >
        <Accessibility size={28} />
      </button>
    </div>
  );
}
