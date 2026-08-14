import { useState, useCallback } from "react";

export default function MouseGlow({ children, className = "" }) {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  const handleMouseMove = useCallback((e) => {
    setPos({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPos({ x: -200, y: -200 });
  }, []);

  return (
    <div
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(900px circle at ${pos.x}px ${pos.y}px, #180427, transparent 70%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}