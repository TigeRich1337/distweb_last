/* DisTechSol — Products page (catalog of service pillars + product hardware) */

const PRODUCT_CATEGORY_IMAGES = {
  "physical-security": null, // uses composed card
  "video-analytics": "assets/products/vms1.jpg",
  "software-development": "assets/products/custom-software.jpg",
  "it-infrastructure": "assets/products/it-infrastructure.jpg"
};

const TURNSTILE_MODELS = [
  {
    brand: "Tiso",
    icon: "arrow-right",
    model: "Tripod Turnstile",
    desc: "Compact, cost-effective three-arm turnstile for medium-traffic access points. Stainless steel body, Wiegand/OSDP interface, manual or automatic reset.",
    specs: ["Stainless steel 304 housing", "Passage width: 500–550 mm", "Passage speed: up to 30 p/min", "IP54 rated", "Fail-safe: open or closed mode"],
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80"
  },
  {
    brand: "Tiso",
    icon: "arrow-right",
    model: "Swing Gate",
    desc: "Wide-lane swing barrier for ADA-compliant access and VIP entrances. Tempered glass or stainless steel arms, configurable for bi-directional flow.",
    specs: ["Passage width: up to 1200 mm", "ADA / wheelchair compliant", "Tempered glass or steel arm options", "Electric lock + motor drive", "Custom RAL colour finish"],
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&auto=format&fit=crop&q=80"
  },
  {
    brand: "Turboo",
    icon: "arrow-right",
    model: "Speed Gate SG Series",
    desc: "Premium bi-directional speed gate for corporate lobbies, airports and luxury facilities. Ultra-quiet brushless motor, multi-beam anti-tailgating IR grid, tempered glass wing panels.",
    specs: ["Ultra-quiet brushless motor", "Anti-tailgating 5-beam IR grid", "Tempered glass 8 mm wings", "TCP/IP + Wiegand interface", "Passage speed: up to 40 p/min"],
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80"
  },
  {
    brand: "Turboo",
    icon: "arrow-right",
    model: "Full-Height Turnstile",
    desc: "Maximum-security full-height rotor turnstile for perimeter control and unmanned entry points. Tamper-resistant, all-weather, RFID/biometric reader mountable.",
    specs: ["Full-height 2100 mm rotor", "IP65 rated for outdoor use", "Anti-climb stainless steel arms", "Emergency release mechanism", "Wiegand & OSDP compatible"],
    img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop&q=80"
  }
];

const Products = () => {
  return (
    <main id="main">
      <section className="page-hero">
        <Container>
          <div className="page-hero-inner">
            <Breadcrumb items={[{ to: "/", label: "Home" }, { label: "Products" }]} />
            <div className="eyebrow">Products & service pillars</div>
            <h1>The hardware, software and infrastructure we deploy.</h1>
            <p className="lede">Four service pillars — physical security, AI surveillance, custom software, IT infrastructure — plus a dedicated catalog of turnstile and speed-gate solutions from Tiso and Turboo. Each pillar is complete on its own; most clients combine two or three.</p>
          </div>
        </Container>
      </section>

      <Section>
        <SectionHeader eyebrow="Product pillars" title="Four catalogs. One integrator." lede="Click any pillar to see the full hardware list, capabilities, and live deployments." />
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 60}>
              <Link to={`/service/${s.id}`} className="service-card" style={{ display: "flex", height: "100%" }}>
                <div className="num">{s.num}</div>
                <div className="icon"><Icon name={s.icon} /></div>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <span className="card-link">Browse catalog <Icon name="arrow-right" size={14} /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section surface>
        <SectionHeader eyebrow="What's inside each pillar" title="A peek at the catalog." lede="Representative hardware and platforms from each pillar — full details on each pillar's dedicated page." />

        <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
          {SERVICES.map((s, idx) => {
            const items = (s.products || s.services || s.partners || []).slice(0, 4);
            const reverse = idx % 2 === 1;
            return (
              <Reveal key={s.id}>
                <div className="product-pillar-row" data-reverse={reverse}>
                  <div className="ppr-image">
                    {PRODUCT_CATEGORY_IMAGES[s.id] ? (
                      <img src={PRODUCT_CATEGORY_IMAGES[s.id]} alt={s.title} loading="lazy" />
                    ) : (
                      <div className="ppr-device-card">
                        <img src="assets/products/suprema-biostation3.png" alt="Suprema BioStation 3" className="ppr-device-img" />
                        <img src="assets/products/biostation3.png" alt="Suprema BioStation 3 side" className="ppr-device-img ppr-device-img-2" />
                        <img src="assets/products/uundz-handle.png" alt="Smart lock" className="ppr-device-img ppr-device-img-3" />
                      </div>
                    )}
                    <span className="ppr-badge">{s.num}</span>
                  </div>
                  <div className="ppr-body">
                    <h3>{s.title}</h3>
                    <p>{s.summary}</p>
                    <ul className="ppr-list">
                      {items.map((it, i) => (
                        <li key={i}>
                          <span className="ic" style={{ color: "var(--brand)" }}><Icon name={it.icon || "check"} size={16} /></span>
                          <span><strong>{it.name}</strong> — {it.desc}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={`/service/${s.id}`} className="card-link">See full catalog <Icon name="arrow-right" size={14} /></Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* TURNSTILES SECTION */}
      <Section>
        <SectionHeader
          eyebrow="Turnstiles & speed gates"
          title="Tiso & Turboo — premium pedestrian access."
          lede="We distribute and integrate Tiso and Turboo turnstile systems — from budget tripod units to luxury full-glass speed lanes — paired directly with Suprema biometric readers."
        />

        <div className="turnstile-logos" style={{ display: "flex", gap: 20, marginBottom: 48, flexWrap: "wrap" }}>
          {[
            { name: "Tiso", url: "https://tiso-turnstiles.com", tagline: "Tripod · Swing · Full-Height", color: "#1a3a6b" },
            { name: "Turboo", url: "https://www.turboogate.com", tagline: "Speed Gates · Swing Barriers", color: "#c41e1e" }
          ].map((b) => (
            <a key={b.name} href={b.url} target="_blank" rel="noopener noreferrer" className="vendor-link-pill" style={{ "--pill-color": b.color }}>
              <span className="pill-name" style={{ color: b.color }}>{b.name}</span>
              <span className="pill-tag">{b.tagline}</span>
              <Icon name="external-link" size={13} />
            </a>
          ))}
        </div>

        <div className="turnstile-grid">
          {TURNSTILE_MODELS.map((t, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="turnstile-card">
                <div className="tc-img">
                  <img src={t.img} alt={t.model} loading="lazy" />
                  <span className="tc-brand" style={{ background: t.brand === "Tiso" ? "#1a3a6b" : "#c41e1e" }}>{t.brand}</span>
                </div>
                <div className="tc-body">
                  <h4>{t.model}</h4>
                  <p>{t.desc}</p>
                  <ul className="tc-specs">
                    {t.specs.map((sp, j) => (
                      <li key={j}><Icon name="check" size={12} style={{ color: "var(--brand)", marginRight: 6 }} />{sp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Button to="/contact" variant="primary">Request a turnstile quote</Button>
          <span style={{ display: "inline-block", margin: "0 12px", color: "var(--ink-soft)" }}>or</span>
          <Button to="/vendors" variant="secondary">View all vendors</Button>
        </div>
      </Section>

      <Section tight>
        <Reveal>
          <div className="cta-banner">
            <div>
              <h2>Need a quote on specific hardware?</h2>
              <p>Tell us model numbers, quantities, and the site — we'll come back with a Bill of Materials, lead times, and an installation plan.</p>
            </div>
            <div className="cta-banner-actions">
              <Button to="/contact" variant="primary" size="lg">Request a quote</Button>
              <Button to="/solutions" variant="secondary" size="lg" onDark>See solutions</Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </main>
  );
};
window.Products = Products;
