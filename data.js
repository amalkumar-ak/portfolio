/**
 * ╔══════════════════════════════════════════════════════╗
 * ║           PORTFOLIO DATA — EDIT THIS FILE ONLY       ║
 * ║   All sections are modular. Just update the values   ║
 * ║   below and your portfolio updates automatically.    ║
 * ╚══════════════════════════════════════════════════════╝
 */

const PORTFOLIO = {

  /* ════════════════════════════════════════
     META / HERO SECTION
     ════════════════════════════════════════ */
  meta: {
    pageTitle:    "Amalkumar Uthanattu Sunil | Azure DevOps Engineer",
    description:  "Azure DevOps Engineer at IBM. CI/CD, Terraform IaC, AKS, DevSecOps, Azure Pipelines, Observability.",
    name:         "Amalkumar Uthanattu Sunil",
    initials:     "AU",
    shortName:    "Amalkumar",        // Used in nav bar logo
    role:         "Azure DevOps Engineer",
    company:      "IBM",
    location:     "Hyderabad, India",
    email:        "amalkumar528@gmail.com",
    phone:        "+91-9492454800",
    github:       "https://github.com",                          // Placeholder — update when ready
    linkedin:     "https://linkedin.com/in/usamalkumar",
    website:      "",                                            // Your portfolio URL once deployed
    resumePdf:    "assets/resume/resume.pdf",
    badge:        "Open to Opportunities · Azure DevOps Engineer",
    tagline:      "Azure DevOps Engineer with <strong>6+ years</strong> designing scalable CI/CD pipelines, Terraform-driven IaC, and AKS workloads on Microsoft Azure. Driving DevSecOps, disaster recovery & cost optimization at <strong>IBM</strong>. ☁️",
  },

  /* ════════════════════════════════════════
     HERO STATS (animated counters)
     ════════════════════════════════════════ */
  stats: [
    { value: 6,  suffix: "+",  label: "Years Exp."    },
    { value: 2,  suffix: "",   label: "Companies"     },
    { value: 20, suffix: "+",  label: "Technologies"  },
    { value: 85, suffix: "%",  label: "Deploy Time ↓" },
  ],

  /* ════════════════════════════════════════
     MARQUEE — scrolling tech ticker
     ════════════════════════════════════════ */
  marquee: [
    "☁️ Microsoft Azure",
    "🚀 Azure DevOps",
    "🏗️ Terraform",
    "☸️ Azure Kubernetes Service",
    "🐳 Docker",
    "⛵ Helm",
    "⚡ Function Apps",
    "🔄 Logic Apps",
    "🏭 Azure Data Factory",
    "🛟 Azure Site Recovery",
    "🔐 Entra ID",
    "🛡️ PIM & Custom RBAC",
    "🔎 Checkmarx",
    "✅ SonarQube",
    "🌐 Application Gateway",
    "🗝️ Key Vault",
    "📊 Prometheus",
    "📈 Grafana",
    "🔔 Alertmanager",
    "📡 Azure Monitor",
    "🐧 Linux",
    "🔀 Git",
    "📟 Bash",
    "💠 PowerShell",
  ],

  /* ════════════════════════════════════════
     ABOUT SECTION
     ════════════════════════════════════════ */
  about: {
    // Info grid cards (label + value pairs)
    infoGrid: [
      { label: "Role",        value: "Azure DevOps Engineer" },
      { label: "Company",     value: "IBM"                   },
      { label: "📍 Location",  value: "Hyderabad, India"     },
      { label: "Experience",  value: "6+ Years"              },
    ],
    // Bio paragraphs — add as many strings as you like
    bio: [
      "Azure DevOps Engineer with <strong>6+ years</strong> designing and operating scalable CI/CD pipelines, Terraform-based infrastructure, and AKS workloads on Microsoft Azure. Hands-on across Azure Pipelines, Function Apps, Logic Apps, Azure Data Factory, networking, and security & governance with Entra ID, PIM, custom RBAC, Checkmarx and SonarQube.",
      "Currently at <strong>IBM</strong> automating disaster recovery (ASR), backup, monitoring (Prometheus, Grafana, Azure Monitor), and cost optimization — accelerating delivery and reducing operational overhead. Previously at <strong>TCS</strong> architecting production AKS clusters hosting 30+ microservices with end-to-end observability. <strong>Azure Certified | DevSecOps Practitioner | Automation Advocate 🚀</strong>",
    ],
    // Badge shown on avatar
    avatarBadge: "Open to Opportunities",
  },

  /* ════════════════════════════════════════
     SKILLS SECTION
     Each category has: icon, title, and items[]
     Each item: { name, pct }  (pct = percentage 0–100)
     Optional per-item gradient: { name, pct, gradient: "linear-gradient(...)" }
     Optional pills row at end: pills: ["🐧 Linux", ...]
     ════════════════════════════════════════ */
  skills: [
    {
      icon:  "☁️",
      title: "Cloud & Azure Services",
      items: [
        { name: "Microsoft Azure (IaaS/PaaS)", pct: 95, gradient: "linear-gradient(90deg,#0078d4,#50e6ff)" },
        { name: "Function Apps / Logic Apps",  pct: 90 },
        { name: "Azure Data Factory (ADF)",    pct: 85 },
      ],
      pills: ["🗝️ Key Vault", "💾 Storage", "🚌 Service Bus", "🛟 ASR", "💼 Azure Backup", "📜 Runbooks"],
    },
    {
      icon:  "🚀",
      title: "CI/CD & Automation",
      items: [
        { name: "Azure DevOps Pipelines (YAML)", pct: 95 },
        { name: "Approval Gates / Multi-env",    pct: 92 },
        { name: "PowerShell & Bash",             pct: 88 },
      ],
      pills: ["📦 Repos", "🗃️ Artifacts", "📋 Boards"],
    },
    {
      icon:  "🏗️",
      title: "Infrastructure as Code",
      items: [
        { name: "Terraform (modules, state)", pct: 95 },
        { name: "Resource Imports & Refactor", pct: 90 },
        { name: "ARM Templates",              pct: 75 },
      ],
    },
    {
      icon:  "☸️",
      title: "Containers & Kubernetes",
      items: [
        { name: "Azure Kubernetes Service (AKS)", pct: 92 },
        { name: "Docker & ACR",                   pct: 90 },
        { name: "Helm / HPA / Cluster Autoscaler", pct: 85 },
      ],
      pills: ["🌐 NGINX", "🚪 AGIC Ingress", "🛡️ Network Policies"],
    },
    {
      icon:  "🌐",
      title: "Networking",
      items: [
        { name: "VNet / Subnet / NSG / ASG",  pct: 92 },
        { name: "Application Gateway / LB",   pct: 88 },
        { name: "Private DNS & Endpoints",    pct: 85 },
      ],
    },
    {
      icon:  "🔐",
      title: "Security, Identity & Governance",
      items: [
        { name: "Entra ID (Azure AD) & PIM",   pct: 90 },
        { name: "Custom RBAC Roles",           pct: 88 },
        { name: "Checkmarx (SAST) & SonarQube", pct: 85 },
      ],
      pills: ["✅ Quality Gates", "🛡️ Least Privilege"],
    },
    {
      icon:  "📊",
      title: "Monitoring & Observability",
      items: [
        { name: "Prometheus & Grafana",          pct: 92 },
        { name: "Alertmanager",                  pct: 88 },
        { name: "Azure Monitor / Log Analytics", pct: 90 },
      ],
      pills: ["🐧 Linux", "🔀 Git", "📟 Bash", "💠 PowerShell", "🐍 Python"],
    },
  ],

  /* ════════════════════════════════════════
     PROJECTS SECTION
     featured: true  → spans full width (first/highlight project)
     url: GitHub repo or live demo link
     tags: language/color dots  { label, color }
     chips: plain text tags
     ════════════════════════════════════════ */
  projects: [
    {
      featured: true,
      icon:  "🏗️",
      title: "Terraform Azure Infrastructure Automation",
      description: "A comprehensive Terraform project for end-to-end Azure infrastructure provisioning. Modules for VNet, AKS clusters, Key Vault, Storage Accounts, and App Services — all parameterized and reusable. Integrates with Azure DevOps pipelines for automated plan, apply, and destroy workflows with state stored in Azure Blob Storage.",
      url:   "https://github.com",
      ghLabel: "🐙 View on GitHub ↗",
      tags: [
        { label: "Terraform",    color: "#844FBA" },
        { label: "Azure",        color: "#0078d4" },
        { label: "AKS",          color: "#326CE5" },
        { label: "Azure DevOps", color: "#0969da" },
      ],
      chips: ["🏗️ IaC", "☁️ Cloud Automation", "🔒 Key Vault"],
    },
    {
      featured: false,
      icon:  "☸️",
      title: "Kubernetes GitOps CI/CD Pipeline",
      description: "Production-grade GitOps pipeline using GitHub Actions, Helm, and ArgoCD for zero-downtime deployments on AKS. Features automated container builds, vulnerability scanning, Helm chart versioning, blue-green deployments, and Prometheus/Grafana monitoring dashboards.",
      url:   "https://github.com",
      ghLabel: "🐙 Code ↗",
      tags: [
        { label: "Kubernetes",      color: "#326CE5" },
        { label: "ArgoCD",          color: "#E96D10" },
        { label: "Helm",            color: "#0F1689" },
        { label: "GitHub Actions",  color: "#2DA44E" },
      ],
      chips: ["🔄 GitOps", "⚙️ CI/CD"],
    },
    {
      featured: false,
      icon:  "⏳",
      title: "More Coming Soon…",
      description: "Working on a multi-cloud Terraform module library with automated testing using Terratest. Watch the GitHub for updates! ⭐",
      url:   "",           // empty = card is not clickable
      ghLabel: "",
      tags:  [],
      chips: ["🏗️ Terraform", "☁️ Multi-Cloud", "🧪 Terratest"],
      comingSoon: true,    // renders with dashed border + dimmed
    },
  ],

  /* ════════════════════════════════════════
     EXPERIENCE SECTION
     Add as many roles as needed.
     accentColor: optional dot color for timeline (default = blue accent)
     ════════════════════════════════════════ */
  experience: [
    {
      period:  "Jan 2025 – Present",
      role:    "Azure DevOps Engineer 🚀",
      company: "IBM · Hyderabad, India",
      accentColor: "",   // leave empty for default blue
      bullets: [
        "Engineered reusable <strong>Terraform</strong> modules to provision Azure VMs with built-in domain joining — reducing VM build time from 2–3 hours to under 15 minutes (<strong style=\"color:var(--gn)\">~85% faster</strong>) and eliminating manual post-build steps.",
        "Architected Terraform modules to provision complete integration stacks (Function Apps, Logic Apps, App Service Plans, Key Vaults, Service Bus, ADF, Private Endpoints) standardized across 5 environments — cutting provisioning from multi-day builds to under 20 minutes (<strong style=\"color:var(--gn)\">~70% effort reduction</strong>) and lowering idle infrastructure cost by <strong style=\"color:var(--gn)\">~30%</strong>.",
        "Automated tag-based scheduled start/stop of non-production VMs using <strong>Azure Runbooks</strong>, reducing monthly compute costs by <strong style=\"color:var(--gn)\">~40%</strong> on dev/test workloads.",
        "Authored custom <strong>Azure RBAC</strong> roles and onboarded teams to <strong>Privileged Identity Management (PIM)</strong>, enforcing least-privilege access and passing internal access-control audits with <strong style=\"color:var(--gn)\">zero high-severity findings</strong>.",
        "Implemented end-to-end VM data protection — <strong>Azure Backup</strong> across 100% of production VMs plus automated snapshot lifecycle — ensuring point-in-time recovery and reducing snapshot storage spend by <strong style=\"color:var(--gn)\">~60%</strong>.",
        "Configured <strong>Azure Site Recovery (ASR)</strong> and executed DR drills for critical workloads — achieving <strong style=\"color:var(--gn)\">RPO &lt;15 min and RTO &lt;1 hour</strong> to meet business continuity SLAs.",
        "Built end-to-end <strong>CI/CD pipelines</strong> in Azure DevOps for Function Apps and Logic Apps across environments with gated approvals, integrating <strong>SonarQube</strong> quality gates (code coverage <strong style=\"color:var(--gn)\">80%+</strong>) and <strong>Checkmarx</strong> SAST — cutting release cycle from days to under 1 hour.",
        "Designed <strong>ADF CI/CD pipelines</strong> to promote pipelines, datasets, and linked services across environments — automating <strong style=\"color:var(--gn)\">100%</strong> of data-integration releases previously done manually.",
      ],
      tags: ["☁️ Azure", "🚀 Azure DevOps", "🏗️ Terraform", "⚡ Function Apps", "🔄 Logic Apps", "🏭 ADF", "🛟 ASR", "🗝️ Key Vault", "🔐 Entra ID / PIM", "🔎 Checkmarx", "✅ SonarQube"],
    },
    {
      period:  "Aug 2020 – Jan 2025",
      role:    "Cloud Engineer ☁️",
      company: "Tata Consultancy Services (TCS) · Hyderabad, India",
      accentColor: "var(--pu)",   // purple dot for previous role
      bullets: [
        "Built end-to-end <strong>CI/CD pipelines</strong> in Azure DevOps to automate containerized deployments from <strong>ACR</strong> to <strong>AKS</strong> with integrated code quality and security scans — reducing deployment time from ~2 hours to under 15 minutes (<strong style=\"color:var(--gn)\">~85% faster</strong>).",
        "Architected and operated production <strong>AKS clusters</strong> hosting <strong>30+ microservices</strong>, selecting the right workload primitives (Deployments, DaemonSets, StatefulSets) to deliver high availability for internal and external consumers.",
        "Designed AKS auto-scaling using <strong>HPA</strong> and <strong>Cluster Autoscaler</strong> — absorbing <strong style=\"color:var(--gn)\">3x peak-load traffic spikes</strong> with zero downtime, sustaining <strong style=\"color:var(--gn)\">99.9% uptime</strong>, and lowering compute costs by <strong style=\"color:var(--gn)\">~35%</strong>.",
        "Implemented AKS ingress with <strong>NGINX</strong> and <strong>Application Gateway Ingress Controller (AGIC)</strong> — TLS termination, path-based routing, and Azure/Private DNS — consolidating 10+ public endpoints behind a single hardened ingress layer.",
        "Implemented end-to-end observability for AKS using <strong>Prometheus, Grafana, and Alertmanager</strong> with custom dashboards and alert rules — reducing incident detection by <strong style=\"color:var(--gn)\">~60%</strong> and MTTR by <strong style=\"color:var(--gn)\">~50%</strong>.",
        "Managed core Azure infrastructure (VMs, Entra ID, Storage) and designed network segmentation with <strong>VNets, Subnets, NSGs, and ASGs</strong> — eliminating flat-network risk and aligning with enterprise security baselines.",
      ],
      tags: ["☁️ Azure", "☸️ AKS", "🐳 Docker", "🚀 ACR", "🌐 NGINX / AGIC", "📊 Prometheus", "📈 Grafana", "🔔 Alertmanager", "🛡️ NSG / ASG", "🔐 Entra ID"],
    },
  ],

  /* ════════════════════════════════════════
     EDUCATION SECTION
     ════════════════════════════════════════ */
  education: [
    {
      icon:      "🏛️",
      period:    "2016 – 2020",
      degree:    "B.Tech — Computer Science & Engineering",
      institute: "JNTU College of Engineering, Pulivendula, India",
      score:     "🎓 Graduated",
    },
    {
      icon:      "📚",
      period:    "2014 – 2016",
      degree:    "Higher Secondary — Science",
      institute: "Higher Secondary School",      // ← Update this
      scoreNote: "(Physics, Chemistry, Mathematics)",
      score:     "🎓 Completed",
    },
    {
      icon:      "🏫",
      period:    "Before 2014",
      degree:    "Secondary School Certificate (SSC)",
      institute: "Secondary School",             // ← Update this
      score:     "🎓 Completed",
    },
  ],

  /* ════════════════════════════════════════
     CERTIFICATIONS SECTION
     Each item: { icon, title, code, issuer, url? }
     ════════════════════════════════════════ */
  certifications: [
    {
      icon:   "☁️",
      title:  "Azure Solutions Architect Expert",
      code:   "AZ-305",
      issuer: "Microsoft",
      url:    "",
    },
    {
      icon:   "🚀",
      title:  "DevOps Engineer Expert",
      code:   "AZ-400",
      issuer: "Microsoft",
      url:    "",
    },
    {
      icon:   "🏗️",
      title:  "Terraform Associate",
      code:   "003",
      issuer: "HashiCorp",
      url:    "",
    },
    {
      icon:   "⚙️",
      title:  "Azure Administrator Associate",
      code:   "AZ-104",
      issuer: "Microsoft",
      url:    "",
    },
  ],

  /* ════════════════════════════════════════
     RESUME SECTION
     ════════════════════════════════════════ */
  resume: {
    fileName:    "Amalkumar_Uthanattu_Sunil_Resume.pdf",
    subTitle:    "Azure DevOps Engineer · IBM · 6+ Years",
    competencies: [
      "☁️ Microsoft Azure", "🚀 Azure DevOps", "🏗️ Terraform", "☸️ AKS",
      "🐳 Docker", "⚡ Function Apps", "🔄 Logic Apps", "🏭 ADF",
      "🛟 ASR", "🗝️ Key Vault", "🔐 Entra ID / PIM",
      "🔎 Checkmarx", "✅ SonarQube", "📊 Prometheus", "📈 Grafana", "📡 Azure Monitor",
    ],
    // All technologies chip list
    allTech: [
      "☁️ Microsoft Azure", "🚀 Azure DevOps", "🏗️ Terraform", "🔧 ARM Templates",
      "☸️ Azure Kubernetes Service (AKS)", "🐳 Docker", "🚢 ACR", "⛵ Helm",
      "⚡ Function Apps", "🔄 Logic Apps", "🌐 Web Apps", "🏭 Azure Data Factory",
      "🚌 Service Bus", "🗝️ Azure Key Vault", "🗄️ Storage Accounts",
      "📜 Azure Runbooks", "🛠️ Azure Update Manager",
      "🛟 Azure Site Recovery", "💼 Azure Backup",
      "📦 Azure Repos", "🗃️ Artifacts", "📋 Boards", "📝 YAML Pipelines",
      "🔐 Entra ID (Azure AD)", "🛡️ PIM", "🎭 Custom RBAC",
      "🔎 Checkmarx (SAST)", "✅ SonarQube", "🚦 Quality Gates",
      "🌐 VNet / Subnet", "🛡️ NSG / ASG", "⚖️ Load Balancer",
      "🚪 Application Gateway", "🔗 Private DNS / Endpoints",
      "📊 Prometheus", "📈 Grafana", "🔔 Alertmanager",
      "📡 Azure Monitor", "📂 Log Analytics",
      "🐧 Linux", "🔀 Git", "📟 Bash", "💠 PowerShell",
    ],
    opportunityText: "Looking for exciting Azure DevOps / Cloud / DevSecOps Engineering roles where I can drive automation, infrastructure excellence, and security at scale. Happy at IBM and open to new challenges — let's connect!",
  },

  /* ════════════════════════════════════════
     CONTACT SECTION
     contactLinks: list of clickable contact cards
     ════════════════════════════════════════ */
  contact: {
    headline:    "Let's Work Together",
    subtext:     "Happy at IBM and open to exciting Azure DevOps / Cloud / DevSecOps Engineering opportunities. Let's connect! 🤝",
    formPlaceholderMsg: "Hi Amalkumar, I'd love to connect about…",
    links: [
      { icon: "📧", label: "Email",     value: "amalkumar528@gmail.com",            href: "mailto:amalkumar528@gmail.com" },
      { icon: "📱", label: "Phone",     value: "+91-9492454800",                    href: "tel:+919492454800" },
      { icon: "💼", label: "LinkedIn",  value: "linkedin.com/in/usamalkumar",       href: "https://linkedin.com/in/usamalkumar", external: true },
      { icon: "🐙", label: "GitHub",    value: "github.com",                        href: "https://github.com",    external: true },
      { icon: "📍", label: "Location",  value: "Hyderabad, India",                  href: "https://www.google.com/maps/place/Hyderabad", external: true },
      { icon: "🏢", label: "Company",   value: "IBM",                               href: "https://ibm.com",       external: true },
    ],
  },

};