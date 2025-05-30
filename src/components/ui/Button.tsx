import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-md font-medium transition-all duration-300 inline-flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    secondary: 'bg-black hover:bg-zinc-800 text-white',
    outline: 'bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white',
  };
  
  const sizeStyles = {
    sm: 'text-sm py-2 px-4 min-h-[2.5rem] min-w-[5rem]',
    md: 'text-base py-3 px-5 min-h-[2.75rem] min-w-[6rem]',
    lg: 'text-lg py-4 px-6 min-h-[3rem] min-w-[7rem]',
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;