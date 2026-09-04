import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Cross-page equivalent of the original in-page anchor smooth-scroll:
 * same-page "#s4"-style links just work via the browser + CSS
 * scroll-behavior:smooth. This handles the case react-router doesn't:
 * scrolling to a hash target after navigating to a *different* page
 * (e.g. footer link to /services#process), and resetting scroll to the
 * top on a plain page change.
 */
export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      // wait a tick so the destination page has actually rendered
      const raf = requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return () => cancelAnimationFrame(raf);
    }
    window.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);

  return null;
}
