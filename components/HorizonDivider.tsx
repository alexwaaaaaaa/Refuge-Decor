import React from "react";

interface HorizonDividerProps {
  className?: string;
  flip?: boolean;
}

export default function HorizonDivider({ className = "", flip = false }: HorizonDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1200 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-auto text-[#D8CBB8] stroke-current ${
          flip ? "scale-x-[-1] rotate-180" : ""
        }`}
      >
        <path
          d="M0 45 C 280 45, 380 20, 520 38 C 660 55, 880 15, 1200 42"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
