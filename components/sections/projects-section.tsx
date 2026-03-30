"use client"

import { FocusFrame } from "@/components/camera-hud/focus-frame"
import { HudText } from "@/components/camera-hud/hud-text"
import { useEffect, useState } from "react"
import { ExternalLink, ChevronRight, Images } from "lucide-react"

const images = [
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
"/myphotos/IMG_5103.jpeg",
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
"/myphotos/IMG_9118.jpeg"
]
const projects = [
  {
    id: "PLOTTWIST",
    title: "PlotTwist",
    description: "A tool to encourage storytelling and creative expression for neurodivergent individuals.",
    tech: ["Figma"],
    image: "/projects/ecommerce.jpg",
    status: "ITERATING",
    year: "2025"
  },
  {
    id: "PHOTOS",
    title: "My Photos",
    description: "A collection of my works of photography.",
    tech: ["iPhone, Canon Camera"],
    status: "ITERATING",
    year: "2021-NOW",
  },
  
]

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<string | null>(null)
  const [photoPreview, setPhotoPreview] = useState(images[0])

  useEffect(() => {
    setPhotoPreview(images[Math.floor(Math.random() * images.length)])
  }, [])

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 border-2 border-hud-white" />
            <HudText variant="label">Projects Archive</HudText>
          </div>
          <div className="flex-1 h-px bg-border" />
          <HudText variant="muted">FRM 001-004</HudText>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <FocusFrame 
              key={project.id}
              active={activeProject === project.id}
              size="sm"
              className="bg-card border border-border hover:border-hud-green/50 transition-all duration-300 cursor-pointer"
            >
              <div
                className="flex flex-col gap-4"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                {/* Project Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-hud-green">{project.id}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${project.status === 'LIVE' ? 'bg-hud-green animate-pulse' : 'bg-hud-yellow'}`} />
                    <span className="font-mono text-xs text-muted-foreground">{project.status}</span>
                  </div>
                </div>

                {/* Project Image */}
                <div className="aspect-video bg-secondary relative overflow-hidden group">
                  <img
                    src={project.id === "PHOTOS" ? photoPreview : project.image}
                    alt={`${project.title} preview`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 grid-rows-3 gap-px opacity-30">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className={`w-8 h-8 border border-hud-white/20 ${i === 4 ? "border-hud-green" : ""}`} />
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80">
                    <button className="p-3 bg-hud-green text-primary-foreground hover:bg-hud-green/90 transition-colors">
                    {project.id == "PHOTOS" ? <Images className="w-5 h-5" />  : <ExternalLink className="w-5 h-5" /> }                
                    </button>
                  </div>
                </div>

                {/* Project Info */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-secondary text-xs font-mono text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <div className="flex items-center gap-2 text-hud-green font-mono text-sm mt-2 group/link cursor-pointer">

                  <span>{project.id == "PHOTOS" ? "VIEW IMAGES"  : "VIEW PROJECT" }         </span>
                  <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </FocusFrame>
          ))}
        </div>
      </div>
    </section>
  )
}
