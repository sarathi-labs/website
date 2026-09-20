import Reveal from "@/components/Reveal";

export default function Terms() {
  return (
    <div className="legal-page">
      <div className="wrap">
        <Reveal as="div" className="legal-doc">
          <div className="legal-header">
            <span className="label">Legal</span>
            <h1>Terms of Service</h1>
            <p className="legal-meta">Last Updated: September 19, 2026</p>
          </div>

            <p>
              Welcome to Sarathi Labs. These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
              use of the Sarathi Labs website and any services, information, or resources made available through it.
            </p>
            <p>
              By accessing or using our website, you agree to these Terms. If you do not agree with these
              Terms, please do not use the website.
            </p>

            <h2>1. About Sarathi Labs</h2>
            <p>
              Sarathi Labs provides technology, software development, product, engineering, and related
              professional services to businesses and organizations.
            </p>
            <p>
              Specific services, deliverables, timelines, fees, responsibilities, and other commercial terms
              may be defined separately in proposals, statements of work, contracts, or other written
              agreements between Sarathi Labs and its clients.
            </p>
            <p>
              Where a separate written agreement exists, that agreement will govern the relevant client
              engagement.
            </p>

            <h2>2. Use of Our Website</h2>
            <p>You agree to use our website only for lawful purposes. You must not:</p>
            <ul>
              <li>Use the website for fraudulent, unlawful, or malicious purposes</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the operation or security of the website</li>
              <li>Introduce malicious code, malware, or other harmful material</li>
              <li>Scrape, copy, reproduce, or systematically extract website content without permission</li>
              <li>Misrepresent your identity or affiliation</li>
              <li>Use the website in a manner that could damage Sarathi Labs or its users</li>
            </ul>
            <p>
              We reserve the right to restrict or terminate access where we reasonably believe the website is
              being misused.
            </p>

            <h2>3. Website Content</h2>
            <p>Information presented on this website is provided for general informational purposes.</p>
            <p>
              We make reasonable efforts to keep website content accurate and useful, but we do not guarantee
              that all information will always be complete, current, or error-free.
            </p>
            <p>
              Descriptions of services, capabilities, technologies, case studies, or examples should not be
              interpreted as a guarantee of a particular result unless expressly agreed in writing.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              Unless otherwise stated, the content and materials available on this website, including text,
              graphics, logos, designs, branding, images, and other original materials, are owned by or
              licensed to Sarathi Labs.
            </p>
            <p>
              You may view the website for personal or legitimate business purposes, but you may not
              reproduce, modify, distribute, publish, sell, or commercially exploit our materials without
              prior written permission.
            </p>
            <p>
              Client-specific intellectual property rights are governed by the applicable client agreement or
              statement of work.
            </p>

            <h2>5. Third-Party Links and Services</h2>
            <p>
              Our website may reference or link to third-party websites, tools, platforms, or services.
            </p>
            <p>
              These third-party services are not controlled by Sarathi Labs. We are not responsible for their
              availability, content, security, policies, or practices. Your use of third-party services is
              subject to the terms and policies of those providers.
            </p>

            <h2>6. Service Engagements</h2>
            <p>
              Information submitted through our website, including an inquiry or project request, does not by
              itself create a client relationship or contractual obligation.
            </p>
            <p>
              A formal engagement begins only when the applicable commercial terms and agreements have been
              accepted by both parties.
            </p>

            <h2>7. Confidential Information</h2>
            <p>
              Please do not submit confidential, proprietary, or sensitive information through publicly
              accessible website forms unless specifically requested and appropriate safeguards have been
              established.
            </p>
            <p>
              Confidentiality obligations relating to a client engagement will be governed by the applicable
              agreement, including any confidentiality or non-disclosure agreement.
            </p>

            <h2>8. Disclaimers</h2>
            <p>
              To the extent permitted by applicable law, the website and its content are provided on an
              &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
            </p>
            <p>We do not guarantee that:</p>
            <ul>
              <li>The website will always be available or uninterrupted</li>
              <li>The website will be completely free from errors</li>
              <li>All website content will always be current</li>
              <li>The website will be free from every possible security vulnerability</li>
            </ul>
            <p>
              Nothing in these Terms excludes or limits rights or protections that cannot lawfully be excluded
              or limited.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Sarathi Labs will not be responsible for
              indirect, incidental, consequential, special, or punitive damages arising from your use of the
              website.
            </p>
            <p>
              Any limitations relating to services provided to a client will be governed by the applicable
              written agreement.
            </p>

            <h2>10. Indemnification</h2>
            <p>
              To the extent permitted by applicable law, you agree to be responsible for losses or claims
              arising from your unlawful use of the website, violation of these Terms, or infringement of the
              rights of another party.
            </p>

            <h2>11. Changes to These Terms</h2>
            <p>We may update these Terms from time to time.</p>
            <p>
              When we make changes, the updated Terms will be posted on this page with a revised &ldquo;Last
              Updated&rdquo; date. Your continued use of the website after an update constitutes acceptance of
              the revised Terms to the extent permitted by law.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms shall be governed by the applicable laws of India, unless otherwise specified in a
              separate written agreement between Sarathi Labs and a client.
            </p>
            <p>
              Any disputes will be subject to the jurisdiction specified in the applicable agreement or, where
              no separate agreement applies, the courts having appropriate jurisdiction in Mumbai, India.
            </p>

            <h2>13. Contact</h2>
            <p>For questions regarding these Terms, contact:</p>
            <p>
              <strong>Sarathi Labs</strong>
              <br />
              Email:{" "}
              <a href="mailto:legal@sarathilabs.com">legal@sarathilabs.com</a>
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

