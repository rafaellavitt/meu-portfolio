'use client';
export default function HoverUnderline({ href, children }) {
  return (
    
    <a href={href}
      className="relative text-offwhite no-underline inline-block after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#8362a6] after:transition-all after:duration-150 after:-translate-x-1/2 hover:after:w-full"
    >
      {children}
    </a>
  );
}