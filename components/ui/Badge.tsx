import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'outline' | 'success' | 'warning' | 'error' | 'indigo' | 'purple';
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'default',
    className = ''
}) => {
    const variants = {
        default: 'bg-white/10 text-white',
        outline: 'border border-white/10 text-gray-400',
        success: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
        warning: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
        error: 'bg-rose-500/10 text-rose-400 border border-rose-500/20',
        indigo: 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20',
        purple: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
    };

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};
