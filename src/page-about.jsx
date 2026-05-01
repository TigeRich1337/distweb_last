/* DisTechSol — About page */

const About = () => (
  <main id="main">
    <section className="page-hero">
      <Container>
        <div className="page-hero-inner">
          <Breadcrumb items={[{ to: "/", label: "Home" }, { label: "About" }]} />
          <div className="eyebrow">Our company</div>
          <h1>Built to integrate. Stayed to support.</h1>
          <p className="lede">DisTechSol is a Baku-headquartered system integrator founded in 2020. We deploy and maintain enterprise-grade physical security, surveillance, networking and AI automation for government, energy, banking and industrial clients across Azerbaijan and the UAE.</p>
        </div>
      </Container>
    </section>

    <Section>
      <div className="about-grid">
        <Reveal>
          <div className="eyebrow">Our story</div>
          <h2>From distributor to integrator.</h2>
          <p>We started in 2020 as the authorized distributor of Suprema biometric hardware in Azerbaijan. Selling boxes was the easy part. The harder problem — and the more interesting one — was the work that came after the box was opened: site survey, network design, controller wiring, BioStar 2 configuration, integration with HR and payroll, training, and ongoing maintenance.</p>
          <p>Within two years we had built an in-house engineering team to do that work end-to-end. Today we hold direct partnerships with Network Optix, March Networks, Incoresoft, Peplink, SAMM Fotaş and DELL — and we've extended into modern AI and automation work with Claude and n8n. Our offices serve clients across Azerbaijan and the UAE, with a project portfolio that includes SOCAR, the Supreme Court, the Ministries of Taxes and Finance, ATB Bank and Lukoil.</p>
          <p>We didn't pivot. We grew into the role our clients needed.</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="timeline">
            {[
              { y: "2020", t: "Founded in Baku", d: "Established as authorized distributor of Suprema biometric access control in Azerbaijan." },
              { y: "2021", t: "First enterprise deployments", d: "Government and banking clients — including ATB Bank and ministry-level institutions — went live on BioStar 2." },
              { y: "2022", t: "VMS & AI partnerships", d: "Added Network Optix, March Networks and Incoresoft to extend into video and analytics." },
              { y: "2023", t: "Networking & infrastructure", d: "Expanded into IT infrastructure with Peplink, DELL and SAMM Fotaş partnerships." },
              { y: "2024", t: "AI & automation", d: "Integration partnerships with Claude (Anthropic) and n8n. Custom copilot and workflow projects." },
              { y: "2025", t: "Regional expansion", d: "Active project work across Azerbaijan and the UAE." }
            ].map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-year">{item.y}</div>
                <div className="timeline-body">
                  <h4>{item.t}</h4>
                  <p>{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>

    <Section surface>
      <SectionHeader eyebrow="What we do" title="Distribution. Integration. Maintenance." lede="Three phases of the same engagement. We sell the hardware at factory prices, do the integration work in-house, and stay on past go-live under defined SLAs." />
      <div className="steps-grid">
        {[
          { n: "01", t: "Distribution", d: "Direct vendor relationships and authorized status mean factory pricing, official escalation paths, certified spares stocked locally — and no grey-market parts in your facility." },
          { n: "02", t: "Integration", d: "In-house engineers handle network design, controller wiring, software configuration, HR/ERP sync, mobile credentials, and the cabling that ties it all together." },
          { n: "03", t: "Maintenance", d: "Defined SLA contracts with response and resolution time guarantees. Spares stocked in Baku. Software updates managed. The relationship continues past go-live." }
        ].map((s, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className="step">
              <div className="step-num">{s.n}</div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>

    <Section>
      <SectionHeader eyebrow="Approach" title="How we run a project." lede="A three-step methodology that starts long before any hardware ships." />
      <div className="steps-grid">
        {[
          { n: "Step 1", t: "Assess", d: "Site walk, headcount review, threat model, regulatory regime, integration scope. We document what's already there and what needs to be." },
          { n: "Step 2", t: "Architect", d: "Topology, BOM, vendor mix, redundancy plan, migration path, budget envelope. Reviewed with your team before procurement." },
          { n: "Step 3", t: "Deploy & sustain", d: "Phased install with parallel running where it matters. Cutover, training, documentation handoff. Then we stay on under SLA." }
        ].map((s, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className="step">
              <div className="step-num">{s.n}</div>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>

    <Section surface>
      <SectionHeader eyebrow="Certifications" title="Authorized partnerships." lede="Direct vendor relationships, factory training, escalation rights." />
      <Reveal>
        <div className="cert-grid">
          {[
            { v: "Suprema", s: "Authorized Distributor · Azerbaijan" },
            { v: "Network Optix", s: "Certified Partner" },
            { v: "March Networks", s: "Integration Partner" },
            { v: "Incoresoft", s: "Integration Partner" },
            { v: "Peplink", s: "Certified Partner" },
            { v: "SAMM Fotaş", s: "Authorized Distributor" },
            { v: "DELL Technologies", s: "Authorized Partner" },
            { v: "Claude (Anthropic)", s: "Integration Partner" },
            { v: "n8n", s: "Integration Partner" }
          ].map((c, i) => (
            <div key={i} className="cert">
              <div className="cert-vendor">{c.v}</div>
              <div className="cert-status">{c.s}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>

    <Section tight>
      <Reveal>
        <div className="cta-banner">
          <div>
            <h2>Want to work with us?</h2>
            <p>Whether you're starting a new project or replacing a system that no longer fits, we'd like to hear about it.</p>
          </div>
          <div className="cta-banner-actions">
            <Button to="/contact" variant="primary" size="lg">Get in touch</Button>
          </div>
        </div>
      </Reveal>
    </Section>
  </main>
);
window.About = About;
