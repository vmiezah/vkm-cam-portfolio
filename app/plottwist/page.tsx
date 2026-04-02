"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

const plottwistPics = [
  "/plottwist/affinity_map.png",
  "/plottwist/designdraft1.png",
  "/plottwist/designdraft2.png",
  "/plottwist/plottwist-archetypes.jpg",
]

export default function PlotTwistPage() {
  const stackRef = useRef<HTMLDivElement | null>(null)

  // useEffect(() => {
  //   const stack = stackRef.current
  //   if (!stack) return

  //   const cards = Array.from(stack.querySelectorAll<HTMLElement>(".myphotos-card"))
  //   if (!cards.length) return

  //   /** make card flip animation on hover and add text to background  */
  //   const rotateCards = () => {
  //     let angle = 0
  //     cards.forEach((card, index) => {
  //       if (card.classList.contains("away")) {
  //         card.style.transform = "translateY(-120vh) rotate(-48deg)"
  //       } else {
  //         card.style.transform = `rotate(${angle}deg)`
  //         angle -= 6
  //         card.style.zIndex = `${cards.length - index}`
  //       }
  //     })
  //   }})


  return (
    <main className="min-h-screen bg-lightblue text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-12">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-mono text-sm tracking-[0.3em] text-hud-green">PLOTTWIST</h1>
          <Link
            href="/#projects"
            className="border border-white/20 px-3 py-2 font-mono text-xs text-white/80 transition-colors hover:border-white/40 hover:text-white"
          >
            BACK
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {plottwistPics.map((src) => (
            <div key={src} className="overflow-hidden border border-white/10 bg-black/60">
              <img
                src={src}
                alt="Plottwist process picture"
                className="h-full w-full object-fit duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
