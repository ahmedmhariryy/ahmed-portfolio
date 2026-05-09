'use client'
import { useReveal } from '@/components/useReveal'
import Cursor from '@/components/Cursor'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/sections/Hero'
import Marquee from '@/sections/Marquee'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import CV from '@/sections/CV'
import Projects from '@/sections/Projects'
import Contact from '@/sections/Contact'

export default function Home() {
  useReveal()
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <CV />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
