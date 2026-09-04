import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import SectionRail from "@/components/SectionRail";

const NEXT_STEPS = [
  { n: "01", title: "We reply", body: "Within one business day, from a person who read what you wrote." },
  { n: "02", title: "Ninety minutes", body: "One focused session on the constraint, not a sales call in disguise." },
  { n: "03", title: "A written read-back", body: "What we heard and what we'd fix first — yours either way." },
];

const RAIL_SECTIONS = [
  { id: "contact-hero", label: "Contact" },
  { id: "contact-steps", label: "What happens next" },
];

export default function Contact() {
  return (
    <>
      <section className="sc sc--dark" id="contact-hero" style={{ paddingTop: 150 }}>
        <div className="wrap split" style={{ alignItems: "center" }}>
          <div>
            <Reveal as="span" className="label">Contact</Reveal>
            <Reveal as="h2" delay="d1" className="h-display" style={{ margin: "0 0 var(--s1)" }}>
              Stop managing the chaos. Start building what's next.
            </Reveal>
            <Reveal as="p" delay="d2" className="lede" style={{ color: "var(--muted-inv)" }}>
              The best time to talk is while things still work — not the week
              they break. One focused session on what's actually slowing you
              down. No pitch deck, no obligation.
            </Reveal>
            <Reveal as="div" delay="d3" className="reassure" style={{ color: "var(--muted-inv)" }}>
              <span className="dot" /> We'll reply within one business day.
            </Reveal>

            <Reveal as="ul" delay="d3" className="contact-lines" style={{ maxWidth: 420 }}>
              <li style={{ borderTopColor: "var(--rule-inv)" }}>
                <h4>Email</h4>
                <a href="mailto:contact@sarathilabs.com">contact@sarathilabs.com</a>
              </li>
              <li style={{ borderTopColor: "var(--rule-inv)" }}>
                <h4>Phone</h4>
                <a href="tel:+919892656880">+91 98926 56880</a>
              </li>
              <li style={{ borderTopColor: "var(--rule-inv)" }}>
                <h4>Studio</h4>
                <span>Bengaluru, India</span>
              </li>
            </Reveal>
          </div>

          <Reveal as="div" delay="d2">
            <ContactForm showCompany />
          </Reveal>
        </div>
      </section>

      <section className="sc" id="contact-steps">
        <div className="wrap">
          <div className="split">
            <div>
              <Reveal as="span" className="label">What happens next</Reveal>
              <Reveal as="h2" delay="d1" className="h-section">
                Three steps, and none of them are a proposal.
              </Reveal>
            </div>
            <Reveal as="div" delay="d2" style={{ alignSelf: "end" }}>
              <p className="lede">
                We don't send a deck after the first call. You get a written
                read-back of what we heard, which is more useful to you and
                harder for us to fake.
              </p>
            </Reveal>
          </div>
          <div className="cols cols--4" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            {NEXT_STEPS.map((c, i) => (
              <Reveal as="div" delay={`d${i + 1}`} className="col" key={c.n}>
                <span className="n">{c.n}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionRail sections={RAIL_SECTIONS} />
    </>
  );
}
