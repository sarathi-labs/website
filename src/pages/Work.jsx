import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import SectionRail from "@/components/SectionRail";

const PATTERN = [
  { n: "01", title: "It worked at ten", body: "The manual version was fine at the scale it was designed for." },
  { n: "02", title: "It broke at a thousand", body: "Growth turned an inconvenience into a daily cost." },
  { n: "03", title: "One system replaced the workaround", body: "Not more tools. One place where the work actually lives." },
];

const RAIL_SECTIONS = [
  { id: "impact", label: "Impact" },
  { id: "remittance", label: "Fintech Case" },
  { id: "vending", label: "IoT Case" },
  { id: "pattern", label: "The Pattern" },
  { id: "cta", label: "Ready to begin" },
];

function FintechMockup() {
  return (
    <div className="case-mockup mock--fintech">
      <div className="mockup-header">
        <div className="mockup-badge">
          <span className="mockup-status-dot" /> LIVE INFRASTRUCTURE CONSOLE · ANONYMISED
        </div>
        <div className="mockup-meta">LATENCY: 42ms · TLS 1.3 · SYSTEM STATUS: HEALTHY</div>
      </div>
      <div className="mockup-body">
        <div className="mockup-section-title">CROSS-BORDER SETTLEMENT PIPELINE · US → LATAM CORRIDOR</div>
        <div className="fintech-pipeline">
          <div className="pipeline-step is-complete">
            <span className="step-num">01</span>
            <span className="step-name">ACH Ingest</span>
            <span className="step-tag">FedNow / Nacha</span>
          </div>
          <div className="pipeline-arrow">→</div>
          <div className="pipeline-step is-complete">
            <span className="step-num">02</span>
            <span className="step-name">KYB / Sanctions</span>
            <span className="step-tag">Zero Flagged</span>
          </div>
          <div className="pipeline-arrow">→</div>
          <div className="pipeline-step is-complete">
            <span className="step-num">03</span>
            <span className="step-name">FX Liquidity</span>
            <span className="step-tag">Automated Pool</span>
          </div>
          <div className="pipeline-arrow">→</div>
          <div className="pipeline-step is-live">
            <span className="step-num">04</span>
            <span className="step-name">Local Bank Rails</span>
            <span className="step-tag">SPEI / Pix Off-Ramp</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function IotMockup() {
  return (
    <div className="case-mockup mock--iot">
      <div className="mockup-header">
        <div className="mockup-badge">
          <span className="mockup-status-dot" /> IOT TELEMETRY &amp; FLEET OPERATIONS · CONSOLE V2.4
        </div>
        <div className="mockup-meta">912 / 918 ACTIVE NODES · 99.3% UP · BLR / DEL / BOM</div>
      </div>
      <div className="mockup-body">
        <div className="iot-top-grid">
          <div className="iot-metric-box">
            <span className="stat-label">MONTHLY DIGITAL GMV</span>
            <span className="stat-val">₹1.5 Cr+</span>
            <span className="stat-sub">↑ 14.2% MoM transaction volume</span>
          </div>
          <div className="iot-metric-box">
            <span className="stat-label">HARDWARE HEALTH MATRIX</span>
            <div className="health-indicators">
              <span className="health-tag is-good">• Dispense Motor: 100% Calibrated</span>
              <span className="health-tag is-good">• UPI / MDB Protocol: Stable</span>
              <span className="health-tag is-good">• Thermal Storage: 4.2°C Normal</span>
            </div>
            <span className="stat-sub">Centralised IoT Heartbeat (10s sync)</span>
          </div>
          <div className="iot-metric-box iot-alert-box">
            <span className="stat-label">AUTOMATED RESTOCKING DISPATCH</span>
            <div className="dispatch-alert">
              <span className="alert-icon">•</span>
              <div>
                <strong>Route #42 Auto-Dispatched</strong>
                <p>Node #842 (Indiranagar) stock &lt; 15% · Technician alerted</p>
              </div>
            </div>
          </div>
        </div>
        <div className="iot-node-strip">
          <span className="node-badge is-online">NODE-001 (Koramangala): 100% OK</span>
          <span className="node-badge is-online">NODE-014 (HSR Layout): 100% OK</span>
          <span className="node-badge is-online">NODE-102 (Whitefield): 100% OK</span>
          <span className="node-badge is-online">NODE-245 (CyberCity Gurugram): 100% OK</span>
          <span className="node-badge is-warn">NODE-412 (BKC Mumbai): Restock In Progress</span>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <>
      <section className="pagehead pagehead--work" id="impact">
        <div className="work-hero-bg">
          <div className="blueprint-grid" />
          <div className="wheel-watermark">
            <img src="/assets/wheel-chariot-cream.png" alt="" aria-hidden="true" />
          </div>
        </div>
        <div className="wrap">
          <div className="work-hero-grid">
            <div className="work-hero-text">
              <span className="label label--blue">Our work · Proven Impact</span>
              <h1 className="h-display">Numbers we can stand behind.</h1>
              <p className="lede">
                Work delivered by our team at production scale.
              </p>
            </div>
            <div className="work-hero-stats">
              <div className="stat-cell">
                <span className="stat-num serif">20+</span>
                <span className="stat-name mono">Projects shipped</span>
              </div>
              <div className="stat-cell">
                <span className="stat-num serif">900+</span>
                <span className="stat-name mono">IoT Connected Nodes Managed</span>
              </div>
              <div className="stat-cell">
                <span className="stat-num serif">₹1.5 Cr+</span>
                <span className="stat-name mono">Monthly Transactions Processed</span>
              </div>
              <div className="stat-cell">
                <span className="stat-num serif">99.998%</span>
                <span className="stat-name mono">Infrastructure Availability SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sc" id="remittance">
        <div className="wrap">
          <Reveal as="span" className="label">Case 01 · Financial infrastructure</Reveal>
          <Reveal as="h2" delay="d1" className="h-section">
            A US-based cross-border remittance company
          </Reveal>
          <Reveal as="div" delay="d2" className="case" style={{ marginTop: "var(--s2)" }}>
            <div className="case-row" style={{ paddingTop: 0 }}>
              <div>
                <p>
                  Architected a remittance platform moving money from the US
                  into Latin America - banking, KYC/KYB, and off-ramp partners
                  in one flow - then extended it into a vendor network and
                  disaster-relief transfers for aid organisations.
                </p>
                <p className="because">
                  Because cross-border payments fail in the gaps between
                  systems - so we closed the gaps.
                </p>
              </div>
              <div className="chips">
                <span className="chip">US → LatAm</span>
                <span className="chip">Live, 1000s/day</span>
              </div>
            </div>
            <FintechMockup />
          </Reveal>
        </div>
      </section>

      <section className="sc sc--tint" id="vending">
        <div className="wrap">
          <Reveal as="span" className="label">Case 02 · IoT &amp; operations</Reveal>
          <Reveal as="h2" delay="d1" className="h-section">
            An Indian smart-vending machine chain
          </Reveal>
          <Reveal as="div" delay="d2" className="case" style={{ marginTop: "var(--s2)" }}>
            <div className="case-row" style={{ paddingTop: 0 }}>
              <div>
                <p>
                  Digitised the full lifecycle of a 900+ machine IoT vending
                  network - deployment, refilling, maintenance, and support -
                  through one centralised dashboard with integrated digital
                  payments, now processing ₹1.5 Cr+ per month.
                </p>
                <p className="because">
                  Because 900 machines managed by hand is not an operation -
                  it's a fire waiting to start.
                </p>
              </div>
              <div className="chips">
                <span className="chip">900+ machines</span>
                <span className="chip">₹1.5 Cr+ / month</span>
              </div>
            </div>
            <div className="case-row">
              <div>
                <p>
                  Rebuilt the product and reviews experience for a storefront
                  serving 30K+ monthly active users, including a custom
                  image-optimisation server and performance refactors that
                  kept the site fast under load.
                </p>
                <p className="because">
                  Because at scale, a slow page isn't an inconvenience - it's
                  lost revenue, measured daily.
                </p>
              </div>
              <div className="chips">
                <span className="chip">30K+ MAU</span>
                <span className="chip">Faster under load</span>
              </div>
            </div>
            <IotMockup />
          </Reveal>
        </div>
      </section>

      <section className="sc" id="pattern">
        <div className="wrap">
          <div className="split">
            <div>
              <Reveal as="span" className="label">The pattern</Reveal>
              <Reveal as="h2" delay="d1" className="h-section">
                Different industries. The same shape of problem.
              </Reveal>
            </div>
            <Reveal as="div" delay="d2" style={{ alignSelf: "end" }}>
              <p className="lede">
                Payments infrastructure and vending machines have nothing in
                common on the surface. Underneath, both were the same job:
                work that had outgrown the way it was being tracked.
              </p>
            </Reveal>
          </div>
          <div className="cols cols--4" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            {PATTERN.map((c, i) => (
              <Reveal as="div" delay={`d${i + 1}`} className="col" key={c.n}>
                <span className="n">{c.n}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sc sc--dark" id="cta">
        <div className="wrap">
          <div className="cta-banner">
            <div className="cta-main">
              <span className="label label--blue">Ready to begin</span>
              <h2 className="h-section" style={{ marginBottom: 12 }}>
                Ready to fix what's actually slowing you down?
              </h2>
              <p className="lede" style={{ marginBottom: 0 }}>
                A 30-minute direct conversation with an engineering partner,
                not a sales pitch. We'll tell you honestly what's possible.
              </p>
            </div>
            <div className="cta-actions">
              <Button asChild variant="accent">
                <Link to="/contact">Book a consult →</Link>
              </Button>
              <div className="cta-direct-contact">
                <a href="mailto:contact@sarathilabs.com">contact@sarathilabs.com</a>
                <span className="sep">·</span>
                <a href="tel:+919892656880">+91 98926 56880</a>
              </div>
              <div className="reassure" style={{ marginTop: 12 }}>
                <span className="dot" /> Direct partner access · Reply within 24h
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionRail sections={RAIL_SECTIONS} />
    </>
  );
}
