/* DisTechSol — Data layer (vendors, services, projects, industries) */

const SERVICES = [
  {
    id: "physical-security",
    num: "01",
    icon: "shield",
    title: "Physical Security & Access Systems",
    short: "Biometric, RFID, mobile-credential and wireless lock systems unified under a single access management platform — plus premium turnstile and speed-gate solutions from Tiso and Turboo.",
    summary: "End-to-end physical access for enterprise: face, fingerprint, RFID, mobile, and QR credentials, paired with intelligent controllers and wireless smart locks. Integrated with Tiso and Turboo turnstile lanes for high-traffic entries. Centralized policy, audit, anti-passback and mustering through Suprema BioStar X / BioStar 2.",
    overview: "We design and deploy physical access systems built around Suprema's biometric platform — the same hardware trusted at SOCAR, the Supreme Court of Azerbaijan, and ATB Bank. Every project starts with a site assessment: door count, zone hierarchy, credential strategy, integration to HR and payroll. From there, we install hardware, configure BioStar X (on-prem) or BioStar Air (cloud), and stay on as your maintenance partner. The system supports face, fingerprint, RFID, mobile NFC/BLE and QR — mixed across the same building when operationally appropriate. Where high-traffic lobbies need speed lanes or tripod turnstiles, we integrate Tiso and Turboo gates paired with the same Suprema readers.",
    features: [
      "Multi-modal authentication (Face, Fingerprint, RFID, Mobile, QR)",
      "Suprema BioStar X — on-prem unified security platform (ISO 27001 / GDPR certified)",
      "Suprema BioStar Air — 100% cloud access control, zero on-prem infrastructure",
      "Tripod turnstiles & premium speed gates (Tiso, Turboo)",
      "Wireless electronic locks (BLE/RFID, retrofit)",
      "Mobile credentials via NFC and BLE",
      "Live event monitoring & door status",
      "Anti-passback & zone management",
      "Mustering & emergency evacuation rosters",
      "Fire alarm & intrusion system interface",
      "GDPR-compliant data handling"
    ],
    products: [
      { name: "BioStation 3", icon: "scan", desc: "AI-optimized facial recognition terminal. Face, RFID, Mobile and QR credentials with VoIP intercom for visitor management." },
      { name: "FaceStation F2", icon: "user", desc: "Dual-camera face authentication for high-security entries — works under masks, low light, and reflections." },
      { name: "BioEntry W3", icon: "fingerprint", desc: "New AI-powered outdoor facial authentication device — simple, durable, and secure for any weather." },
      { name: "XPass D2 / XPass Q2", icon: "credit-card", desc: "Outdoor RFID and QR readers with IP67/IK10 rating for perimeter doors, gates, and turnstiles." },
      { name: "CoreStation 20", icon: "cpu", desc: "Intelligent controller for up to 64 doors. Offline-capable with secure I/O and Suprema CLUe integration." },
      { name: "Tiso Speed Gates", icon: "arrow-right", desc: "Full range of tripod, swing and full-height turnstiles. Stainless steel construction, custom RAL colors, Wiegand/OSDP ready." },
      { name: "Turboo Speed Gates", icon: "arrow-right", desc: "Premium bi-directional speed gates with brushless motors, anti-tailgating IR grids and tempered glass panels." },
      { name: "Mobile Access", icon: "smartphone", desc: "Issue, revoke, and manage employee credentials over the air on iOS and Android via NFC and BLE." }
    ],
    deployments: ["socar-polymer", "supreme-court", "atb-bank"],
    outcomes: [
      { t: "Unified Management", d: "Readers, wireless locks, turnstiles and mobile credentials — one console." },
      { t: "Turnstile Integration", d: "Tiso and Turboo lanes paired directly with Suprema readers for high-traffic lobbies." },
      { t: "Linear Scalability", d: "Grow from one door to multi-site enterprise without re-platforming." },
      { t: "Lower TCO", d: "Wireless locks cut cabling and labor on retrofits by up to 60%." }
    ]
  },
  {
    id: "video-analytics",
    num: "02",
    icon: "video",
    title: "Video Surveillance & AI Analytics",
    short: "Open-platform VMS with AI object, face and license-plate detection, behavioral analytics and smart search.",
    summary: "Open-platform video management from Network Optix (Nx EVOS / Nx Witness) and March Networks, layered with Incoresoft AI for face, LPR and behavioral analytics. 4M+ devices managed on Nx globally. SOC 2 certified. Hybrid cloud and edge architecture scaled from a single branch to a city.",
    overview: "Modern surveillance is a data problem. We deploy Network Optix Nx EVOS — an Enterprise Video OS managing 4M+ devices across 190 countries, SOC 2 certified — and March Networks Command for banking and retail environments. On top of the VMS we layer Incoresoft AI: face recognition (99%+ accuracy), LPR/ANPR at 120 km/h+, traffic counting, intrusion detection and loitering. Cameras run at the edge; analytics run where they make sense; archives sit in a tiered storage strategy. The result is a system that finds the moment you need in seconds, not hours.",
    features: [
      "Nx EVOS — Enterprise Video OS, 4M+ devices, SOC 2 certified",
      "Nx Witness VMS — open-platform, open SDK, any camera brand",
      "March Networks Command — banking and retail multi-site VMS",
      "Nx AI Manager — plug-in AI analytics pipeline",
      "Incoresoft VEZHA Face — 99%+ face recognition accuracy",
      "Incoresoft VEZHA Auto — ANPR/LPR at 120 km/h+",
      "Behavioral analytics: loitering, intrusion, crowding",
      "Smart search across hours of footage in seconds",
      "Hybrid cloud + edge architecture",
      "Multi-site federated monitoring"
    ],
    products: [
      { name: "Nx Witness VMS", icon: "monitor", desc: "Open-platform VMS on Nx EVOS. Lightning-fast instant time-jumps, lightweight clients, deep developer SDK. SOC 2 certified." },
      { name: "Nx AI Manager", icon: "brain", desc: "Plug-in AI analytics pipeline for Nx Witness — add any AI model without re-engineering the camera layer." },
      { name: "March Networks Command", icon: "server", desc: "Enterprise IP video for banks, retail and transportation — Searchlight POS exception linking and RideSafe in-vehicle video." },
      { name: "Incoresoft VEZHA Face", icon: "user", desc: "Production-grade face recognition at 99%+ accuracy. Integrates with Nx and March Networks feeds." },
      { name: "Incoresoft VEZHA Auto", icon: "credit-card", desc: "ANPR/LPR for vehicles at 120 km/h+. Real-time watchlist and traffic analytics." },
      { name: "Edge & NVR Storage", icon: "hard-drive", desc: "Tiered storage: hot edge cache, central NVR, cold archive — sized to your retention policy and budget." }
    ],
    deployments: ["socar-midstream", "supreme-court", "azertrans"],
    outcomes: [
      { t: "Proactive Security", d: "AI surfaces threats before they escalate, not after." },
      { t: "Faster Investigations", d: "Smart search drops review time from hours to minutes." },
      { t: "No Vendor Lock-in", d: "Open VMS keeps camera and analytics choice in your hands." },
      { t: "Business Intelligence", d: "Turn cameras into a sensor network for operations data." }
    ]
  },
  {
    id: "software-development",
    num: "03",
    icon: "code",
    title: "Custom Software & Integrations",
    short: "Bridge security hardware with HR, ERP, payroll and operational systems via APIs, SDKs and custom middleware. AI copilots powered by Claude. Workflow automation via n8n.",
    summary: "We build the integration layer between your security stack and the rest of the business: API and SDK work, HR and payroll sync, custom T&A logic, mobile apps, visitor management, AI copilots (Claude API) and n8n workflow automation.",
    overview: "Hardware is half the system. The other half is the integration layer that turns access events into payroll runs, visitor pre-registrations into welcome screens, and badge swipes into operational dashboards. Our team works in REST, GraphQL, vendor SDKs and message buses. We sync from SAP, Workday, Oracle and 1C; we build custom T&A logic; we ship mobile apps; and we build AI copilots on the Claude API — enterprise-tenancy, your data never trains the model. Everything runs as self-hosted n8n automations connecting CRM, ERP, security and SaaS in end-to-end flows.",
    features: [
      "RESTful API integration (BioStar X/2, Nx EVOS, Incoresoft)",
      "Custom HR / ERP / payroll middleware (SAP, Workday, Oracle, 1C)",
      "Automated user lifecycle (onboarding/offboarding)",
      "Claude API copilots — enterprise tenancy, GDPR-aligned",
      "n8n self-hosted workflow automation — 500+ integrations",
      "Custom T&A rules and reporting dashboards",
      "Visitor management integrations",
      "Mobile apps for guards, managers and employees"
    ],
    services: [
      { name: "HR & ERP Integration", icon: "git-merge", desc: "Auto-sync employee and role data from SAP, Workday, Oracle, or 1C directly to access control panels." },
      { name: "Custom T&A Rules", icon: "clock", desc: "Time and attendance logic tailored to your shifts, overtime policy and labor law — exported to payroll on schedule." },
      { name: "Claude AI Copilots", icon: "sparkles", desc: "Claude-powered assistants for document review, contract analysis, support triage and knowledge search — hosted in your tenancy." },
      { name: "n8n Automation", icon: "git-merge", desc: "Self-hosted n8n with custom nodes for BioStar 2, Nx Witness and March Networks — connecting security to HR, ERP and ITSM tools." }
    ],
    deployments: ["socar-polymer", "ministry", "azertrans"],
    outcomes: [
      { t: "Manual Work Eliminated", d: "Onboarding, offboarding and reporting move from spreadsheets to automated flows." },
      { t: "Real-time Sync", d: "HR changes propagate to access rights within seconds, not days." },
      { t: "AI-augmented Ops", d: "Claude copilots handle routine knowledge work; your team focuses on decisions." },
      { t: "Auditable Data", d: "Every event is logged, exportable, and ready for compliance." }
    ]
  },
  {
    id: "it-infrastructure",
    num: "04",
    icon: "server",
    title: "IT Infrastructure",
    short: "Network architecture, NGFW, SD-WAN with Peplink SpeedFusion, virtualization, SAMM Fotaş cabling and DELL servers for 24/7 operations.",
    summary: "Enterprise networking, security, and data-center foundations: L2/L3 switching, NGFW, Peplink SD-WAN with 5G/LTE failover, high-density Wi-Fi, DELL virtualization, SAN, DR/BCP, and SAMM Fotaş copper/fiber structured cabling.",
    overview: "Everything we deploy — biometrics, video, software — runs on a network. We design that network: L2/L3 switching, next-gen firewalls, Peplink SD-WAN with patented SpeedFusion bonding (zero-packet-loss failover for VoIP and video), 5G/LTE/Starlink aggregation for remote sites, high-density Wi-Fi, DELL PowerEdge servers with PowerStore all-flash storage, and SAMM Fotaş structured cabling certified to IEC/TIA standards. InControl 2 provides zero-touch provisioning and a single dashboard across all sites.",
    features: [
      "Network architecture & topology design",
      "Enterprise switching & routing (L2/L3)",
      "Next-Gen Firewalls (NGFW)",
      "Peplink SD-WAN with patented SpeedFusion bonding",
      "5G / LTE / Starlink multi-WAN aggregation and failover",
      "Peplink InControl 2 — zero-touch provisioning & central management",
      "DELL PowerEdge servers & PowerStore all-flash arrays",
      "SAMM Fotaş fiber optic & structured cabling (IEC/TIA certified)",
      "High-density Wi-Fi & site surveys",
      "Disaster Recovery & Business Continuity planning"
    ],
    partners: [
      { name: "Peplink", icon: "wifi", desc: "Patented SpeedFusion SD-WAN. Balance, MAX and SDX series bond 5G, LTE, fiber and Starlink into one unbreakable connection. InControl 2 manages all sites from one pane." },
      { name: "DELL Technologies", icon: "server", desc: "PowerEdge rack servers, PowerStore all-flash arrays, Precision workstations and Dell Networking switches — the compute backbone for our data center and VMS deployments." },
      { name: "SAMM Fotaş", icon: "cable", desc: "ISO 9001 certified Turkish manufacturer of fiber optic cables, patch panels, FDF frames and copper Cat6A cabling — installed to IEC and TIA/EIA standards." }
    ],
    deployments: ["socar-midstream", "lukoil", "north-west"],
    outcomes: [
      { t: "Uptime", d: "SpeedFusion bonding + redundant design survives any single WAN failure." },
      { t: "Zero-Trust Security", d: "Segmented networks and NGFW protect what matters most." },
      { t: "Performance at Scale", d: "Optimized for VoIP, high-density video and bandwidth-heavy workloads." },
      { t: "Single Pane of Glass", d: "Peplink InControl 2 gives central visibility and zero-touch provisioning." }
    ]
  }
];

const VENDORS = [
  {
    id: "physical-security",
    title: "Physical Security & Access Control",
    description: "World-class biometric and access control hardware for enterprise and government deployments.",
    vendors: [
      {
        name: "Suprema", short: "S", status: "Authorized Distributor", tagline: "Biometric Access Control",
        desc: "Suprema is a global leader in biometric access control and time attendance, certified to ISO 27001, ISO 27701, GDPR and NIS2. Their platform — BioStar X (on-prem) and BioStar Air (cloud) — manages face, fingerprint, RFID, mobile NFC/BLE and QR credentials from a single console. Deployed at SOCAR, ATB Bank and the Supreme Court of Azerbaijan.",
        highlights: ["#1 biometric access control globally by unit market share", "ISO 27001 / ISO 27701 / GDPR / NIS2 certified", "BioStar X: on-prem unified security platform", "BioStar Air: 100% cloud, zero on-prem infrastructure", "5,000+ integration partners worldwide"],
        products: ["BioStation 3", "BioStation 2a", "FaceStation F2", "BioEntry W3", "BioEntry W2", "BioEntry P2", "XPass 2", "XPass D2", "XPass Q2", "CoreStation 20", "BioStar X", "BioStar Air", "BioStar 2", "Mobile Access"],
        url: "https://www.supremainc.com"
      }
    ]
  },
  {
    id: "turnstiles",
    title: "Turnstiles & Access Gates",
    description: "Premium pedestrian access control gates for high-traffic lobbies, transit hubs and secure facilities.",
    vendors: [
      {
        name: "Tiso", short: "Ti", status: "Authorized Distributor", tagline: "Tripod & Speed Gates",
        desc: "Tiso manufactures a complete range of pedestrian access control equipment — from compact tripod turnstiles for basic control points to full-height speed gates with sliding or swing panels for high-security lobbies. Their product line integrates natively with Suprema biometric readers and standard Wiegand/OSDP controllers.",
        highlights: ["Full range: tripod, flap, swing and speed lane gates", "Native integration with Wiegand & OSDP readers", "Stainless steel and tempered glass construction", "Configurable lane widths for standard and wheelchair access", "Custom RAL colours and branding options available"],
        products: ["Tripod Turnstile", "Swing Gate", "Full-Height Turnstile", "Speed Lane (Flap barrier)", "Waist-high turnstile"],
        url: "https://tiso-turnstiles.com"
      },
      {
        name: "Turboo", short: "Tb", status: "Authorized Distributor", tagline: "Premium Speed Gates",
        desc: "Turboo specializes in premium bi-directional speed gates and swing barriers designed for corporate headquarters, airports and luxury facilities. Their gates feature ultra-quiet brushless motors, anti-tailgating infrared grids, tempered glass wing panels, and integrate with access control systems via standard dry contact, Wiegand and TCP/IP interfaces.",
        highlights: ["Ultra-quiet brushless motor technology", "Anti-tailgating multi-beam infrared grids", "Tempered glass and stainless steel panels", "Bi-directional control with failsafe open/close modes", "TCP/IP, Wiegand and dry-contact interfaces"],
        products: ["Speed Gate SG Series", "Swing Gate SW Series", "Bi-Directional Barrier", "ADA-compliant wide-lane gate"],
        url: "https://www.turboogate.com"
      }
    ]
  },
  {
    id: "video-surveillance",
    title: "Video Surveillance & VMS",
    description: "Open-platform video management and intelligent video solutions trusted at city scale.",
    vendors: [
      {
        name: "Network Optix", short: "Nx", status: "Certified Partner", tagline: "Enterprise Video OS",
        desc: "Network Optix built Nx EVOS — an Enterprise Video Operating System combining intelligent video with AI-driven operational insights. Nx Witness VMS runs on Nx EVOS and manages 4M+ devices across 190 countries. SOC 2 certified, open SDK, and used from single sites to city-scale smart deployments.",
        highlights: ["4M+ devices managed across 190 countries", "SOC 2 Type II certified", "Nx EVOS: open, scalable Enterprise Video OS", "Nx AI Manager: plug-in AI analytics pipeline", "Deep developer SDK — custom integrations in days"],
        products: ["Nx EVOS", "Nx Witness VMS", "Nx Go (mobile surveillance)", "Nx AI Manager", "Nx Toolkit SDK"],
        url: "https://www.networkoptix.com"
      },
      {
        name: "March Networks", short: "MN", status: "Integration Partner", tagline: "Enterprise IP Video",
        desc: "March Networks delivers enterprise IP video surveillance and business intelligence for banks, retailers and transportation networks worldwide. Their Command VMS platform combines multi-site video management with Searchlight analytics that links camera footage to POS transaction data for loss prevention.",
        highlights: ["Purpose-built for banking, retail and transportation", "Searchlight: POS exception linking for loss prevention", "RideSafe: in-vehicle surveillance for transit fleets", "Long-term retention with cost-optimized archive tiers", "Certified integration with major IP camera manufacturers"],
        products: ["Command Enterprise VMS", "Searchlight Business Intelligence", "RideSafe Mobile Video", "ME6 / ME16 NVR series"],
        url: "https://www.marchnetworks.com"
      }
    ]
  },
  {
    id: "security-software",
    title: "Security Software & Analytics",
    description: "AI-driven analytics, visitor management and security integration platforms.",
    vendors: [
      {
        name: "Incoresoft", short: "IC", status: "Integration Partner", tagline: "AI Video Analytics",
        desc: "Incoresoft develops production-grade AI analytics for video — face recognition (VEZHA Face), license plate recognition (VEZHA Auto), traffic counting and behavioral analysis. Their platform integrates directly with Nx Witness and March Networks VMS feeds and powers smart-city deployments across the CIS region.",
        highlights: ["Face recognition: 99%+ accuracy in production environments", "ANPR/LPR for vehicles at 120 km/h+", "Real-time behavioral analytics: loitering, crowding, intrusion", "Plug-in integration with Nx Witness and March Networks", "On-premise and hybrid deployment — data stays local"],
        products: ["VEZHA Face Recognition", "VEZHA Auto (ANPR/LPR)", "People Counting & Heatmaps", "Visitor Management Portal", "Behavioral Analytics Engine"],
        url: "https://incoresoft.com"
      }
    ]
  },
  {
    id: "networking",
    title: "Networking & Infrastructure",
    description: "Enterprise connectivity, SD-WAN, and structured cabling solutions for resilient networks.",
    vendors: [
      {
        name: "Peplink", short: "P", status: "Certified Partner", tagline: "SD-WAN & Supercharged Connectivity",
        desc: "Peplink makes connectivity reliable for tens of thousands of customers in the world's most challenging environments. Their patented SpeedFusion technology bonds multiple WAN links (fiber, 4G/5G, Starlink, satellite) into one unbreakable pipe — zero-packet-loss failover for VoIP, video streaming and mission-critical apps. InControl 2 provides zero-touch provisioning and a single pane of glass for distributed sites.",
        highlights: ["Patented SpeedFusion WAN bonding — zero-packet-loss failover", "Balance, SDX, MAX and BR series for every deployment scale", "5G, LTE, Starlink and satellite aggregation in one device", "InControl 2: zero-touch provisioning + central management", "Recognized SD-WAN leader for enterprise and public safety"],
        products: ["Balance 580X", "Balance 310", "SDX series", "MAX series (5G/LTE)", "BR Pro series", "SpeedFusion", "InControl 2", "eSIM Data Plans"],
        url: "https://www.peplink.com"
      },
      {
        name: "SAMM Fotaş", short: "SF", status: "Authorized Distributor", tagline: "Fiber & Structured Cabling",
        desc: "SAMM Fotaş is a leading Turkish manufacturer of fiber optic cables, structured cabling and passive infrastructure components. Their products are manufactured to ISO 9001 and IEC standards and form the physical backbone of our enterprise and industrial installations — from data centers to offshore facilities.",
        highlights: ["ISO 9001 certified manufacturing in Turkey", "Full passive infrastructure portfolio — copper and fiber", "Compliant with IEC, EN and TIA/EIA standards", "Products stocked regionally for fast project delivery", "Customizable cable configurations for industrial environments"],
        products: ["Single-mode & multimode fiber optic cables", "Patch panels & keystone jacks", "Fiber distribution frames (FDF)", "Racks, cabinets & cable management", "Copper Cat6A structured cabling"],
        url: "https://www.sammfotas.com"
      }
    ]
  },
  {
    id: "it-hardware",
    title: "IT Hardware & Compute",
    description: "Enterprise servers, workstations, and endpoint hardware powering business operations.",
    vendors: [
      {
        name: "DELL Technologies", short: "D", status: "Authorized Partner", tagline: "Servers, Storage & Endpoints",
        desc: "DELL Technologies provides the compute and storage backbone for our enterprise deployments — from PowerEdge rack servers running virtualized security workloads, to PowerStore all-flash arrays for video archive and VMS databases, to Precision workstations for operations centers and Latitude / OptiPlex endpoints.",
        highlights: ["PowerEdge: industry-leading server reliability and density", "PowerStore: all-flash array for high-IOPS workloads", "OpenManage: centralized server lifecycle management", "VMware and Windows Server certified configurations", "Direct warranty and support escalation via DELL account team"],
        products: ["PowerEdge R-series rack servers", "PowerStore all-flash arrays", "PowerVault NAS storage", "Precision workstations", "Latitude & OptiPlex endpoints", "Dell Networking switches"],
        url: "https://www.dell.com"
      }
    ]
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description: "Modern AI assistants and workflow automation for enterprise productivity.",
    vendors: [
      {
        name: "Claude (Anthropic)", short: "C", status: "Integration Partner", tagline: "Enterprise AI",
        desc: "Anthropic's Claude is a frontier AI assistant designed for safety and enterprise use. We integrate the Claude API into customer workflows — document review, knowledge search, contract analysis, customer support triage — hosted in the customer's own tenancy. Claude does not train on customer inputs.",
        highlights: ["Frontier reasoning across text, documents and code", "Enterprise tenancy: your data never trains the model", "Available via API and Claude for Enterprise", "Integrates with Slack, Teams, CRM and custom portals", "GDPR-aligned data handling and retention controls"],
        products: ["Claude API", "Claude for Enterprise", "Custom copilot builds", "RAG over internal documents"],
        url: "https://www.anthropic.com"
      },
      {
        name: "n8n", short: "n8n", status: "Integration Partner", tagline: "Workflow Automation",
        desc: "n8n is a source-available workflow automation platform we deploy self-hosted on customer infrastructure. We build custom nodes for BioStar 2, Nx Witness and March Networks, then connect them to HR, ERP, CRM and ITSM tools — so access provisioning, alarm escalation and reporting happen automatically.",
        highlights: ["Self-hosted: your data never leaves your environment", "500+ built-in integrations — SAP, Salesforce, ServiceNow and more", "Custom nodes for BioStar 2, Nx Witness, March Networks", "AI workflow support: Claude + n8n for intelligent automation", "Visual editor + code mode for complex business logic"],
        products: ["Self-hosted n8n", "Custom nodes", "AI-enhanced workflows", "Monitoring & alerting pipelines"],
        url: "https://n8n.io"
      }
    ]
  }
];

const INDUSTRIES = [
  { id: "government", icon: "landmark", title: "Government & Public Sector", tagline: "Mission-critical security for ministries, courts and municipal facilities.", challenges: ["Strict access control for sensitive areas and VIP zones", "Compliance with government security and data protection standards", "Unified monitoring across multiple buildings and agencies"], solutions: ["Biometric access with face recognition at all entry points", "Multi-zone hierarchical access policies with full audit logs", "AI video analytics and perimeter intrusion detection", "Segregated, NGFW-protected networking with VPN"], tech: ["BioStation 3", "FaceStation F2", "Network Optix", "Incoresoft", "Peplink"] },
  { id: "energy", icon: "zap", title: "Energy, Oil & Gas", tagline: "Harsh-environment security and communications for upstream, midstream and offshore.", challenges: ["Perimeter protection for industrial sites and pipelines", "Explosion-proof and IP67-rated hardware for outdoor/offshore", "Always-on connectivity at remote and offshore locations"], solutions: ["Ruggedized outdoor biometric and RFID terminals", "Multi-site VMS with AI intrusion and loitering detection", "SD-WAN with 5G/LTE failover for remote facilities", "T&A integration with HR and payroll systems"], tech: ["XPass 2", "CoreStation", "Peplink SD-WAN", "Network Optix", "DELL"] },
  { id: "banking", icon: "building", title: "Banking & Finance", tagline: "Layered security for branches, vaults and data centers.", challenges: ["Dual-factor authentication for vaults and server rooms", "Long-term video retention per banking regulation", "Unified identity management across branches"], solutions: ["Biometric + RFID dual authentication for high-security zones", "Enterprise VMS with long-term retention and fast search", "AI face recognition for fraud and VIP detection", "Redundant networking with high-availability SD-WAN"], tech: ["BioStation 3", "BioEntry W2", "March Networks", "Incoresoft", "Peplink"] },
  { id: "industrial", icon: "factory", title: "Industrial & Manufacturing", tagline: "Plant security, workforce tracking and operational continuity.", challenges: ["Multi-zone factory and warehouse access", "Shift-based T&A for hundreds of workers", "Connecting legacy OT systems to modern IT monitoring"], solutions: ["Large-scale biometric access on BioStar 2", "Automated T&A with HR and payroll integration", "Video analytics for PPE compliance and incidents", "Industrial cabling and fiber backbones"], tech: ["XPass D2", "CoreStation", "BioStar 2", "SAMM Fotaş", "Network Optix"] },
  { id: "retail", icon: "shopping-bag", title: "Retail & Hospitality", tagline: "Customer experience, loss prevention and multi-site operations.", challenges: ["Loss prevention without disrupting customer experience", "People counting and behavioral analytics for merchandising", "Centralized management across multiple locations"], solutions: ["AI video analytics for theft detection and heatmaps", "Face recognition for VIP and watchlist alerts", "Cloud VMS with multi-site dashboards", "Guest Wi-Fi over reliable SD-WAN"], tech: ["March Networks", "Incoresoft", "Network Optix", "Peplink"] },
  { id: "healthcare", icon: "heart", title: "Healthcare", tagline: "Patient safety, restricted access and staff workflow.", challenges: ["Restricted access to labs, pharmacies and ORs", "Hygienic touchless authentication for clinical staff", "Patient safety monitoring and incident response"], solutions: ["Touchless face recognition access control", "Video analytics for fall detection and wandering", "HIPAA-aligned networking and data segregation", "T&A integrated with hospital HR"], tech: ["FaceStation F2", "BioStar 2", "Network Optix", "Incoresoft"] },
  { id: "corporate", icon: "briefcase", title: "Corporate Offices", tagline: "Smart workplace, hybrid work and enterprise productivity.", challenges: ["Frictionless office access for employees and visitors", "Meeting room and workspace optimization", "Reducing repetitive operational work"], solutions: ["Mobile-credential biometric access", "Visitor management with pre-registration", "AI copilots and workflow automation (Claude, n8n)", "Full enterprise IT stack: servers, Wi-Fi, SD-WAN"], tech: ["Mobile Access", "Incoresoft", "DELL", "Claude", "n8n"] },
  { id: "logistics", icon: "truck", title: "Logistics & Transportation", tagline: "Fleet, depot and cargo security with always-on connectivity.", challenges: ["Secure access to depots, yards and warehouses", "Real-time video and telemetry from mobile assets", "Connectivity resilience across distributed sites"], solutions: ["Biometric and RFID at gates and depots", "Mobile VMS for fleet and in-vehicle surveillance", "Multi-WAN bonding for field connectivity", "AI license-plate recognition (ANPR)"], tech: ["XPass 2", "March Networks", "Peplink", "Incoresoft"] }
];

const PROJECTS = [
  { slug: "socar-polymer", client: "SOCAR Polymer", category: "Industrial", system: "Enterprise Access & Integration", deviceCount: "100+ Devices", logo: "assets/logos/socar-polymer.png", desc: "Designed and deployed a large-scale biometric access control and time attendance system at the SOCAR Polymer industrial facility, ensuring complete security and attendance automation across the plant.", details: ["47 Suprema XPass D2 RFID readers across all perimeter and internal access points", "52 Suprema CoreStation central controllers for distributed door management", "BioStar 2 platform for centralized access control and reporting", "Integration with SOCAR's internal 2HR system for real-time T&A sync", "Multi-zone access rules with strict safety policies"], tech: "CoreStation, XPass D2, BioStar 2" },
  { slug: "supreme-court", client: "Supreme Court of Azerbaijan", category: "Government", system: "High-Security Biometric Access", deviceCount: "18+ Terminals", logo: "assets/logos/supreme-court.png", desc: "Delivered and configured a high-security biometric access control and time attendance system for the Supreme Court of Azerbaijan, ensuring compliance with strict access protocols.", details: ["6 Suprema FaceStation F2 facial recognition terminals", "12 Suprema XPass 2 RFID readers", "Multi-zone access control via BioStar 2", "Role-based access for judges, staff and visitors", "Full T&A with overtime tracking"], tech: "FaceStation F2, XPass 2, BioStar 2" },
  { slug: "ministry", client: "Ministry of Taxes & Finance", category: "Government", system: "Unified Inter-Agency Access", deviceCount: "15+ BioStations", logo: null, desc: "Implemented a unified biometric access control and time attendance solution across two major governmental institutions — the Ministry of Taxes and the Ministry of Finance.", details: ["15 Suprema BioStation 3 facial recognition terminals at entry points", "Centralized BioStar 2 across multiple buildings", "T&A integrated with department-specific schedules", "Tailored access policies for departments and VIP areas"], tech: "BioStation 3, BioStar 2" },
  { slug: "socar-midstream", client: "SOCAR Midstream", category: "Energy", system: "Enterprise Access Control", deviceCount: "35+ Devices", logo: "assets/logos/socar-midstream.png", desc: "Led the deployment of an enterprise-level biometric access control and time attendance system at SOCAR Midstream's corporate offices.", details: ["30 Suprema XPass D2 RFID readers across key access points", "5 Suprema CoreStation units for centralized management", "BioStar 2 platform for real-time access control", "T&A with shifts and overtime policies", "Department-level access restrictions"], tech: "XPass D2, CoreStation, BioStar 2" },
  { slug: "azertrans", client: "Azertrans", category: "Logistics", system: "Comprehensive Access & T&A", deviceCount: "20+ Terminals", logo: null, desc: "Designed and implemented a full-featured biometric access control and time attendance solution for Azertrans, a major logistics provider.", details: ["8 Suprema BioStation 3 facial recognition terminals", "8 Suprema BioEntry P2 fingerprint readers", "4 Suprema Secure I/O modules for secure door control", "BioStar 2 platform with shift configurations", "Multi-zone access control"], tech: "BioStation 3, BioEntry P2, Secure I/O" },
  { slug: "north-west", client: "North West Construction", category: "Industrial", system: "Biometric Access & Attendance", deviceCount: "12+ Devices", logo: null, desc: "Delivered a reliable biometric access control and time attendance system for North West Construction's administrative office.", details: ["8 Suprema BioStation 3 facial recognition terminals", "3 Suprema XPass 2 RFID readers", "1 Suprema CoreStation controller", "BioStar 2 software for full ACS + T&A", "Shift-based time tracking with automated logs"], tech: "BioStation 3, XPass 2, CoreStation" },
  { slug: "atb-bank", client: "ATB Bank", category: "Banking", system: "Secure Biometric Solution", deviceCount: "10+ Terminals", logo: "assets/logos/atb-bank.png", desc: "Delivered a secure biometric access control and time attendance solution for ATB Bank using Suprema technologies, enhancing physical security at branch and office entry points.", details: ["6 Suprema BioStation 3 facial recognition terminals", "4 Suprema BioEntry W2 fingerprint readers", "BioStar 2 with advanced access zone configuration", "Centralized user management by department", "Integration with security and visitor protocols"], tech: "BioStation 3, BioEntry W2" },
  { slug: "lukoil", client: "Lukoil Shahdeniz", category: "Energy", system: "Offshore Access Control", deviceCount: "8+ Devices", logo: "assets/logos/lukoil.png", desc: "Implemented a secure access control system for Lukoil Shahdeniz's offshore facility using Suprema hardware, strengthening site access and personnel control under industrial safety standards.", details: ["4 Suprema BioStation 3 facial recognition terminals", "4 Suprema XPass 2 RFID readers", "BioStar 2 platform for centralized rights", "Multi-zone access rules for personnel safety"], tech: "BioStation 3, XPass 2" },
  { slug: "azdent", client: "Azdent", category: "Healthcare", system: "Facial Recognition Access", deviceCount: "Facility-wide", logo: null, desc: "Implemented a Suprema-based biometric access control and time attendance system for Azdent, improving security and streamlining attendance management.", details: ["Facial recognition terminals at all entry points", "BioStar 2 software for centralized management", "T&A setup for accurate work-hour tracking", "User groups, shift schedules and access rights", "HR and security team training"], tech: "Suprema Facial Recognition, BioStar 2" },
  { slug: "cinema-plus", client: "Cinema+", category: "Retail", system: "Staff Management System", deviceCount: "Compact Setup", logo: null, desc: "Implemented a compact biometric access control and time attendance solution for Cinema+ staff management.", details: ["2 Suprema fingerprint readers (BioEntry series)", "BioStar 2 for rights and logs", "Role-based access zones for staff and back-office", "Automated T&A with reporting tools"], tech: "BioEntry, BioStar 2" }
];

const TRUST_LOGOS = [
  { name: "SOCAR Polymer", src: "assets/logos/socar-polymer.png" },
  { name: "Supreme Court", src: "assets/logos/supreme-court.png" },
  { name: "ATB Bank", src: "assets/logos/atb-bank.png" },
  { name: "Lukoil", src: "assets/logos/lukoil.png" },
  { name: "SOCAR Midstream", src: "assets/logos/socar-midstream.png" },
  { name: "Ziraat Bank", src: "assets/logos/ziraat-bank.png" },
  { name: "Four Seasons", src: "assets/logos/four-seasons.png" },
  { name: "Holiday Inn", src: "assets/logos/holiday-inn.png" },
  { name: "Iteca", src: "assets/logos/iteca.png" },
  { name: "Nobel Energy", src: "assets/logos/nobel-energy.png" },
  { name: "Landau", src: "assets/logos/landau.png" },
  { name: "Eurodesign", src: "assets/logos/eurodesign.png" }
];

const PROJECT_FILTERS = ["All", "Government", "Energy", "Banking", "Industrial", "Logistics", "Healthcare", "Retail"];

/* Outcome-packaged SOLUTIONS — bundles of products + integration assembled
   around a real operational problem. Some draw from existing pillars,
   some are new compositions we offer. */
const SOLUTIONS = [
  {
    id: "smart-workplace",
    icon: "briefcase",
    category: "Workplace",
    title: "Smart Workplace Access",
    pitch: "Frictionless, mobile-first office access for hybrid teams.",
    overview: "A complete access experience for the modern office: mobile credentials issued from your HR system, face-recognition for VIP and executive zones, visitor pre-registration, meeting-room booking integration, and a unified audit trail. Cuts badge admin to zero and gives facilities a real occupancy signal.",
    includes: [
      "Suprema BioStation 3 + FaceStation F2 at primary entries",
      "Mobile credential rollout (NFC + BLE) tied to Active Directory",
      "Visitor pre-registration portal with QR codes",
      "Meeting-room booking integration (Outlook / Google)",
      "Custom occupancy & utilization dashboard"
    ],
    outcomes: [
      { t: "Zero badge admin", d: "Credentials issued and revoked automatically from HR." },
      { t: "Visitor experience", d: "Self-service kiosks and pre-registered QR codes." },
      { t: "Real occupancy data", d: "Live floor utilization for facilities planning." }
    ],
    industries: ["Corporate", "Banking"],
    pillars: ["physical-security", "software-development"]
  },
  {
    id: "perimeter-protection",
    icon: "shield",
    category: "Industrial",
    title: "Perimeter & Site Protection",
    pitch: "AI-powered perimeter for industrial, energy, and logistics sites.",
    overview: "Layered perimeter defense for fenced facilities — pipelines, depots, plants, ports. Thermal and visible-light cameras feed AI analytics that distinguish humans from animals, vehicles from drones, and trigger response workflows automatically. Ruggedized biometric gates control access for crews.",
    includes: [
      "Outdoor IP67/IK10 cameras with thermal pairing",
      "Incoresoft AI: intrusion, loitering, climbing, vehicle classification",
      "ANPR (license plate recognition) at vehicle gates",
      "Suprema XPass D2 at personnel gates and turnstiles",
      "SD-WAN failover for remote-site uplinks"
    ],
    outcomes: [
      { t: "True alarms only", d: "AI filters wildlife, weather, and shadows out of the alert stream." },
      { t: "Faster response", d: "Geo-tagged events route to the right responder in seconds." },
      { t: "Audit ready", d: "Every alarm + video clip + response action logged." }
    ],
    industries: ["Energy", "Industrial", "Logistics"],
    pillars: ["video-analytics", "physical-security", "it-infrastructure"]
  },
  {
    id: "vault-secure-zone",
    icon: "lock",
    category: "Banking",
    title: "Vault & Secure Zone",
    pitch: "Multi-factor access for vaults, cash rooms and server cages.",
    overview: "The strictest access tier we deploy. Two-person rule, time windows, biometric-plus-RFID dual factor, dedicated logging, and tamper-resistant hardware. Designed for bank vaults, cash-handling rooms, evidence storage, and Tier-IV server cages.",
    includes: [
      "Dual authentication: BioEntry W2 + RFID at every door",
      "Two-person rule enforcement in BioStar 2",
      "Time-window restrictions tied to operational schedule",
      "Dedicated CoreStation controller (offline-capable)",
      "Tamper detection + integrated CCTV pairing"
    ],
    outcomes: [
      { t: "Compliance", d: "Meets bank-grade access regulation across CIS markets." },
      { t: "Insider control", d: "Two-person rule eliminates single-actor risk." },
      { t: "Forensic detail", d: "Every event paired with synced video clip." }
    ],
    industries: ["Banking", "Government"],
    pillars: ["physical-security", "video-analytics"]
  },
  {
    id: "workforce-attendance",
    icon: "clock",
    category: "Workforce",
    title: "Workforce & Time Attendance",
    pitch: "Biometric T&A integrated with payroll for shift workforces.",
    overview: "End-to-end workforce management for plants, warehouses, and multi-site organizations. Biometric clock-in resists buddy-punching; custom shift logic handles your overtime, breaks and night-differential rules; data exports straight to SAP, Workday, Oracle or 1C with no spreadsheets in between.",
    includes: [
      "Suprema BioStation 3 / BioEntry P2 at clock-in points",
      "Custom T&A engine — shift, overtime and labor-law rules",
      "HR / ERP middleware (SAP, Workday, Oracle, 1C)",
      "Mobile app for managers — approvals, exceptions, reports",
      "Compliance-ready audit logs and reporting"
    ],
    outcomes: [
      { t: "No buddy-punching", d: "Biometric clock-in eliminates a 2–5% payroll leak." },
      { t: "Hours saved", d: "Manual T&A processing drops to near zero." },
      { t: "Payroll accuracy", d: "Errors and disputes fall by 70–90%." }
    ],
    industries: ["Industrial", "Logistics", "Retail", "Healthcare"],
    pillars: ["physical-security", "software-development"]
  },
  {
    id: "branch-connectivity",
    icon: "wifi",
    category: "Connectivity",
    title: "Always-On Branch Connectivity",
    pitch: "SD-WAN with 5G/LTE failover for retail, banking and field sites.",
    overview: "Mission-critical connectivity for distributed organizations — branches, retail stores, oil-and-gas field sites, ATMs, mobile command posts. Peplink SD-WAN bonds multiple WAN links (fiber + 4G/5G) so any single failure is invisible to users. Centralized policy, secure VPN, and zero-touch deployment.",
    includes: [
      "Peplink Balance / MAX series at every site",
      "SpeedFusion bonding for mission-critical apps (POS, VoIP, video)",
      "5G / LTE failover and out-of-band management",
      "Centralized InControl 2 dashboard",
      "Zero-touch site provisioning"
    ],
    outcomes: [
      { t: "99.99% uptime", d: "Multi-WAN bonding survives any single-link failure." },
      { t: "VoIP that just works", d: "SpeedFusion eliminates dropped calls during failover." },
      { t: "One pane of glass", d: "Every site visible from one dashboard." }
    ],
    industries: ["Banking", "Retail", "Energy", "Logistics"],
    pillars: ["it-infrastructure"]
  },
  {
    id: "vms-multi-site",
    icon: "video",
    category: "Surveillance",
    title: "Multi-Site Video Operations",
    pitch: "Federated VMS across branches, plants and city districts.",
    overview: "When you have more than five sites, point VMS deployments stop scaling. We deploy Network Optix or March Networks in a federated topology — each site runs locally, but a central operations team can search, review and dispatch across the entire estate. Tiered storage keeps long-retention costs down.",
    includes: [
      "Network Optix or March Networks VMS (multi-site mode)",
      "Tiered storage: edge cache → site NVR → central archive",
      "Federated user roles and access policies",
      "Smart search across sites with metadata indexing",
      "Operational dashboards and exception alerting"
    ],
    outcomes: [
      { t: "Find anything in seconds", d: "Smart search drops review time from hours to minutes." },
      { t: "Storage you can afford", d: "Tiered architecture cuts retention costs 40–60%." },
      { t: "One operations team", d: "Central monitoring across the entire estate." }
    ],
    industries: ["Banking", "Retail", "Government", "Logistics"],
    pillars: ["video-analytics", "it-infrastructure"]
  },
  {
    id: "ai-copilot-enterprise",
    icon: "sparkles",
    category: "AI",
    title: "Enterprise AI Copilots",
    pitch: "Claude-powered copilots that automate document, support and ops work.",
    overview: "We design, build and host AI copilots tuned to your business — document review, customer support triage, internal knowledge search, contract analysis. Built on Claude with retrieval over your own data, hosted in your tenancy, integrated into the tools your team already uses (Slack, Teams, Outlook, your CRM).",
    includes: [
      "Claude API integration with retrieval over your documents",
      "Slack / Teams / Outlook / CRM connectors",
      "Custom prompts and guardrails per use case",
      "Evaluation harness and monitoring",
      "Self-hosted or your tenancy — your data stays yours"
    ],
    outcomes: [
      { t: "Hours back per person per week", d: "Routine knowledge work shifts to the copilot." },
      { t: "Faster response", d: "Customer support and internal queries answered instantly." },
      { t: "Your data stays yours", d: "No training on your inputs, no public exposure." }
    ],
    industries: ["Corporate", "Banking", "Government"],
    pillars: ["software-development"]
  },
  {
    id: "workflow-automation",
    icon: "git-merge",
    category: "Automation",
    title: "Workflow Automation Hub",
    pitch: "n8n-based automation tying CRM, ERP, security, and SaaS together.",
    overview: "We deploy a self-hosted n8n instance on your infrastructure and build the automations that connect the systems that should already be talking — onboarding flows from HR to access control, alarms from the VMS into ServiceNow, leads from the website into the CRM. New employee on Monday = badge, email, laptop ticket, Slack invite, all without a single ticket.",
    includes: [
      "Self-hosted n8n with HA configuration",
      "Custom nodes for BioStar 2, Nx Witness, March Networks",
      "Connectors to your HR, ERP, CRM, and ITSM tools",
      "Approval workflows and human-in-the-loop steps",
      "Monitoring, logging and version control"
    ],
    outcomes: [
      { t: "Tickets reduced 60–80%", d: "Cross-system handoffs become invisible." },
      { t: "Onboarding in minutes", d: "Day-one provisioning fully automated." },
      { t: "Open and yours", d: "Self-hosted, source-available, no vendor lock." }
    ],
    industries: ["Corporate", "Banking", "Industrial"],
    pillars: ["software-development", "it-infrastructure"]
  },
  {
    id: "smart-city-block",
    icon: "landmark",
    category: "Government",
    title: "Smart City Block",
    pitch: "Public-space surveillance, ANPR and incident dispatch for districts.",
    overview: "A turnkey package for municipalities and public-safety agencies: street-level cameras with on-edge ANPR, face-watchlist matching against authorized lists, event-driven dispatch into an operations center, and structured archive that respects retention policy. Designed for blocks, neighborhoods and intersection corridors — scales upward.",
    includes: [
      "High-density street and intersection IP cameras",
      "Edge ANPR for every entry/exit corridor",
      "Watchlist face matching with operator review",
      "Operator workstations and large-display video wall",
      "Long-term archive with rapid forensic retrieval"
    ],
    outcomes: [
      { t: "Faster incident resolution", d: "ANPR + video gives investigators a five-minute head start." },
      { t: "Public-safety visibility", d: "City operations team sees what's happening in real time." },
      { t: "Compliant by design", d: "Retention windows and watchlist governance built in." }
    ],
    industries: ["Government"],
    pillars: ["video-analytics", "it-infrastructure"]
  },
  {
    id: "data-center-foundation",
    icon: "server",
    category: "Infrastructure",
    title: "Data Center Foundation",
    pitch: "End-to-end build for new on-prem and edge data centers.",
    overview: "When you're building a new data center — primary, DR site, or edge node — we deliver the full stack: structured cabling and fiber, racks and PDUs, DELL servers and storage, switching, NGFW, and the access control + CCTV that keeps it physically secure. One integrator, one BoM, one accountable team.",
    includes: [
      "SAMM Fotaş structured cabling and fiber backbone",
      "DELL PowerEdge servers and PowerStore storage",
      "Enterprise switching and Next-Gen Firewall",
      "Biometric access at man-trap and cage doors",
      "CCTV with archive integrated into VMS"
    ],
    outcomes: [
      { t: "One accountable partner", d: "No finger-pointing across vendors when something fails." },
      { t: "Designed for uptime", d: "Redundancy at every layer — power, network, compute." },
      { t: "Compliance-aligned", d: "ISO 27001, PCI DSS, and data-residency considerations baked in." }
    ],
    industries: ["Banking", "Government", "Energy"],
    pillars: ["it-infrastructure", "physical-security", "video-analytics"]
  },
  {
    id: "healthcare-clean-zone",
    icon: "heart",
    category: "Healthcare",
    title: "Healthcare Clean-Zone Access",
    pitch: "Touchless, hygienic access for ORs, labs, and pharmacies.",
    overview: "Hospitals need access that's hygienic, fast, and auditable — without slowing clinical staff. We deploy touchless face recognition at clean zones, dual-factor at pharmacies, and integrate the audit trail with your hospital information system. Compatible with PPE (mask, hair cover, surgical gown).",
    includes: [
      "FaceStation F2 with mask + PPE recognition",
      "Touchless wave-to-open at clean entries",
      "Dual-factor at pharmacy and controlled-substance rooms",
      "HIS/EMR integration for audit trails",
      "Anti-microbial hardware finishes where required"
    ],
    outcomes: [
      { t: "Hygienic by design", d: "No touching shared surfaces in clean zones." },
      { t: "Workflow-friendly", d: "Recognizes staff with masks, head covers and gowns." },
      { t: "Audit-ready", d: "Every access tied to an authenticated clinical identity." }
    ],
    industries: ["Healthcare"],
    pillars: ["physical-security", "software-development"]
  },
  {
    id: "retail-loss-prevention",
    icon: "shopping-bag",
    category: "Retail",
    title: "Retail Loss Prevention & Insight",
    pitch: "Theft detection, people counting and merchandising heatmaps.",
    overview: "Cameras in retail stores can do more than record incidents — they can tell you which displays draw attention, which aisles get skipped, and when a known shoplifter walks in. We deploy March Networks VMS with Incoresoft analytics to deliver loss prevention plus merchandising intelligence in one system.",
    includes: [
      "March Networks VMS with multi-store federation",
      "Incoresoft analytics: theft detection, dwell, heatmaps",
      "Watchlist face matching for known shoplifters",
      "POS exception linking — voids, refunds, no-sale events",
      "Weekly performance reports per store"
    ],
    outcomes: [
      { t: "Shrink reduced", d: "Theft and POS exceptions caught in near real-time." },
      { t: "Merchandising data", d: "Heatmaps drive layout and pricing decisions." },
      { t: "Multi-store control", d: "One operations team across the whole chain." }
    ],
    industries: ["Retail"],
    pillars: ["video-analytics", "software-development"]
  }
];

const SOLUTION_CATEGORIES = ["All", "Workplace", "Industrial", "Banking", "Workforce", "Connectivity", "Surveillance", "AI", "Automation", "Government", "Infrastructure", "Healthcare", "Retail"];

Object.assign(window, { SERVICES, VENDORS, INDUSTRIES, PROJECTS, TRUST_LOGOS, PROJECT_FILTERS, SOLUTIONS, SOLUTION_CATEGORIES });
