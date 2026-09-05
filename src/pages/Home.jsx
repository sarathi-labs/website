import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import IntroAnimation from "@/components/IntroAnimation";
import SectionRail from "@/components/SectionRail";
import ContactForm from "@/components/ContactForm";

const SERVICES = [
  {
    n: "01",
    title: "Business Process Consulting",
    claim: "Because you can't automate your way out of a broken workflow.",
    body: "We map how your operations really run, find where they snag, and fix the flow before anyone writes a line of code.",
    href: "/services#process",
  },
  {
    n: "02",
    title: "Digital Transformation",
    claim: "Because ten tools that don't talk is nine too many.",
    body: "We bring ERP, cloud, and your scattered systems into one that finally works as a whole.",
    href: "/services#transformation",
  },
  {
    n: "03",
    title: "AI & Automation",
    claim: "Because your best people are too expensive to spend on copy-paste.",
    body: "We hand the repetitive work to machines and give your team back the hours that actually move the business.",
    href: "/services#automation",
  },
  {
    n: "04",
    title: "Custom Software Engineering",
    claim: "Because the moment you're worth copying, off-the-shelf stops fitting.",
    body: "We build the platforms, dashboards, and apps shaped to exactly how you operate - and no one else.",
    href: "/services#engineering",
  },
  {
    n: "05",
    title: "Data & Business Intelligence",
    claim: "Because a decision made on scattered data is just a guess in a suit.",
    body: "We turn the numbers you already have into insight you'll actually trust at the table.",
    href: "/services#data",
  },
  {
    n: "06",
    title: "Technology Strategy",
    claim: "Because the wrong tech bill arrives twice - once to buy it, once to undo it.",
    body: "We're the long-term partner who helps you spend on the right things, before the cheque is written.",
    href: "/services#strategy",
  },
];

const HOW_WE_WORK = [
  { n: "01", title: "Understand", body: "We map how your business actually runs today." },
  { n: "02", title: "Diagnose", body: "We pinpoint the bottleneck holding growth back." },
  { n: "03", title: "Build", body: "We design and ship the fix, with your team involved." },
  { n: "04", title: "Embed", body: "We hand over cleanly and stay on for what's next." },
];

const RAIL_SECTIONS = [
  { id: "s1", label: "HomePage" },
  { id: "s2", label: "About" },
  { id: "s3", label: "Services" },
  { id: "s4", label: "How we work" },
  { id: "s9", label: "Systems audit" },
  { id: "s11", label: "Contact" },
];

export default function Home() {
  return (
    <>
      <IntroAnimation />

      {/* 01 · HERO + SOCIAL PROOF */}
      <section className="hero" id="s1">
        <div className="hero-body">
          <div className="wrap hero-grid">
            <div>
              <span className="label">Digital transformation consultancy</span>
              <h1>When your ambition outgrows your systems.</h1>
              <p>
                You didn't get here by playing small. But the spreadsheets are
                creaking, the tools don't talk, and you're firefighting instead
                of building. We build the operating system your next stage
                runs on.
              </p>
              <div className="hero-actions">
                <Button asChild variant="accent">
                  <Link to="/contact">Start with a conversation →</Link>
                </Button>
                <a className="tlink" href="#s4" style={{ color: "var(--text-inv)" }}>
                  See how we work
                </a>
              </div>
            </div>
            <div className="hero-plate">
              <img src="/assets/wheel-chariot-cream.png" alt="" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="proof">
          <div className="wrap proof-in">
            <div className="proof-row">
              <span className="label">Trusted by</span>
              <p className="proof-note">
                We work best with businesses growing faster than their internal
                systems can keep up.
              </p>
            </div>
            <div className="proof-logos">
              {Array.from({ length: 6 }).map((_, i) => (
                <span className="proof-slot" key={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 · ABOUT / POSITIONING */}
      <section className="sc" id="s2">
        <span id="about" className="sr-only" />
        <div className="wrap split--media" style={{ display: "grid" }}>
          <Reveal as="div" className="hero-plate" style={{ maxWidth: 340, margin: 0 }}>
            <img src="/assets/wheel-logoblue.png" alt="" aria-hidden="true" />
          </Reveal>
          <div>
            <Reveal as="span" className="label">The short version</Reveal>
            <Reveal as="h2" delay="d1" className="h-section">
              More software was never the answer.
            </Reveal>
            <Reveal as="div" delay="d2">
              <p className="lede">
                When growth gets hard, the instinct is to buy more - more
                tools, more dashboards, more logins. The chaos doesn't shrink.
                It just gets a subscription.
              </p>
              <p className="lede">
                We map the problem, simplify the workflow, and build the
                systems that help people work better and businesses scale with
                clarity.
              </p>
            </Reveal>
            <Reveal as="div" delay="d3" style={{ marginTop: "var(--s2)" }}>
              <Link className="tlink tlink--blue" to="/about">
                More about how we think →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03 · KEY OFFERS */}
      <section className="sc sc--tint sc--dense" id="s3">
        <div className="wrap">
          <div className="split">
            <div>
              <Reveal as="span" className="label">What we do</Reveal>
              <Reveal as="h2" delay="d1" className="h-section">Six ways we earn our keep.</Reveal>
            </div>
            <Reveal as="div" delay="d2" style={{ alignSelf: "end" }}>
              <p className="lede">
                Every capability starts with a claim - and the reason it
                matters. Because we don't sell software. We build the systems
                that make businesses grow.
              </p>
            </Reveal>
          </div>

          <div className="cards">
            {SERVICES.map((s, i) => (
              <Reveal
                as={Link}
                to={s.href}
                key={s.n}
                delay={`d${i + 1}`}
                className="card"
              >
                <span className="n">{s.n}</span>
                <h3>{s.title}</h3>
                <p className="claim">{s.claim}</p>
                <p>{s.body}</p>
                <span className="go">Explore the service →</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 · HOW WE WORK */}
      <section className="sc" id="s4">
        <div className="wrap">
          <Reveal as="span" className="label">How we work</Reveal>
          <Reveal as="h2" delay="d1" className="h-section" style={{ maxWidth: "16ch" }}>
            A short, honest path from problem to fix.
          </Reveal>
          <Reveal as="p" delay="d2" className="lede">
            No discovery theatre, no six-week deck. Four stages, each ending in
            something you can actually look at.
          </Reveal>

          <div className="cols cols--4">
            {HOW_WE_WORK.map((c, i) => (
              <Reveal as="div" delay={`d${i + 1}`} className="col" key={c.n}>
                <span className="n">{c.n}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 09 · LEAD MAGNET */}
      <section className="sc sc--white" id="s9">
        <div className="wrap magnet">
          <div>
            <Reveal as="span" className="label label--blue">Free, no obligation</Reveal>
            <Reveal as="h2" delay="d1" className="h-section" style={{ maxWidth: "15ch" }}>
              The 90-minute systems audit.
            </Reveal>
            <Reveal as="p" delay="d2" className="lede">
              One focused session on what's actually slowing you down, and a
              written read-back of what we found. No pitch deck, no proposal
              attached.
            </Reveal>

            <Reveal as="ul" delay="d3" className="magnet-list">
              <li><span className="mn">01</span><span>A map of where work stalls between the tools you already own</span></li>
              <li><span className="mn">02</span><span>The one bottleneck we'd fix first, and why that one</span></li>
              <li><span className="mn">03</span><span>An honest read on what you can fix in-house without us</span></li>
            </Reveal>

            <Reveal as={Link} to="/contact" delay="d4" className="btn btn--accent">
              Claim your audit →
            </Reveal>
          </div>

          <Reveal as="div" delay="d2" className="mock">
            <div className="mock-bar">
              <span>Systems audit · read-back</span>
              <span className="mock-dot" />
            </div>
            <div className="mock-body">
              <div className="mock-line"><span className="mk">01</span><span className="mt">Order intake → fulfilment</span><span className="mock-meter"><i style={{ width: "84%" }} /></span></div>
              <div className="mock-line"><span className="mk">02</span><span className="mt">Month-end reconciliation</span><span className="mock-meter"><i style={{ width: "61%" }} /></span></div>
              <div className="mock-line"><span className="mk">03</span><span className="mt">Inventory across branches</span><span className="mock-meter"><i style={{ width: "44%" }} /></span></div>
              <div className="mock-line"><span className="mk">04</span><span className="mt">Customer support handoff</span><span className="mock-meter"><i style={{ width: "22%" }} /></span></div>
            </div>
            <div className="mock-foot">Fix line 01 first. Everything downstream is a symptom of it.</div>
          </Reveal>
        </div>
      </section>

      {/* 11 · CONTACT */}
      <section className="sc sc--tint" id="s11">
        <div className="wrap split" style={{ alignItems: "center" }}>
          <div>
            <Reveal as="span" className="label">Start here</Reveal>
            <Reveal as="h2" delay="d1" className="h-section" style={{ maxWidth: "14ch" }}>
              Stop managing the chaos. Start building what's next.
            </Reveal>
            <Reveal as="p" delay="d2" className="lede">
              The best time to talk is while things still work - not the week
              they break. One focused session on what's actually slowing you
              down. No pitch deck, no obligation.
            </Reveal>
            <Reveal as="div" delay="d3" className="reassure">
              <span className="dot" /> Direct call:{" "}
              <a href="tel:+919892656880" style={{ color: "var(--blue)", textDecoration: "none", fontWeight: 500 }}>
                +91 98926 56880
              </a>{" "}
              · Reply within 24h
            </Reveal>
          </div>

          <Reveal as="div" delay="d2">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <SectionRail sections={RAIL_SECTIONS} />
    </>
  );
}
