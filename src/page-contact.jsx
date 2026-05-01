/* DisTechSol — Contact page + 404 */

const Contact = ({ t }) => {
  const { t: ctxT } = useLang();
  const tr = t || ctxT;

  return (
    <main id="main">
      <section className="page-hero">
        <Container>
          <div className="page-hero-inner">
            <Breadcrumb items={[{ to: "/", label: tr("nav_home") }, { label: tr("nav_contact") }]} />
            <div className="eyebrow">{tr("nav_contact")}</div>
            <h1>{tr("contact_title")}</h1>
            <p className="lede">{tr("contact_lede")}</p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="contact-grid contact-grid-slim">
          <Reveal>
            <div className="contact-info">
              <h3>{tr("contact_direct")}</h3>

              <div className="contact-item">
                <div className="icon"><Icon name="phone" /></div>
                <div>
                  <div className="contact-item-label">{tr("contact_phone_lbl")}</div>
                  <div className="contact-item-value">
                    <a href="tel:+994512339370">+994 51 233 93 70</a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon"><Icon name="mail" /></div>
                <div>
                  <div className="contact-item-label">{tr("contact_email_lbl")}</div>
                  <div className="contact-item-value">
                    <a href="mailto:office@distechsol.com">office@distechsol.com</a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon"><Icon name="map-pin" /></div>
                <div>
                  <div className="contact-item-label">{tr("contact_office_lbl")}</div>
                  <div className="contact-item-value">
                    Arena Plaza Business Center<br />
                    Heydar Aliyev 183C<br />
                    Baku, AZ 1029, Azerbaijan
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon"><Icon name="clock" /></div>
                <div>
                  <div className="contact-item-label">{tr("contact_hours_lbl")}</div>
                  <div className="contact-item-value">{tr("contact_hours_val")}</div>
                  <div style={{ fontSize: 12, color: "var(--ink-soft)", marginTop: 4 }}>{tr("contact_reply")}</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon"><Icon name="linkedin" /></div>
                <div>
                  <div className="contact-item-label">LinkedIn</div>
                  <div className="contact-item-value">
                    <a href="https://www.linkedin.com/company/distechsol" target="_blank" rel="noopener noreferrer">
                      linkedin.com/company/distechsol
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="tel:+994512339370" className="btn btn-primary">
                  <Icon name="phone" size={16} style={{ marginRight: 8 }} />
                  Call us
                </a>
                <a href="mailto:office@distechsol.com" className="btn btn-secondary">
                  <Icon name="mail" size={16} style={{ marginRight: 8 }} />
                  Email us
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="map-frame">
              <iframe
                title="DisTechSol — Arena Plaza, Baku"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.8!2d49.8530!3d40.3953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6c4b42e073%3A0xeacb3caacf55e72d!2s114%20Heyd%C9%99r%20%C6%8Bliyev%20prospekti%2C%20Bak%C4%B1!5e0!3m2!1sen!2saz!4v1746000000000!5m2!1sen!2saz"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Reveal>
        </div>
      </Section>
    </main>
  );
};

const NotFound = () => (
  <main id="main" className="notfound">
    <div className="code">404</div>
    <h1>Page not found.</h1>
    <p style={{ marginBottom: 32 }}>The page you're looking for doesn't exist or has moved.</p>
    <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
      <Button to="/" variant="primary">Back to home</Button>
      <Button to="/solutions" variant="secondary">Browse solutions</Button>
    </div>
  </main>
);

window.Contact = Contact; window.NotFound = NotFound;
