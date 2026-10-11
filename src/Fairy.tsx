import { useEffect, useRef, useState } from "react"
import type { Lang } from "./content"

const W = 84
const H = 96

const T = {
  en: {
    hello: "Hi, I'm Putri's little fairy! Tap me for a tour.",
    tips: {
      home: "Hi, I'm Putri's little fairy! Tap me for a tour.",
      portfolio: "Hover a project card and I'll tell you what I think.",
      about: "Open the experience accordion to peek at Putri's career.",
      blog: "Pick an article and I'll cheer you on.",
      detail: "Nice choice! Scroll down for the full story.",
    },
    hover: [
      "This one is a favorite!",
      "Great pick, take a look.",
      "Psst, this one had real impact.",
      "Click it, you won't regret it.",
    ],
    cta: "Want to work together? Say hi, Putri replies fast.",
    bottom: "You made it to the bottom! Want to chat with Putri?",
    dark: "Lights off, stars on.",
    light: "Let there be light.",
    lang: "Now in English.",
    sleepy: "zzz...",
    wake: "Oh, you're back!",
    dust: ["Pixie dust!", "Sparkle sparkle.", "Make a wish.", "Wheee!"],
    followOn: "I'll follow your cursor.",
    followOff: "Okay, I'll stay here.",
    bye: "Bye for now! Find me in the corner.",
    facts: [
      "Putri has 8 years of experience across 6 industries.",
      "Her design system has 200+ components.",
      "The fintech onboarding redesign lifted D7 retention by 61%.",
      "She loves using cognitive psychology to humanize technology.",
      "Le Nusa Paris is a favorite: Indonesian fine dining, online.",
    ],
    title: "Putri's Fairy",
    sub: "Where to?",
    portfolio: "See portfolio",
    about: "About Putri",
    blog: "Read the blog",
    theme: "Switch theme",
    language: "Switch language",
    email: "Send an email",
    fact: "Fun fact",
    dustLabel: "Pixie dust",
    follow: (on: boolean) => `Follow my cursor: ${on ? "on" : "off"}`,
    hide: "Hide fairy",
    close: "Close",
    show: "Show fairy",
    aria: "Putri's fairy, open menu",
  },
  id: {
    hello: "Hai, aku peri kecilnya Putri! Klik aku untuk keliling.",
    tips: {
      home: "Hai, aku peri kecilnya Putri! Klik aku untuk keliling.",
      portfolio: "Arahkan kursor ke kartu proyek, nanti aku komentari.",
      about: "Buka accordion pengalaman untuk intip karier Putri.",
      blog: "Pilih satu artikel, aku semangati kamu.",
      detail: "Pilihan bagus! Scroll ke bawah untuk cerita lengkapnya.",
    },
    hover: [
      "Yang ini favoritku!",
      "Pilihan bagus, intip yuk.",
      "Psst, yang ini dampaknya nyata.",
      "Klik aja, nggak bakal nyesel.",
    ],
    cta: "Mau kerja bareng? Sapa Putri, balasnya cepat kok.",
    bottom: "Kamu sudah sampai bawah! Mau ngobrol dengan Putri?",
    dark: "Lampu mati, bintang menyala.",
    light: "Terang kembali.",
    lang: "Sekarang dalam Bahasa Indonesia.",
    sleepy: "zzz...",
    wake: "Eh, kamu balik lagi!",
    dust: ["Debu peri!", "Berkilau berkilau.", "Buat permintaan.", "Wheee!"],
    followOn: "Aku akan mengikuti kursormu.",
    followOff: "Oke, aku diam di sini.",
    bye: "Sampai nanti! Cari aku di pojok ya.",
    facts: [
      "Putri punya 8 tahun pengalaman di 6 industri.",
      "Design system buatannya punya 200+ komponen.",
      "Redesain onboarding fintech menaikkan retensi D7 sebesar 61%.",
      "Ia suka memakai psikologi kognitif untuk memanusiakan teknologi.",
      "Le Nusa Paris salah satu favorit: fine dining Indonesia, versi online.",
    ],
    title: "Peri Putri",
    sub: "Mau ke mana?",
    portfolio: "Lihat portofolio",
    about: "Tentang Putri",
    blog: "Baca blog",
    theme: "Ganti tema",
    language: "Ganti bahasa",
    email: "Kirim email",
    fact: "Fakta unik",
    dustLabel: "Debu peri",
    follow: (on: boolean) => `Ikuti kursorku: ${on ? "nyala" : "mati"}`,
    hide: "Sembunyikan peri",
    close: "Tutup",
    show: "Tampilkan peri",
    aria: "Peri Putri, buka menu",
  },
}

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  max: number
  size: number
  hue: number
}

function routeKey(): keyof typeof T.en.tips {
  const p = window.location.pathname.replace(/\/$/, "") || "/"
  if (p === "/") return "home"
  if (p === "/portfolio") return "portfolio"
  if (p === "/about") return "about"
  if (p === "/blog") return "blog"
  return "detail"
}

function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
  ctx.beginPath()
  ctx.moveTo(x, y - r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.quadraticCurveTo(x, y, x, y + r)
  ctx.quadraticCurveTo(x, y, x - r, y)
  ctx.quadraticCurveTo(x, y, x, y - r)
  ctx.fill()
}

export default function Fairy({ lang }: { lang: Lang }) {
  const L = T[lang]
  const Lref = useRef(L)
  Lref.current = L

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const tiltRef = useRef<HTMLSpanElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  const [hidden, setHidden] = useState(() => localStorage.getItem("fairy-hidden") === "1")
  const [follow, setFollow] = useState(() => localStorage.getItem("fairy-follow") !== "0")
  const [menuOpen, setMenuOpen] = useState(false)
  const [bubble, setBubble] = useState<string | null>(null)
  const [mood, setMood] = useState<"idle" | "happy">("idle")
  const [sleepy, setSleepy] = useState(false)
  const [side, setSide] = useState<"start" | "end">("end")
  const [vert, setVert] = useState<"up" | "down">("up")

  const hiddenRef = useRef(hidden)
  const followRef = useRef(follow)
  const sleepyRef = useRef(false)
  const menuRef = useRef(false)
  hiddenRef.current = hidden
  followRef.current = follow
  menuRef.current = menuOpen

  const pos = useRef({ x: 0, y: 0 })
  const vel = useRef({ x: 0, y: 0 })
  const pointer = useRef<{ x: number; y: number } | null>(null)
  const mode = useRef<"home" | "follow" | "goto">("home")
  const gotoPt = useRef({ x: 0, y: 0 })
  const modeTimer = useRef<number | undefined>(undefined)
  const bubbleTimer = useRef<number | undefined>(undefined)
  const moodTimer = useRef<number | undefined>(undefined)
  const idleTimer = useRef<number | undefined>(undefined)
  const lastSay = useRef(0)
  const particles = useRef<Particle[]>([])
  const reduced = useRef(false)
  const sideRef = useRef<"start" | "end">("end")
  const vertRef = useRef<"up" | "down">("up")
  const factIdx = useRef(0)

  const say = (text: string, ms = 4600) => {
    window.clearTimeout(bubbleTimer.current)
    setBubble(text)
    lastSay.current = Date.now()
    bubbleTimer.current = window.setTimeout(() => setBubble(null), ms)
  }
  const sayRef = useRef(say)
  sayRef.current = say

  const burst = (x: number, y: number, n = 22) => {
    if (reduced.current) return
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2
      const s = 1 + Math.random() * 3.2
      particles.current.push({
        x,
        y,
        vx: Math.cos(a) * s,
        vy: Math.sin(a) * s - 0.6,
        life: 0,
        max: 40 + Math.random() * 30,
        size: 2 + Math.random() * 3.5,
        hue: Math.random() < 0.6 ? 255 + Math.random() * 75 : 195 + Math.random() * 30,
      })
    }
    if (particles.current.length > 260) particles.current.splice(0, particles.current.length - 260)
  }
  const burstRef = useRef(burst)
  burstRef.current = burst

  const hop = () => {
    setMood("happy")
    window.clearTimeout(moodTimer.current)
    moodTimer.current = window.setTimeout(() => setMood("idle"), 700)
  }

  const flyTo = (x: number, y: number, ms = 1400) => {
    if (reduced.current) return
    gotoPt.current = { x, y }
    mode.current = "goto"
    window.clearTimeout(modeTimer.current)
    modeTimer.current = window.setTimeout(() => {
      mode.current = "home"
    }, ms)
  }

  const poke = () => {
    window.clearTimeout(idleTimer.current)
    if (sleepyRef.current) {
      sleepyRef.current = false
      setSleepy(false)
      sayRef.current(Lref.current.wake, 2600)
      hop()
    }
    idleTimer.current = window.setTimeout(() => {
      if (hiddenRef.current || menuRef.current) return
      sleepyRef.current = true
      setSleepy(true)
      mode.current = "home"
      sayRef.current(Lref.current.sleepy, 3000)
    }, 28000)
  }
  const pokeRef = useRef(poke)
  pokeRef.current = poke

  // animation loop
  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d") ?? null
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const home = () => ({ x: window.innerWidth - W - 32, y: window.innerHeight - H - 20 })

    try {
      const saved = JSON.parse(sessionStorage.getItem("fairy-pos") || "null")
      if (saved && typeof saved.x === "number") pos.current = saved
      else pos.current = home()
    } catch {
      pos.current = home()
    }

    const resize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener("resize", resize)

    let raf = 0
    let last = performance.now()
    const frame = (t: number) => {
      const dt = Math.min(34, t - last) / 16.67
      last = t
      const w = window.innerWidth
      const h = window.innerHeight
      const hm = home()
      let tx = hm.x + Math.sin(t / 1800) * 8
      let ty = hm.y + Math.cos(t / 2300) * 5
      let k = 0.06
      if (!reduced.current) {
        if (mode.current === "goto") {
          tx = gotoPt.current.x - W / 2
          ty = gotoPt.current.y - H / 2
          k = 0.1
        } else if (mode.current === "follow" && pointer.current && followRef.current && !sleepyRef.current) {
          tx = pointer.current.x + 26
          ty = pointer.current.y - H - 14
          k = 0.09
        }
      }
      tx = Math.max(6, Math.min(w - W - 6, tx))
      ty = Math.max(6, Math.min(h - H - 6, ty))
      const ease = 1 - Math.pow(1 - k, dt)
      const px = pos.current.x
      const py = pos.current.y
      pos.current.x += (tx - px) * ease
      pos.current.y += (ty - py) * ease
      vel.current.x = (pos.current.x - px) / dt
      vel.current.y = (pos.current.y - py) / dt

      const root = rootRef.current
      if (root) {
        root.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`
        const tilt = Math.max(-16, Math.min(16, vel.current.x * 2.4))
        if (tiltRef.current) tiltRef.current.style.transform = `rotate(${tilt}deg)`
        if (pointer.current && svgRef.current) {
          const dx = pointer.current.x - (pos.current.x + W / 2)
          const dy = pointer.current.y - (pos.current.y + 40)
          const d = Math.hypot(dx, dy) || 1
          const m = Math.min(1.8, d / 90)
          svgRef.current.style.setProperty("--ex", `${(dx / d) * m}px`)
          svgRef.current.style.setProperty("--ey", `${(dy / d) * m}px`)
        }
        const ns = pos.current.x + W / 2 > w / 2 ? "end" : "start"
        if (ns !== sideRef.current) {
          sideRef.current = ns
          setSide(ns)
        }
        const nv = pos.current.y > 230 ? "up" : "down"
        if (nv !== vertRef.current) {
          vertRef.current = nv
          setVert(nv)
        }
      }

      if (!hiddenRef.current && !reduced.current) {
        const speed = Math.hypot(vel.current.x, vel.current.y)
        const wx = pos.current.x + 70
        const wy = pos.current.y + 24
        const rate = speed > 1.2 ? 2 : sleepyRef.current ? 0 : Math.random() < 0.07 ? 1 : 0
        for (let i = 0; i < rate; i++) {
          particles.current.push({
            x: wx + (Math.random() - 0.5) * 6,
            y: wy + (Math.random() - 0.5) * 6,
            vx: (Math.random() - 0.5) * 0.8 - vel.current.x * 0.1,
            vy: Math.random() * 0.8 + 0.2,
            life: 0,
            max: 34 + Math.random() * 26,
            size: 1.5 + Math.random() * 2.5,
            hue: 255 + Math.random() * 75,
          })
        }
      }

      if (ctx && canvas) {
        ctx.clearRect(0, 0, w, h)
        const list = particles.current
        for (let i = list.length - 1; i >= 0; i--) {
          const p = list[i]
          p.life += dt
          if (p.life >= p.max) {
            list.splice(i, 1)
            continue
          }
          p.x += p.vx * dt
          p.y += p.vy * dt
          p.vy += 0.035 * dt
          p.vx *= 0.99
          const a = 1 - p.life / p.max
          ctx.globalAlpha = a
          ctx.fillStyle = `hsl(${p.hue} 95% 68%)`
          drawStar(ctx, p.x, p.y, p.size * (0.5 + a * 0.7))
        }
        ctx.globalAlpha = 1
      }
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    const save = () => sessionStorage.setItem("fairy-pos", JSON.stringify(pos.current))
    window.addEventListener("pagehide", save)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      window.removeEventListener("pagehide", save)
    }
  }, [])

  // audience interaction listeners
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pokeRef.current()
      pointer.current = { x: e.clientX, y: e.clientY }
      if (e.pointerType === "mouse" && followRef.current && mode.current !== "goto") {
        mode.current = "follow"
        window.clearTimeout(modeTimer.current)
        modeTimer.current = window.setTimeout(() => {
          if (mode.current === "follow") mode.current = "home"
        }, 3500)
      }
    }
    const onDown = (e: PointerEvent) => {
      pokeRef.current()
      const el = e.target as HTMLElement
      if (el.closest(".fairy-root, .fairy-return")) return
      if (menuRef.current) setMenuOpen(false)
      if (hiddenRef.current) return
      burstRef.current(e.clientX, e.clientY, 14)
      if (!el.closest("a, button, input, textarea, select, summary, [role=button]")) {
        flyTo(e.clientX, e.clientY)
      }
    }
    const onOver = (e: MouseEvent) => {
      if (hiddenRef.current || menuRef.current) return
      const el = (e.target as HTMLElement).closest?.(
        ".project-card, .portfolio-list-card, .article-card, .featured-article, .talk-button, a[href^='mailto']",
      ) as HTMLElement | null
      if (!el || el === lastHover.current) return
      lastHover.current = el
      if (Date.now() - lastSay.current < 6500) return
      const Ls = Lref.current
      if (el.matches(".talk-button, a[href^='mailto']")) sayRef.current(Ls.cta)
      else if (Math.random() < 0.65) sayRef.current(Ls.hover[Math.floor(Math.random() * Ls.hover.length)], 3200)
    }
    const lastHover = { current: null as HTMLElement | null }
    let bottomSaid = false
    const onScroll = () => {
      pokeRef.current()
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40
      if (atBottom && !bottomSaid && !hiddenRef.current && document.documentElement.scrollHeight > window.innerHeight * 1.4) {
        bottomSaid = true
        sayRef.current(Lref.current.bottom, 5200)
        burstRef.current(pos.current.x + W / 2, pos.current.y + 40, 18)
        hop()
      }
    }
    const onKey = (e: KeyboardEvent) => {
      pokeRef.current()
      if (e.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("pointerdown", onDown, { passive: true })
    window.addEventListener("mouseover", onOver, { passive: true })
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("keydown", onKey)
    pokeRef.current()

    const greet = window.setTimeout(() => {
      if (hiddenRef.current) return
      const key = routeKey()
      let seen: string[] = []
      try {
        seen = JSON.parse(sessionStorage.getItem("fairy-seen") || "[]")
      } catch {
        seen = []
      }
      if (!seen.includes(key)) {
        sessionStorage.setItem("fairy-seen", JSON.stringify([...seen, key]))
        sayRef.current(Lref.current.tips[key], 5600)
        hop()
      }
    }, 1600)

    let first = true
    const mo = new MutationObserver(() => {
      if (first) return
      sayRef.current(document.documentElement.classList.contains("dark") ? Lref.current.dark : Lref.current.light, 3000)
      burstRef.current(pos.current.x + W / 2, pos.current.y + 40, 16)
    })
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    window.setTimeout(() => (first = false), 600)

    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerdown", onDown)
      window.removeEventListener("mouseover", onOver)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("keydown", onKey)
      window.clearTimeout(greet)
      window.clearTimeout(idleTimer.current)
      mo.disconnect()
    }
  }, [])

  // react to language switch
  const firstLang = useRef(true)
  useEffect(() => {
    if (firstLang.current) {
      firstLang.current = false
      return
    }
    if (!hiddenRef.current) sayRef.current(L.lang, 2800)
  }, [lang])

  const act = (name: string) => {
    poke()
    const centre = { x: pos.current.x + W / 2, y: pos.current.y + 40 }
    if (name === "portfolio" || name === "about" || name === "blog") {
      burst(centre.x, centre.y)
      window.location.href = `/${name}`
      return
    }
    setMenuOpen(false)
    if (name === "theme") {
      document.querySelector<HTMLElement>("[data-fairy='theme']")?.click()
    } else if (name === "language") {
      document.querySelector<HTMLElement>("[data-fairy='lang']")?.click()
    } else if (name === "email") {
      window.location.href = "mailto:ptr.wuln@gmail.com"
    } else if (name === "fact") {
      factIdx.current = (factIdx.current + 1) % L.facts.length
      say(L.facts[factIdx.current], 6000)
      burst(centre.x, centre.y, 14)
      hop()
    } else if (name === "dust") {
      say(L.dust[Math.floor(Math.random() * L.dust.length)], 2600)
      burst(centre.x, centre.y, 48)
      hop()
    } else if (name === "follow") {
      const next = !follow
      setFollow(next)
      localStorage.setItem("fairy-follow", next ? "1" : "0")
      say(next ? L.followOn : L.followOff, 2800)
    } else if (name === "hide") {
      burst(centre.x, centre.y, 36)
      say(L.bye, 2200)
      window.setTimeout(() => {
        setHidden(true)
        localStorage.setItem("fairy-hidden", "1")
      }, 900)
    }
  }

  const unhide = () => {
    setHidden(false)
    localStorage.removeItem("fairy-hidden")
    pos.current = { x: window.innerWidth - W - 32, y: window.innerHeight - H - 20 }
    window.setTimeout(() => {
      burst(pos.current.x + W / 2, pos.current.y + 40, 40)
      say(L.hello, 4200)
      hop()
    }, 80)
  }

  const toggleMenu = () => {
    poke()
    const open = !menuOpen
    setMenuOpen(open)
    setBubble(null)
    hop()
    burst(pos.current.x + W / 2, pos.current.y + 40, 12)
  }

  const menuItems: [string, string][] = [
    ["portfolio", L.portfolio],
    ["about", L.about],
    ["blog", L.blog],
    ["theme", L.theme],
    ["language", L.language],
    ["email", L.email],
    ["fact", L.fact],
    ["dust", L.dustLabel],
    ["follow", L.follow(follow)],
    ["hide", L.hide],
  ]

  return (
    <>
      <canvas aria-hidden="true" className="fairy-canvas" ref={canvasRef} />
      {hidden ? (
        <button aria-label={L.show} className="fairy-return" onClick={unhide} title={L.show} type="button">
          <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
            <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" fill="currentColor" />
          </svg>
        </button>
      ) : (
        <div className="fairy-root" data-side={side} data-vert={vert} ref={rootRef}>
          {menuOpen && (
            <div aria-label={L.title} className="fairy-menu" role="menu">
              <div className="fairy-menu-head">
                <div>
                  <strong>{L.title}</strong>
                  <span>{L.sub}</span>
                </div>
                <button aria-label={L.close} onClick={() => setMenuOpen(false)} type="button">
                  ×
                </button>
              </div>
              <div className="fairy-menu-list">
                {menuItems.map(([key, label]) => (
                  <button key={key} onClick={() => act(key)} role="menuitem" type="button">
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}
          {!menuOpen && bubble && (
            <div aria-live="polite" className="fairy-bubble" role="status">
              {bubble}
            </div>
          )}
          <button
            aria-expanded={menuOpen}
            aria-haspopup="menu"
            aria-label={L.aria}
            className={`fairy-avatar ${mood} ${sleepy ? "sleepy" : ""}`}
            onClick={toggleMenu}
            type="button"
          >
            <span className="fairy-tilt" ref={tiltRef}>
              <span className="fairy-float">
                {sleepy && (
                  <span aria-hidden="true" className="fairy-zzz">
                    <i>z</i>
                    <i>z</i>
                    <i>z</i>
                  </span>
                )}
                <svg aria-hidden="true" height={H} ref={svgRef} viewBox="0 0 84 96" width={W}>
                  <defs>
                    <radialGradient id="fg-glow">
                      <stop offset="0" stopColor="#a68bff" stopOpacity=".55" />
                      <stop offset="1" stopColor="#a68bff" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="fg-wing" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#bfd0ff" />
                      <stop offset="1" stopColor="#f0c8ff" />
                    </linearGradient>
                    <linearGradient id="fg-dress" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#5b78ff" />
                      <stop offset="1" stopColor="#a35bff" />
                    </linearGradient>
                  </defs>
                  <circle cx="42" cy="48" fill="url(#fg-glow)" r="42" />
                  <g className="fw fw-l">
                    <path d="M38 50C18 36 2 14 8 6c12-2 28 16 32 40z" fill="url(#fg-wing)" opacity=".8" stroke="#fff" strokeOpacity=".7" />
                    <path d="M38 54C22 54 8 64 12 74c12 2 24-8 28-16z" fill="url(#fg-wing)" opacity=".7" stroke="#fff" strokeOpacity=".7" />
                  </g>
                  <g className="fw fw-r">
                    <path d="M46 50C66 36 82 14 76 6c-12-2-28 16-32 40z" fill="url(#fg-wing)" opacity=".8" stroke="#fff" strokeOpacity=".7" />
                    <path d="M46 54C62 54 76 64 72 74c-12 2-24-8-28-16z" fill="url(#fg-wing)" opacity=".7" stroke="#fff" strokeOpacity=".7" />
                  </g>
                  <path d="M38 85l-1 7M46 85l1 7" stroke="#f1c7a3" strokeLinecap="round" strokeWidth="3" />
                  <ellipse cx="36.5" cy="92.5" fill="#ff8fc7" rx="3.4" ry="1.8" />
                  <ellipse cx="47.5" cy="92.5" fill="#ff8fc7" rx="3.4" ry="1.8" />
                  <path d="M33 64Q26 68 25 75" fill="none" stroke="#f1c7a3" strokeLinecap="round" strokeWidth="3" />
                  <path d="M32 61Q42 55 52 61L58 84Q42 91 26 84Z" fill="url(#fg-dress)" />
                  <path d="M26 84q4 4 8 1 4 5 8 1 4 4 8-1 4 3 8-1" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="1.2" />
                  <g className="fairy-wand">
                    <path d="M51 63Q60 61 64 53" fill="none" stroke="#f1c7a3" strokeLinecap="round" strokeWidth="3" />
                    <path d="M64 53L71 31" stroke="#d6a94a" strokeLinecap="round" strokeWidth="1.6" />
                    <path className="wand-star" d="M72 22l1.8 5.2L79 29l-5.2 1.8L72 36l-1.8-5.2L65 29l5.2-1.8z" fill="#ffd86b" />
                  </g>
                  <ellipse cx="42" cy="38" fill="#2a2140" rx="16.6" ry="16.4" />
                  <circle cx="42" cy="40" fill="#f6d0b0" r="14.6" />
                  <path d="M26 39Q27 22 42 22q15 0 16 17-8-9-16-8-8-1-16 8z" fill="#2a2140" />
                  <circle cx="42" cy="18.5" fill="#2a2140" r="7.4" />
                  <circle cx="50" cy="21" fill="#ff8fc7" r="2.8" />
                  <circle cx="50" cy="21" fill="#ffe6f2" r="1" />
                  <g className="fairy-eyes">
                    <g className="fairy-pupils">
                      <ellipse cx="36" cy="41" fill="#1b1530" rx="2.4" ry="3.1" />
                      <ellipse cx="48" cy="41" fill="#1b1530" rx="2.4" ry="3.1" />
                      <circle cx="36.8" cy="39.8" fill="#fff" r=".9" />
                      <circle cx="48.8" cy="39.8" fill="#fff" r=".9" />
                    </g>
                  </g>
                  <circle cx="31.5" cy="46.5" fill="#ff9ab8" opacity=".55" r="2.7" />
                  <circle cx="52.5" cy="46.5" fill="#ff9ab8" opacity=".55" r="2.7" />
                  <path className="fairy-mouth" d="M39 47.5Q42 50.5 45 47.5" fill="none" stroke="#b0455f" strokeLinecap="round" strokeWidth="1.4" />
                </svg>
              </span>
            </span>
          </button>
        </div>
      )}
    </>
  )
}
