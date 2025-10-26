import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale-in";
  delay?: number;
  className?: string;
  threshold?: number;
}

const AnimatedSection = ({ 
  children, 
  animation = "fade-up", 
  delay = 0,
  className = "",
  threshold = 0.1 
}: AnimatedSectionProps) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold });

  const getDelayClass = (delay: number) => {
    const delayMap: { [key: number]: string } = {
      1: "stagger-1",
      2: "stagger-2",
      3: "stagger-3",
      4: "stagger-4",
      5: "stagger-5",
      6: "stagger-6",
    };
    return delayMap[delay] || "";
  };

  return (
    <div
      ref={elementRef}
      className={cn(
        "animate-on-scroll",
        animation,
        getDelayClass(delay),
        isVisible && "visible",
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
