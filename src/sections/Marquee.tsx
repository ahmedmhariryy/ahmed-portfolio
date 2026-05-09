const items = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript ES6+', 'CSS Animations', 'REST APIs', 'Responsive Design', 'Framer Motion', 'Git & GitHub']

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="bg-accent py-3 overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee">
        {doubled.map((item, i) => (
          <span key={i} className="font-mono text-xs tracking-[0.2em] uppercase text-white px-6">
            {i % items.length === items.length - 1 ? item : <>{item}<span className="opacity-40 ml-6">///</span></>}
          </span>
        ))}
      </div>
    </div>
  )
}
