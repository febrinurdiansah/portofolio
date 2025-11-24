import { motion } from 'motion/react';

interface PixelTransitionProps {
  isActive: boolean;
}

export function PixelTransition({ isActive }: PixelTransitionProps) {
  const rows = 8;
  const cols = 12;
  const pixels = Array.from({ length: rows * cols });

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-40 pointer-events-none grid grid-cols-12 grid-rows-8">
      {pixels.map((_, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const delay = (row + col) * 0.02;

        return (
          <motion.div
            key={index}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0, 1, 1, 0] }}
            transition={{
              duration: 0.8,
              delay,
              times: [0, 0.3, 0.7, 1],
              ease: 'easeInOut',
            }}
            className="bg-neutral-800 origin-top"
          />
        );
      })}
    </div>
  );
}
