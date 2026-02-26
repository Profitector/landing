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
      className="w-full rounded-lg border-0 bg-white/10 px-5 py-4 text-right text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2ECC71]"
    />
  );
}
