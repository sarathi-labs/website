import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Replicates the site's original `.rv` scroll-reveal behaviour (see app.js):
 * elements start faded/translated down, then animate `.in` once they cross
 * ~12% into the viewport. Delay classes d1..d6 stagger groups of elements.
 */
export default function Reveal({
  as: Tag = "div",
  delay,
  className,
  children,
  ...props
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={cn("rv", delay, inView && "in", className)} {...props}>
      {children}
    </Tag>
  );
}
