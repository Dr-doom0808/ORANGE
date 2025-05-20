// Utility functions for common operations
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
function createButton({ variant = 'primary', size = 'md', children, className = '', onClick }) {
    const baseStyles = 'rounded-md font-medium transition-all duration-300 inline-flex items-center justify-center';
    const variantStyles = {
        primary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
        secondary: 'bg-black hover:bg-zinc-800 text-white',
        outline: 'bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white'
    };
    const sizeStyles = {
        sm: 'text-sm py-2 px-3',
        md: 'text-base py-2.5 px-5',
        lg: 'text-lg py-3 px-6'
    };

    const button = document.createElement('button');
    button.className = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
    button.innerHTML = children;
    if (onClick) button.addEventListener('click', onClick);
    
    return button;
}

// Additional utility functions...