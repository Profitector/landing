"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Input from "./ui/Input";
import SelectBox from "./ui/SelectBox";

const businessTypeOptions = [
  { value: "קמעונאות", label: "קמעונאות" },
  { value: "מסעדנות", label: "מסעדנות" },
  { value: "B2B", label: "B2B" },
  { value: "ייצור", label: "ייצור" },
  { value: "שירותים", label: "שירותים" },
  { value: "אחר", label: "אחר" },
];

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    businessType: "",
    phone: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const contentType = res.headers.get("content-type") || "";
      if (!res.ok) {
        if (contentType.includes("application/json")) {
          const data = await res.json();
          throw new Error(data.error || "שגיאה בשליחה");
        }
        throw new Error("שגיאה בשליחה");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "שגיאה בשליחה, נסו שוב");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lead-form" className="bg-[#050505] py-10 md:py-16">
      <div className="section-divider mx-auto mb-12 max-w-4xl hidden md:block" />
      <div className="mx-auto max-w-2xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/6 bg-[#0A0A0A] p-8 md:p-10"
        >
          <div className="mb-8 text-center">
            <span className="mb-4 inline-block rounded-full border border-[#2ECC71]/25 bg-[#2ECC71]/8 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#2ECC71]">
              התחילו עכשיו
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
              כל שקל שספק גובה בטעות -
              <br />
              <span className="gradient-text">אנחנו נמצא אותו</span>
            </h2>
            <p className="mt-3 text-sm text-white/50">
              השאירו פרטים ונחזור אליכם תוך 24 שעות
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="glow-border rounded-xl bg-[#2ECC71]/8 p-10 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#2ECC71]">
                <svg className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xl font-bold text-white">
                תודה! קיבלנו את הפרטים
              </p>
              <p className="mt-2 text-sm text-white/50">
                נחזור אליכם תוך 24 שעות
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  name="name"
                  placeholder="שם מלא"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <SelectBox
                  name="businessType"
                  placeholder="סוג עסק"
                  required
                  value={formData.businessType}
                  onChange={handleSelectChange}
                  options={businessTypeOptions}
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="טלפון"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="אימייל"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {error && (
                <p className="text-center text-sm text-red-400">{error}</p>
              )}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-glow w-full cursor-pointer rounded-full bg-[#2ECC71] px-10 py-4 text-base font-bold text-black transition-all hover:scale-105 hover:bg-[#27ae60] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                >
                  {loading ? "שולח..." : "רוצה לחסוך כסף - דברו איתי →"}
                </button>
              </div>
              <p className="text-center text-xs text-white/40">
                ₪0 עלות אם לא נמצא חיסכון · ללא התחייבות
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
