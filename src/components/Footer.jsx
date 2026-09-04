import { Link } from "react-router-dom";
import {
  Linkedin,
  // Instagram,
  // Facebook,
  // Twitter,
  // Github,
  // Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer bg-[var(--ink-2)] text-[var(--text-inv)] py-[var(--s3)] pb-[var(--s1)] flex items-center">
      <div className="wrap">
        <div className="footer-grid grid grid-cols-[2fr_1fr_1fr_1fr] gap-x-6 gap-y-12">
          <div className="footer-brand">
            <img
              src="/assets/logo-lockup-cream.png"
              alt="Sarathi Labs"
              className="h-[62px] w-auto mb-5"
            />
            <p className="text-sm text-[var(--muted-inv)] leading-[1.6] max-w-[34ch]">
              A consultancy for businesses that have outgrown the systems
              they built to get here.
            </p>
            <div className="fc mt-6 font-mono text-[13px] leading-[2] text-[var(--muted-inv)]">
              <a
                className="block no-underline hover:text-white"
                href="mailto:contact@sarathilabs.com"
              >
                contact@sarathilabs.com
              </a>
              <a
                className="block no-underline hover:text-white"
                href="tel:+919892656880"
              >
                +91 98926 56880
              </a>
            </div>
            <div className="flex items-center gap-4 mt-5 text-[var(--muted-inv)]">
              <a
                className="inline-flex items-center justify-center text-[var(--muted-inv)] hover:text-white transition-colors duration-200"
                href="https://www.linkedin.com/company/sarathi-labs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              {/*
              <a
                className="inline-flex items-center justify-center text-[var(--muted-inv)] hover:text-white transition-colors duration-200"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                className="inline-flex items-center justify-center text-[var(--muted-inv)] hover:text-white transition-colors duration-200"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                className="inline-flex items-center justify-center text-[var(--muted-inv)] hover:text-white transition-colors duration-200"
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                title="Twitter / X"
              >
                <Twitter size={18} />
              </a>
              <a
                className="inline-flex items-center justify-center text-[var(--muted-inv)] hover:text-white transition-colors duration-200"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                className="inline-flex items-center justify-center text-[var(--muted-inv)] hover:text-white transition-colors duration-200"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="YouTube"
              >
                <Youtube size={18} />
              </a>
              */}
            </div>
          </div>

          <div className="footer-col">
            <h4 className="font-mono text-[10px] uppercase tracking-[.14em] text-[var(--muted-inv)] mb-5 font-normal">
              Services
            </h4>
            <Link
              className="block text-sm text-[var(--muted-inv)] no-underline mb-[13px] transition-colors duration-300 hover:text-white"
              to="/services#process"
            >
              Process Consulting
            </Link>
            <Link
              className="block text-sm text-[var(--muted-inv)] no-underline mb-[13px] transition-colors duration-300 hover:text-white"
              to="/services#transformation"
            >
              Digital Transformation
            </Link>
            <Link
              className="block text-sm text-[var(--muted-inv)] no-underline mb-[13px] transition-colors duration-300 hover:text-white"
              to="/services#automation"
            >
              AI &amp; Automation
            </Link>
            <Link
              className="block text-sm text-[var(--muted-inv)] no-underline mb-[13px] transition-colors duration-300 hover:text-white"
              to="/services#engineering"
            >
              Software Engineering
            </Link>
          </div>

          <div className="footer-col">
            <h4 className="font-mono text-[10px] uppercase tracking-[.14em] text-[var(--muted-inv)] mb-5 font-normal">
              Company
            </h4>
            <Link
              className="block text-sm text-[var(--muted-inv)] no-underline mb-[13px] transition-colors duration-300 hover:text-white"
              to="/about"
            >
              About
            </Link>
            <Link
              className="block text-sm text-[var(--muted-inv)] no-underline mb-[13px] transition-colors duration-300 hover:text-white"
              to="/work"
            >
              Work
            </Link>
            <Link
              className="block text-sm text-[var(--muted-inv)] no-underline mb-[13px] transition-colors duration-300 hover:text-white"
              to="/about#careers"
            >
              Careers
            </Link>
            <Link
              className="block text-sm text-[var(--muted-inv)] no-underline mb-[13px] transition-colors duration-300 hover:text-white"
              to="/contact"
            >
              Contact
            </Link>
          </div>

          <div className="footer-col">
            <h4 className="font-mono text-[10px] uppercase tracking-[.14em] text-[var(--muted-inv)] mb-5 font-normal">
              Resources
            </h4>
            <Link
              className="block text-sm text-[var(--muted-inv)] no-underline mb-[13px] transition-colors duration-300 hover:text-white"
              to="/faq"
            >
              FAQ
            </Link>
            <Link
              className="block text-sm text-[var(--muted-inv)] no-underline mb-[13px] transition-colors duration-300 hover:text-white"
              to="/work"
            >
              Case studies
            </Link>
            <Link
              className="block text-sm text-[var(--muted-inv)] no-underline mb-[13px] transition-colors duration-300 hover:text-white"
              to="/about#approach"
            >
              Approach
            </Link>
          </div>
        </div>

        <div className="footer-base border-t border-[var(--rule-inv)] mt-[var(--s3)] pt-[22px] flex justify-between gap-4 flex-wrap font-mono text-[11px] tracking-[.06em] text-[var(--muted-inv)]">
          <span>© {new Date().getFullYear()} Sarathi Labs</span>
          <span>Mumbai, India</span>
          <span>
            <a className="no-underline inline-block py-[13px] -my-[13px] hover:text-white" href="#">
              Privacy
            </a>{" "}
            · <a className="no-underline inline-block py-[13px] -my-[13px] hover:text-white" href="#">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
