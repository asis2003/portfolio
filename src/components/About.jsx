import { useEffect, useRef } from 'react';
import { personal, certifications } from '../data';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-[#0f1629]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-14">
          <span className="font-mono text-xs text-[#00d4ff] tracking-widest uppercase">01 / About</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-[#e2e8f0] mt-2">
            Who I Am
          </h2>
          <div className="h-px w-16 bg-[#00d4ff] mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: text */}
          <div className="reveal space-y-5">
            <p className="text-[#94a3b8] text-base leading-relaxed">
              I'm a <span className="text-[#00d4ff] font-semibold">Cloud & DevOps Engineer</span> based in Hyderabad 
              with 1+ year of hands-on experience designing, deploying, and automating large-scale infrastructure 
              across <span className="text-[#e2e8f0]">AWS, Azure, and GCP</span> for mission-critical SaaS platforms.
            </p>
            <p className="text-[#94a3b8] text-base leading-relaxed">
              My engineering philosophy is <span className="text-[#00ff88] font-semibold">automation-first</span> — 
              if something is done manually twice, I build a script for it. I've reduced operational overhead by ~60% 
              and collapsed release cycles from days to under 2 hours using Python, Bash, Ansible, and GitOps pipelines.
            </p>
            <p className="text-[#94a3b8] text-base leading-relaxed">
              I hold certifications in <span className="text-[#e2e8f0]">Kubernetes (CKA)</span>, 
              <span className="text-[#e2e8f0]"> Terraform (HashiCorp)</span>, and 
              <span className="text-[#e2e8f0]"> Azure DevOps</span> — and I bring the same rigour 
              to client-facing architecture reviews as I do to late-night on-call incidents.
            </p>

            {/* Contact pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`mailto:${personal.email}`}
                className="font-mono text-xs px-4 py-2 rounded border border-[#1e2d50] hover:border-[#00d4ff] text-[#94a3b8] hover:text-[#00d4ff] transition-all"
              >
                📧 {personal.email}
              </a>
              <a
                href={`tel:${personal.phone}`}
                className="font-mono text-xs px-4 py-2 rounded border border-[#1e2d50] hover:border-[#00ff88] text-[#94a3b8] hover:text-[#00ff88] transition-all"
              >
                📞 {personal.phone}
              </a>
            </div>
          </div>

          {/* Right: stats + profile terminal */}
          <div className="reveal space-y-4">
            {/* Profile card terminal */}
            <div className="rounded border border-[#1e2d50] bg-[#0a0e1a] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#131d35] border-b border-[#1e2d50]">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88]/60" />
                <span className="font-mono text-xs text-[#4a5568] ml-2">whoami.sh</span>
              </div>
              <div className="p-5 font-mono text-xs space-y-2">
                {[
                  { key: 'name', value: 'Asis Jovin A', color: '#00d4ff' },
                  { key: 'role', value: 'Cloud / DevOps / SRE Engineer', color: '#00ff88' },
                  { key: 'location', value: 'Hyderabad, India', color: '#e2e8f0' },
                  { key: 'clouds', value: 'AWS · Azure · GCP', color: '#e2e8f0' },
                  { key: 'certifications', value: '5 active', color: '#00d4ff' },
                  { key: 'experience', value: '1+ yr production cloud infra', color: '#e2e8f0' },
                  { key: 'status', value: 'Open to opportunities ✓', color: '#00ff88' },
                ].map(row => (
                  <div key={row.key} className="flex gap-2">
                    <span className="text-[#4a5568] w-28 shrink-0">{row.key}:</span>
                    <span style={{ color: row.color }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metric cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: '3', label: 'Cloud Platforms', color: '#00d4ff' },
                { val: '5', label: 'Certifications', color: '#00ff88' },
                { val: '~60%', label: 'Ops Reduction', color: '#ff6b35' },
                { val: '<2hrs', label: 'Release Cycle', color: '#a78bfa' },
              ].map(m => (
                <div key={m.label} className="rounded border border-[#1e2d50] bg-[#0a0e1a] p-4 text-center">
                  <div className="font-mono text-2xl font-bold" style={{ color: m.color }}>{m.val}</div>
                  <div className="font-mono text-xs text-[#4a5568] mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
