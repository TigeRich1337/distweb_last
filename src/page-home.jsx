/* DisTechSol — Home page */

const Home = ({ t }) => {
  return (
    <main id="main">
      {/* HERO */}
      <section className="hero">
        <div className="hero-grid-bg" aria-hidden="true"></div>
        <Container>
          <div className="hero-inner">
            <Reveal>
              <div className="eyebrow">Enterprise Security & IT Integration · AZ & UAE</div>
              <h1 data-tw="headline">{t ? t("hero_headline") : "Secure. Automate. Innovate."}</h1>
              <p className="lede" data-tw="lede">
                {t ? t("hero_lede") : "DisTechSol is the system integrator behind biometric access, AI surveillance, and enterprise networks for Azerbaijan's most demanding institutions — from SOCAR to the Supreme Court."}
              </p>
              <div className="hero-ctas">
                <Link to="/solutions" className="btn btn-primary btn-lg" data-tw="ctaPrimary">{t ? t("hero_cta_primary") : "Explore solutions"}<span className="btn-arrow">→</span></Link>
                <Link to="/contact" className="btn btn-secondary btn-lg" data-tw="ctaSecondary">{t ? t("hero_cta_secondary") : "Talk to an engineer"}</Link>
              </div>
              <div className="hero-meta">
                <div className="hero-meta-item"><Icon name="check" /> Authorized Suprema distributor</div>
                <div className="hero-meta-item"><Icon name="check" /> 50+ enterprise deployments</div>
                <div className="hero-meta-item"><Icon name="check" /> Headquartered in Baku since 2020</div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="hero-visual">
                <img src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1100&auto=format&fit=crop&q=80" alt="Enterprise security operations center" loading="eager" />
                <div className="hero-visual-inset">
                  <div><span className="hvi-num">100+</span><span className="hvi-lbl">Devices · SOCAR</span></div>
                  <div><span className="hvi-num">18</span><span className="hvi-lbl">Terminals · Sup. Court</span></div>
                  <div><span className="hvi-num">24/7</span><span className="hvi-lbl">SLA Coverage</span></div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <Container>
          <div className="trust-label">Trusted by leading institutions across Azerbaijan</div>
          <div className="marquee">
            <div className="marquee-track">
              {[...TRUST_LOGOS, ...TRUST_LOGOS].map((logo, i) => (
                <div key={i} className="marquee-logo">
                  <img src={logo.src} alt={logo.name} loading="lazy" width="140" height="36" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* STATS */}
      <Section tight className="tw-stats">
        <Reveal>
          <div className="stats-grid">
            <div className="stat"><div className="stat-num"><Counter to={50} suffix="+" /></div><div className="stat-lbl">Enterprise clients served</div></div>
            <div className="stat"><div className="stat-num"><Counter to={5} suffix="+" /></div><div className="stat-lbl">Years on the market</div></div>
            <div className="stat"><div className="stat-num"><Counter to={2} /></div><div className="stat-lbl">Countries: AZ & UAE</div></div>
            <div className="stat"><div className="stat-num"><Counter to={9} /></div><div className="stat-lbl">Vendor partnerships</div></div>
          </div>
        </Reveal>
      </Section>

      {/* ABOUT PREVIEW */}
      <Section surface>
        <div className="about-grid">
          <Reveal>
            <div className="eyebrow">About DisTechSol</div>
            <h2>An integrator, not a reseller.</h2>
            <p className="lede">
              We're a Baku-headquartered system integrator founded in 2020, serving enterprise and government clients across
              Azerbaijan and the UAE. We don't just ship boxes — we design the architecture, install the hardware, write the
              integration layer, and stay on as the maintenance partner.
            </p>
            <p>
              Our portfolio spans physical security (Suprema biometrics), video and AI analytics (Network Optix, March Networks,
              Incoresoft), networking and SD-WAN (Peplink), enterprise compute (DELL), structured cabling (SAMM Fotaş), and the
              modern AI/automation stack (Claude, n8n). One vendor of record. One throat to choke.
            </p>
            <Button to="/about" variant="ghost">Read our story <Icon name="arrow-right" /></Button>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { t: "Authorized distributor", d: "Direct vendor relationships, factory pricing, official support escalation." },
                { t: "In-house engineering", d: "Network, software and integration engineers on staff — no subcontracting." },
                { t: "Multi-vendor expertise", d: "We design across stacks because no single vendor wins every category." },
                { t: "Long-term partnership", d: "Maintenance and SLA contracts that keep your stack alive past go-live." }
              ].map((it, i) => (
                <div key={i} className="card flat" style={{ padding: 24 }}>
                  <div className="card-icon" style={{ marginBottom: 14 }}><Icon name="check" /></div>
                  <h4 style={{ fontSize: 16, marginBottom: 6 }}>{it.t}</h4>
                  <p style={{ fontSize: 13, margin: 0 }}>{it.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* SERVICES */}
      <Section>
        <SectionHeader
          eyebrow="What we do"
          title="Four pillars. One integrator."
          lede="A coordinated stack across physical security, intelligent video, custom software, and the IT infrastructure that ties it all together."
        />
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 60}>
              <Link to={`/service/${s.id}`} className="service-card" style={{ display: "flex", height: "100%" }}>
                <div className="num">{s.num}</div>
                <div className="icon"><Icon name={s.icon} /></div>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <span className="card-link">Learn more <Icon name="arrow-right" size={14} /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section surface className="tw-industries">
        <SectionHeader
          eyebrow="Industries we serve"
          title="From ministries to manufacturing."
          lede="Eight verticals, each with its own threat model, regulatory regime, and operational constraints."
        />
        <Reveal>
          <div className="industries-grid">
            {INDUSTRIES.map((ind) => (
              <Link to={`/solutions#${ind.id}`} key={ind.id} className="industry-tile">
                <div className="icon"><Icon name={ind.icon} /></div>
                <h4>{ind.title}</h4>
                <p>{ind.tagline}</p>
              </Link>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* FEATURED PROJECTS */}
      <Section>
        <SectionHeader
          eyebrow="Selected work"
          title="Real deployments, named clients."
          lede="A sample of projects from our portfolio. We list our clients because they let us — that's the trust we earn."
        />
        <div className="projects-feat-grid">
          {[
            { p: PROJECTS[0], img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&auto=format&fit=crop&q=70", metric: "100+ devices" },
            { p: PROJECTS[1], img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&auto=format&fit=crop&q=70", metric: "18 terminals" },
            { p: PROJECTS[6], img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=900&auto=format&fit=crop&q=70", metric: "10+ terminals" }
          ].map(({ p, img, metric }, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link to="/projects" className="project-card-feat">
                <div className="image">
                  <img src={img} alt={p.client} loading="lazy" />
                  <span className="badge">{p.category}</span>
                  <div className="metric">{metric}</div>
                </div>
                <div className="body">
                  <h3>{p.client}</h3>
                  <p>{p.system}</p>
                  <span className="card-link">View case <Icon name="arrow-right" size={14} /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Button to="/projects" variant="secondary">All projects <Icon name="arrow-right" size={14} /></Button>
        </div>
      </Section>

      {/* WHY US */}
      <Section surface className="tw-why">
        <SectionHeader
          eyebrow="Why DisTechSol"
          title="What separates us from a reseller."
          lede="Procurement officers call resellers. CIOs call integrators. The difference is in what we do after the box arrives."
        />
        <div className="why-grid">
          {[
            { n: "01", t: "Authorized distributor status", d: "Direct vendor agreements with Suprema, Peplink, DELL, SAMM Fotaş — factory pricing, escalation paths, certified spares." },
            { n: "02", t: "In-house engineering", d: "Network, software, and integration engineers on staff. We don't subcontract the technical work." },
            { n: "03", t: "Multi-vendor architecture", d: "We pick best-of-breed per category and own the integration layer between them. No single point of vendor failure." },
            { n: "04", t: "Maintenance & SLAs", d: "Defined response and resolution times. Spares stocked locally. The relationship continues past go-live." }
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

      {/* CTA */}
      <Section tight>
        <Reveal>
          <div className="cta-banner">
            <div>
              <h2>Ready to upgrade your security and IT stack?</h2>
              <p>Tell us about your facility, your headcount, and what you're protecting. We'll come back with an architecture, a budget, and a timeline.</p>
            </div>
            <div className="cta-banner-actions">
              <Button to="/contact" variant="primary" size="lg">Start a conversation</Button>
              <Button to="/solutions" variant="secondary" size="lg" onDark>Browse solutions</Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </main>
  );
};

window.Home = Home;
