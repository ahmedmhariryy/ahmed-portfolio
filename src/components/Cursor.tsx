'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mx = useRef(0), my = useRef(0)
  const rx = useRef(0), ry = useRef(0)
  const raf = useRef<number>(0)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.current = e.clientX
      my.current = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
    }
    const animate = () => {
      rx.current += (mx.current - rx.current) * 0.12
      ry.current += (my.current - ry.current) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = rx.current + 'px'
        ringRef.current.style.top = ry.current + 'px'
      }
      raf.current = requestAnimationFrame(animate)
    }
    const grow = () => {
      cursorRef.current && (cursorRef.current.style.cssText += 'width:20px;height:20px;')
      ringRef.current && (ringRef.current.style.cssText += 'width:56px;height:56px;border-color:#ffe600;')
    }
    const shrink = () => {
      cursorRef.current && (cursorRef.current.style.cssText += 'width:12px;height:12px;')
      ringRef.current && (ringRef.current.style.cssText += 'width:36px;height:36px;border-color:#00e5ff;')
    }
    document.addEventListener('mousemove', move)
    raf.current = requestAnimationFrame(animate)
    document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })
    return () => {
      document.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent transition-[width,height] duration-200 mix-blend-difference" style={{ background: '#ff4d00' }} />
      <div ref={ringRef} className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full border-2 transition-[width,height,border-color] duration-300 mix-blend-difference" style={{ borderColor: '#00e5ff' }} />
    </>
  )
}
