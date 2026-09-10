import React from "react";

interface PlaceholderBadgeProps {
  id: number;
  label?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "inline";
  className?: string;
}

export default function PlaceholderBadge({
  id,
  label,
  position = "top-left",
  className = "",
}: PlaceholderBadgeProps) {
  if (position === "inline") {
    return (
      <span
        className={`inline-flex items-center space-x-1 font-mono text-[10px] font-black tracking-wider px-2 py-0.5 rounded-md bg-[#DE3F11] text-white shadow-md border border-white/20 select-none ${className}`}
        title={`Placeholder #${id}${label ? `: ${label}` : ""}`}
      >
        <span>#{id}</span>
        {label && <span className="opacity-90 border-l border-white/30 pl-1">{label}</span>}
      </span>
    );
  }

  const positionClasses = {
    "top-left": "top-2 left-2",
    "top-right": "top-2 right-2",
    "bottom-left": "bottom-2 left-2",
    "bottom-right": "bottom-2 right-2",
  }[position];

  return (
    <div
      className={`absolute ${positionClasses} z-30 pointer-events-auto flex items-center space-x-1 font-mono text-[11px] font-black px-2.5 py-1 rounded-lg bg-black/85 text-[#FF7A00] border border-[#DE3F11] shadow-2xl backdrop-blur-md select-none group-hover:scale-110 transition-transform ${className}`}
      title={`Placeholder #${id}${label ? `: ${label}` : ""}`}
    >
      <span className="w-2 h-2 rounded-full bg-[#DE3F11] animate-pulse" />
      <span className="text-white font-extrabold">PH #{id}</span>
      {label && <span className="text-white/70 text-[9px] font-sans font-semibold max-w-[100px] truncate">| {label}</span>}
    </div>
  );
}
