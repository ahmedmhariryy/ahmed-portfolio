import { FileDown, Mail, Phone, MapPin } from 'lucide-react'

const highlights = [
  { label: 'Role', value: 'Frontend Developer' },
  { label: 'Stack', value: 'React & Next.js' },
  { label: 'Location', value: 'Giza, Egypt' },
  { label: 'Availability', value: 'Open to Work' },
]

export default function CV() {
  return (
    <section id="cv" className="py-28 px-8 md:px-16">
      <div className="reveal flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.35em] uppercase text-accent mb-3">
        <span className="block w-8 h-px bg-accent" /> Resume
      </div>
      <h2 className="reveal font-syne font-extrabold leading-none mb-14" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
        My CV.
      </h2>

      <div className="reveal border border-fg/5 bg-card p-8 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative overflow-hidden">
        {/* glow */}
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,77,0,0.06) 0%, transparent 70%)' }} />

        {/* Left */}
        <div>
          <p className="font-mono text-sm text-fg/50 leading-loose mb-8 max-w-sm">
            Everything about my experience, skills, and background in one clean document. Download it and let's talk.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {highlights.map(h => (
              <div key={h.label} className="border border-fg/5 p-4 relative group hover:border-accent/30 transition-all duration-300">
                <div className="absolute left-0 top-0 h-full w-[2px] bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <div className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-fg/25 mb-1">{h.label}</div>
                <div className="font-mono text-xs text-accent2">{h.value}</div>
              </div>
            ))}
          </div>

          <a
            href="/ahmedelhariry___frontend_react_.pdf"
            download
            data-hover
            className="btn-clip inline-flex items-center gap-3 bg-accent text-white font-mono text-xs tracking-[0.15em] uppercase px-8 py-4 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(255,77,0,0.35)] transition-all duration-200"
          >
            <FileDown size={14} />
            Download CV
          </a>

          <div className="mt-8 flex flex-col gap-3">
            <a href="mailto:a7medelhriry1999@gmail.com" className="flex items-center gap-3 font-mono text-xs text-fg/35 hover:text-accent transition-colors duration-200">
              <Mail size={12} /> a7medelhriry1999@gmail.com
            </a>
            <a href="tel:+201273749157" className="flex items-center gap-3 font-mono text-xs text-fg/35 hover:text-accent transition-colors duration-200">
              <Phone size={12} /> +20 127 374 9157
            </a>
            <span className="flex items-center gap-3 font-mono text-xs text-fg/35">
              <MapPin size={12} /> Giza, Egypt
            </span>
          </div>
        </div>

        {/* Right — decorative */}
        <div className="hidden md:flex justify-center items-center gap-6">
          <div className="relative w-64 h-80 border border-fg/5 bg-bg flex flex-col items-center justify-center gap-6 group hover:border-accent/20 transition-all duration-500">
            <div className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: 'linear-gradient(90deg,#ff4d00,#00e5ff)' }} />
            <div className="text-5xl">📄</div>
            <div className="text-center">
              <div className="font-syne font-extrabold text-lg text-fg mb-1">Ahmed Elhariry</div>
              <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-accent">Frontend Developer</div>
            </div>
            <div className="font-mono text-[0.6rem] tracking-[0.1em] uppercase text-fg/20">React · Next.js · TypeScript</div>
            <div className="absolute bottom-4 right-4 font-mono text-[0.55rem] text-fg/15 tracking-wider">PDF</div>
          </div>
          {/* <div className="bg-bg dark:bg-bg overflow-hidden shadow-2xl border border-slate-800 hover:shadow-primary/20 hover:border-accent/20 transition-all duration-500">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-slate-400 text-sm mr-4 font-mono"
                    >aelhariry.js</span>
                </div>
                <div
                  className="p-6 font-mono text-sm md:text-base leading-relaxed overflow-x-auto text-slate-200"
                  dir="ltr"
                >
                  <p className="text-slate-500">// من أنا باختصار</p>
                  <p className="mt-3">
                    <span className="text-purple-400">const</span>
                    <span className="text-blue-400 mx-2">ahmed</span>
                     = [ </p>
                  <p className="ml-4">
                    <span className="text-green-400">name</span>:
                    <span className="text-yellow-400">"احمد عاطف"</span>,
                  </p>
                  <p className="ml-4">
                    <span className="text-green-400">title</span>:
                    <span className="text-yellow-400">"Frontend Developer"</span>,
                  </p>
                  <p className="ml-4">
                    <span className="text-green-400">experience</span>:
                    <span className="text-orange-400">1.5</span> +
                    <span className="text-yellow-400">" years"</span>,
                  </p>
                  <p className="ml-4">
                    <span className="text-green-400">location</span>:
                    <span className="text-yellow-400">"Giza, Egypt 🇪🇬"</span>,
                  </p>
                  <p className="ml-4">
                    <span className="text-green-400">skills</span>: [
                  </p>
                  <p className="ml-8">
                    <span className="text-yellow-400">"React"</span>,
                    <span className="text-yellow-400">"Next.js"</span>,
                  </p>
                  <p className="ml-8">
                    <span className="text-yellow-400">"TypeScript"</span>,
                    <span className="text-yellow-400">"Tailwind"</span>
                  </p>
                  <p className="ml-4">],</p>
                  <p className="ml-4">
                    <span className="text-green-400">passion</span>:
                    <span className="text-yellow-400"
                      >"Creating pixel-perfect UIs"</span
                    >,
                  </p>
                  <p className="ml-4">
                    <span className="text-green-400">available</span>:
                    <span className="text-blue-400">true</span>,
                  </p>
                  <p className="ml-4">
                    <span className="text-green-400">hireable</span>:
                    <span className="text-blue-400">true</span>
                  </p>
                  <p>];</p>
                  <p className="mt-4">
                    <span className="text-purple-400">export default</span>
                    <span className="text-blue-400 ms-2">aelhariry</span>;
                  </p>
                </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
