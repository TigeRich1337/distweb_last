/* DisTechSol — Solutions page (outcome-packaged solutions + industry tabs) */

const SOLUTION_ICONS_BG = {
  "Workplace": "linear-gradient(135deg, #6366f1, #4f46e5)",
  "Industrial": "linear-gradient(135deg, #f59e0b, #d97706)",
  "Banking": "linear-gradient(135deg, #0ea5e9, #0369a1)",
  "Workforce": "linear-gradient(135deg, #8b5cf6, #6d28d9)",
  "Connectivity": "linear-gradient(135deg, #14b8a6, #0f766e)",
  "Surveillance": "linear-gradient(135deg, #ef4444, #b91c1c)",
  "AI": "linear-gradient(135deg, #1748ff, #0d36cc)",
  "Automation": "linear-gradient(135deg, #ec4899, #be185d)",
  "Government": "linear-gradient(135deg, #475569, #1e293b)",
  "Infrastructure": "linear-gradient(135deg, #059669, #047857)",
  "Healthcare": "linear-gradient(135deg, #06b6d4, #0e7490)",
  "Retail": "linear-gradient(135deg, #f97316, #c2410c)"
};

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(INDUSTRIES[0].id);
  const [filter, setFilter] = useState("All");
  const [openSol, setOpenSol] = useState(null);

  // Sync to hash anchor for industry deep-links
  useEffect(() => {
    const h = window.location.hash;
    const m = h.match(/#\/solutions#(.+)$/);
    if (m && INDUSTRIES.find((i) => i.id === m[1])) setActiveTab(m[1]);
  }, []);

  // Lock scroll while modal open
  useEffect(() => {
    document.body.style.overflow = openSol ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openSol]);

  const ind = INDUSTRIES.find((i) => i.id === activeTab) || INDUSTRIES[0];
  const filtered = filter === "All" ? SOLUTIONS : SOLUTIONS.filter((s) => s.category === filter);

  return (
    <main id="main">
      <section className="page-hero">
        <Container>
          <div className="page-hero-inner">
            <Breadcrumb items={[{ to: "/", label: "Home" }, { label: "Solutions" }]} />
            <div className="eyebrow">Solutions</div>
            <h1>Outcomes, not hardware lists.</h1>
            <p className="lede">A solution is a bundle of products, integration work, and operations expertise — assembled around a real business outcome. Below are twelve solutions we ship today; each one is a starting point we tailor to your site.</p>
          </div>
        </Container>
      </section>

      <Section>
        <SectionHeader eyebrow="Solution catalog" title="Pick by outcome." lede="Filter by category, click any card for the full breakdown — what's included, what changes, and which products go in." />

        <div className="filter-bar">
          {SOLUTION_CATEGORIES.map((c) => (
            <button key={c} className={`chip-filter ${filter === c ? "active" : ""}`} onClick={() => setFilter(c)}>
              {c} {c !== "All" && <span style={{ opacity: 0.6, marginLeft: 4 }}>· {SOLUTIONS.filter((s) => s.category === c).length}</span>}
            </button>
          ))}
        </div>

        <div className="solutions-grid">
          {filtered.map((sol, i) => (
            <Reveal key={sol.id} delay={i * 40}>
              <button className="solution-card" onClick={() => setOpenSol(sol)}>
                <div className="sol-icon" style={{ background: SOLUTION_ICONS_BG[sol.category] || "linear-gradient(135deg, #1748ff, #0d36cc)" }}>
                  <Icon name={sol.icon} size={22} />
                </div>
                <div className="sol-cat">{sol.category}</div>
                <h3>{sol.title}</h3>
                <p className="sol-pitch">{sol.pitch}</p>
                <div className="sol-meta">
                  <span><Icon name="check" size={12} /> {sol.includes.length} components</span>
                  <span className="sol-card-link">Open <Icon name="arrow-right" size={12} /></span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0", color: "var(--ink-soft)" }}>
            No solutions in this category yet. <Link to="/contact" style={{ color: "var(--brand)", fontWeight: 600 }}>Talk to us</Link> about a custom build.
          </div>
        )}
      </Section>

      {/* Industry tabs */}
      <Section surface>
        <SectionHeader eyebrow="By industry" title="Tailored to your vertical." lede="Each industry brings its own constraints. Pick yours to see the typical challenges, our recommended solution stack, and the technologies we deploy." />
        <Reveal>
          <div className="tabs">
            <div className="tab-list" role="tablist">
              {INDUSTRIES.map((i) => (
                <button key={i.id} role="tab" aria-selected={activeTab === i.id}
                        className={`tab-btn ${activeTab === i.id ? "active" : ""}`}
                        onClick={() => setActiveTab(i.id)}>{i.title}</button>
              ))}
            </div>
            <div className="tab-panel" id={ind.id}>
              <div className="tab-panel-head">
                <h3>{ind.title}</h3>
                <p style={{ margin: 0 }}>{ind.tagline}</p>
              </div>
              <div className="tab-panel-grid">
                <div className="tab-panel-block">
                  <h5>Key challenges</h5>
                  <ul>{ind.challenges.map((c, i) => <li key={i}>{c}</li>)}</ul>
                </div>
                <div className="tab-panel-block solutions">
                  <h5>Our solutions</h5>
                  <ul>{ind.solutions.map((s, i) => <li key={i}>{s}</li>)}</ul>
                </div>
              </div>
              <div className="tab-panel-tech">
                <span className="label">Key technologies:</span>
                {ind.tech.map((t, i) => <span key={i} className="chip brand">{t}</span>)}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section tight>
        <Reveal>
          <div className="cta-banner">
            <div>
              <h2>Don't see your exact use case?</h2>
              <p>Most of our work is custom. Tell us the problem you're trying to solve and we'll come back with an architecture, a budget, and a timeline.</p>
            </div>
            <div className="cta-banner-actions">
              <Button to="/contact" variant="primary" size="lg">Talk to an engineer</Button>
              <Button to="/products" variant="secondary" size="lg" onDark>Browse products</Button>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Solution detail modal */}
      <div className={`modal-backdrop ${openSol ? "open" : ""}`} onClick={() => setOpenSol(null)} aria-hidden={!openSol}>
        {openSol && (
          <div className="modal modal-wide" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={openSol.title}>
            <div className="modal-head">
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div className="sol-icon" style={{ background: SOLUTION_ICONS_BG[openSol.category] || "linear-gradient(135deg, #1748ff, #0d36cc)", width: 48, height: 48, borderRadius: 12 }}>
                  <Icon name={openSol.icon} size={24} />
                </div>
                <div>
                  <div className="sol-cat">{openSol.category}</div>
                  <h3 style={{ marginTop: 4 }}>{openSol.title}</h3>
                  <p style={{ marginTop: 6, fontSize: 14, color: "var(--ink-muted)" }}>{openSol.pitch}</p>
                </div>
              </div>
              <button className="modal-close" onClick={() => setOpenSol(null)} aria-label="Close"><Icon name="x" /></button>
            </div>
            <div className="modal-body">
              <p style={{ marginBottom: 24, color: "var(--ink-muted)" }}>{openSol.overview}</p>

              <h5 style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink-soft)", marginBottom: 14 }}>What's included</h5>
              <ul className="modal-list">
                {openSol.includes.map((it, i) => <li key={i}>{it}</li>)}
              </ul>

              <h5 style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink-soft)", marginBottom: 14, marginTop: 8 }}>Outcomes</h5>
              <div className="outcomes-grid" style={{ marginBottom: 28 }}>
                {openSol.outcomes.map((o, i) => (
                  <div key={i} className="outcome-tile">
                    <h5 style={{ textTransform: "none", letterSpacing: "-0.01em" }}>{o.t}</h5>
                    <p>{o.d}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, padding: "20px 0", borderTop: "1px solid var(--border)", alignItems: "center" }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-soft)", marginRight: 4 }}>Built on:</span>
                {openSol.pillars.map((p) => {
                  const s = SERVICES.find((x) => x.id === p);
                  return s ? <Link key={p} to={`/service/${s.id}`} className="cross-sell-pill" onClick={() => setOpenSol(null)}>{s.title}</Link> : null;
                })}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, paddingBottom: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-soft)", marginRight: 4 }}>Best for:</span>
                {openSol.industries.map((ind, i) => <span key={i} className="chip brand">{ind}</span>)}
              </div>

              <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                <Button to="/contact" variant="primary" onClick={() => setOpenSol(null)}>Discuss this solution</Button>
                <Button to="/projects" variant="secondary" onClick={() => setOpenSol(null)}>See similar deployments</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
window.Solutions = Solutions;
