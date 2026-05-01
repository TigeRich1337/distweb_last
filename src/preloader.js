/* DisTechSol — Preloader (smoother) */
(function () {
  const el  = document.getElementById("preloader");
  const fill = document.getElementById("preloader-fill");
  const num  = document.getElementById("preloader-num");
  if (!el) return;

  const DURATION = 2400; // ms — longer = more cinematic
  let startTime = null;

  // Smooth sigmoid-style ease: slow start, accelerates mid, slows at end
  function ease(t) {
    // Blend of ease-in-out with a slight hold near 100
    return t < 0.5
      ? 2 * t * t
      : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  // We drive to 95% quickly then stall briefly before jumping to 100
  // so it feels like real asset loading
  function mapProgress(t) {
    if (t < 0.75) {
      // 0→95% in the first 75% of duration
      return ease(t / 0.75) * 95;
    } else {
      // 95→100% in last 25%
      return 95 + ease((t - 0.75) / 0.25) * 5;
    }
  }

  function tick(ts) {
    if (!startTime) startTime = ts;
    const raw = Math.min((ts - startTime) / DURATION, 1);
    const pct = Math.round(mapProgress(raw));

    if (num)  num.textContent  = pct + "%";
    if (fill) fill.style.width = pct + "%";

    if (raw < 1) {
      requestAnimationFrame(tick);
    } else {
      // Hold at 100% for 200ms, then fade
      setTimeout(() => {
        el.style.transition = "opacity 600ms cubic-bezier(0.4,0,0.2,1)";
        el.style.opacity = "0";
        el.style.pointerEvents = "none";
        setTimeout(() => { el.style.display = "none"; }, 640);
      }, 200);
    }
  }

  // Small delay so the page paints the preloader before we start counting
  setTimeout(() => requestAnimationFrame(tick), 60);
})();
