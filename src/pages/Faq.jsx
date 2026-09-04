import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import PageHead from "@/components/PageHead";import FaqList from "@/components/FaqList";
import SectionRail from "@/components/SectionRail";
import { useActiveSection } from "@/hooks/useScrollEffects";
import { cn } from "@/lib/utils";

const GROUPS = [
  { id: "faq-work", num: "01", title: "Before you start", sub: "Working together" },
  { id: "faq-scope", num: "02", title: "What the work covers", sub: "Scope and approach" },
  { id: "faq-delivery", num: "03", title: "Once it ships", sub: "Delivery and afterwards" },
];

const GROUP_1 = [
  {
    n: "01",
    q: "How does a first conversation usually go?",
    a: "Ninety minutes, no deck. You describe what feels harder than it should; we ask the questions that separate the symptom from the cause. You leave with a written read-back of what we heard and what we'd look at first — whether or not you hire us.",
  },
  {
    n: "02",
    q: "How long before we see something working?",
    a: "Two to four weeks for the first working piece, on most engagements. We deliberately scope the first build small enough to ship inside a month — partly so you get value early, mostly so you can judge us on something real before committing further.",
  },
  {
    n: "03",
    q: "What does an engagement cost?",
    a: "It depends on scope, and a range wide enough to be always true would be useless to you. What we can commit to is the shape: a fixed-price diagnostic first, then a build quoted against a defined outcome. No open-ended hourly billing, and no surprise line items at the end.",
  },
  {
    n: "04",
    q: "Do you work with businesses outside India?",
    a: "Yes. A good part of our work is with US clients, and we've delivered into Latin America. We keep a few hours of daily overlap with whatever timezone the client sits in, because asynchronous-only tends to slow the diagnosis stage badly.",
  },
];

const GROUP_2 = [
  {
    n: "05",
    q: "Do we have to replace the systems we already have?",
    a: "Usually not. Rip-and-replace is expensive, slow, and risky, and it's rarely where the actual problem lives. More often the tools are fine and the joins between them are broken. We'd rather connect what you already own than sell you a migration you didn't need.",
  },
  {
    n: "06",
    q: "What if the problem turns out not to be technology?",
    a: "Then we say so. A fair share of diagnostics end with a process change, a clearer owner for a decision, or one report being deleted — not a build. We'd rather lose the project than sell a system that papers over the real issue.",
  },
  {
    n: "07",
    q: "Will you use AI in our systems?",
    a: "Only where it earns its place. Automation and machine learning are genuinely good at reconciliation, classification, and first-pass review. They're a poor fit anywhere a wrong answer is expensive and hard to notice. We'll tell you which side of that line your problem sits on, and every automation ships with a human checkpoint where the stakes call for one.",
  },
  {
    n: "08",
    q: "Can you work alongside our in-house team?",
    a: "That's the preferred arrangement. Your people know the business in ways we won't after any number of interviews. We pair with them through the build so the system is understood from the inside before we hand it over, rather than delivered over a wall.",
  },
];

const GROUP_3 = [
  {
    n: "09",
    q: "What happens when the engagement ends?",
    a: "You own the code, the infrastructure, and the documentation outright. Handover is a scheduled part of the plan, not an afterthought — a working period where your team runs the system while we're still available. Plenty of clients keep us on afterwards, but that should be a choice, not a dependency we engineered.",
  },
  {
    n: "10",
    q: "Who owns the intellectual property?",
    a: "You do. Everything built for you during an engagement is yours, transferred on completion. We keep our own internal frameworks and tooling, which is what lets each client benefit from the ones before them, but nothing specific to your business leaves with us.",
  },
  {
    n: "11",
    q: "How do you handle our data and security?",
    a: "Under a signed NDA from the first conversation onwards. In delivery: least-privilege access, credentials held in your systems rather than ours, and access revoked at handover. If you operate under a specific compliance regime, tell us early — it changes architecture decisions, and it's expensive to retrofit.",
  },
  {
    n: "12",
    q: "What if we're not happy with the work?",
    a: "Say so early and directly. The staged structure exists precisely so there's a natural stopping point after the diagnostic, before the expensive part. If we get something wrong we'll fix it; if we're the wrong fit, ending cleanly is better for both of us than continuing politely.",
  },
];

const RAIL_SECTIONS = [
  { id: "faq-hero", label: "FAQ" },
  { id: "faq-work", label: "Before you start" },
  { id: "faq-scope", label: "Scope & approach" },
  { id: "faq-delivery", label: "Once it ships" },
  { id: "faq-ask", label: "Still wondering" },
];

function FaqTabsNav({ active }) {
  return (
    <Reveal as="div" className="faq-tabs-nav">
      {GROUPS.map((g) => (
        <a
          key={g.id}
          href={`#${g.id}`}
          className={cn("faq-tab-item", active === g.id && "is-active")}
        >
          <span className="faq-tab-num">{g.num}</span>
          <div className="faq-tab-info">
            <span className="faq-tab-title">{g.title}</span>
            <span className="faq-tab-sub">{g.sub}</span>
          </div>
        </a>
      ))}
    </Reveal>
  );
}

export default function Faq() {
  const activeGroup = useActiveSection(GROUPS.map((g) => g.id));

  return (
    <>
      <PageHead id="faq-hero" className="pagehead--faq" label="FAQ" title="The questions, answered plainly.">
        Everything we get asked before a first conversation — written out here
        so the call can be about your business instead.
      </PageHead>

      <section className="sc" id="faq-work">
        <div className="wrap">
          <FaqTabsNav active={activeGroup} />
          <Reveal as="span" className="label">01 · Before you start</Reveal>
          <Reveal as="h2" delay="d1" className="h-section">Working together.</Reveal>
          <Reveal as="div" delay="d2">
            <FaqList items={GROUP_1} />
          </Reveal>
        </div>
      </section>

      <section className="sc sc--tint" id="faq-scope">
        <div className="wrap">
          <FaqTabsNav active={activeGroup} />
          <Reveal as="span" className="label">02 · What the work covers</Reveal>
          <Reveal as="h2" delay="d1" className="h-section">Scope and approach.</Reveal>
          <Reveal as="div" delay="d2">
            <FaqList items={GROUP_2} />
          </Reveal>
        </div>
      </section>

      <section className="sc" id="faq-delivery">
        <div className="wrap">
          <FaqTabsNav active={activeGroup} />
          <Reveal as="span" className="label">03 · Once it ships</Reveal>
          <Reveal as="h2" delay="d1" className="h-section">Delivery and afterwards.</Reveal>
          <Reveal as="div" delay="d2">
            <FaqList items={GROUP_3} />
          </Reveal>
        </div>
      </section>

      <section className="sc sc--dark" id="faq-ask">
        <div className="wrap split">
          <div>
            <Reveal as="span" className="label">Still wondering</Reveal>
            <Reveal as="h2" delay="d1" className="h-section">
              Ask us the one that isn't here.
            </Reveal>
          </div>
          <Reveal as="div" delay="d2" style={{ alignSelf: "end" }}>
            <p className="lede">
              If something about how we work isn't clear, ask it directly
              rather than guessing. We'd much rather answer an awkward
              question now than discover the mismatch three weeks into a
              build.
            </p>
            <div style={{ marginTop: "var(--s2)" }}>
              <Button asChild variant="paper">
                <Link to="/contact">Ask us directly →</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionRail sections={RAIL_SECTIONS} />
    </>
  );
}
