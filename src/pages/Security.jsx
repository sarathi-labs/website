import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";

export default function Security() {
  return (
    <div className="legal-page">
      <div className="wrap">
        <Reveal as="div" className="legal-doc">
          <div className="legal-header">
            <span className="label">Security</span>
            <h1>Data Handling &amp; Security Statement</h1>
            <p className="legal-meta">Last Updated: September 19, 2026</p>
          </div>

            <p>
              When organizations partner with Sarathi Labs to redesign workflows, modernize stacks, or build
              custom software, they entrust us with their operational processes and business data. We treat
              that trust as a core engineering discipline, not an afterthought.
            </p>
            <p>
              This statement outlines the technical and operational practices we adhere to across every client
              engagement.
            </p>

            <h2>1. Security Principles</h2>
            <p>Our engineering and consulting philosophy is anchored on three simple principles:</p>
            <ul>
              <li>
                <strong>Least Privilege:</strong> Access to systems, code repositories, and data is strictly
                scoped to the team members actively working on the engagement and revoked immediately upon
                completion.
              </li>
              <li>
                <strong>Client Ownership:</strong> We build systems to be owned and operated by you. Code,
                infrastructure configurations, access credentials, and documentation are handed over cleanly.
              </li>
              <li>
                <strong>Transparent Boundaries:</strong> We only integrate tools and processes that serve a
                genuine operational purpose, without installing undisclosed telemetry or untrusted third-party
                dependencies.
              </li>
            </ul>

            <h2>2. Development & Operational Practices</h2>
            <p>Our development practices consider security at every layer of the architecture:</p>
            <ul>
              <li>
                <strong>Secure Authentication:</strong> Role-based access controls, multi-factor
                authentication, and standardized identity providers (OAuth2, OIDC, SAML) rather than homegrown
                auth schemes.
              </li>
              <li>
                <strong>Access Controls:</strong> Fine-grained permissions, audit logging for privileged
                actions, and separation of administrative capabilities.
              </li>
              <li>
                <strong>Data Protection:</strong> Data encryption in transit using modern TLS configurations
                and encryption at rest for sensitive business storage.
              </li>
              <li>
                <strong>Secure API Communication:</strong> Scoped API tokens, rate limiting, request validation,
                and mutual TLS where required.
              </li>
              <li>
                <strong>Environment Separation:</strong> Strict isolation between development, staging, and
                production environments to ensure production data is never exposed in testing environments.
              </li>
              <li>
                <strong>Dependency Management:</strong> Automated vulnerability scanning, pinned package
                versions, and continuous patching of upstream software dependencies.
              </li>
              <li>
                <strong>Controlled Access to Client Systems:</strong> Work performed on client infrastructure is
                conducted through client-managed accounts, VPNs, or jump hosts with session auditing.
              </li>
            </ul>

            <h2>3. Client Confidentiality</h2>
            <p>
              We treat all client architecture, workflows, commercial numbers, and proprietary logic as
              strictly confidential.
            </p>
            <p>
              Every engagement is covered by a bilateral Non-Disclosure Agreement (NDA) before diagnostic or
              code-level work begins. We do not use client data to train public AI models or share insights
              across engagements without express written authorization.
            </p>

            <h2>4. Incident Response & Reporting</h2>
            <p>
              We maintain an active security contact channel. If you identify a potential security vulnerability
              or issue related to any of our websites, public endpoints, or systems, please notify our team
              immediately.
            </p>
            <p>
              We commit to acknowledging reports promptly and working transparently to investigate and resolve
              any validated issues.
            </p>

            <h2>5. Discuss Security Requirements</h2>
            <p>
              Every organization has unique compliance and security considerations (SOC 2, ISO 27001, GDPR,
              HIPAA, or internal IT mandates). We are glad to review your specific security questionnaire or
              work within your prescribed IT framework.
            </p>

            <div style={{ marginTop: 28, marginBottom: 40 }}>
              <Button asChild variant="accent">
                <Link to="/contact">Discuss security requirements with us &rarr;</Link>
              </Button>
            </div>

            <h2>6. Contact</h2>
            <p>For security inquiries or responsible disclosure reports, please contact:</p>
            <p>
              <strong>Sarathi Labs Security</strong>
              <br />
              Email:{" "}
              <a href="mailto:security@sarathilabs.com">security@sarathilabs.com</a>
              <br />
              Website:{" "}
              <a href="https://sarathilabs.com" target="_blank" rel="noopener noreferrer">
                https://sarathilabs.com
              </a>
              <br />
              Location: Mumbai, India
            </p>
          </Reveal>
      </div>
    </div>
  );
}

