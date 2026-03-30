"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export const navItems = [
  { id: "home", label: "HOME", shortcut: "01" },
  { id: "projects", label: "PROJECTS", shortcut: "02" },
  { id: "skills", label: "SKILLS", shortcut: "03" },
  { id: "about", label: "ABOUT", shortcut: "04" },
  { id: "contact", label: "CONTACT", shortcut: "05" }
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Find active section
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 200

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop
          const height = section.offsetHeight
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navItems[index].id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className={cn(
          "fixed left-1/2 -translate-x-1/2 z-40 transition-all duration-300 hidden md:block",
          scrolled ? "top-4" : "top-20"
        )}
      >
        <div className="flex items-center gap-1 bg-background/90 backdrop-blur-sm border border-border px-2 py-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "px-4 py-2 font-mono text-xs transition-all flex items-center gap-2",
                activeSection === item.id
                  ? "bg-hud-green text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span className="text-[10px] opacity-50">{item.shortcut}</span>
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed bottom-4 right-4 z-50 md:hidden w-14 h-14 bg-hud-green text-primary-foreground flex items-center justify-center shadow-lg"
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Navigation */}
      <nav
        className={cn(
          "fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-md transition-all duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "px-8 py-4 font-mono text-lg transition-all flex items-center gap-4",
                activeSection === item.id
                  ? "text-hud-green"
                  : "text-muted-foreground"
              )}
            >
              <span className="text-sm opacity-50">{item.shortcut}</span>
              {item.label}
              {activeSection === item.id && (
                <span className="w-2 h-2 rounded-full bg-hud-green animate-pulse" />
              )}
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}
