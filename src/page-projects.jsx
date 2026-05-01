/* DisTechSol — Projects page */

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);

  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <main id="main">
      <section className="page-hero">
        <Container>
          <div className="page-hero-inner">
            <Breadcrumb items={[{ to: "/", label: "Home" }, { label: "Projects" }]} />
            <div className="eyebrow">Selected work</div>
            <h1>Real deployments, named clients.</h1>
            <p className="lede">A portfolio of biometric, surveillance and IT integration projects across government, energy, banking, and industrial sectors in Azerbaijan. Click any case for the deployment detail.</p>
          </div>
        </Container>
      </section>

      <Section>
        <Reveal>
          <div className="filter-bar" role="tablist" aria-label="Filter by industry">
            {PROJECT_FILTERS.map((f) => (
              <button key={f} className={`chip-filter ${filter === f ? "active" : ""}`} onClick={() => setFilter(f)} aria-pressed={filter === f}>{f}</button>
            ))}
          </div>
        </Reveal>
        <div className="projects-grid">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={i * 40}>
              <button className="project-card" onClick={() => setActive(p)}>
                <div className="project-card-head">
                  <span className="category">{p.category}</span>
                  <span className="device-count">{p.deviceCount}</span>
                </div>
                <h3>{p.client}</h3>
                <div className="system">{p.system}</div>
                <p>{p.desc}</p>
                <div className="project-card-foot">Tech: {p.tech}</div>
              </button>
            </Reveal>
          ))}
        </div>
        {list.length === 0 && (
          <div style={{ textAlign: "center", padding: 80, color: "var(--ink-soft)" }}>
            <p>No projects match this filter.</p>
          </div>
        )}
      </Section>

      {/* Modal */}
      <div className={`modal-backdrop ${active ? "open" : ""}`} onClick={() => setActive(null)} role="dialog" aria-modal="true">
        {active && (
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <div>
                <span className="chip brand" style={{ marginBottom: 12 }}>{active.category}</span>
                <h3 style={{ marginTop: 8, marginBottom: 4, fontSize: 24 }}>{active.client}</h3>
                <div style={{ color: "var(--ink-muted)", fontSize: 14 }}>{active.system} · {active.deviceCount}</div>
              </div>
              <button className="modal-close" onClick={() => setActive(null)} aria-label="Close">
                <Icon name="x" />
              </button>
            </div>
            <div className="modal-body">
              <p style={{ fontSize: 15, lineHeight: 1.7 }}>{active.desc}</p>
              <h5 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-soft)", marginTop: 24, marginBottom: 12 }}>Deployment details</h5>
              <ul className="modal-list">
                {active.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, paddingTop: 20, borderTop: "1px solid var(--border)", alignItems: "center" }}>
                <span style={{ fontSize: 13, fontWeight: 600 }}>Stack:</span>
                {active.tech.split(",").map((t, i) => <span key={i} className="chip brand">{t.trim()}</span>)}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
window.Projects = Projects;
