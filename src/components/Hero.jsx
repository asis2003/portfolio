import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown, Download } from 'lucide-react';
import { personal } from '../data';

const roles = [
  'Cloud Engineer',
  'DevOps Engineer',
  'SRE Engineer',
  'Kubernetes Architect',
  'Infrastructure Automator',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      }, 80);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      }, 40);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-grid overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#7c3aed]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-24 pt-32 relative z-10">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
          <span className="font-mono text-xs text-[#00ff88] tracking-wider">AVAILABLE FOR OPPORTUNITIES</span>
        </div>

        {/* Name */}
        <h1 className="font-mono text-5xl md:text-7xl font-bold text-[#e2e8f0] mb-4 leading-none">
          Asis Jovin<span className="text-[#00d4ff] text-glow-cyan"> A</span>
        </h1>

        {/* Typewriter role */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xl md:text-2xl text-[#94a3b8]">~/</span>
          <span className="font-mono text-xl md:text-2xl text-[#00d4ff] font-semibold">
            {displayed}
          </span>
          <span className="w-0.5 h-7 bg-[#00d4ff] animate-blink" />
        </div>

        {/* Tagline */}
        <p className="text-[#94a3b8] text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
          {personal.tagline}
        </p>

        {/* Location */}
        <p className="font-mono text-sm text-[#4a5568] mb-10 tracking-wider">
          📍 {personal.location}
        </p>

        {/* Stat pills */}
        <div className="flex flex-wrap gap-4 mb-10">
          {[
            { label: 'Cloud Platforms', value: '3' },
            { label: 'Certifications', value: '5' },
            { label: 'Uptime SLA', value: '99.9%' },
            { label: 'Ops Reduction', value: '~60%' },
          ].map(s => (
            <div key={s.label} className="flex flex-col items-center px-5 py-3 rounded border border-[#1e2d50] bg-[#0f1629]">
              <span className="font-mono text-2xl font-bold text-[#00d4ff]">{s.value}</span>
              <span className="font-mono text-xs text-[#4a5568] tracking-wider mt-0.5">{s.label}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-14">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#00d4ff] text-[#0a0e1a] font-mono font-bold text-sm rounded hover:bg-[#00b8d9] transition-colors tracking-wider"
          >
            VIEW PROJECTS
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#1e2d50] hover:border-[#00d4ff] text-[#94a3b8] hover:text-[#00d4ff] font-mono text-sm rounded transition-all tracking-wider"
          >
            GET IN TOUCH
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 border border-[#00ff88]/30 hover:border-[#00ff88] text-[#00ff88] font-mono text-sm rounded transition-all flex items-center gap-2 tracking-wider"
          >
            <Download size={14} /> RESUME
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6">
          <span className="font-mono text-xs text-[#4a5568] tracking-wider">CONNECT</span>
          <div className="h-px flex-1 max-w-12 bg-[#1e2d50]" />
          <div className="flex gap-4">
            <a href={personal.github} target="_blank" rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded border border-[#1e2d50] hover:border-[#00d4ff] hover:text-[#00d4ff] text-[#94a3b8] transition-all">
              <Github size={16} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded border border-[#1e2d50] hover:border-[#00d4ff] hover:text-[#00d4ff] text-[#94a3b8] transition-all">
              <Linkedin size={16} />
            </a>
            <a href={`mailto:${personal.email}`}
              className="w-9 h-9 flex items-center justify-center rounded border border-[#1e2d50] hover:border-[#00d4ff] hover:text-[#00d4ff] text-[#94a3b8] transition-all">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Terminal block floating right (desktop) */}
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-72 rounded border border-[#1e2d50] bg-[#0f1629] overflow-hidden glow-cyan">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#131d35] border-b border-[#1e2d50]">
          <span className="w-3 h-3 rounded-full bg-red-500/60" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <span className="w-3 h-3 rounded-full bg-[#00ff88]/60" />
          <span className="font-mono text-xs text-[#4a5568] ml-2">bash</span>
        </div>
        <div className="p-4 font-mono text-xs space-y-2">
          <div><span className="text-[#00d4ff]">$</span> <span className="text-[#94a3b8]">kubectl get nodes</span></div>
          <div className="text-[#00ff88]">NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STATUS&nbsp;&nbsp;ROLES</div>
          <div className="text-[#e2e8f0]">aks-nodepool&nbsp;Ready&nbsp;&nbsp;control-plane</div>
          <div className="text-[#e2e8f0]">eks-worker-1&nbsp;Ready&nbsp;&nbsp;worker</div>
          <div className="text-[#e2e8f0]">gke-node-1&nbsp;&nbsp;&nbsp;Ready&nbsp;&nbsp;worker</div>
          <div className="mt-2"><span className="text-[#00d4ff]">$</span> <span className="text-[#94a3b8]">terraform apply -auto-approve</span></div>
          <div className="text-[#00ff88]">Apply complete! 47 resources added.</div>
          <div className="mt-2"><span className="text-[#00d4ff]">$</span> <span className="text-[#94a3b8]">uptime</span></div>
          <div className="text-[#e2e8f0]">SLA: <span className="text-[#00d4ff]">99.9%</span> ✓</div>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-[#00d4ff]">$</span>
            <span className="w-2 h-4 bg-[#00d4ff] animate-blink ml-1" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-xs text-[#4a5568]">scroll</span>
        <ChevronDown size={16} className="text-[#4a5568]" />
      </div>
    </section>
  );
}
