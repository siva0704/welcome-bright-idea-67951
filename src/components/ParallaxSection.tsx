import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  enableMouseParallax?: boolean;
}

const ParallaxSection = ({ 
  children, 
  speed = 0.5,
  className = "",
  enableMouseParallax = false
}: ParallaxSectionProps) => {
  const [offset, setOffset] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      setOffset(scrollProgress * 100 * speed);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableMouseParallax || window.innerWidth < 768) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMouseOffset({ x, y });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    if (enableMouseParallax) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [speed, enableMouseParallax]);

  return (
    <div
      ref={sectionRef}
      className={cn("scroll-parallax", className)}
      style={{
        transform: `translateY(${-offset}px) translateX(${mouseOffset.x}px) translateY(${mouseOffset.y}px)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
