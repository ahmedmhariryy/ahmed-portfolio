'use client'

const skillCards = [
  {
    icon: '⚛️',
    name: 'React & Next.js',
    desc: 'Scalable SPAs and SSR/SSG apps with the App Router, React hooks, and server components.',
  },
  {
    icon: '🔷',
    name: 'TypeScript',
    desc: 'Strong typing across all projects — interfaces, generics, and Zod schema validation.',
  },
  {
    icon: '🎨',
    name: 'UI & Styling',
    desc: 'Tailwind CSS, Bootstrap, Shadcn/ui & HeroUI for beautiful, accessible, responsive interfaces.',
  },
  {
    icon: '🔗',
    name: 'API Integration',
    desc: 'RESTful APIs with Axios, JWT & Next Auth auth flows, and Redux state management.',
  },
  {
    icon: '📋',
    name: 'Forms & Validation',
    desc: 'React Hook Form, Formik, and Zod — performant forms with minimal re-renders.',
  },
  {
    icon: '🚀',
    name: 'Dev & Deploy',
    desc: 'Git/GitHub, Vercel deployments, and pixel-perfect Figma/Adobe XD implementation.',
  },
]

const tags = ['React.js','Next.js','JavaScript ES6+','TypeScript','Tailwind CSS','Styled Components','CSS / SCSS','Framer Motion','REST APIs','Git & GitHub','Redux / Zustand','Responsive Design','HTML5','CSS3','Vercel','Shadcn/ui','Zod','React Hook Form','Axios']

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-8 md:px-16">
      <div className="reveal flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.35em] uppercase text-accent mb-3">
        <span className="block w-8 h-px bg-accent" /> Technical Arsenal
      </div>
      <h2 className="reveal font-syne font-extrabold leading-none mb-6" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
        What I work<br />with.
      </h2>

      <div className="reveal flex flex-wrap gap-3 mb-16">
        {tags.map(tag => (
          <span
            key={tag}
            data-hover
            className="px-4 py-2 font-mono text-[0.68rem] tracking-[0.15em] uppercase border border-fg/10 text-fg/50 transition-all duration-300 cursor-default relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-accent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 z-0" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">{tag}</span>
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCards.map((card, i) => (
          <div
            key={card.name}
            data-hover
            className="reveal border border-fg/5 p-7 relative overflow-hidden group hover:-translate-y-2 hover:border-accent/30 transition-all duration-400 bg-card"
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400"
              style={{ background: 'linear-gradient(90deg,#ff4d00,#00e5ff)' }} />
            <div className="text-3xl mb-4">{card.icon}</div>
            <div className="font-syne font-bold text-lg text-fg mb-2">{card.name}</div>
            <div className="font-mono text-xs leading-loose text-fg/45">{card.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
