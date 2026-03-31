"use client"

import { FocusFrame } from "@/components/camera-hud/focus-frame"
import { HudText } from "@/components/camera-hud/hud-text"
import { MapPin, Calendar, Code, Camera } from "lucide-react"

const timeline = [
  {
    year: "2023-2025",
    title: "Software Engineer",
    company: "Bloomberg LP",
    description: "Developed fullstack software for Bloomberg's Office Online Applications."
  },
  {
    year: "2022",
    title: "Software Engineer",
    company: "Bloomberg LP",
    description: "Built backend services for Bloomberg's caching system."
  },
  {
    year: "2021",
    title: "Software Engineer",
    company: "Amazon",
    description: "Developed software for Amazon's Tax Department."
  },
  {
    year: "2023",
    title: "CS Degree",
    company: "Skidmore College",
    description: "Graduated with a Bachelor's degree in Computer Science. Studied abroad in London. Saw the world. Learned a little bit of everything. Made lifelong friends."
  }
]

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full border-2 border-hud-yellow" />
            <HudText variant="label">Subject Profile</HudText>
          </div>
          <div className="flex-1 h-px bg-border" />
          <HudText variant="muted">BIO DATA</HudText>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Profile Info */}
          <div>
            <FocusFrame active size="md" className="mb-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Avatar Placeholder */}
                <div className="w-32 h-32 bg-secondary border border-border relative shrink-0">
                    <img src="/headshot2.jpg" alt="Victor's headshot" />
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">About Me</h2>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    I&apos;m a passionate developer with a keen eye for detail and a love for creating 
                    seamless digital experiences. 
                  </p>
                </div>
              </div>
            </FocusFrame>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-hud-green" />
                  <HudText variant="label">Location</HudText>
                </div>
                <p className="font-mono text-foreground">New York, NY</p>
              </div>
              <div className="bg-card border border-border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="w-4 h-4 text-hud-green" />
                  <HudText variant="label">Specialization</HudText>
                </div>
                <p className="font-mono text-foreground">Full-Stack</p>
              </div>
              <div className="bg-card border border-border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-hud-green animate-pulse" />
                  <HudText variant="label">Status</HudText>
                </div>
                <p className="font-mono text-hud-green">Open to Work <br></br>(& Relocation)</p>
              </div>
            </div>
          </div>

          {/* Right - Timeline */}
          <div>
            <h3 className="font-mono text-sm text-muted-foreground mb-6 flex items-center gap-2">
              <span className="w-6 h-px bg-hud-green" />
              CAREER TIMELINE
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-2.5 top-1.5 w-3 h-3 bg-background border-2 border-hud-green rounded-full" />
                    
                    {/* Year badge */}
                    <div className="inline-flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs px-2 py-0.5 bg-hud-green text-primary-foreground">
                        {item.year}
                      </span>
                    </div>

                    <h4 className="text-foreground font-bold">{item.title}</h4>
                    <p className="text-hud-green font-mono text-sm mb-1">{item.company}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
