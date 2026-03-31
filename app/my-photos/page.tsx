"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

const photos = [
  "/myphotos/IMG_0122.jpeg",
  "/myphotos/IMG_1430.jpeg",
  "/myphotos/IMG_1696.jpeg",
  "/myphotos/IMG_2116.jpeg",
  "/myphotos/IMG_2179.jpeg",
  "/myphotos/IMG_2203.jpeg",
  "/myphotos/IMG_2229.jpeg",
  "/myphotos/IMG_2232.jpeg",
  "/myphotos/IMG_2234.jpeg",
  "/myphotos/IMG_2284.jpeg",
  "/myphotos/IMG_2291.jpeg",
  "/myphotos/IMG_2499.jpeg",
  "/myphotos/IMG_2534.jpeg",
  "/myphotos/IMG_2540.jpeg",
  "/myphotos/IMG_2545.jpeg",
  "/myphotos/IMG_2605.jpeg",
  "/myphotos/IMG_2684.jpeg",
  "/myphotos/IMG_2690.jpeg",
  "/myphotos/IMG_2738.jpeg",
  "/myphotos/IMG_2781.jpeg",
  "/myphotos/IMG_2894.jpeg",
  "/myphotos/IMG_2912.jpeg",
  "/myphotos/IMG_2928.jpeg",
  "/myphotos/IMG_3159.jpeg",
  "/myphotos/IMG_3191.jpeg",
  "/myphotos/IMG_4403.jpeg",
  "/myphotos/IMG_4603.jpeg",
  "/myphotos/IMG_4606.jpeg",
  "/myphotos/IMG_4647.jpeg",
  "/myphotos/IMG_4687.jpeg",
  "/myphotos/IMG_4699.jpeg",
  "/myphotos/IMG_4733.jpeg",
  "/myphotos/IMG_4880.jpeg",
  "/myphotos/IMG_4881.jpeg",
  "/myphotos/IMG_4913.jpeg",
  "/myphotos/IMG_4914.jpeg",
  "/myphotos/IMG_5103.JPG",
  "/myphotos/IMG_5248.jpeg",
  "/myphotos/IMG_5361.jpeg",
  "/myphotos/IMG_5402.jpeg",
  "/myphotos/IMG_5791.jpeg",
  "/myphotos/IMG_6006.jpeg",
  "/myphotos/IMG_6281.jpeg",
  "/myphotos/IMG_7722.jpeg",
  "/myphotos/IMG_7740.jpeg",
  "/myphotos/IMG_7989.jpeg",
  "/myphotos/IMG_8272.jpeg",
  "/myphotos/IMG_9118.jpeg",
]

export default function MyPhotosPage() {
  const stackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const stack = stackRef.current
    if (!stack) return

    const cards = Array.from(stack.querySelectorAll<HTMLElement>(".myphotos-card"))
    if (!cards.length) return

    const rotateCards = () => {
      let angle = 0
      cards.forEach((card, index) => {
        if (card.classList.contains("away")) {
          card.style.transform = "translateY(-120vh) rotate(-48deg)"
        } else {
          card.style.transform = `rotate(${angle}deg)`
          angle -= 6
          card.style.zIndex = `${cards.length - index}`
        }
      })
    }

    const onScroll = () => {
      const distance = window.innerHeight * 0.55
      const topVal = stack.getBoundingClientRect().top
      const index = Math.floor(-1 * (topVal / distance + 1))

      cards.forEach((card, i) => {
        if (i <= index) {
          card.classList.add("away")
        } else {
          card.classList.remove("away")
        }
      })
      rotateCards()
    }

    rotateCards()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const featured = photos.slice(0, 6)
  const gallery = photos.slice(6)

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-12">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-mono text-sm tracking-[0.3em] text-hud-green">MY PHOTOS</h1>
          <Link
            href="/"
            className="border border-white/20 px-3 py-2 font-mono text-xs text-white/80 transition-colors hover:border-white/40 hover:text-white"
          >
            BACK
          </Link>
        </div>

        <section ref={stackRef} className="myphotos-stack-area mb-12">
          <div className="myphotos-stack-sticky">
            {featured.map((src) => (
              <article key={src} className="myphotos-card">
                <img
                  src={src}
                  alt="Featured portfolio photo"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </article>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((src) => (
            <div key={src} className="overflow-hidden border border-white/10 bg-black/60">
              <img
                src={src}
                alt="Portfolio photo"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
