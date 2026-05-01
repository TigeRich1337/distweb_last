/* DisTechSol — Service Detail page */

const SERVICE_IMAGES = {
  "physical-security": null, // composed card
  "video-analytics": "assets/products/vms1.jpg",
  "software-development": "assets/products/custom-software.jpg",
  "it-infrastructure": "assets/products/it-infrastructure.jpg"
};

const ServiceDetail = ({ serviceId }) => {
  const service = SERVICES.find((s) => s.id === serviceId);
  if (!service) {
    return (
      <main id="main" className="notfound">
        <div className="code">404</div>
        <h1>Service not found</h1>
        <p>The service you're looking for doesn't exist.</p>
        <Button to="/solutions" variant="primary">Back to solutions</Button>
      </main>);

  }
  const items = service.products || service.services || service.partners;
  const itemsLabel = service.products ? "Products we deploy" : service.services ? "Services we offer" : "Technology partners";
  const deployments = service.deployments.map((slug) => PROJECTS.find((p) => p.slug === slug)).filter(Boolean);
  const others = SERVICES.filter((s) => s.id !== serviceId);

  return (
    <main id="main">
      <section className="page-hero">
        <Container>
          <div className="page-hero-inner">
            <Breadcrumb items={[{ to: "/", label: "Home" }, { to: "/solutions", label: "Solutions" }, { label: service.title }]} />
            <div className="eyebrow">{service.num} · Service Pillar</div>
            <h1>{service.title}</h1>
            <p className="lede">{service.summary}</p>
            <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button to="/contact" variant="primary">Discuss your project</Button>
              <Button to="/projects" variant="secondary">See deployments</Button>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <div className="service-hero">
          <Reveal>
            <div className="eyebrow">Overview</div>
            <h2>The system, end-to-end.</h2>
            <p>{service.overview}</p>
          </Reveal>
          <Reveal delay={120}>
            <div className="service-hero-image">
              {SERVICE_IMAGES[service.id] ?
              <img src={SERVICE_IMAGES[service.id]} alt={service.title} loading="lazy" /> :

              <div className="ppr-device-card" style={{ width: "100%", height: "100%" }}>
                  <img src="assets/products/suprema-biostation3.png" alt="Suprema BioStation 3" className="ppr-device-img" style={{ opacity: "0" }} />
                  <img src="assets/products/biostation3.png" alt="Suprema BioStation 3 side" className="ppr-device-img ppr-device-img-2" />
                  <img src="assets/products/uundz-handle.png" alt="Smart lock" className="ppr-device-img ppr-device-img-3" style={{ objectFit: "contain" }} />
                </div>
              }
            </div>
          </Reveal>
        </div>

        {/* Capabilities */}
        <Reveal>
          <div className="eyebrow">Capabilities</div>
          <h2 style={{ marginBottom: 32 }}>What's included.</h2>
          <div className="feature-grid">
            {service.features.map((f, i) =>
            <div key={i} className="feature-row">
                <span className="check"><Icon name="check" /></span>
                <span>{f}</span>
              </div>
            )}
          </div>
        </Reveal>
      </Section>

      <Section surface>
        <SectionHeader eyebrow={service.products ? "Hardware" : service.services ? "Engagements" : "Partners"} title={itemsLabel} />
        <div className="product-row-grid">
          {items.map((it, i) =>
          <Reveal key={i} delay={i * 50}>
              <div className="product-row">
                <div className="icon"><Icon name={it.icon || "check"} /></div>
                <div>
                  <h4>{it.name}</h4>
                  <p>{it.desc}</p>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </Section>

      {deployments.length > 0 &&
      <Section>
          <SectionHeader eyebrow="In production" title="Where this stack runs today." lede="A sample of the deployments where we've used this service line in real environments." />
          <div className="projects-grid">
            {deployments.map((d) =>
          <Reveal key={d.slug}>
                <Link to="/projects" className="project-card" style={{ display: "flex" }}>
                  <div className="project-card-head">
                    <span className="category">{d.category}</span>
                    <span className="device-count">{d.deviceCount}</span>
                  </div>
                  <h3>{d.client}</h3>
                  <div className="system">{d.system}</div>
                  <p>{d.desc}</p>
                  <div className="project-card-foot">{d.tech}</div>
                </Link>
              </Reveal>
          )}
          </div>
        </Section>
      }

      <Section surface>
        <SectionHeader eyebrow="Outcomes" title="What you actually get." />
        <div className="outcomes-grid">
          {service.outcomes.map((o, i) =>
          <Reveal key={i} delay={i * 50}>
              <div className="outcome-tile">
                <h5>{o.t}</h5>
                <p>{o.d}</p>
              </div>
            </Reveal>
          )}
        </div>

        <div className="cross-sell" style={{ marginTop: 64 }}>
          <span className="cross-sell-label">Also see:</span>
          <div className="cross-sell-links">
            {others.map((s) =>
            <Link key={s.id} to={`/service/${s.id}`} className="cross-sell-pill">{s.title}</Link>
            )}
          </div>
          <Button to="/solutions" variant="ghost">All solutions <Icon name="arrow-right" size={14} /></Button>
        </div>
      </Section>

      <Section tight>
        <Reveal>
          <div className="cta-banner">
            <div>
              <h2>Want to see {service.title.split('&')[0].trim()} for your facility?</h2>
              <p>We start with a site assessment, then come back with an architecture and budget. No pressure, no slideware.</p>
            </div>
            <div className="cta-banner-actions">
              <Button to="/contact" variant="primary" size="lg">Request an assessment</Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </main>);

};
window.ServiceDetail = ServiceDetail;