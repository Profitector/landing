"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectBoxProps {
  name: string;
  required?: boolean;
  value: string;
  onChange: (name: string, value: string) => void;
  placeholder?: string;
  options: SelectOption[];
}

export default function SelectBox({
  name,
  required,
  value,
  onChange,
  placeholder = "בחר",
  options,
}: SelectBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedLabel = options.find((o) => o.value === value)?.label || "";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      {required && (
        <input
          tabIndex={-1}
          className="absolute inset-0 opacity-0 pointer-events-none"
          value={value}
          required
          onChange={() => { }}
        />
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-lg border border-white/8 bg-[#111111] px-5 py-4 text-right text-white transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#2ECC71]/50 hover:border-white/15"
      >
        <span className={value ? "text-white" : "text-gray-400"}>
          {selectedLabel || placeholder}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>

      {isOpen && (
        <ul className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-white/8 bg-[#111111] shadow-2xl">
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                onClick={() => {
                  onChange(name, option.value);
                  setIsOpen(false);
                }}
                className={`w-full px-5 py-3 text-right transition-colors hover:bg-white/6 ${value === option.value
                    ? "bg-[#2ECC71]/10 font-semibold text-[#2ECC71]"
                    : "text-gray-400"
                  }`}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
