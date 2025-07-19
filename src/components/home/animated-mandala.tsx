'use client';

import { cn } from "@/lib/utils";

const AnimatedMandala = () => {
  return (
    <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] flex items-center justify-center">
      <style jsx>{`
        .mandala-group {
          animation: rotate 60s linear infinite;
        }
        .mandala-group-2 {
          animation-direction: reverse;
          animation-duration: 45s;
        }
        .mandala-group-3 {
            animation-duration: 75s;
        }
        .mandala-shape {
          stroke: hsl(var(--primary));
          stroke-width: 0.5;
          fill: hsl(var(--primary) / 0.1);
          transition: all 0.5s ease;
        }
        .mandala-shape-2 {
            stroke: hsl(var(--accent));
            fill: hsl(var(--accent) / 0.1);
        }
         .mandala-shape-3 {
            stroke: hsl(var(--secondary-foreground));
            fill: transparent;
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .pulsate {
            animation: pulsate 10s ease-in-out infinite;
        }
        @keyframes pulsate {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.02); }
        }
      `}</style>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible pulsate">
        <g className="mandala-group mandala-group-1" style={{ transformOrigin: "50% 50%" }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <path
              key={i}
              className="mandala-shape"
              d="M50 0 L40 30 L50 40 L60 30 Z"
              transform={`rotate(${i * 30} 50 50)`}
            />
          ))}
        </g>
        <g className="mandala-group mandala-group-2" style={{ transformOrigin: "50% 50%" }}>
           {Array.from({ length: 8 }).map((_, i) => (
            <circle
              key={i}
              className="mandala-shape mandala-shape-2"
              cx="50"
              cy="20"
              r="4"
              transform={`rotate(${i * 45} 50 50)`}
            />
          ))}
        </g>
         <g className="mandala-group mandala-group-3" style={{ transformOrigin: "50% 50%" }}>
           {Array.from({ length: 6 }).map((_, i) => (
            <path
              key={i}
              className="mandala-shape mandala-shape-3"
              strokeDasharray="2 2"
              d="M50 50 m-45 0 a45 45 0 1 0 90 0 a45 45 0 1 0 -90 0"
              transform={`rotate(${i * 60} 50 50) scale(0.6)`}
            />
          ))}
        </g>
        <circle cx="50" cy="50" r="15" className="mandala-shape mandala-shape-2" fill="hsl(var(--background))" />
        <circle cx="50" cy="50" r="10" className="mandala-shape" />
      </svg>
    </div>
  );
};

export default AnimatedMandala;
