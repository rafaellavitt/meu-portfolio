'use client';
import { useState, useRef } from "react";

function MagneticButton({ children, className = "" }) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = buttonRef.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.10, y: middleY * 0.10 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${x}px, ${y}px)`,
        transition: "transform 0.15s ease-out, background-color 0.8s ease, color 0.2s ease",
      }}
      className={`px-9 py-5 rounded-4xl border border-[#bc96e6] text-[#bc96e6] font-medium hover:bg-offwhite hover:text-[#181717] ${className}`}
    >
      {children}
    </button>
  );
}

export default MagneticButton;