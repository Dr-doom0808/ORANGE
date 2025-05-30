import { motion } from 'framer-motion';
import React from 'react';

interface FloatingParticleProps {
  className?: string;
  initialX?: number | string;
  initialY?: number | string;
  initialZ?: number;
  size?: number;
  color?: string;
  durationRange?: [number, number];
  delay?: number;
  floatRange?: number;
  opacityRange?: [number, number];
}

const FloatingParticle: React.FC<FloatingParticleProps> = ({
  className = '',
  initialX = 0,
  initialY = 0,
  initialZ = 0,
  size = 8,
  color = 'rgba(249, 115, 22, 0.4)', // Orange theme, semi-transparent
  durationRange = [8, 15], // Random duration between 8 and 15 seconds
  delay = 0,
  floatRange = 20, // How far it floats from initial position
  opacityRange = [0.2, 0.6],
}) => {
  const randomFactor = () => Math.random() * 2 - 1; // -1 to 1

  return (
    <motion.div
      className={className}
      style={{
        position: 'absolute',
        width: size,
        height: size,
        background: color,
        borderRadius: '50%',
        filter: 'blur(1.5px)',
        transformStyle: 'preserve-3d',
        left: typeof initialX === 'string' ? initialX : `${initialX}px`,
        top: typeof initialY === 'string' ? initialY : `${initialY}px`,
        transform: `translateZ(${initialZ}px)`,
      }}
      animate={{
        x: [
          0,
          randomFactor() * floatRange,
          randomFactor() * floatRange,
          0,
        ],
        y: [
          0,
          randomFactor() * floatRange,
          randomFactor() * floatRange,
          0,
        ],
        z: [
          initialZ,
          initialZ + randomFactor() * (floatRange / 2),
          initialZ + randomFactor() * (floatRange / 2),
          initialZ,
        ],
        opacity: [opacityRange[0], opacityRange[1], opacityRange[1], opacityRange[0]],
      }}
      transition={{
        duration: durationRange[0] + Math.random() * (durationRange[1] - durationRange[0]),
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
        delay: delay + Math.random() * 2,
      }}
    />
  );
};

export default FloatingParticle;
