"use client";

import {
  ShieldCheck,
  Zap,
  TrendingUp,
  AlertCircle,
  Search,
  BadgeCheck,
  Bot,
  Lock,
} from "lucide-react";

const items = [
  { icon: ShieldCheck, text: "הגנה על שולי הרווח 24/7",    accent: true  },
  { icon: Zap,         text: "זיהוי דליפות בזמן אמת",      accent: false },
  { icon: TrendingUp,  text: "חיסכון ממוצע 4% מהמחזור",   accent: false },
  { icon: AlertCircle, text: "התראות לפני שהנזק נגרם",    accent: true  },
  { icon: Search,      text: "ניתוח 100% מהעסקאות",        accent: false },
  { icon: BadgeCheck,  text: "₪0 עלות אם לא נמצא חיסכון", accent: true  },
  { icon: Bot,         text: "מופעל על ידי AI מתקדם",      accent: false },
  { icon: Lock,        text: "ללא סיכון · ללא התחייבות",   accent: false },
];

const doubled = [...items, ...items];

export default function ScrollingTicker() {
  return (
    <div
      className="relative overflow-hidden border-y border-white/8 bg-[#030303] py-5"
      style={{ direction: "ltr" }}
    >
      {/* Fade masks */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32"
        style={{ background: "linear-gradient(to right, #030303, transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32"
        style={{ background: "linear-gradient(to left, #030303, transparent)" }}
      />

      {/* Scrolling track */}
      <div
        className="flex w-max items-center"
        style={{
          animation: "ticker-scroll 32s linear infinite",
          willChange: "transform",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLDivElement).style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLDivElement).style.animationPlayState = "running")
        }
      >
        {doubled.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex shrink-0 items-center gap-2.5 px-7"
            >
              {/* Icon */}
              <div
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                style={{
                  background: item.accent
                    ? "rgba(46,204,113,0.15)"
                    : "rgba(255,255,255,0.05)",
                }}
              >
                <Icon
                  size={13}
                  strokeWidth={2}
                  style={{ color: item.accent ? "#2ECC71" : "rgba(255,255,255,0.5)" }}
                />
              </div>

              {/* Text */}
              <span
                dir="rtl"
                className="whitespace-nowrap text-[0.8rem] font-medium tracking-wide"
                style={{ color: item.accent ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.45)" }}
              >
                {item.text}
              </span>

              {/* Separator */}
              <span
                className="mx-3 text-xs"
                style={{ color: "rgba(46,204,113,0.25)" }}
              >
                ✦
              </span>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
