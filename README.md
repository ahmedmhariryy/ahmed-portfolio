# Ahmed Elhariry — Portfolio

Portfolio built with **Next.js 14 + TypeScript + Tailwind CSS + Framer Motion**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## 📁 Structure

```
src/
  app/
    layout.tsx       ← Root layout & metadata
    page.tsx         ← Main page (imports all sections)
    globals.css      ← Global styles & animations
  components/
    Cursor.tsx       ← Custom animated cursor
    Navbar.tsx       ← Fixed navbar with scroll effect
    Footer.tsx       ← Footer
    useReveal.ts     ← Scroll reveal hook
  sections/
    Hero.tsx         ← Hero section with glitch & animations
    Marquee.tsx      ← Scrolling skills marquee
    About.tsx        ← About + stats + orbit visual
    Skills.tsx       ← Skill tags + animated bars
    Projects.tsx     ← Project cards (edit here!)
    Contact.tsx      ← Contact with email + social links
```

## ✏️ Customize

### Add / Edit Projects
Open `src/sections/Projects.tsx` and edit the `projects` array:
```ts
const projects = [
  {
    num: '01',
    name: 'Your Project Name',
    desc: 'Description here',
    tags: ['React', 'Next.js'],
    github: 'https://github.com/your-repo',
    live: 'https://your-site.com',   // or null
  },
]
```

### Change Colors
Edit `tailwind.config.js` → `theme.extend.colors`  
Or edit CSS variables in `src/app/globals.css`

## 🌐 Deploy to Vercel (Free)

```bash
npm install -g vercel
vercel
```

Or push to GitHub → import on vercel.com → auto deploy! 🎉
