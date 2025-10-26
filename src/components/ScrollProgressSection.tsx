import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollProgressSectionProps {
  children: (progress: number) => ReactNode;
  className?: string;
  start?: number;
  end?: number;
}

const ScrollProgressSection = ({ 
  children, 
  className = "",
  start = 0,
  end = 1
}: ScrollProgressSectionProps) => {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate progress as element moves through viewport
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Progress from 0 (entering viewport) to 1 (leaving viewport)
      let scrollProgress = (viewportHeight - elementTop) / (viewportHeight + elementHeight);
      scrollProgress = Math.max(0, Math.min(1, scrollProgress));
      
      // Map to custom start/end range
      const mappedProgress = start + (scrollProgress * (end - start));
      setProgress(mappedProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [start, end]);

  return (
    <div ref={sectionRef} className={cn(className)}>
      {children(progress)}
    </div>
  );
};

export default ScrollProgressSection;
