import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "w-full border-0 border-b border-[var(--rule-strong)] bg-transparent py-[11px] outline-none resize-y",
        "font-normal text-[15px] leading-[1.5] text-[var(--text)] placeholder:text-[var(--muted)] h-24",
        "transition-colors duration-300 ease-[cubic-bezier(.16,1,.3,1)] focus:border-b-[var(--blue)]",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
