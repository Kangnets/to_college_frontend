'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';

import { cn } from '../libs/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        disabled: 'bg-disabled text-disabled-foreground',
        kakao: 'bg-[#FEE500] text-black text-md hover:bg-[#FEE500]/90',
      },
      size: {
        default: 'h-[50px] w-[300px] px-4 py-2 rounded-[12px]',
        sm: 'h-[29px] w-[63px] rounded-sm',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
        kakao: 'h-[45px] w-[184px] rounded-md px-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  num: number;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, num, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <div className="bottom">
        <div className="font-ghanachocolate flex justify-center text-black">
          지금까지&nbsp;<p className="text-[#6743FF]">{num}</p>명의 학생이
          참여했어요
        </div>

        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
