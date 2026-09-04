import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-[var(--rule)] group/item", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex w-full items-baseline gap-[18px] bg-transparent border-0 cursor-pointer text-left",
          "py-[22px] pr-10 relative",
          "text-[clamp(16px,1.4vw,19px)] leading-[1.35] tracking-[-.005em]",
          "transition-colors duration-300 ease-[cubic-bezier(.16,1,.3,1)] hover:text-[var(--blue)]",
          "[&[data-state=open]_.faq-mk-v]:scale-y-0 [&[data-state=open]_.faq-mk-v]:opacity-0",
          className
        )}
        {...props}
      >
        {children}
        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 flex-none">
          <span className="absolute left-0 top-[5.5px] w-3 h-px bg-current" />
          <span className="faq-mk-v absolute left-[5.5px] top-0 w-px h-3 bg-current transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)]" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        "overflow-hidden text-[15px] leading-[1.65] text-[var(--muted)]",
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      )}
      {...props}
    >
      <div className={cn("pb-[26px] pr-10 pl-[29px] max-w-[70ch]", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
