"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

const plottwistPics = [{id: 1, title: "Affinity Map", description: "A map of the characters and their relationships.", image: "/plottwist/affinity_map.png" },
  { id: 2, title: "Design Draft 1", description: "A design draft of the characters and their relationships.", image: "/plottwist/designdraft1.png" },
  { id: 3, title: "Design Draft 2", description: "A design draft of the characters and their relationships.", image: "/plottwist/designdraft2.png" },
  { id: 4, title: "Plottwist Archetypes", description: "A design draft of the characters and their relationships.", image: "/plottwist/plottwist-archetypes.jpg" },
]

export default function PlotTwistPage() {
  const stackRef = useRef<HTMLDivElement | null>(null)

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
            <div key={src.id} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={src.image} alt="Plottwist process picture" className="h-full w-full object-fit duration-300" />
                </div>
                <div className="flip-card-back"> 
                  <h1>{src.title}</h1>
                  <p>{src.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
