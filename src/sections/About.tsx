export default function About() {
  return (
    <section id="about" className="py-28 px-8 md:px-16 bg-card border-y border-accent/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

        {/* text */}
        <div>
          <div className="reveal flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.35em] uppercase text-accent mb-3">
            <span className="block w-8 h-px bg-accent" /> About Me
          </div>
          <h2 className="reveal font-syne font-extrabold leading-none mb-8" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
            I turn ideas into<br /><span className="text-accent">pixels.</span>
          </h2>
          <p className="reveal font-mono text-sm leading-relaxed text-fg/60 mb-4">
            Hey! I'm <span className="text-accent2 font-bold">Ahmed Atef Elhariry</span>, a frontend developer based in Egypt with a passion for building clean, performant, and visually stunning web interfaces.
          </p>
          <p className="reveal font-mono text-sm leading-relaxed text-fg/60 mb-8">
            I specialize in <span className="text-accent2 font-bold">React</span> and <span className="text-accent2 font-bold">Next.js</span>, crafting experiences that don't just work — they <em>feel</em> great. Every project gets pixel-perfect attention.
          </p>

          <div className="reveal grid grid-cols-2 gap-4 mt-6">
            {[
              { num: '1.5+', label: 'Years Exp.' },
              { num: '14++', label: 'GitHub Repos' },
              { num: '∞', label: 'Lines of CSS' },
              { num: '100%', label: 'Passion' },
            ].map(s => (
              <div key={s.label} className="border border-accent/20 p-5 relative hover:border-accent hover:-translate-y-1 transition-all duration-300 group">
                <div className="absolute left-0 top-0 h-full w-[3px] bg-accent" />
                <div className="font-mono font-bold text-accent text-3xl">{s.num}</div>
                <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-fg/35 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* orbit visual */}
        <div className="reveal hidden md:flex justify-center items-center">
          <div className="relative w-72 h-72">
            {/* outer ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-accent2/20 animate-rotate-slow" />
            {/* inner ring */}
            <div className="absolute rounded-full border border-dashed border-accent/20 animate-[rotateSlowReverse_12s_linear_infinite]"
              style={{ width: '60%', height: '60%', top: '20%', left: '20%' }} />
            {/* orbit dots */}
            {['NEXT', 'CSS', 'TS', 'API'].map((label, i) => {
              const angles = [270, 90, 180, 0]
              const angle = (angles[i] * Math.PI) / 180
              const r = 136
              const x = 50 + (r / 144) * 50 * Math.cos(angle)
              const y = 50 + (r / 144) * 50 * Math.sin(angle)
              return (
                <div key={label} className="absolute w-9 h-9 bg-bg border border-accent2 flex items-center justify-center font-mono text-[0.5rem] text-accent2 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}>
                  {label}
                </div>
              )
            })}
            {/* center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
              <div className="font-syne font-extrabold text-accent3 text-2xl">React</div>
              <div className="font-mono text-[0.6rem] text-fg/35 tracking-widest mt-1">+Next.js</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
