import { useState, useRef, useCallback } from "react";

export default function MagneticCard({ children, className = "" }) {
  const cardRef = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [opacity, setOpacity] = useState(0);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPos({ x, y });

    const percentX = x / rect.width;
    const percentY = y / rect.height;
    const maxTilt = 20;
    const rotateY = (percentX - 0.5) * maxTilt * 2;
    const rotateX = (percentY - 0.5) * maxTilt * -2;

    setRotate({ x: rotateX, y: rotateY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
    setRotate({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: "transform 0.15s ease-out",
        }}
        className={`relative rounded-2xl p-[1px] overflow-visible ${className}`}
      >
        <div
          className="absolute inset-0 rounded-2xl transition-opacity duration-300"
          style={{
            opacity,
            background: `radial-gradient(250px circle at ${pos.x}px ${pos.y}px, #bc96e6, transparent 70%)`,
          }}
        />

        <div className="relative rounded-2xl bg-[#0d0226] h-full overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
            style={{
              opacity: opacity * 0.5,
              background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, #8362a655, transparent 70%)`,
            }}
          />
          <div className="relative z-10 w-full h-full flex items-center justify-center text-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}