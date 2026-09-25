import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors transition-transform duration-[var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-gold text-ink hover:bg-gold-bright ring-offset-navy-deep",
        outline:
          "border border-gold/50 bg-transparent text-cream hover:border-gold hover:bg-gold/10 ring-offset-navy-deep",
        dark: "border border-gold/25 bg-panel text-cream hover:border-gold/50 ring-offset-navy-deep",
        ghost: "text-cream hover:bg-cream/5 ring-offset-navy-deep",
      },
      size: {
        default: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-sm tracking-wide",
        sm: "h-9 px-3 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
