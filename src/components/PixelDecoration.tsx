import { motion } from 'motion/react';

interface PixelDecorationProps {
  className?: string;
  animate?: boolean;
}

export function PixelDecoration({ className = '', animate = true }: PixelDecorationProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pixel-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="10" height="10" fill="currentColor" opacity="0.3" />
              <rect x="10" y="10" width="10" height="10" fill="currentColor" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pixel-pattern)" />
        </svg>
      </div>
    </div>
  );
}

export function PixelBorder({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`relative ${className}`}>
      {/* Corner pixels */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-neutral-500" />
      <div className="absolute top-0 left-2 w-2 h-2 bg-neutral-600" />
      <div className="absolute top-2 left-0 w-2 h-2 bg-neutral-600" />
      
      <div className="absolute top-0 right-0 w-2 h-2 bg-neutral-500" />
      <div className="absolute top-0 right-2 w-2 h-2 bg-neutral-600" />
      <div className="absolute top-2 right-0 w-2 h-2 bg-neutral-600" />
      
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-neutral-500" />
      <div className="absolute bottom-0 left-2 w-2 h-2 bg-neutral-600" />
      <div className="absolute bottom-2 left-0 w-2 h-2 bg-neutral-600" />
      
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-neutral-500" />
      <div className="absolute bottom-0 right-2 w-2 h-2 bg-neutral-600" />
      <div className="absolute bottom-2 right-0 w-2 h-2 bg-neutral-600" />
      
      {children}
    </div>
  );
}

export function PixelatedAccent() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute -z-10"
    >
      <div className="grid grid-cols-8 gap-1">
        {Array.from({ length: 64 }).map((_, i) => {
          const delay = (i % 8) * 0.05 + Math.floor(i / 8) * 0.05;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                duration: 2,
                delay,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="w-4 h-4 bg-neutral-700"
            />
          );
        })}
      </div>
    </motion.div>
  );
}
