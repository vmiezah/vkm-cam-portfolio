import { HudOverlay } from "@/components/camera-hud/hud-overlay"
import { Navigation } from "@/components/camera-hud/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden scanlines">
      {/* Camera HUD Overlay - Fixed position elements */}
      <HudOverlay />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-hud-green" />
              <span>SYSTEM OPERATIONAL</span>
              <span className="text-border">|</span>
              <span>v1.0.0</span>
            </div>
            <p className="font-mono text-xs text-muted-foreground">
              © 2026 Victor K.Miezah. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
