
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-2xl font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#0B0E14] disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-[10px]';
  
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-xl shadow-indigo-600/20 active:scale-[0.98]',
    secondary: 'bg-white/5 text-white hover:bg-white/10 border border-white/10 active:scale-[0.98]',
    outline: 'bg-transparent border border-white/10 text-gray-400 hover:text-white hover:border-white/30',
    ghost: 'bg-transparent text-gray-500 hover:text-white hover:bg-white/5',
    danger: 'bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white'
  };

  const sizes = {
    sm: 'h-10 px-4',
    md: 'h-12 px-6',
    lg: 'h-14 px-8',
    icon: 'w-10 h-10'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
