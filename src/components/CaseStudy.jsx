import { useEffect, useRef } from 'react';

const challenge = `Repayx, a mission-critical fintech SaaS payment platform operating across domestic and 
international environments, had no IaC-driven cloud provisioning, no container orchestration standards, 
no ELK-based observability, no CI/CD automation, and manual database operations. A complete cloud 
engineering function was designed, deployed, and automated from zero across AWS, Azure, and GCP hybrid environments.`;

const pillars = [
  {
    icon: '☁️',
    title: 'Multi-Cloud Infrastructure',
    color: '#00d4ff',
    points: [
      'Designed and deployed across Azure (primary), AWS, and GCP — AKS, EKS/ECS/EC2/VPC/RDS/Lambda, and GKE',
      'Provisioned 100% via Terraform modules with remote state backends and per-environment workspaces (dev/staging/prod)',
      'Enforced tagging, security baselines, and zero manual cloud console provisioning as code',
    ],
  },
  {
    icon: '⎈',
    title: 'Container Orchestration',
    color: '#00ff88',
    points: [
      'Operated AKS, EKS, and GKE with RBAC, network policies, HPA, Cluster Autoscaler, and Helm chart versioning',
      'Zero-downtime rolling deployments for all Repayx microservices',
      'Optimised Docker images via multi-stage builds — ~35% size reduction; integrated Trivy image scanning as mandatory CI gate',
    ],
  },
  {
    icon: '🐍',
    title: 'Automation Tooling',
    color: '#ff6b35',
    points: [
      'Built Python & Bash tooling: deployment validators, health checks, compliance reporters, certificate lifecycle managers',
      'Ansible playbooks for Linux/Windows config management, Nginx setup, OS hardening, and node drift prevention',
      'Reduced ~60% of manual platform operations through scripted automation',
    ],
  },
  {
    icon: '📊',
    title: 'ELK Stack & Observability',
    color: '#a78bfa',
    points: [
      'Built centralised ELK Stack — Logstash pipelines collecting logs across Azure, AWS, and GCP workloads',
      'Elasticsearch indexing with structured field mapping; Kibana dashboards for real-time cross-cloud RCA',
      'Supplemented with Prometheus/Grafana, CloudWatch, and Azure Monitor for full hybrid cloud visibility',
    ],
  },
  {
    icon: '⚙️',
    title: 'CI/CD & DevOps Automation',
    color: '#00d4ff',
    points: [
      'Multi-stage GitHub Actions and Azure DevOps YAML pipelines automating build, test, Docker image build, Terraform plan/apply',
      'Quality gates, automated rollback, and deployment to AWS/Azure/GCP in a single pipeline run',
      'Cut release cycles from days to under 2 hours across all cloud environments',
    ],
  },
  {
    icon: '🔐',
    title: 'Security & Databases',
    color: '#00ff88',
    points: [
      'Azure AD MFA/Conditional Access, AWS IAM least-privilege, GCP IAM, OS hardening, vulnerability remediation',
      'SOC 2 compliance audit trail maintenance across all cloud platforms',
      'Nginx reverse proxy/load balancer; MySQL & MongoDB — connection pooling, backup scheduling, schema migration',
    ],
  },
];

const results = [
  { metric: '100%', label: 'Infra via Terraform IaC', color: '#00d4ff' },
  { metric: '99.9%', label: 'Uptime SLA on K8s', color: '#00ff88' },
  { metric: '<2 hrs', label: 'Release Cycle (was days)', color: '#ff6b35' },
  { metric: '~35%', label: 'Docker Image Size Reduction', color: '#a78bfa' },
  { metric: '~60%', label: 'Manual Ops Reduction', color: '#00d4ff' },
  { metric: '3', label: 'Cloud Platforms Unified', color: '#00ff88' },
];

export default function CaseStudy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="casestudy" ref={sectionRef} className="py-24 bg-[#0a0e1a] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="reveal mb-4">
          <span className="font-mono text-xs text-[#00d4ff] tracking-widest uppercase">03.5 / Case Study</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-[#e2e8f0] mt-2">
            Repayx Fintech Platform
          </h2>
          <div className="h-px w-16 bg-[#00d4ff] mt-4" />
        </div>

        {/* Subtitle */}
        <div className="reveal mb-12">
          <p className="font-mono text-sm text-[#00ff88] tracking-wider">
            Large-Scale Hybrid Cloud Engineering & Full Automation at Scale
          </p>
          <p className="font-mono text-xs text-[#4a5568] mt-1">
            AWS · Azure · GCP · Kubernetes · Terraform · Ansible · ELK · Python · CI/CD
          </p>
        </div>

        {/* Challenge */}
        <div className="reveal mb-14">
          <div className="rounded border border-[#ff6b35]/30 bg-[#ff6b35]/5 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#ff6b35]" />
              <span className="font-mono text-xs text-[#ff6b35] tracking-widest uppercase font-bold">The Challenge</span>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed">{challenge}</p>
          </div>
        </div>

        {/* Engineering Pillars */}
        <div className="reveal mb-6">
          <span className="font-mono text-xs text-[#4a5568] tracking-widest uppercase">Engineering Actions</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="reveal rounded border border-[#1e2d50] bg-[#0f1629] p-5 hover:border-[#00d4ff]/30 transition-colors"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">{pillar.icon}</span>
                <h3 className="font-mono text-xs font-bold tracking-wider" style={{ color: pillar.color }}>
                  {pillar.title.toUpperCase()}
                </h3>
              </div>
              <ul className="space-y-2">
                {pillar.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-[#94a3b8]">
                    <span style={{ color: pillar.color }} className="mt-0.5 shrink-0">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Results */}
        <div className="reveal">
          <div className="rounded border border-[#00ff88]/20 bg-[#00ff88]/5 p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
              <span className="font-mono text-xs text-[#00ff88] tracking-widest uppercase font-bold">Measured Results</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {results.map((r) => (
                <div key={r.label} className="text-center">
                  <div
                    className="font-mono text-2xl md:text-3xl font-bold mb-1"
                    style={{ color: r.color }}
                  >
                    {r.metric}
                  </div>
                  <div className="font-mono text-xs text-[#4a5568] leading-tight">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e2d50] to-transparent" />
    </section>
  );
}