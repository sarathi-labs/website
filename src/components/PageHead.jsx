import { cn } from "@/lib/utils";

export default function PageHead({ id, label, title, className, children }) {
  return (
    <section id={id} className={cn("pagehead min-h-[100svh] bg-[var(--ink)] text-[var(--text-inv)] flex items-center py-[140px]", className)}>
      <div className="wrap">
        <span className="label text-[var(--muted-inv)]">{label}</span>
        <h1 className="text-[clamp(42px,5.6vw,74px)] leading-[1.02] tracking-[-.025em] mb-6 max-w-[15ch]">
          {title}
        </h1>
        <p className="text-[var(--muted-inv)] text-[clamp(16px,1.3vw,18px)] leading-[1.65] max-w-[54ch] m-0">
          {children}
        </p>
      </div>
    </section>
  );
}
