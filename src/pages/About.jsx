import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import PageHead from "@/components/PageHead";
import SectionRail from "@/components/SectionRail";

const PHILOSOPHY = [
  { n: "01", title: "Calm, not loud", body: "We bring steadiness to complex problems." },
  { n: "02", title: "Confident, not arrogant", body: "We know our craft and stay open." },
  { n: "03", title: "Practical, not theoretical", body: "We ship things that work in the real world." },
  { n: "04", title: "Strategic, not transactional", body: "We invest in the relationship, not the invoice." },
  { n: "05", title: "Reliable, not reactive", body: "We plan ahead so you're not firefighting." },
];

const LABS = [
  { n: "01", title: "Research", body: "We understand the problem before proposing anything." },
  { n: "02", title: "Prototype", body: "We build a small version fast to learn what works." },
  { n: "03", title: "Validate", body: "We test it against reality, not against a slide." },
  { n: "04", title: "Engineer", body: "We build the real thing, hardened for daily use." },
];

const SECTORS = [
  "Manufacturing",
  "Retail",
  "Distribution",
  "Logistics",
  "Healthcare",
  "Hospitality",
  "Financial services",
  "Technology",
  "SaaS startups",
];

const RAIL_SECTIONS = [
  { id: "intro", label: "About" },
  { id: "name", label: "Why the name" },
  { id: "philosophy", label: "Our philosophy" },
  { id: "approach", label: "Approach" },
  { id: "fit", label: "Who we work with" },
  { id: "careers", label: "Careers" },
];

export default function About() {
  return (
    <>
      <PageHead id="intro" className="pagehead--about" label="About" title="Named for the charioteer.">
        Sarathi means the one who guides the chariot - the steady hand beside
        the driver, not the one holding the reins for them. That's the
        relationship we try to build with every client.
      </PageHead>

      <section className="sc" id="name">
        <div className="wrap split--media" style={{ display: "grid" }}>
          <Reveal as="div" className="hero-plate" style={{ maxWidth: 340, margin: 0 }}>
            <img src="/assets/wheel-logoblue.png" alt="" aria-hidden="true" />
          </Reveal>
          <div>
            <Reveal as="span" className="label">Why the name</Reveal>
            <Reveal as="h2" delay="d1" className="h-section">
              The charioteer doesn't own the chariot.
            </Reveal>
            <Reveal as="div" delay="d2">
              <p className="lede">
                In the old stories the sarathi sits beside the warrior. He
                doesn't fight the battle and he doesn't take the credit - he
                knows the ground, reads the field, and keeps the chariot
                moving in the right direction.
              </p>
              <p className="lede">
                It's a useful description of consulting done properly. The
                business is yours. The decisions are yours. We're the people
                who've seen this stretch of road before.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="sc sc--dark" id="philosophy">
        <div className="wrap">
          <Reveal as="span" className="label">Our philosophy</Reveal>
          <Reveal as="p" delay="d1" className="h-statement" style={{ maxWidth: "24ch" }}>
            The best technology is the kind you stop noticing. When it makes
            the job harder, not lighter, it has failed - however clever it
            looks.
          </Reveal>
          <div className="bento">
            {PHILOSOPHY.map((p, i) => (
              <Reveal as="div" delay={`d${i + 1}`} className="bento-cell" key={p.n}>
                <span className="n">{p.n}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sc" id="approach">
        <div className="wrap">
          <div className="split">
            <div>
              <Reveal as="span" className="label">What "Sarathi Labs" stands for</Reveal>
              <Reveal as="h2" delay="d1" className="h-section">
                Labs isn't decoration. It's how we work.
              </Reveal>
            </div>
            <Reveal as="div" delay="d2" style={{ alignSelf: "end" }}>
              <p className="lede">
                We research, prototype, validate, and engineer - because a
                solution that hasn't been tested against reality is only a
                theory.
              </p>
              <p className="lede">
                Every engagement sharpens the frameworks and tools that power
                the next one, so each client benefits from every one before
                them.
              </p>
            </Reveal>
          </div>
          <div className="cols cols--4">
            {LABS.map((l, i) => (
              <Reveal as="div" delay={`d${i + 1}`} className="col" key={l.n}>
                <span className="n">{l.n}</span>
                <h3>{l.title}</h3>
                <p>{l.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sc sc--tint" id="fit">
        <div className="wrap">
          <div className="split">
            <div>
              <Reveal as="span" className="label">Who we work best with</Reveal>
              <Reveal as="h2" delay="d1" className="h-section">
                Growing faster than your systems can keep up.
              </Reveal>
              <Reveal as="p" delay="d2" className="lede">
                Founders and leadership teams who want to modernise operations
                and scale on purpose, not by accident.
              </Reveal>
            </div>
            <Reveal as="div" delay="d3" style={{ alignSelf: "end" }}>
              <p className="lede">
                And who we don't: anyone looking for the cheapest pair of
                hands, or a vendor to hand a finished spec to. We're most
                useful before the spec exists.
              </p>
            </Reveal>
          </div>
          <Reveal as="div" delay="d3" className="pills">
            {SECTORS.map((s) => (
              <span className="pill" key={s}>{s}</span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="sc sc--dark" id="careers">
        <div className="wrap split">
          <div>
            <Reveal as="span" className="label">Careers</Reveal>
            <Reveal as="h2" delay="d1" className="h-section">
              We're small on purpose - and always looking.
            </Reveal>
          </div>
          <Reveal as="div" delay="d2" style={{ alignSelf: "end" }}>
            <p className="lede">
              If the way we think about systems sounds like your kind of
              problem, send us a note and tell us what you'd fix first. We
              read every one, and we'd rather see how you think than what
              you've certified.
            </p>
            <div style={{ marginTop: "var(--s2)" }}>
              <Button asChild variant="paper">
                <a href="mailto:contact@sarathilabs.com">Write to us →</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionRail sections={RAIL_SECTIONS} />
    </>
  );
}
