/* DisTechSol — Reusable UI primitives */
const { useEffect, useRef, useState, useMemo } = React;

// Hash router helpers
const useRoute = () => {
  const [route, setRoute] = useState(window.location.hash.slice(1) || "/");
  useEffect(() => {
    const fn = () => {
      const h = window.location.hash.slice(1) || "/";
      // Redirect /contacts -> /contact
      if (h === "/contacts") {
        window.location.hash = "/contact";
        return;
      }
      setRoute(h);
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", fn);
    return () => window.removeEventListener("hashchange", fn);
  }, []);
  return route;
};

const navigate = (path) => { window.location.hash = path; };

const Link = ({ to, children, className, onClick, ...rest }) => {
  const handle = (e) => {
    if (to && to.startsWith("http")) return; // external
    e.preventDefault();
    if (onClick) onClick(e);
    if (to) window.location.hash = to;
  };
  if (to && to.startsWith("http")) {
    return <a href={to} className={className} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>;
  }
  return <a href={"#" + (to || "")} className={className} onClick={handle} {...rest}>{children}</a>;
};

// Reveal-on-scroll
const Reveal = ({ children, delay = 0, className = "", as: Tag = "div" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setVisible(true); return; }
    const el = ref.current;
    if (!el) return;
    // If element is already in (or above) the viewport on mount, reveal immediately.
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      setTimeout(() => setVisible(true), delay);
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          obs.disconnect();
        }
      });
    }, { rootMargin: "0px", threshold: 0.01 });
    obs.observe(el);
    // Fallback: ensure content paints even if the observer never fires.
    const t = setTimeout(() => setVisible(true), 1200 + delay);
    return () => { obs.disconnect(); clearTimeout(t); };
  }, [delay]);
  return <Tag ref={ref} className={`reveal ${visible ? "in" : ""} ${className}`}>{children}</Tag>;
};

// Counter (animated number)
const Counter = ({ to, suffix = "", duration = 1400 }) => {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setN(to); return; }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        let start = null;
        const step = (ts) => {
          if (!start) start = ts;
          const p = Math.min(1, (ts - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(eased * to));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        obs.disconnect();
      });
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{n}<span className="unit">{suffix}</span></span>;
};

// Section header
const SectionHeader = ({ eyebrow, title, lede, center, className = "" }) => (
  <Reveal className={`section-header ${center ? "center" : ""} ${className}`}>
    {eyebrow && <div className="eyebrow">{eyebrow}</div>}
    <h2>{title}</h2>
    {lede && <p className="lede">{lede}</p>}
  </Reveal>
);

const Container = ({ children, className = "" }) => <div className={`container ${className}`}>{children}</div>;

const Section = ({ children, className = "", id, surface, dark, tight }) => (
  <section id={id} className={`section ${surface ? "surface" : ""} ${dark ? "dark" : ""} ${tight ? "tight" : ""} ${className}`}>
    <Container>{children}</Container>
  </section>
);

const Button = ({ to, href, variant = "primary", size, onDark, children, onClick, type, className = "" }) => {
  const cls = `btn btn-${variant} ${size === "lg" ? "btn-lg" : ""} ${onDark ? "on-dark" : ""} ${className}`;
  const content = <>{children}{variant === "primary" && <span className="btn-arrow">→</span>}</>;
  if (to) return <Link to={to} className={cls}>{content}</Link>;
  if (href) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{content}</a>;
  return <button type={type || "button"} className={cls} onClick={onClick}>{content}</button>;
};

const Breadcrumb = ({ items }) => (
  <nav className="breadcrumb" aria-label="Breadcrumb">
    {items.map((it, i) => (
      <React.Fragment key={i}>
        {i > 0 && <Icon name="chevron-right" />}
        {it.to ? <Link to={it.to}>{it.label}</Link> : <span>{it.label}</span>}
      </React.Fragment>
    ))}
  </nav>
);

// Logo with fallback initial
const VendorLogo = ({ vendor }) => {
  return <div className="vendor-logo">{vendor.short || vendor.name.charAt(0)}</div>;
};

Object.assign(window, { useRoute, navigate, Link, Reveal, Counter, SectionHeader, Container, Section, Button, Breadcrumb, VendorLogo });
