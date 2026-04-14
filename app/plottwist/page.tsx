"use client"

import PageHeader from "@/components/ui/page-header"
import Link from "next/link"

const plottwistPics = [{ id: 1, title: "Affinity Map", description: "A map of the characters and their relationships.", image: "/plottwist/affinity_map.png" },
{ id: 2, title: "Design Draft 1", description: "A design draft of the characters and their relationships.", image: "/plottwist/designdraft1.png" },
{ id: 3, title: "Design Draft 2", description: "A design draft of the characters and their relationships.", image: "/plottwist/designdraft2.png" },
{ id: 4, title: "Plottwist Archetypes", description: "A design draft of the characters and their relationships.", image: "/plottwist/plottwist-archetypes.jpg" },
]

export default function PlotTwistPage() {

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-12">
        <PageHeader title="PLOT TWIST" />

        <div className="spacer pt-16" >

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
