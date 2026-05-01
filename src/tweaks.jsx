/* DisTechSol — Tweaks panel
   Lets viewers retune the live design system: brand color, headline copy,
   density, hero variant, and a few content toggles.
*/

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "brandColor": "#1748ff",
  "inkColor": "#0b1422",
  "accentColor": "#00b894",
  "fontHeading": "Manrope",
  "headline": "Secure. Automate. Innovate.",
  "lede": "DisTechSol is the system integrator behind biometric access, AI surveillance, and enterprise networks for Azerbaijan's most demanding institutions — from SOCAR to the Supreme Court.",
  "ctaPrimary": "Explore solutions",
  "ctaSecondary": "Talk to an engineer",
  "density": "comfortable",
  "headerStyle": "glass",
  "heroLayout": "split",
  "showTrustStrip": true,
  "showStats": true,
  "showWhyUs": true,
  "showIndustries": true,
  "radius": 14
}/*EDITMODE-END*/;

const FONT_OPTIONS = {
  "Manrope": "'Manrope', system-ui, sans-serif",
  "Inter": "'Inter', system-ui, sans-serif",
  "Space Grotesk": "'Space Grotesk', system-ui, sans-serif",
  "DM Sans": "'DM Sans', system-ui, sans-serif",
  "IBM Plex Sans": "'IBM Plex Sans', system-ui, sans-serif"
};

const Tweaks = () => {
  const [tw, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Inject Google Fonts on demand
  useEffect(() => {
    const id = "tw-google-fonts";
    let link = document.getElementById(id);
    const families = Object.keys(FONT_OPTIONS).map((f) => f.replace(/ /g, "+") + ":wght@400;500;600;700;800").join("&family=");
    const href = `https://fonts.googleapis.com/css2?family=${families}&display=swap`;
    if (!link) {
      link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }
  }, []);

  // Apply CSS variables
  useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty("--brand", tw.brandColor);
    // Derive a soft tint and deep variant from the brand color
    r.setProperty("--brand-soft", tw.brandColor + "1a");
    r.setProperty("--brand-deep", tw.brandColor);
    r.setProperty("--ink", tw.inkColor);
    r.setProperty("--ink-strong", tw.inkColor);
    r.setProperty("--accent", tw.accentColor);
    r.setProperty("--font-sans", FONT_OPTIONS[tw.fontHeading] || FONT_OPTIONS.Manrope);
    r.setProperty("--r-md", tw.radius + "px");
    r.setProperty("--r-lg", (tw.radius + 6) + "px");
    r.setProperty("--r-xl", (tw.radius + 14) + "px");

    // Density
    if (tw.density === "compact") {
      r.setProperty("--section-y", "80px");
      r.setProperty("--section-y-tight", "56px");
    } else if (tw.density === "spacious") {
      r.setProperty("--section-y", "160px");
      r.setProperty("--section-y-tight", "100px");
    } else {
      r.setProperty("--section-y", "120px");
      r.setProperty("--section-y-tight", "80px");
    }

    // Header style
    document.body.dataset.headerStyle = tw.headerStyle;
    document.body.dataset.heroLayout = tw.heroLayout;

    // Section visibility flags (consumed via [data-tw-section])
    const flags = {
      "trust-strip": tw.showTrustStrip,
      "stats": tw.showStats,
      "why-us": tw.showWhyUs,
      "industries": tw.showIndustries
    };
    document.querySelectorAll("[data-tw-section]").forEach((el) => {
      const key = el.getAttribute("data-tw-section");
      el.style.display = flags[key] === false ? "none" : "";
    });
    // Section visibility by class hooks
    const cls = (sel, show) => document.querySelectorAll(sel).forEach((el) => { el.style.display = show ? "" : "none"; });
    cls(".tw-stats", tw.showStats);
    cls(".tw-industries", tw.showIndustries);
    cls(".tw-why", tw.showWhyUs);

    // Hero copy override
    document.querySelectorAll("[data-tw='headline']").forEach((el) => { el.textContent = tw.headline; });
    document.querySelectorAll("[data-tw='lede']").forEach((el) => { el.textContent = tw.lede; });
    document.querySelectorAll("[data-tw='ctaPrimary']").forEach((el) => {
      // preserve trailing arrow span if present
      const arrow = el.querySelector(".btn-arrow");
      el.childNodes.forEach((n) => { if (n.nodeType === 3) n.textContent = ""; });
      if (el.firstChild && el.firstChild.nodeType === 3) el.firstChild.textContent = tw.ctaPrimary;
      else el.insertBefore(document.createTextNode(tw.ctaPrimary), arrow || null);
    });
    document.querySelectorAll("[data-tw='ctaSecondary']").forEach((el) => { el.textContent = tw.ctaSecondary; });
  }, [tw]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Brand">
        <TweakColor label="Primary" value={tw.brandColor} onChange={(v) => setTweak("brandColor", v)} />
        <TweakColor label="Ink" value={tw.inkColor} onChange={(v) => setTweak("inkColor", v)} />
        <TweakColor label="Accent" value={tw.accentColor} onChange={(v) => setTweak("accentColor", v)} />
      </TweakSection>

      <TweakSection label="Typography">
        <TweakSelect label="Heading font" value={tw.fontHeading}
                     options={Object.keys(FONT_OPTIONS).map((f) => ({ label: f, value: f }))}
                     onChange={(v) => setTweak("fontHeading", v)} />
      </TweakSection>

      <TweakSection label="Hero copy">
        <TweakText label="Headline" value={tw.headline} onChange={(v) => setTweak("headline", v)} />
        <TweakText label="Lede" value={tw.lede} onChange={(v) => setTweak("lede", v)} />
        <TweakText label="Primary CTA" value={tw.ctaPrimary} onChange={(v) => setTweak("ctaPrimary", v)} />
        <TweakText label="Secondary CTA" value={tw.ctaSecondary} onChange={(v) => setTweak("ctaSecondary", v)} />
      </TweakSection>

      <TweakSection label="Layout">
        <TweakRadio label="Density" value={tw.density}
                    options={[{ label: "Compact", value: "compact" }, { label: "Default", value: "comfortable" }, { label: "Spacious", value: "spacious" }]}
                    onChange={(v) => setTweak("density", v)} />
        <TweakRadio label="Header" value={tw.headerStyle}
                    options={[{ label: "Glass", value: "glass" }, { label: "Solid", value: "solid" }, { label: "Dark", value: "dark" }]}
                    onChange={(v) => setTweak("headerStyle", v)} />
        <TweakRadio label="Hero layout" value={tw.heroLayout}
                    options={[{ label: "Split", value: "split" }, { label: "Centered", value: "centered" }]}
                    onChange={(v) => setTweak("heroLayout", v)} />
        <TweakSlider label="Corner radius" value={tw.radius} min={0} max={28} step={1} unit="px"
                     onChange={(v) => setTweak("radius", v)} />
      </TweakSection>

      <TweakSection label="Sections">
        <TweakToggle label="Trust strip (client logos)" value={tw.showTrustStrip} onChange={(v) => setTweak("showTrustStrip", v)} />
        <TweakToggle label="Stats counter" value={tw.showStats} onChange={(v) => setTweak("showStats", v)} />
        <TweakToggle label="Industries grid" value={tw.showIndustries} onChange={(v) => setTweak("showIndustries", v)} />
        <TweakToggle label="Why DisTechSol" value={tw.showWhyUs} onChange={(v) => setTweak("showWhyUs", v)} />
      </TweakSection>
    </TweaksPanel>
  );
};

window.Tweaks = Tweaks;
