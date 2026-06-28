import { useEffect, useRef } from 'react';
import { skills, certifications } from '../data';

const colorMap = {
  cyan: { border: '#00d4ff', text: '#00d4ff', bg: 'rgba(0,212,255,0.06)' },
  green: { border: '#00ff88', text: '#00ff88', bg: 'rgba(0,255,136,0.06)' },
  orange: { border: '#ff6b35', text: '#ff6b35', bg: 'rgba(255,107,53,0.06)' },
  purple: { border: '#7c3aed', text: '#a78bfa', bg: 'rgba(124,58,237,0.06)' },
  blue: { border: '#3b82f6', text: '#60a5fa', bg: 'rgba(59,130,246,0.06)' },
};

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-24 bg-[#0a0e1a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-14">
          <span className="font-mono text-xs text-[#00d4ff] tracking-widest uppercase">02 / Skills</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-[#e2e8f0] mt-2">
            Technical Arsenal
          </h2>
          <div className="h-px w-16 bg-[#00d4ff] mt-4" />
        </div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {skills.map((group, i) => {
            const c = colorMap[group.color] || colorMap.cyan;
            return (
              <div
                key={group.category}
                className="reveal skill-badge rounded p-5 bg-[#0f1629] cursor-default"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">{group.icon}</span>
                  <h3 className="font-mono text-xs font-semibold tracking-wider" style={{ color: c.text }}>
                    {group.category.toUpperCase()}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {group.items.map(item => (
                    <li key={item} className="text-xs text-[#94a3b8] flex items-start gap-2">
                      <span style={{ color: c.text }} className="mt-0.5 shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="reveal">
          <h3 className="font-mono text-sm text-[#94a3b8] tracking-widest uppercase mb-6">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map(cert => {
              const c = colorMap[cert.color] || colorMap.cyan;
              return (
                <div
                  key={cert.name}
                  className="flex items-center gap-3 px-4 py-3 rounded border bg-[#0f1629]"
                  style={{ borderColor: c.border + '40', background: c.bg }}
                >
                  <span className="text-lg">{cert.icon}</span>
                  <div>
                    <div className="font-mono text-xs font-semibold" style={{ color: c.text }}>
                      {cert.name}
                    </div>
                    <div className="font-mono text-xs text-[#4a5568]">{cert.detail}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
