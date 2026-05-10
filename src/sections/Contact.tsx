export default function Contact() {
  return (
    <section id="contact" className="py-28 px-8 md:px-16 text-center border-t border-accent/10 bg-card">
      <div className="reveal flex items-center justify-center gap-4 font-mono text-[0.7rem] tracking-[0.35em] uppercase text-accent mb-3">
        <span className="block w-8 h-px bg-accent" /> Let's Work Together
      </div>
      <h2 className="reveal font-syne font-extrabold leading-none mb-6" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
        Got a project<br />in mind?
      </h2>
      <p className="reveal font-mono text-sm text-fg/40 max-w-sm mx-auto leading-loose mb-8">
        I'm open to freelance opportunities, full-time roles, and collaboration. Let's build something exceptional.
      </p>

      <a
        href="mailto:a7medelhriry1999@gmail.com"
        className="reveal inline-block font-syne font-extrabold text-accent hover:scale-105 transition-transform duration-300 relative group mb-5"
        style={{ fontSize: 'clamp(1.2rem,3vw,2.2rem)' }}
      >
        a7medelhriry1999@gmail.com
        <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
      </a>

      <p 
        // style={{ fontSize: 'clamp(1.2rem,3vw,2.2rem)' }}
        className="reveal font-syne font-extrabold text-[#1b1c27] text-2xl hover:scale-105 hover:text-accent transition-transform duration-300 relative group mb-10"
      >
        +20 127 374 9157
      </p>


      <div className="reveal flex gap-4 justify-center mt-4">
        {[
          { label: 'GitHub', href: 'https://github.com/ahmedmhariryy' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ahmed-elhariry-0b548b388' },
          // { label: 'Vercel', href: 'https://vercel.com/ahmedmhariryys-projects' },
        ].map(s => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="btn-clip border border-fg/15 font-mono text-[0.7rem] tracking-[0.2em] uppercase text-fg/45 px-6 py-3 hover:bg-accent2 hover:text-bg hover:border-accent2 transition-all duration-300"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  )
}
