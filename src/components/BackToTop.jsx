import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useBackToTopVisible } from "@/hooks/useScrollEffects";
import { cn } from "@/lib/utils";

function isPointDark() {
  if (typeof window === "undefined" || !document.elementsFromPoint) return false;
  const x = Math.max(0, window.innerWidth - 45);
  const y = Math.max(0, window.innerHeight - 35);
  const elements = document.elementsFromPoint(x, y);
  const target = elements.find((el) => !el.closest(".wheel-top"));
  if (!target) return false;

  if (target.closest(".sc--dark, .footer, footer, .pagehead, .hero")) {
    return true;
  }

  let curr = target;
  while (curr && curr !== document.body && curr !== document.documentElement) {
    const bg = window.getComputedStyle(curr).backgroundColor;
    if (bg && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)") {
      const rgb = bg.match(/\d+/g);
      if (rgb && rgb.length >= 3) {
        const brightness =
          (Number(rgb[0]) * 299 + Number(rgb[1]) * 587 + Number(rgb[2]) * 114) /
          1000;
        return brightness < 130;
      }
    }
    curr = curr.parentElement;
  }

  return false;
}

export default function BackToTop() {
  const visible = useBackToTopVisible();
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const checkDark = () => {
      setIsDark(isPointDark());
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(checkDark);
        ticking = true;
      }
    };
    checkDark();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [location.pathname]);

  return (
    <button
      className={cn("wheel-top", visible && "is-on", isDark && "is-dark")}
      type="button"
      id="totop"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <img src="/assets/wheel-logoblue.png" alt="" />
      <span className="wheel-label">Scroll to Top</span>
    </button>
  );
}
