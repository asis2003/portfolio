import { useEffect, useRef } from 'react';
import { experience, education } from '../data';

export default function Experience() {
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
    <section id="experience" ref={sectionRef} className="py-24 bg-[#0f1629]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-14">
          <span className="font-mono text-xs text-[#00d4ff] tracking-widest uppercase">03 / Experience</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-[#e2e8f0] mt-2">
            Work History
          </h2>
          <div className="h-px w-16 bg-[#00d4ff] mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff] via-[#1e2d50] to-transparent" />

          <div className="space-y-12 pl-12 md:pl-16">
            {experience.map((job, i) => (
              <div key={i} className="reveal relative" style={{ transitionDelay: `${i * 100}ms` }}>
                {/* Timeline dot */}
                <div className="absolute -left-12 md:-left-16 top-1 w-3 h-3 rounded-full border-2 border-[#00d4ff] bg-[#0a0e1a]" />

                <div className="rounded border border-[#1e2d50] bg-[#0a0e1a] p-6 hover:border-[#00d4ff]/40 transition-colors">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-mono text-lg font-bold text-[#e2e8f0]">{job.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[#00d4ff] font-mono text-sm font-semibold">{job.company}</span>
                        <span className="text-[#4a5568] font-mono text-xs">· {job.location}</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-[#94a3b8] border border-[#1e2d50] px-3 py-1 rounded">
                      {job.duration}
                    </span>
                  </div>

                  {/* Project */}
                  {job.project && (
                    <div className="mb-4 flex items-center gap-2">
                      <span className="font-mono text-xs text-[#4a5568]">PROJECT:</span>
                      <span className="font-mono text-xs text-[#00ff88]">{job.project}</span>
                    </div>
                  )}

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {job.stack.split(' · ').map(t => (
                      <span key={t} className="font-mono text-xs px-2 py-0.5 rounded bg-[#131d35] border border-[#1e2d50] text-[#94a3b8]">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#94a3b8]">
                        <span className="text-[#00d4ff] mt-1 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Results */}
                  {job.results.length > 0 && (
                    <div className="rounded border border-[#00ff88]/20 bg-[#00ff88]/5 p-4">
                      <p className="font-mono text-xs text-[#00ff88] mb-3 tracking-wider">RESULTS</p>
                      <div className="flex flex-wrap gap-2">
                        {job.results.map((r, j) => (
                          <span key={j} className="font-mono text-xs text-[#e2e8f0] flex items-center gap-1">
                            <span className="text-[#00ff88]">✔</span> {r}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Education */}
            <div className="reveal relative">
              <div className="absolute -left-12 md:-left-16 top-1 w-3 h-3 rounded-full border-2 border-[#7c3aed] bg-[#0a0e1a]" />
              <div className="rounded border border-[#1e2d50] bg-[#0a0e1a] p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs text-[#7c3aed] tracking-wider mb-1">EDUCATION</p>
                    <h3 className="font-mono text-base font-bold text-[#e2e8f0]">{education.degree}</h3>
                    <p className="text-sm text-[#94a3b8] mt-1">{education.college}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xs text-[#94a3b8] border border-[#1e2d50] px-3 py-1 rounded block">
                      {education.duration}
                    </span>
                    <span className="font-mono text-xs text-[#00d4ff] mt-2 block">
                      CGPA: {education.cgpa}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
