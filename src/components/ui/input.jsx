import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "w-full border-0 border-b border-[var(--rule-strong)] bg-transparent py-[11px] outline-none",
        "font-normal text-[15px] leading-[1.5] text-[var(--text)] placeholder:text-[var(--muted)]",
        "transition-colors duration-300 ease-[cubic-bezier(.16,1,.3,1)] focus:border-b-[var(--blue)]",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
