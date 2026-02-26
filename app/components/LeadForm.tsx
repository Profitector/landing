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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="lead-form" className="bg-[#1A2B3C] py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl">
            כל שקל שספק גובה בטעות - אנחנו נמצא אותו
          </h2>
          <p className="mb-10 text-center text-lg text-gray-400">
            השאירו פרטים ונחזור אליכם תוך 24 שעות
          </p>

          {submitted ? (
            <div className="rounded-xl bg-[#2ECC71] p-8 text-center">
              <p className="text-2xl font-bold text-white">
                תודה! נחזור אליכם בהקדם
              </p>
            </div>
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
              <div className="text-center">
                <button
                  type="submit"
                  className="cursor-pointer rounded-full bg-[#2ECC71] px-12 py-4 text-lg font-semibold text-white transition-transform hover:scale-105 hover:bg-[#27ae60]"
                >
                  רוצה לחסוך כסף - דברו איתי
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
