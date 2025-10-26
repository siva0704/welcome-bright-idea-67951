import { ReactNode, Children } from "react";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

interface StaggerGridProps {
  children: ReactNode;
  pattern?: "linear" | "wave" | "circular" | "random";
  animation?: "fade-up" | "scale-in" | "elastic-bounce" | "perspective-left" | "perspective-right";
  className?: string;
  staggerDelay?: number;
}

const StaggerGrid = ({ 
  children, 
  pattern = "wave",
  animation = "scale-in",
  className = "",
  staggerDelay = 1
}: StaggerGridProps) => {
  const childrenArray = Children.toArray(children);
  
  const getDelay = (index: number, total: number) => {
    switch (pattern) {
      case "linear":
        return (index % 10) + staggerDelay;
      
      case "wave": {
        // Diagonal wave pattern
        const gridCols = 3; // Assume 3 columns for wave
        const row = Math.floor(index / gridCols);
        const col = index % gridCols;
        return ((row + col) % 6) + staggerDelay;
      }
      
      case "circular": {
        // From center outward
        const gridCols = 3;
        const row = Math.floor(index / gridCols);
        const col = index % gridCols;
        const centerRow = Math.floor(total / gridCols / 2);
        const centerCol = Math.floor(gridCols / 2);
        const distance = Math.sqrt(
          Math.pow(row - centerRow, 2) + Math.pow(col - centerCol, 2)
        );
        return Math.floor(distance) + staggerDelay;
      }
      
      case "random":
        return Math.floor(Math.random() * 6) + staggerDelay;
      
      default:
        return (index % 6) + staggerDelay;
    }
  };

  return (
    <div className={cn(className)}>
      {childrenArray.map((child, index) => (
        <AnimatedSection
          key={index}
          animation={animation}
          delay={getDelay(index, childrenArray.length)}
        >
          {child}
        </AnimatedSection>
      ))}
    </div>
  );
};

export default StaggerGrid;
