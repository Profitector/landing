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
    <section id="lead-form" className="bg-[#0F1B2D] py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card glow-border rounded-2xl p-8 md:p-12"
        >
          <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl">
            כל שקל שספק גובה בטעות - אנחנו נמצא אותו
          </h2>
          <p className="mb-10 text-center text-lg text-gray-400">
            השאירו פרטים ונחזור אליכם תוך 24 שעות
          </p>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="glow-border rounded-xl bg-[#2ECC71]/10 p-10 text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#2ECC71]">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-2xl font-bold text-white">
                תודה! קיבלנו את הפרטים
              </p>
              <p className="mt-2 text-gray-300">
                נחזור אליכם תוך 24 שעות
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
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
                <p className="text-center text-red-400">{error}</p>
              )}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-glow cursor-pointer rounded-full bg-[#2ECC71] px-12 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-[#27ae60] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                >
                  {loading ? "שולח..." : "רוצה לחסוך כסף - דברו איתי →"}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
