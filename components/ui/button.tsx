import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border border-emerald-700/60 bg-emerald-700 text-white hover:bg-emerald-800 dark:border-emerald-400/60 dark:bg-emerald-400 dark:text-emerald-950 dark:hover:bg-emerald-300",
        outline: "border border-stone-400/80 bg-transparent hover:bg-stone-100 dark:border-stone-600 dark:hover:bg-stone-800/70",
        dark: "border border-stone-800/80 bg-stone-800 text-stone-100 hover:bg-stone-700 dark:border-stone-200/80 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200",
      },
      size: {
        default: "px-4 py-2",
        lg: "px-5 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <a ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
  ),
);
Button.displayName = "Button";

export { Button, buttonVariants };
