import { useActiveSection } from "@/hooks/useScrollEffects";
import { cn } from "@/lib/utils";

/**
 * Section index rail, now used on every page (not just the homepage).
 * `sections` is an array of { id, label }. `data-label` drives the CSS
 * tooltip (content: attr(data-label)) defined in index.css.
 */
export default function SectionRail({ sections }) {
  const ids = sections.map((s) => s.id);
  const active = useActiveSection(ids);

  return (
    <nav className="rail" id="rail" aria-label="Section navigation">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          data-label={s.label}
          aria-label={s.label}
          className={cn(active === s.id && "is-active")}
        />
      ))}
    </nav>
  );
}
