import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Cross-page equivalent of anchor smooth-scroll in SPA:
 * Handles scrolling to hash targets after navigating across pages or within the same page,
 * retries if the destination element is still rendering, and resets scroll to the
 * top if no hash is present or if target is not found.
 */
export default function ScrollToHash() {
  const location = useLocation();
  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    const isNewPage = prevPathname.current !== location.pathname;
    prevPathname.current = location.pathname;

    if (location.hash) {
      const id = location.hash.replace(/^#/, "");
      // Service tabs should scroll the viewport to the Capabilities section header (Image 2)
      const serviceIds = ["process", "transformation", "automation", "engineering", "data", "strategy"];
      const targetId = serviceIds.includes(id) ? "capabilities" : id;

      let rafId;
      let attempts = 0;
      const maxAttempts = 20; // check for up to ~350ms for React/Radix to mount

      const tryScroll = () => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: isNewPage ? "auto" : "smooth", block: "start" });
          return;
        }
        attempts++;
        if (attempts < maxAttempts) {
          rafId = requestAnimationFrame(tryScroll);
        } else {
          // If hash element wasn't found after retries, don't leave user stranded at footer
          if (isNewPage) {
            window.scrollTo({ top: 0, behavior: "auto" });
          }
        }
      };

      rafId = requestAnimationFrame(tryScroll);
      return () => {
        if (rafId) cancelAnimationFrame(rafId);
      };
    }

    // No hash: always reset to top on page change
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash, location.key]);

  return null;
}
