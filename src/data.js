export const personal = {
  name: 'Asis Jovin A',
  title: 'Cloud & DevOps Engineer',
  tagline: 'Building resilient, automated, multi-cloud infrastructure at scale.',
  location: 'Hyderabad, India',
  email: 'asisjovinfernando2003@gmail.com',
  phone: '+91-9791246593',
  github: 'https://github.com/asis2003',
  linkedin: 'https://linkedin.com/in/asis-jovin',
  summary: `Cloud Engineer with 1+ year of hands-on experience designing, deploying, managing, 
  monitoring, and automating large-scale cloud infrastructure across AWS, Azure, and GCP for 
  mission-critical SaaS platforms. Automation-first mindset — builds tools and scripts (Python, Bash) 
  to make platform operations efficient, reliable, and reproducible.`,
};

export const skills = [
  {
    category: 'Cloud Platforms',
    icon: '☁️',
    color: 'cyan',
    items: ['AWS (EKS, ECS, EC2, Lambda, RDS, S3)', 'Azure (AKS, VMs, DevOps, Monitor)', 'GCP (GKE, Compute Engine, Cloud Build)'],
  },
  {
    category: 'Container & Orchestration',
    icon: '🐳',
    color: 'green',
    items: ['Kubernetes (CKA Certified)', 'Docker & Docker Compose', 'Helm Charts', 'RBAC, HPA, Cluster Autoscaler'],
  },
  {
    category: 'Infrastructure as Code',
    icon: '🏗️',
    color: 'orange',
    items: ['Terraform (HashiCorp Certified)', 'Ansible Playbooks', 'Multi-env Workspaces', 'Remote State Management'],
  },
  {
    category: 'CI/CD & DevOps',
    icon: '⚙️',
    color: 'purple',
    items: ['GitHub Actions', 'Azure DevOps YAML Pipelines', 'Jenkins', 'GitLab CI'],
  },
  {
    category: 'Observability',
    icon: '📊',
    color: 'cyan',
    items: ['ELK Stack (Elasticsearch, Logstash, Kibana)', 'Prometheus & Grafana', 'CloudWatch', 'Azure Monitor'],
  },
  {
    category: 'Languages & Scripting',
    icon: '🐍',
    color: 'green',
    items: ['Python (Automation, APIs)', 'Bash Scripting', 'Java Basics', 'PowerShell'],
  },
  {
    category: 'Networking & Security',
    icon: '🔐',
    color: 'orange',
    items: ['VPC / VNET Design', 'NSG, IAM, RBAC', 'Azure AD / MFA', 'OS Hardening & Patching'],
  },
  {
    category: 'Databases & Servers',
    icon: '🗄️',
    color: 'purple',
    items: ['MySQL', 'MongoDB', 'Nginx (Reverse Proxy)', 'Azure SQL / AWS RDS'],
  },
];

export const experience = [
  {
    role: 'DevOps / SRE Engineer',
    company: 'Viveja IT Service',
    location: 'Hyderabad',
    duration: 'Nov 2025 – Present',
    project: 'Repayx — Fintech SaaS Platform',
    stack: 'AWS · Azure · GCP · Terraform · Ansible · ELK · Python · Kubernetes',
    highlights: [
      'Designed and deployed scalable multi-cloud infrastructure across Azure (AKS), AWS (EKS/ECS/EC2/Lambda), and GCP (GKE) — all provisioned via Terraform modules with remote state and per-environment workspaces.',
      'Operated container orchestration across AKS/EKS/GKE — Helm charts, RBAC, HPA, Cluster Autoscaler, rolling updates; optimised Docker images with multi-stage builds achieving ~35% size reduction.',
      'Built centralised ELK Stack observability — Logstash pipelines, Elasticsearch indexing, Kibana dashboards for real-time cross-cloud log correlation and RCA.',
      'Developed Python and Bash automation tooling for deployment validation, health checks, compliance reporting — reducing manual operations by ~60%.',
      'Built multi-stage GitHub Actions and Azure DevOps YAML CI/CD pipelines — cutting release cycles from days to under 2 hours across all cloud environments.',
      'Provided cloud technology consulting to domestic and international stakeholders in architecture and feasibility discussions.',
    ],
    results: [
      '100% infra provisioned via Terraform IaC',
      '99.9% uptime SLA on K8s clusters',
      'Release cycle: days → <2 hrs',
      '~35% Docker image size reduction',
      '~60% manual ops reduction',
    ],
  },
  {
    role: 'DevOps & Backend Developer Intern',
    company: 'Boston Nex Tech',
    location: 'Chennai',
    duration: 'May 2025 – Sep 2025',
    project: null,
    stack: 'Azure · AWS · Kubernetes · Docker · Python · Bash',
    highlights: [
      'Managed Azure VM and AWS EC2/ELB/S3/RDS cloud infrastructure.',
      'Built Azure DevOps CI/CD pipelines; wrote Python and Bash automation scripts.',
      'Gained hands-on experience with Kubernetes manifests, Docker deployments, and Nginx configuration.',
    ],
    results: [],
  },
  {
    role: 'Data & Automation Analyst Intern',
    company: 'Prowesstics',
    location: 'Chennai',
    duration: 'Jul 2023 – Aug 2023',
    project: null,
    stack: 'Python · SQL',
    highlights: [
      'Developed Python and SQL automation scripts for operational data workflows.',
      'Validated data quality and contributed to process documentation.',
    ],
    results: [],
  },
];

export const projects = [
  {
    name: 'AIOps Incident Triage Assistant',
    tagline: 'Automated alert storm triage for SRE on-call teams',
    description: `A production-realistic SRE dashboard built with FastAPI and Python that automates 
    the hardest part of on-call engineering — making sense of alert storms. The engine automatically 
    groups alerts by blast radius, scores each incident using a weighted anomaly model factoring 
    severity, business impact, and threshold overshoot, and ranks them so you always know which fire 
    to fight first.`,
    stack: ['Python', 'FastAPI', 'Prometheus', 'Loki', 'Grafana', 'Kubernetes', 'GKE'],
    features: [
      'Auto-groups alerts by blast radius (shared node/service)',
      'Weighted anomaly scoring: severity × business impact × overshoot',
      'Correlated Loki log streams per incident',
      'Auto-generated kubectl runbook commands',
      'Simulates real GKE cascade: CrashLoopBackOff, OOMKill, DNS failures',
    ],
    github: 'https://github.com/asis2003/aiops-triage-assistant',
    live: null,
    color: 'cyan',
    badge: 'SRE / Platform',
  },
  {
    name: 'Terraform Azure Infrastructure',
    tagline: 'Production-ready IaC for full Azure cloud environments',
    description: `A production-ready Infrastructure-as-Code repository that provisions and manages 
    a complete Azure cloud environment using Terraform. Covers the full stack — compute (VMs, AKS), 
    networking (VNets, NSGs, Load Balancers), storage, identity (IAM, Service Principals), and 
    monitoring (Azure Monitor, Log Analytics) — all as reusable, versioned Terraform modules.`,
    stack: ['Terraform', 'Azure', 'AKS', 'GitHub Actions', 'Azure DevOps'],
    features: [
      'Reusable Terraform modules for every Azure resource tier',
      'Remote state via Azure Blob Storage backend',
      'Environment workspaces: dev / staging / prod',
      'Variable-driven config for cross-project reuse',
      'Automated plan/apply via GitHub Actions & Azure DevOps',
    ],
    github: 'https://github.com/asis2003/terraform-code',
    live: null,
    color: 'orange',
    badge: 'IaC / Cloud',
  },
];

export const education = {
  degree: 'B.Tech – Artificial Intelligence & Data Science',
  college: 'Karpaga Vinayaga College of Engineering & Technology, Chennai',
  duration: '2021 – 2025',
  cgpa: '7.6',
};

export const certifications = [
  { name: 'Kubernetes', detail: 'CKA Certified', icon: '⎈', color: 'cyan' },
  { name: 'Terraform', detail: 'HashiCorp Certified', icon: '🏗️', color: 'purple' },
  { name: 'Azure DevOps', detail: 'Engineering Certified', icon: '☁️', color: 'blue' },
  { name: 'Azure Data', detail: 'Engineering Certified', icon: '📊', color: 'green' },
  { name: 'Oracle Gen AI', detail: 'Professional Certified', icon: '🤖', color: 'orange' },
];
