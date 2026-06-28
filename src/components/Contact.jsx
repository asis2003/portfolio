import { useEffect, useRef, useState } from 'react';
import { Send, CheckCircle, AlertCircle, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { personal } from '../data';

// ─────────────────────────────────────────────
// Replace these three values after setting up
// your free EmailJS account at emailjs.com
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
// ─────────────────────────────────────────────

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      const emailjs = await import('emailjs-com');
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: personal.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inputClass =
    'w-full bg-[#0a0e1a] border border-[#1e2d50] rounded px-4 py-3 font-mono text-sm text-[#e2e8f0] placeholder-[#4a5568] focus:outline-none focus:border-[#00d4ff] transition-colors';

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-[#0f1629]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-14">
          <span className="font-mono text-xs text-[#00d4ff] tracking-widest uppercase">05 / Contact</span>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-[#e2e8f0] mt-2">
            Get In Touch
          </h2>
          <div className="h-px w-16 bg-[#00d4ff] mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: info */}
          <div className="reveal space-y-6">
            <p className="text-[#94a3b8] text-base leading-relaxed">
              Whether it's a cloud architecture discussion, an open role, or just a question about 
              multi-cloud automation — I'm happy to connect. Typical response time: within 24 hours.
            </p>

            <div className="space-y-4">
              {[
                { icon: <Mail size={16} />, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
                { icon: <Phone size={16} />, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
                { icon: <Github size={16} />, label: 'GitHub', value: 'github.com/asis2003', href: personal.github },
                { icon: <Linkedin size={16} />, label: 'LinkedIn', value: 'linkedin.com/in/asis-jovin-fernando-130534231', href: personal.linkedin },
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded border border-[#1e2d50] hover:border-[#00d4ff]/40 bg-[#0a0e1a] transition-all group"
                >
                  <div className="text-[#00d4ff] group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div>
                    <div className="font-mono text-xs text-[#4a5568]">{item.label}</div>
                    <div className="font-mono text-sm text-[#e2e8f0] group-hover:text-[#00d4ff] transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs text-[#4a5568] tracking-wider block mb-2">NAME *</label>
                  <input
                    className={inputClass}
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-[#4a5568] tracking-wider block mb-2">EMAIL *</label>
                  <input
                    className={inputClass}
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-xs text-[#4a5568] tracking-wider block mb-2">SUBJECT *</label>
                <input
                  className={inputClass}
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label className="font-mono text-xs text-[#4a5568] tracking-wider block mb-2">MESSAGE *</label>
                <textarea
                  className={`${inputClass} h-36 resize-none`}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or question..."
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-[#00d4ff] hover:bg-[#00b8d9] disabled:opacity-50 text-[#0a0e1a] font-mono font-bold text-sm rounded transition-all"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#0a0e1a]/40 border-t-[#0a0e1a] rounded-full animate-spin" />
                    SENDING...
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    SEND MESSAGE
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <div className="flex items-center gap-2 p-3 rounded border border-[#00ff88]/30 bg-[#00ff88]/5 text-[#00ff88] font-mono text-sm">
                  <CheckCircle size={16} />
                  Message sent! I'll get back to you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded border border-red-500/30 bg-red-500/5 text-red-400 font-mono text-sm">
                  <AlertCircle size={16} />
                  Failed to send. Try emailing directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}