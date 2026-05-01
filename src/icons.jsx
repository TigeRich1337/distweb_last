/* DisTechSol — Lucide-style inline SVG icons */
const { useEffect, useRef, useState } = React;

const ic = (paths, opts = {}) => {
  const stroke = opts.stroke || 1.75;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke}
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths}
    </svg>
  );
};

const Icon = ({ name, size }) => {
  const s = size || undefined;
  const wrapStyle = s ? { width: s, height: s } : undefined;
  let body;
  switch (name) {
    case "shield": body = ic(<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>); break;
    case "video": body = ic(<><rect x="2" y="6" width="14" height="12" rx="2"/><path d="m22 8-6 4 6 4V8z"/></>); break;
    case "code": body = ic(<><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>); break;
    case "server": body = ic(<><rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><line x1="6" y1="7" x2="6.01" y2="7"/><line x1="6" y1="17" x2="6.01" y2="17"/></>); break;
    case "cpu": body = ic(<><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="2" x2="9" y2="4"/><line x1="15" y1="2" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/><line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="15" x2="22" y2="15"/><line x1="2" y1="9" x2="4" y2="9"/><line x1="2" y1="15" x2="4" y2="15"/></>); break;
    case "scan": body = ic(<><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/></>); break;
    case "user": body = ic(<><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/></>); break;
    case "credit-card": body = ic(<><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></>); break;
    case "fingerprint": body = ic(<><path d="M6 11a6 6 0 0 1 12 0v3"/><path d="M9 11v3a3 3 0 0 0 6 0"/><path d="M12 11v6"/><path d="M3 11a9 9 0 0 1 18 0"/><path d="M5 19a16 16 0 0 0 4 2"/></>); break;
    case "smartphone": body = ic(<><rect x="6" y="2" width="12" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></>); break;
    case "monitor": body = ic(<><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>); break;
    case "brain": body = ic(<><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/></>); break;
    case "hard-drive": body = ic(<><line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/></>); break;
    case "git-merge": body = ic(<><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></>); break;
    case "clock": body = ic(<><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 16 14"/></>); break;
    case "sparkles": body = ic(<><path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3z"/><path d="M19 15l.7 1.7L21.4 17.4l-1.7.7L19 19.8l-.7-1.7L16.6 17.4l1.7-.7L19 15z"/></>); break;
    case "wifi": body = ic(<><path d="M5 12.55a11 11 0 0 1 14 0"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M8.5 16.43a6 6 0 0 1 7 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></>); break;
    case "cable": body = ic(<><path d="M4 9V5a2 2 0 0 1 2-2h2"/><path d="M16 21h2a2 2 0 0 0 2-2v-4"/><path d="M4 13v2a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-2"/><line x1="2" y1="9" x2="6" y2="9"/><line x1="18" y1="15" x2="22" y2="15"/></>); break;
    case "landmark": body = ic(<><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7 12 2"/></>); break;
    case "zap": body = ic(<><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></>); break;
    case "building": body = ic(<><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="6" x2="9.01" y2="6"/><line x1="15" y1="6" x2="15.01" y2="6"/><line x1="9" y1="10" x2="9.01" y2="10"/><line x1="15" y1="10" x2="15.01" y2="10"/><line x1="9" y1="14" x2="9.01" y2="14"/><line x1="15" y1="14" x2="15.01" y2="14"/><path d="M10 22v-4h4v4"/></>); break;
    case "factory": body = ic(<><path d="M2 20h20V8l-7 4V8l-7 4V4H2z"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="11" y1="20" x2="11" y2="14"/><line x1="16" y1="20" x2="16" y2="14"/></>); break;
    case "shopping-bag": body = ic(<><path d="M5 7h14l-1.5 13a2 2 0 0 1-2 1.8H8.5a2 2 0 0 1-2-1.8L5 7z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/></>); break;
    case "heart": body = ic(<><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></>); break;
    case "briefcase": body = ic(<><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>); break;
    case "truck": body = ic(<><rect x="1" y="6" width="13" height="12" rx="1"/><path d="M14 9h5l3 3v6h-8z"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></>); break;
    case "arrow-right": body = ic(<><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>); break;
    case "check": body = ic(<><polyline points="20 6 9 17 4 12"/></>); break;
    case "menu": body = ic(<><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>); break;
    case "x": body = ic(<><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></>); break;
    case "chevron-right": body = ic(<><polyline points="9 6 15 12 9 18"/></>); break;
    case "chevron-down": body = ic(<><polyline points="6 9 12 15 18 9"/></>); break;
    case "external-link": body = ic(<><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></>); break;
    case "phone": body = ic(<><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></>); break;
    case "mail": body = ic(<><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></>); break;
    case "map-pin": body = ic(<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>); break;
    case "linkedin": body = ic(<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>); break;
    case "globe": body = ic(<><circle cx="12" cy="12" r="9"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/></>); break;
    case "search": body = ic(<><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>); break;
    case "arrow-up": body = ic(<><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></>); break;
    default: body = ic(<><circle cx="12" cy="12" r="8"/></>);
  }
  return <span style={wrapStyle} className="ic">{body}</span>;
};

window.Icon = Icon;
