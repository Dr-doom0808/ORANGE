import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { ArrowRight } from 'lucide-react';

interface AnimatedButtonProps {
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ href, className, children }) => {
  return (
    <motion.div
      className={cn("relative group", className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <a
        href={href}
        className="relative inline-block p-px font-medium leading-6 text-sm text-white bg-neutral-900 shadow-md cursor-pointer rounded-xl shadow-orange-900/30 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-orange-600/40 min-h-[2.75rem] min-w-[7rem]"
      >
        <span
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 p-[1.5px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        ></span>
        <span className="relative z-10 block px-4 py-2 rounded-xl bg-neutral-950">
          <div className="relative z-10 flex items-center space-x-2">
            <span
              className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-orange-300"
            >
              {children}
            </span>
            <ArrowRight
              className="w-4 h-4 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-orange-300"
            />
          </div>
        </span>
      </a>
    </motion.div>
  );
};

export default AnimatedButton; 