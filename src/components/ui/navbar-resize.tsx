"use client";
import { cn } from "../../lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import React, { useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-[100] w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      initial={{ width: "100%" }}
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "60%" : "100%",
        y: visible ? 10 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
      }}
      style={{
        minWidth: "min(700px, 90vw)",
        maxWidth: "100%",
      }}
      className={cn(
        "relative z-[120] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-4 py-2 lg:flex",
        visible ? "bg-white/80 dark:bg-neutral-950/80" : "bg-transparent",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className }: MobileNavProps) => {
  return (
    <div
      className={cn(
        "relative z-[120] mx-auto flex w-full max-w-full flex-col items-center justify-between px-4 py-2 lg:hidden",
        "bg-black", // Constant black background for mobile/tablet
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between px-4 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className={cn(
            "fixed inset-x-0 top-16 z-50 w-full bg-black/95 backdrop-blur-lg border-t border-zinc-800 transform transition-transform duration-300 ease-in-out max-h-[80vh] overflow-y-auto max-w-full left-0 right-0",
            className,
          )}
        >
          <div className="flex justify-end px-4 pt-2">
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close menu"
            >
              <IconX className="w-5 h-5" />
            </button>
          </div>
          <div className="px-4 py-2 space-y-2">
            {children}
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="p-2 text-zinc-300 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ml-4"
    >
      {isOpen ? (
        <IconX className="w-6 h-6" />
  ) : (
        <IconMenu2 className="w-6 h-6" />
      )}
    </button>
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <img
        src="https://assets.aceternity.com/logo-dark.png"
        alt="logo"
        width={30}
        height={30}
      />
      <span className="font-medium text-black dark:text-white">Startup</span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-6 py-3 rounded-full text-sm font-medium relative cursor-pointer transition-all duration-300 inline-flex items-center justify-center min-h-[44px] min-w-[44px]";

  const variantStyles = {
    primary:
      "bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5",
    secondary: "bg-transparent text-white hover:text-orange-500",
    dark: "bg-zinc-900 text-white hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-900/25 hover:-translate-y-0.5",
    gradient:
      "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}; 