'use client'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-8 md:px-16 relative overflow-hidden">
      {/* bg gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(0,229,255,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(255,77,0,0.10) 0%, transparent 60%)' }} />
        {/* grid */}
        <div className="absolute inset-0 animate-grid-move" style={{
          backgroundImage: 'linear-gradient(rgba(255,77,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,77,0,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* floating shapes */}
      <div className="absolute top-1/4 right-[10%] w-48 h-48 rounded-full border border-accent2/20 animate-float pointer-events-none" />
      <div className="absolute top-[60%] right-[15%] w-20 h-20 animate-float pointer-events-none" style={{ background: 'rgba(255,77,0,0.10)', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animationDelay: '1s' }} />
      <div className="absolute top-[35%] right-[30%] w-4 h-4 animate-float pointer-events-none" style={{ background: '#ffe600', animationDelay: '0.5s' }} />

      {/* content */}
      <div className="relative z-10">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent2 mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          // Frontend Developer · React &amp; Next.js
        </p>
        <h1 className="font-syne font-extrabold leading-none tracking-tight" style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)' }}>
          <span className="block opacity-0 animate-fade-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>Ahmed</span>
          <span
            className="block glitch text-accent opacity-0 animate-fade-up relative"
            data-text="Elhariry"
            style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
          >
            Elhariry
            <span className="absolute left-0 bottom-[-6px] h-[3px] w-full bg-accent origin-left scale-x-0 transition-transform duration-700 delay-[1.5s]" style={{ transform: 'scaleX(1)' }} />
          </span>
        </h1>

        <p className="font-mono text-sm md:text-base max-w-md mt-8 leading-loose text-fg/55 opacity-0 animate-fade-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
          Building <span className="text-accent3 font-bold">fast, beautiful</span> web experiences.<br />
          1.5 years of crafting UIs that users love.
        </p>

        <div className="flex flex-wrap gap-4 mt-10 opacity-0 animate-fade-up" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
          <a href="#projects" className="btn-clip bg-accent text-white font-mono text-xs tracking-[0.15em] uppercase px-8 py-4 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(255,77,0,0.4)] transition-all duration-200">
            View My Work
          </a>
          <a href="#contact" className="btn-clip border border-fg/20 text-fg font-mono text-xs tracking-[0.15em] uppercase px-8 py-4 hover:border-accent2 hover:text-accent2 hover:-translate-y-1 transition-all duration-200">
            Get In Touch
          </a>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-10 left-8 md:left-16 flex items-center gap-3 font-mono text-[0.65rem] tracking-[0.2em] uppercase text-fg/30">
        <div className="w-14 h-px bg-fg/30 relative overflow-hidden">
          <div className="absolute top-0 h-full w-full bg-accent2 animate-scroll-line" />
        </div>
        Scroll to explore
      </div>
    </section>
  )
}
