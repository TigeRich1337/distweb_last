/* DisTechSol — Header & Footer */
const { useState, useEffect, useContext } = React;

const NAV_KEYS = [
  { to: "/", key: "nav_home" },
  { to: "/about", key: "nav_about" },
  { to: "/products", key: "nav_products" },
  { to: "/solutions", key: "nav_solutions" },
  { to: "/vendors", key: "nav_vendors" },
  { to: "/contact", key: "nav_contact" }
];

const Header = ({ route }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => { setOpen(false); }, [route]);

  const isActive = (to) => {
    if (to === "/") return route === "/";
    return route === to || route.startsWith(to + "/");
  };

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <Container>
          <div className="header-inner">
            <Link to="/" className="brand-link" aria-label="DisTechSol — home">
              <img src="assets/brand/distechsol-logo.png" alt="DisTechSol" className="brand-logo" />
            </Link>
            <nav className="nav" aria-label="Primary">
              {NAV_KEYS.map((n) => (
                <Link key={n.to} to={n.to} className={`nav-link ${isActive(n.to) ? "active" : ""}`}>{t(n.key)}</Link>
              ))}
            </nav>
            <div className="header-actions">
              <div className="lang-switch" role="group" aria-label="Language">
                {["EN", "RU", "AZ"].map((l) => (
                  <button key={l} className={`lang-btn ${lang === l ? "active" : ""}`}
                    onClick={() => setLang(l)} aria-pressed={lang === l}>{l}</button>
                ))}
              </div>
              <button className="menu-toggle" aria-label="Open menu" onClick={() => setOpen(true)}>
                <Icon name="menu" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <div className={`drawer-backdrop ${open ? "open" : ""}`} onClick={() => setOpen(false)} aria-hidden="true"></div>
      <aside className={`drawer ${open ? "open" : ""}`} aria-label="Mobile menu">
        <div className="drawer-header">
          <Link to="/" className="brand-link" aria-label="DisTechSol — home">
            <img src="assets/brand/distechsol-logo.png" alt="DisTechSol" className="brand-logo" />
          </Link>
          <button className="menu-toggle" style={{ display: "inline-flex" }} onClick={() => setOpen(false)} aria-label="Close menu">
            <Icon name="x" />
          </button>
        </div>
        <nav className="drawer-nav" aria-label="Mobile primary">
          {NAV_KEYS.map((n) => (
            <Link key={n.to} to={n.to} className={isActive(n.to) ? "active" : ""}>{t(n.key)}</Link>
          ))}
        </nav>
        <div style={{ marginTop: "auto", paddingTop: 32 }}>
          <Button to="/contact" variant="primary">Talk to an engineer</Button>
        </div>
      </aside>
    </>
  );
};

const Footer = () => (
  <footer className="footer">
    <Container>
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <img src="assets/brand/distechsol-logo.png" alt="DisTechSol" className="brand-logo brand-logo-footer" />
          </div>
          <p className="footer-tagline">Secure. Automate. Innovate. Your enterprise partner for physical security, surveillance, networking, and AI automation across Azerbaijan and the UAE.</p>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="https://www.linkedin.com/company/distechsol" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(255,255,255,0.06)", display: "grid", placeItems: "center", color: "#b6c2d1" }}>
              <Icon name="linkedin" size={18} />
            </a>
            <a href="https://distechsol.com" target="_blank" rel="noopener noreferrer" aria-label="Website" style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(255,255,255,0.06)", display: "grid", placeItems: "center", color: "#b6c2d1" }}>
              <Icon name="globe" size={18} />
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/vendors">Partners</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Catalog</h5>
          <ul>
            <li><Link to="/products">All products</Link></li>
            <li><Link to="/solutions">All solutions</Link></li>
            <li><Link to="/service/physical-security">Physical Security</Link></li>
            <li><Link to="/service/video-analytics">Video & AI Analytics</Link></li>
            <li><Link to="/service/software-development">Custom Software</Link></li>
            <li><Link to="/service/it-infrastructure">IT Infrastructure</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Connect</h5>
          <ul>
            <li><a href="tel:+994512339370">+994 51 233 93 70</a></li>
            <li><a href="mailto:office@distechsol.com">office@distechsol.com</a></li>
            <li>Heydar Aliyev 183C<br/>Baku, AZ 1029, Azerbaijan</li>
            <li style={{ color: "#8b9aae" }}>Mo–Fr · 09:00–18:00 AZT</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2020–2026 DisTechSol LLC. All rights reserved.</div>
        <div style={{ display: "flex", gap: 24 }}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#b6c2d1" }}>
            <Icon name="arrow-up" size={14} /> Back to top
          </button>
        </div>
      </div>
    </Container>
  </footer>
);

window.Header = Header; window.Footer = Footer;
