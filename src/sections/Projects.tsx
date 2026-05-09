import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    num: '01',
    name: 'LuxFilm',
    desc: 'Cinema-grade movie discovery app powered by the TMDB API. Browse a vast library with real-time data, smooth navigation, and a luxurious dark interface.',
    tags: ['React.Js', 'JavaScript' ,'TMDB API', 'CSS' , ' Tailwind'],
    github: 'https://github.com/ahmedmhariryy/LuxFilm.git',
    live: 'https://lux-film.vercel.app/',
    emoji: '🎬',
  },
  {
    num: '02',
    name: 'MovieBase',
    desc: 'A second take on movie browsing — cleaner architecture, better performance, and a fresh UX for discovering films via TMDB\'s rich dataset.',
    tags: ['React.Js', 'JavaScript' ,'TMDB API', 'Tailwind'],
    github: 'https://github.com/ahmedmhariryy/MovieBase.git',
    live: 'https://movie-base-mocha.vercel.app/',
    emoji: '🎥',
  },
  {
    num: '03',
    name: 'FreshCart',
    desc: 'Full-featured e-commerce platform with product listings, categories, brands, cart, and wishlist — all with complete CRUD operations.',
    tags: ['React.Js', 'Next.Js' , 'JavaScript' ,'TypeScript' ,'Redux', 'REST API', 'Tailwind'],
    github: 'https://github.com/ahmedmhariryy/FreshCart.git',
    live: 'https://fresh-cart-xi-bice.vercel.app/',
    emoji: '🛒',
  },
  {
    num: '04',
    name: 'RoutePosts',
    desc: 'Social media web app with user authentication, profile management, and a full posts & comments system — create, read, update, delete.',
    tags: ['React.Js', 'JavaScript' ,'Auth', 'REST API'],
    github: 'https://github.com/ahmedmhariryy/RoutePosts.git',
    live: 'https://route-posts.routemisr.com',
    emoji: '💬',
  },
  {
    num: '05',
    name: 'Restaurant Project',
    desc: 'A sleek restaurant website with an elegant design, menu browsing, and a modern UI — clean experience from browse to order.',
    tags: ['JavaScript' ,'Tailwind', 'API' , 'Responsive'],
    github: 'https://github.com/ahmedmhariryy/RestaurantProject.git',
    live: 'https://restaurant-project-five-gamma.vercel.app/',
    emoji: '🍽️',
  },
  {
    num: '06',
    name: "What's For Dinner",
    desc: 'Meal discovery app to help you decide what to cook tonight. Browse recipes, filter by ingredient, find inspiration for any occasion.',
    tags: ['JavaScript', 'API' , 'Bootstrap' , 'Responsive'],
    github: "https://github.com/ahmedmhariryy/what-s-for-dinner.git",
    live: 'https://what-s-for-dinner-theta.vercel.app/',
    emoji: '🍳',
  },
  {
    num: '07',
    name: 'Space Explorer',
    desc: 'Immersive space exploration app — browse planets, missions, and cosmic data with a stunning dark UI and real space data.',
    tags: ['JavaScript' ,'NASA API', 'Animations' , 'Tailwind'],
    github: 'https://github.com/ahmedmhariryy/SpaceExplorer.git',
    live: 'https://space-explorer-puce.vercel.app/',
    emoji: '🚀',
  },
  {
    num: '08',
    name: 'AURUM',
    desc: 'Luxury-focused web experience with refined aesthetics, smooth animations, and a high-end visual identity showcasing premium UI craftsmanship.',
    tags: ['React.Js', 'JavaScript', 'Tailwind' , 'API'],
    github: 'https://github.com/ahmedmhariryy/AURUM.git',
    live: 'https://aurum-iota-seven.vercel.app/',
    emoji: '✨',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-8 md:px-16 bg-card border-y border-accent/10">
      <div className="reveal flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.35em] uppercase text-accent mb-3">
        <span className="block w-8 h-px bg-accent" /> Selected Work
      </div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
        <h2 className="reveal font-syne font-extrabold leading-none" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
          Projects that<br />ship.
        </h2>
        <p className="reveal font-mono text-xs text-fg/35 tracking-wider max-w-xs leading-loose">
          Showing 8 featured projects. For the full list, visit{' '}
          <a href="https://github.com/ahmedmhariryy" target="_blank" rel="noreferrer" className="text-accent2 hover:text-accent transition-colors">
            my GitHub →
          </a>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <div
            key={p.num}
            data-hover
            className="reveal border border-fg/5 p-8 relative overflow-hidden group hover:-translate-y-2 hover:border-accent/30 transition-all duration-400 bg-bg"
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400"
              style={{ background: 'linear-gradient(90deg,#ff4d00,#00e5ff)' }} />
            <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(255,77,0,0.08) 0%, transparent 70%)' }} />

            <div className="flex items-start justify-between mb-4">
              <div className="font-mono text-[0.65rem] tracking-[0.2em] text-accent/60">{p.num} —</div>
              <div className="text-3xl opacity-20 group-hover:opacity-60 transition-opacity duration-300">{p.emoji}</div>
            </div>

            <h3 className="font-syne font-extrabold text-xl mb-3 leading-tight">{p.name}</h3>
            <p className="font-mono text-xs leading-loose text-fg/45 mb-5">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {p.tags.map(t => (
                <span key={t} className="font-mono text-[0.6rem] tracking-widest px-2 py-1 text-accent2 border border-accent2/20" style={{ background: 'rgba(0,229,255,0.06)' }}>
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 border-t border-fg/5 pt-5">
              <a href={p.github} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.15em] uppercase text-fg/35 hover:text-accent3 transition-colors duration-200">
                <Github size={12} /> GitHub
              </a>
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.15em] uppercase text-accent hover:text-accent2 transition-colors duration-200">
                  <ExternalLink size={12} /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
