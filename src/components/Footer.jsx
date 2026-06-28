import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { personal } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-[#1e2d50] bg-[#0a0e1a] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded border border-[#00d4ff]/30 flex items-center justify-center">
            <Terminal size={12} className="text-[#00d4ff]" />
          </div>
          <span className="font-mono text-sm text-[#4a5568]">Asis Jovin A</span>
        </div>

        {/* Center */}
        <p className="font-mono text-xs text-[#4a5568] text-center">
          Built with React · Hosted on Vercel · <span className="text-[#00d4ff]">Free forever</span>
        </p>

        {/* Links */}
        <div className="flex items-center gap-4">
          <a href={personal.github} target="_blank" rel="noreferrer"
            className="text-[#4a5568] hover:text-[#e2e8f0] transition-colors">
            <Github size={16} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer"
            className="text-[#4a5568] hover:text-[#e2e8f0] transition-colors">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${personal.email}`}
            className="text-[#4a5568] hover:text-[#00d4ff] transition-colors">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
