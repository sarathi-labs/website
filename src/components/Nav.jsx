import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
];

/**
 * Checks whether the page section directly behind the navigation header
 * is a darker shade.
 * If darker shade -> header should be LIGHT (`is-light`).
 * If lighter shade -> header should be DARK (`is-dark`).
 */
function isNavOverDark() {
  if (typeof window === "undefined" || !document.elementsFromPoint) return false;
  const x = Math.max(0, Math.floor(window.innerWidth / 2));
  const y = 38; // halfway through the 76px nav
  const elements = document.elementsFromPoint(x, y);
  const target = elements.find((el) => !el.closest(".nav"));
  if (!target) return false;

  if (target.closest(".sc--dark, .footer, footer, .pagehead, .hero, #s1")) {
    return true;
  }

  let curr = target;
  while (curr && curr !== document.body && curr !== document.documentElement) {
    const bg = window.getComputedStyle(curr).backgroundColor;
    if (bg && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)") {
      const rgb = bg.match(/\d+/g);
      if (rgb && rgb.length >= 3) {
        const brightness =
          (Number(rgb[0]) * 299 + Number(rgb[1]) * 587 + Number(rgb[2]) * 114) / 1000;
        return brightness < 130;
      }
    }
    curr = curr.parentElement;
  }
  return false;
}

export default function Nav() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Pages with darker initial hero: Home, About, Work, FAQ, Contact.
  // Pages with lighter initial section: Services.
  const isDefaultDarkAtTop = location.pathname !== "/services";
  const [isDarkUnderneath, setIsDarkUnderneath] = useState(isDefaultDarkAtTop);

  useEffect(() => {
    let ticking = false;
    const checkUnderneath = () => {
      if (window.scrollY < 30) {
        setIsDarkUnderneath(location.pathname !== "/services");
      } else {
        setIsDarkUnderneath(isNavOverDark());
      }
      ticking = false;
    };

    checkUnderneath();

    const onScrollOrResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(checkUnderneath);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [location.pathname]);

  // When current page/section is a darker shade -> header is light
  // When current page/section is a lighter shade -> header is dark
  const headerIsLight = isDarkUnderneath;

  return (
    <header
      className={cn(
        "nav fixed top-0 left-0 right-0 z-[200] border-b transition-[background,border-color,color] duration-[350ms] ease-[cubic-bezier(.16,1,.3,1)]",
        headerIsLight ? "is-light" : "is-dark",
        open && "is-open"
      )}
    >
      <div className="nav-in max-w-[1200px] mx-auto px-[clamp(24px,5vw,56px)] h-[76px] flex items-center justify-between gap-6">
        <Link
          className="nav-logo relative block h-[50px] w-16 flex-none no-underline"
          to="/"
          aria-label="Sarathi Labs - home"
          onClick={() => setOpen(false)}
        >
          <img
            className="lg-dark absolute left-0 top-1/2 -translate-y-1/2 h-[50px] w-auto transition-opacity duration-[350ms]"
            src="/assets/favicon.png"
            alt="Sarathi Labs"
          />
          <img
            className="lg-light absolute left-0 top-1/2 -translate-y-1/2 h-[50px] w-auto transition-opacity duration-[350ms]"
            src="/assets/favicon.png"
            alt=""
          />
        </Link>

        <nav className="nav-links flex items-center gap-[30px]">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  "relative pb-1 text-[13px] no-underline transition-[color,opacity] duration-300",
                  isActive && "is-active opacity-100"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta flex items-center gap-3">
          <Button asChild size="nav" variant="accent">
            <Link to="/contact">Book a consult</Link>
          </Button>
          <button
            className="nav-burger hidden bg-none border-0 p-2 cursor-pointer w-10 h-10"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="block w-5 h-px bg-current my-[5px] transition-transform duration-300" />
            <span className="block w-5 h-px bg-current my-[5px] transition-opacity duration-300" />
            <span className="block w-5 h-px bg-current my-[5px] transition-transform duration-300" />
          </button>
        </div>
      </div>
    </header>
  );
}
