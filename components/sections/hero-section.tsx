"use client"

import { FocusFrame } from "@/components/camera-hud/focus-frame"
import { HudText } from "@/components/camera-hud/hud-text"
import { useState, useEffect } from "react"
import { ArrowDown } from "lucide-react"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const [isFocused, setFocused] = useState(false)
  const [isHovered, setHover] = useState(false)
  const router = useRouter()

  /** cool font and color spin cycle */
  useEffect(() => {
    const timer = setTimeout(() => setFocused(true), 500)
    return () => clearTimeout(timer)
  }, [])

  /**
   * TODO: track button clicks with vercel analytics
   */
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative hud-grid">
      <div className="container mx-auto px-6 md:px-12 py-20">
        <FocusFrame active={isFocused} size="lg" className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center gap-6">

            {/* Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight text-balance">
              Victor K. Miezah
            </h1>

            {/* Role */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="bg-secondary px-4 py-2 border border-border hover:bg-hud-green/70 transition-colors cursor-pointer"
                onClick={() => router.push("/resumes/engineer/")}>
                <HudText variant="value">Engineer</HudText>
              </button>
              <button className="bg-secondary px-4 py-2 border border-border  hover:bg-indigo-700 transition-colors cursor-pointer"
                onClick={() => router.push("/resumes/creative/")}>
                <HudText variant="value">Creative</HudText>
              </button>
              <button className="bg-secondary px-4 py-2 border border-border hover:bg-sky-600 hover:content:OK transition-colors cursor-wait"
                onClick={() => undefined}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                <HudText variant="value">{isHovered ? "Coming Soon" : "Learner"}</HudText>
              </button>
            </div>

            {/* Bio */}
            <p className="text-muted-foreground max-w-xl text-pretty leading-relaxed">
              I am technical enough to build it, creative enough to make it matter, and articulate enough to sell it. That combination is rare, and it is what I bring to every room I walk into.
            </p>

            {/* CTA */}
            <div className="flex flex-col items-center gap-4 mt-8">
              <a
                href="#projects"
                className="group flex items-center gap-2 bg-hud-green text-primary-foreground px-6 py-3 font-mono text-sm hover:bg-hud-green/90 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-primary-foreground" />
                VIEW PORTFOLIO
              </a>
              <ArrowDown className="w-5 h-5 text-muted-foreground animate-bounce" />
            </div>
          </div>
        </FocusFrame>
      </div>

      {/* Viewfinder Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 right-0 h-px bg-hud-white/10" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-hud-white/10" />
        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-hud-white/10" />
        <div className="absolute left-2/3 top-0 bottom-0 w-px bg-hud-white/10" />
      </div>
    </section>
  )
}
