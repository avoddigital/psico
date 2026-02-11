import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center rounded-2xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
          {
            'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20': variant === 'primary',
            'bg-accent text-white hover:bg-accent/90 shadow-lg shadow-accent/20': variant === 'secondary',
            'border-2 border-primary text-primary hover:bg-primary/5': variant === 'outline',
            'hover:bg-primary/5 text-primary': variant === 'ghost',
            'h-9 px-4 text-sm': size === 'sm',
            'h-12 px-8 text-base': size === 'md',
            'h-14 px-10 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
