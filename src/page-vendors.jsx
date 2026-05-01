/* DisTechSol — Vendors page */

const VendorCard = ({ v }) => (
  <Reveal>
    <div className="vendor-card">
      <div className="vendor-card-head">
        <VendorLogo vendor={v} />
        <div style={{ flex: 1 }}>
          <h3>{v.name}</h3>
          <div className="vendor-tagline">{v.tagline}</div>
        </div>
        <span className="vendor-status">{v.status}</span>
      </div>
      <p style={{ fontSize: 14, lineHeight: 1.6, margin: "0 0 16px 0" }}>{v.desc}</p>
      {v.highlights && (
        <ul className="vendor-highlights">
          {v.highlights.map((h, i) => (
            <li key={i}><span style={{ color: "var(--brand)", marginRight: 8 }}><Icon name="check" size={13} /></span>{h}</li>
          ))}
        </ul>
      )}
      <div className="vendor-products">
        {v.products.map((p, j) => <span key={j} className="chip">{p}</span>)}
      </div>
      <a href={v.url} target="_blank" rel="noopener noreferrer" className="vendor-link">
        Official website <Icon name="external-link" size={14} />
      </a>
    </div>
  </Reveal>
);

const Vendors = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <main id="main">
      <section className="page-hero">
        <Container>
          <div className="page-hero-inner">
            <Breadcrumb items={[{ to: "/", label: "Home" }, { label: "Vendors" }]} />
            <div className="eyebrow">Technology partners</div>
            <h1>Authorized distribution. Certified integration.</h1>
            <p className="lede">Direct vendor relationships with every brand we deploy — factory pricing, escalation paths, locally stocked spares, and certified technical support. No grey market, no parallel imports.</p>

            {/* Category quick-nav */}
            <div className="filter-bar" style={{ marginTop: 32 }}>
              {VENDORS.map((cat) => (
                <a key={cat.id} href={`#${cat.id}`} className="chip-filter">
                  {cat.title}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Section>
        {VENDORS.map((cat) => (
          <div key={cat.id} className="vendor-cat" id={cat.id}>
            <Reveal>
              <div className="vendor-cat-head">
                <h2>{cat.title}</h2>
                <p>{cat.description}</p>
              </div>
            </Reveal>
            <div className="vendors-grid">
              {cat.vendors.map((v) => (
                <VendorCard key={v.name} v={v} />
              ))}
            </div>
          </div>
        ))}
      </Section>

      <Section surface>
        <SectionHeader eyebrow="Why buy through DisTechSol" title="We're more than a reseller." />
        <div className="why-grid">
          {[
            { n: "01", t: "Factory-direct pricing", d: "Authorized distributor status means you get regional factory pricing, not grey-market markups." },
            { n: "02", t: "Certified technical support", d: "Our engineers are certified on every product line we sell. Escalations go to the vendor's tech team through us." },
            { n: "03", t: "Spares in-country", d: "Critical spares stocked locally in Baku. No six-week lead times on a broken reader." },
            { n: "04", t: "Integration tested", d: "Every product combination we sell has been integration-tested in our own lab before it goes to site." }
          ].map((w, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="why-tile">
                <div className="num">{w.n}</div>
                <h4>{w.t}</h4>
                <p>{w.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tight>
        <Reveal>
          <div className="cta-banner">
            <div>
              <h2>Need a quote on vendor hardware?</h2>
              <p>We'll spec, source and deploy the right combination — and stay on for support under a defined SLA.</p>
            </div>
            <div className="cta-banner-actions">
              <Button to="/contact" variant="primary" size="lg">Request a quote</Button>
              <Button to="/products" variant="secondary" size="lg" onDark>Browse products</Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </main>
  );
};
window.Vendors = Vendors;
