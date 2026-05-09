'use client'
import { useEffect, useState } from 'react'

const links = ['About', 'Skills', 'CV', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-16 py-6 transition-all duration-500 ${scrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-accent/10' : 'bg-transparent'}`}>
      <div className="font-mono text-accent font-bold tracking-[0.2em] text-sm">AE_</div>
      <div className="hidden md:flex gap-10">
        {links.map(l => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="font-mono text-xs tracking-[0.15em] uppercase text-fg/50 hover:text-accent2 hover:opacity-100 transition-colors duration-300"
          >
            {l}
          </a>
        ))}
      </div>
    </nav>
  )
}
