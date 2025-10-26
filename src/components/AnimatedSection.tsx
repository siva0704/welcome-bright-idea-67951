import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 
    | "fade-up" 
    | "fade-left" 
    | "fade-right" 
    | "scale-in"
    | "blur-fade"
    | "slide-rotate-left"
    | "slide-rotate-right"
    | "reveal-left"
    | "reveal-right"
    | "elastic-bounce"
    | "perspective-left"
    | "perspective-right";
  delay?: number;
  className?: string;
  threshold?: number;
  speed?: "fast" | "normal" | "slow";
  distance?: "small" | "medium" | "large";
}

const AnimatedSection = ({ 
  children, 
  animation = "fade-up", 
  delay = 0,
  className = "",
  threshold = 0.1,
  speed = "normal",
  distance = "medium"
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
      7: "stagger-7",
      8: "stagger-8",
      9: "stagger-9",
      10: "stagger-10",
    };
    return delayMap[delay] || "";
  };

  const getSpeedClass = (speed: string) => {
    const speedMap: { [key: string]: string } = {
      fast: "duration-300",
      normal: "duration-600",
      slow: "duration-1000",
    };
    return speedMap[speed] || "duration-600";
  };

  return (
    <div
      ref={elementRef}
      className={cn(
        "animate-on-scroll",
        animation,
        getDelayClass(delay),
        getSpeedClass(speed),
        isVisible && "visible",
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
