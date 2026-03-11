"use client";

interface InputProps {
  type?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  type = "text",
  name,
  placeholder,
  required,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full rounded-lg border border-white/8 bg-[#111111] px-5 py-4 text-right text-white placeholder-gray-600 transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#2ECC71]/50 hover:border-white/15"
    />
  );
}
