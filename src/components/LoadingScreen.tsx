import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const text = "Sangam Fasteners";
  const letters = text.split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 500);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const getBurstValues = (index: number) => {
    const angle = (index * 360) / letters.length;
    const distance = 150 + Math.random() * 100;
    const burstX = Math.cos((angle * Math.PI) / 180) * distance;
    const burstY = Math.sin((angle * Math.PI) / 180) * distance;
    const burstRotate = Math.random() * 720 - 360;
    
    return {
      "--burst-x": `${burstX}px`,
      "--burst-y": `${burstY}px`,
      "--burst-rotate": `${burstRotate}deg`,
      "--final-x": "0px",
      "--final-y": "0px",
    } as React.CSSProperties;
  };

  const generateParticles = (index: number) => {
    const angle = (index * 360) / letters.length;
    return Array.from({ length: 4 }, (_, pIndex) => {
      const particleAngle = (angle + (Math.random() - 0.5) * 45) * Math.PI / 180;
      const particleDistance = 80 + Math.random() * 120;
      return {
        x: Math.cos(particleAngle) * particleDistance,
        y: Math.sin(particleAngle) * particleDistance,
        delay: index * 0.05 + pIndex * 0.02,
      };
    });
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center transition-opacity duration-500 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-center">
        <div className="text-3xl sm:text-5xl md:text-7xl font-heading font-bold text-primary-foreground">
          {letters.map((letter, index) => {
            const particles = generateParticles(index);
            return (
              <span key={index} className="inline-block relative">
                <span
                  className="inline-block relative z-10"
                  style={{
                    ...getBurstValues(index),
                    animation: `letterBurst 2.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards`,
                    animationDelay: `${index * 0.05}s`,
                    opacity: 0,
                    filter: "drop-shadow(0 0 8px currentColor)",
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
                {/* Particle effects */}
                {particles.map((particle, pIndex) => (
                  <span
                    key={pIndex}
                    className="letter-particle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      animationDelay: `${particle.delay}s`,
                      // @ts-ignore
                      "--particle-x": `${particle.x}px`,
                      "--particle-y": `${particle.y}px`,
                    }}
                  />
                ))}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
