import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Case Study', href: '#casestudy' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a0e1a]/95 backdrop-blur-md border-b border-[#1e2d50]' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded border border-[#00d4ff]/40 flex items-center justify-center group-hover:border-[#00d4ff] transition-colors">
            <Terminal size={14} className="text-[#00d4ff]" />
          </div>
          <span className="font-mono text-sm text-[#00d4ff] font-semibold tracking-widest">ASIS.DEV</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className="nav-link font-mono text-xs text-[#94a3b8] hover:text-[#00d4ff] transition-colors tracking-wider uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:asisjovinfernando2003@gmail.com"
          className="hidden md:flex items-center gap-2 px-4 py-2 border border-[#00d4ff]/40 hover:border-[#00d4ff] hover:bg-[#00d4ff]/5 rounded text-[#00d4ff] font-mono text-xs tracking-wider transition-all"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#94a3b8] hover:text-[#00d4ff] transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0f1629] border-t border-[#1e2d50] px-6 py-4">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 font-mono text-sm text-[#94a3b8] hover:text-[#00d4ff] transition-colors border-b border-[#1e2d50] last:border-0"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}