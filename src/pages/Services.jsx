import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import SectionRail from "@/components/SectionRail";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

const SERVICES = [
  {
    id: "process",
    n: "01",
    title: "Business Process Consulting",
    teaser: "Because you can't automate your way out of a broken workflow.",
    body: [
      "You can't automate your way out of a broken workflow. We map how operations actually run today - not the org-chart version - and find where time and money leak between handoffs.",
      "The output is a redesigned workflow anyone on the team can follow, with the friction removed before a single line of code gets written on top of it.",
    ],
    cols: [
      { n: "01", title: "Process map", body: "How work really moves, handoff by handoff" },
      { n: "02", title: "Leak report", body: "Where hours and money disappear, quantified" },
      { n: "03", title: "Redesigned flow", body: "The version that works, written down" },
    ],
  },
  {
    id: "transformation",
    n: "02",
    title: "Digital Transformation",
    teaser: "Because ten tools that don't talk is nine too many.",
    body: [
      "Most businesses don't have too little software - they have too much of it, disconnected. We bring ERP, cloud, and operational systems into one coherent stack instead of a pile of point solutions.",
      "That means fewer logins, fewer re-typed numbers, and a system that tells the same story everywhere it's read.",
    ],
    cols: [
      { n: "01", title: "Stack audit", body: "What you own, what overlaps, what to retire" },
      { n: "02", title: "Integration layer", body: "The joins that make the pieces one system" },
      { n: "03", title: "Migration plan", body: "Sequenced so the business keeps running" },
    ],
  },
  {
    id: "automation",
    n: "03",
    title: "AI & Automation",
    teaser: "Because your best people are too expensive to spend on copy-paste.",
    body: [
      "Repetitive work - reconciliation, reporting, data entry, first-pass review - goes to machines. Not because it's fashionable, but because it gives skilled people their week back.",
      "We're deliberate about where AI actually helps versus where it just adds a new failure mode. Every automation ships with a human checkpoint where the stakes call for one.",
    ],
    cols: [
      { n: "01", title: "Task inventory", body: "What is worth automating, and what isn't" },
      { n: "02", title: "Working automations", body: "Shipped, monitored, and owned by you" },
      { n: "03", title: "Human checkpoints", body: "Review steps where the stakes need them" },
    ],
  },
  {
    id: "engineering",
    n: "04",
    title: "Custom Software Engineering",
    teaser: "Because the moment you're worth copying, off-the-shelf stops fitting.",
    body: [
      "When off-the-shelf software makes you bend the business to fit it, we build the platform, dashboard, portal, or internal tool shaped around how you actually operate.",
      "Built to be owned, not rented - documented, tested, and handed over cleanly at the end of the engagement.",
    ],
    cols: [
      { n: "01", title: "The product", body: "Built to your operation, not a template" },
      { n: "02", title: "Documentation", body: "Written for the team who inherits it" },
      { n: "03", title: "Clean handover", body: "Code, infrastructure, and access are yours" },
    ],
  },
  {
    id: "data",
    n: "05",
    title: "Data & Business Intelligence",
    teaser: "Because a decision made on scattered data is just a guess in a suit.",
    body: [
      "A decision made on outdated data is just a guess in a suit. We turn the numbers you already have into information people actually trust at the table.",
      "That means one reconciled source of truth, and dashboards built for the decision they're meant to support - not a wall of charts nobody opens twice.",
    ],
    cols: [
      { n: "01", title: "Single source", body: "One reconciled version of the numbers" },
      { n: "02", title: "Decision dashboards", body: "Built for a question, not for decoration" },
      { n: "03", title: "Metric ownership", body: "Every number has a name against it" },
    ],
  },
  {
    id: "strategy",
    n: "06",
    title: "Technology Strategy",
    teaser: "Because the wrong tech bill arrives twice - once to buy it, once to undo it.",
    body: [
      "We're the long-term partner who helps you spend on the right things before the cheque is written - not after a costly rebuild proves the first choice wrong.",
      "A clear-eyed roadmap: what to build, what to buy, and what to leave alone for another year.",
    ],
    cols: [
      { n: "01", title: "Roadmap", body: "Sequenced by constraint, not by wishlist" },
      { n: "02", title: "Build vs buy", body: "An honest call on each, including 'neither'" },
      { n: "03", title: "Cost picture", body: "What it runs at, once it's live" },
    ],
  },
];

const DELIVERY = [
  { n: "01", title: "Understand", body: "We map how your business actually runs today." },
  { n: "02", title: "Diagnose", body: "We pinpoint the bottleneck holding growth back." },
  { n: "03", title: "Build", body: "We design and ship the fix, with your team involved." },
  { n: "04", title: "Embed", body: "We hand over cleanly and stay on for what's next." },
];

const RAIL_SECTIONS = [
  { id: "capabilities", label: "Capabilities" },
  { id: "delivery", label: "Delivery model" },
  { id: "cta", label: "Not sure yet?" },
];

export default function Services() {
  const location = useLocation();
  const navigate = useNavigate();
  const validIds = SERVICES.map((s) => s.id);
  const hashId = location.hash.replace(/^#/, "");
  const [active, setActive] = useState(
    validIds.includes(hashId) ? hashId : validIds[0]
  );

  // Keep the tab in sync if the hash changes externally (e.g. a footer link
  // to /services#process while already on this page).
  useEffect(() => {
    if (validIds.includes(hashId) && hashId !== active) {
      setActive(hashId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hashId]);

  const handleChange = (id) => {
    setActive(id);
    navigate(`#${id}`, { replace: true });
  };

  return (
    <>
      <section className="sc sc--explorer" id="capabilities">
        <div className="wrap">
          <div className="services-explorer">
            <Tabs
              value={active}
              onValueChange={handleChange}
              orientation="vertical"
              className="contents"
            >
              <div className="explorer-nav">
                <div className="explorer-nav-head">
                  <span className="label label--blue">Capabilities</span>
                  <h1 className="h-section" style={{ marginBottom: 12 }}>
                    Six ways we earn our keep.
                  </h1>
                  <p className="lede" style={{ fontSize: 15, lineHeight: 1.6, marginBottom: 0 }}>
                    Every capability starts with a claim - and the reason it
                    matters. We don't sell software licences. We build the
                    systems that make businesses grow.
                  </p>
                </div>

                <TabsList aria-label="Services capabilities navigation">
                  {SERVICES.map((s) => (
                    <TabsTrigger key={s.id} value={s.id}>
                      <div className="service-nav-top">
                        <div className="service-nav-meta">
                          <span className="service-nav-num">{s.n}</span>
                          <span className="service-nav-title">{s.title}</span>
                        </div>
                        <span className="service-nav-arrow">→</span>
                      </div>
                      <p className="service-nav-teaser">{s.teaser}</p>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <div className="service-panels">
                {SERVICES.map((s) => (
                  <TabsContent key={s.id} value={s.id}>
                    <div className="panel-header">
                      <span className="label">{s.n} · Service</span>
                      <h2 className="h-section" style={{ marginBottom: 6 }}>{s.title}</h2>
                      <p className="panel-claim">{s.teaser}</p>
                    </div>
                    <div className="panel-body">
                      {s.body.map((p, i) => (
                        <p className="lede" key={i}>{p}</p>
                      ))}
                    </div>
                    <div className="panel-deliverables">
                      {s.cols.map((c) => (
                        <div className="deliverable-col" key={c.n}>
                          <span className="n">{c.n}</span>
                          <h4>{c.title}</h4>
                          <p>{c.body}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="sc sc--dark" id="delivery">
        <div className="wrap">
          <Reveal as="span" className="label">Delivery model</Reveal>
          <Reveal as="h2" delay="d1" className="h-section">
            Every engagement runs the same way.
          </Reveal>
          <Reveal as="p" delay="d2" className="lede">
            Whichever service you start with, the shape of the work is the
            same - and so is the point at which you get to change your mind.
          </Reveal>
          <div className="cols cols--4">
            {DELIVERY.map((c, i) => (
              <Reveal as="div" delay={`d${i + 1}`} className="col" key={c.n}>
                <span className="n">{c.n}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sc" id="cta">
        <div className="wrap split">
          <div>
            <Reveal as="span" className="label">Not sure yet?</Reveal>
            <Reveal as="h2" delay="d1" className="h-section">
              Most people can't tell which one they need.
            </Reveal>
          </div>
          <Reveal as="div" delay="d2" style={{ alignSelf: "end" }}>
            <p className="lede">
              That's normal. Almost every engagement starts as a conversation
              about a symptom, not a service picked off a list. Tell us what
              feels harder than it should and we'll tell you which of the six
              it actually is - or that it's none of them.
            </p>
            <div style={{ marginTop: "var(--s2)" }}>
              <Button asChild variant="accent">
                <Link to="/contact">Start with a conversation →</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionRail sections={RAIL_SECTIONS} />
    </>
  );
}
