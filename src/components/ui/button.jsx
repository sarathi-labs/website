import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center gap-[9px] rounded-full text-[13px] leading-none tracking-[.01em] font-medium transition-[background,color,border-color,transform] duration-300 ease-[cubic-bezier(.16,1,.3,1)] cursor-pointer border border-transparent hover:-translate-y-[2px] disabled:opacity-60 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        accent: "bg-[var(--blue)] text-white hover:bg-[var(--blue-lift)]",
        ink: "bg-[var(--ink)] text-[var(--text-inv)] hover:bg-[#162E56]",
        paper: "bg-[var(--paper)] text-[var(--ink)] hover:bg-white",
        ghost:
          "bg-transparent border-[var(--rule-strong)] text-[var(--text)] hover:border-current",
      },
      size: {
        default: "px-[26px] py-[14px]",
        nav: "px-[22px] py-3 text-[12.5px]",
        full: "w-full justify-center px-[26px] py-[14px] mt-[6px]",
      },
    },
    defaultVariants: {
      variant: "accent",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
