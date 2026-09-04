import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FaqList({ items, className }) {
  return (
    <Accordion
      type="single"
      collapsible
      className={"faq border-t border-[var(--rule)] mt-12 " + (className || "")}
    >
      {items.map((item) => (
        <AccordionItem key={item.n} value={item.n}>
          <AccordionTrigger>
            <span className="font-mono text-[11px] leading-[1.6] text-[var(--muted)] flex-none">
              {item.n}
            </span>
            <span>{item.q}</span>
          </AccordionTrigger>
          <AccordionContent>{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
