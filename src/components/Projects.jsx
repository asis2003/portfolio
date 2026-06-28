import { useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data';

const colorMap = {
  cyan: { border: '#00d4ff', text: '#00d4ff', bg: 'rgba(0,212,255,0.06)', badge: 'rgba(0,212,255,0.12)' },
  orange: { border: '#ff6b35', text: '#ff6b35', bg: 'rgba(255,107,53,0.06)', badge: 'rgba(255,107,53,0.12)' },
  green: { border: '#00ff88', text: '#00ff88', bg: 'rgba(0,255,136,0.06)', badge: 'rgba(0,255,136,0.12)' },
};

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="py-24 bg-[#0a0e1a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-14">
          <span className="font-mono text-xs text-[#00d4ff] tracking-widest uppercase">04 / Projects</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-[#e2e8f0] mt-2">
            Featured Work
          </h2>
          <div className="h-px w-16 bg-[#00d4ff] mt-4" />
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const c = colorMap[project.color] || colorMap.cyan;
            return (
              <div
                key={project.name}
                className="reveal project-card rounded bg-[#0f1629] flex flex-col"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Card top bar */}
                <div className="px-6 py-4 border-b border-[#1e2d50] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: c.text }} />
                    <span className="font-mono text-xs tracking-wider" style={{ color: c.text }}>
                      {project.badge}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#4a5568] hover:text-[#e2e8f0] transition-colors"
                        title="View on GitHub"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#4a5568] hover:text-[#e2e8f0] transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Title */}
                  <h3 className="font-mono text-xl font-bold text-[#e2e8f0] mb-1">{project.name}</h3>
                  <p className="font-mono text-xs mb-4" style={{ color: c.text }}>{project.tagline}</p>

                  {/* Description */}
                  <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">{project.description}</p>

                  {/* Features */}
                  <div className="mb-6 flex-1">
                    <p className="font-mono text-xs text-[#4a5568] tracking-wider mb-3">KEY FEATURES</p>
                    <ul className="space-y-2">
                      {project.features.map(f => (
                        <li key={f} className="flex items-start gap-2 text-xs text-[#94a3b8]">
                          <span style={{ color: c.text }} className="mt-0.5 shrink-0">▸</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div>
                    <p className="font-mono text-xs text-[#4a5568] tracking-wider mb-3">STACK</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map(t => (
                        <span
                          key={t}
                          className="font-mono text-xs px-2 py-1 rounded border"
                          style={{ borderColor: c.border + '40', color: c.text, background: c.badge }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                {project.github && (
                  <div className="px-6 py-4 border-t border-[#1e2d50]">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 font-mono text-xs hover:gap-3 transition-all"
                      style={{ color: c.text }}
                    >
                      <Github size={14} />
                      View on GitHub
                      <span className="ml-auto">→</span>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* More on GitHub banner */}
        <div className="reveal mt-8 rounded border border-[#1e2d50] bg-[#0f1629] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-mono text-sm text-[#e2e8f0] font-semibold">More projects on GitHub</p>
            <p className="font-mono text-xs text-[#4a5568] mt-1">Automation scripts, IaC modules, and platform tooling</p>
          </div>
          <a
            href="https://github.com/asis2003"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border border-[#1e2d50] hover:border-[#00d4ff] text-[#94a3b8] hover:text-[#00d4ff] font-mono text-xs rounded transition-all"
          >
            <Github size={14} />
            github.com/asis2003
          </a>
        </div>
      </div>
    </section>
  );
}
