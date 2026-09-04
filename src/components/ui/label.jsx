import * as React from "react";
import { cn } from "@/lib/utils";

const Label = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn(
        "block font-normal text-[10px] leading-none uppercase tracking-[.13em] text-[var(--muted)] mb-[9px]",
        "font-mono",
        className
      )}
      {...props}
    />
  );
});
Label.displayName = "Label";

export { Label };
