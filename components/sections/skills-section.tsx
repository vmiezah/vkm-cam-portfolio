"use client"

import { HudText } from "@/components/camera-hud/hud-text"
import { useState } from "react"

const skillCategories = [
  {
    id: "frontend",
    label: "FRONTEND",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 75 },
      { name: "Three.js", level: 70 }
    ]
  },
  {
    id: "backend",
    label: "BACKEND",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "PostgreSQL", level: 85 },
      { name: "GraphQL", level: 78 },
      { name: "Redis", level: 72 }
    ]
  },
  {
    id: "tools",
    label: "TOOLS",
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Figma", level: 85 },
      { name: "CI/CD", level: 78 }
    ]
  }
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("frontend")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const currentCategory = skillCategories.find(c => c.id === activeCategory)

  return (
    <section id="skills" className="min-h-screen py-20 relative hud-grid">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-hud-green" />
            <HudText variant="label">Technical Specs</HudText>
          </div>
          <div className="flex-1 h-px bg-border" />
          <HudText variant="muted">SYSTEM DIAGNOSTICS</HudText>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Skill Meter */}
          <div className="relative">
            {/* Category Tabs */}
            <div className="flex gap-2 mb-8">
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 font-mono text-xs border transition-all ${
                    activeCategory === cat.id
                      ? 'bg-hud-green text-primary-foreground border-hud-green'
                      : 'bg-transparent text-muted-foreground border-border hover:border-hud-white/50'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Skills List */}
            <div className="space-y-6">
              {currentCategory?.skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="group"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-muted-foreground w-6">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="font-mono text-sm text-foreground">{skill.name}</span>
                    </div>
                    <span className={`font-mono text-sm ${hoveredSkill === skill.name ? 'text-hud-green' : 'text-muted-foreground'}`}>
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative h-2 bg-secondary ml-9">
                    <div 
                      className="absolute inset-y-0 left-0 bg-hud-green transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                    {/* Markers */}
                    <div className="absolute inset-0 flex">
                      {[...Array(10)].map((_, i) => (
                        <div 
                          key={i} 
                          className="flex-1 border-r border-background/50 last:border-r-0"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual Representation */}
          <div className="relative">
            {/* Radar-like visualization */}
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Concentric circles */}
              {[100, 75, 50, 25].map((size) => (
                <div
                  key={size}
                  className="absolute inset-0 m-auto border border-border/30 rounded-full"
                  style={{ 
                    width: `${size}%`, 
                    height: `${size}%` 
                  }}
                />
              ))}
              
              {/* Cross lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-full h-px bg-border/30" />
                <div className="absolute w-px h-full bg-border/30" />
                <div className="absolute w-full h-px bg-border/30 rotate-45" />
                <div className="absolute w-full h-px bg-border/30 -rotate-45" />
              </div>

              {/* Skill points */}
              {currentCategory?.skills.map((skill, index) => {
                const angle = (index / currentCategory.skills.length) * 2 * Math.PI - Math.PI / 2
                const radius = (skill.level / 100) * 45
                const x = 50 + radius * Math.cos(angle)
                const y = 50 + radius * Math.sin(angle)
                
                return (
                  <div
                    key={skill.name}
                    className="absolute w-3 h-3 bg-hud-green rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                    style={{ 
                      left: `${x}%`, 
                      top: `${y}%`,
                      boxShadow: hoveredSkill === skill.name ? '0 0 20px var(--hud-green)' : 'none'
                    }}
                  >
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-xs text-hud-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      {skill.name}
                    </span>
                  </div>
                )
              })}

              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-mono text-2xl font-bold text-hud-green">
                    {currentCategory?.skills.reduce((acc, s) => acc + s.level, 0) / (currentCategory?.skills.length || 1) | 0}%
                  </span>
                  <p className="font-mono text-xs text-muted-foreground mt-1">AVG PROFICIENCY</p>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-hud-green rounded-full" />
                <span className="font-mono text-xs text-muted-foreground">Expert (90+)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-hud-yellow rounded-full" />
                <span className="font-mono text-xs text-muted-foreground">Advanced (70-89)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
