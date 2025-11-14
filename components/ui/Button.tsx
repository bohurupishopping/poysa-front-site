import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
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
  const baseStyles = 'font-semibold rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:btn-hover-glow focus:btn-hover-glow relative overflow-hidden';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary to-blue-500 text-white shadow-lg shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 focus:ring-primary before:content-[""] before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-10',
    secondary: 'bg-gradient-to-r from-secondary to-emerald-500 text-white shadow-lg shadow-secondary/25 hover:shadow-2xl hover:shadow-secondary/40 focus:ring-secondary before:content-[""] before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-10',
    outline: 'bg-transparent text-neutral-700 border-2 border-neutral-300 hover:bg-neutral-100 hover:border-neutral-400 focus:ring-neutral-500 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10',
    ghost: 'bg-transparent text-neutral-600 hover:bg-neutral-100 focus:ring-primary hover:bg-gradient-to-r hover:from-primary/15 hover:to-secondary/15',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
