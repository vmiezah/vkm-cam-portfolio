"use client"

import { useState, useEffect } from "react"
import { Battery, Wifi, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { navItems } from "./navigation"

export function HudOverlay() {
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")
  const [batteryLevel] = useState(87)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const { theme, resolvedTheme, setTheme } = useTheme()
  const currentTheme = (resolvedTheme || theme || "dark") as string
  const isDarkMode = currentTheme === "dark"

  const [navScrolled, setNavScrolled] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
      }))
      setDate(now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50)

      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 200

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop
          const height = section.offsetHeight

          if (scrollPosition >= top && scrollPosition < top + height) {
            const currentId = navItems[index].id
            setActiveSection(currentId)
          }
        }
      })
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const activeIndex = activeSection
    ? navItems.findIndex(item => item.id === activeSection)
    : -1

  return (
    <div className="fixed inset-0 pointer-events-none z-50 font-mono text-xs">
      {/* Top Left - Recording Indicator */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <div className="flex items-center gap-2 bg-background/80 px-3 py-1.5 border border-border">
          <span className="w-2.5 h-2.5 rounded-full bg-hud-red animate-rec-pulse" />
          <span className="text-hud-red font-semibold tracking-wider">REC</span>
        </div>
        <div className="bg-background/80 px-3 py-1.5 border border-border text-hud-white">
          {time}
        </div>
      </div>

      {/* Top Right - Camera Info */}
      <div className="absolute top-4 right-4 flex items-center gap-3">
        <div className="flex items-center gap-2 bg-background/80 px-3 py-1.5 border border-border">
          <Wifi className="w-3.5 h-3.5 text-hud-green" />
          <span className="text-hud-green">CONNECTED</span>
        </div>
        <div className="flex items-center gap-2 bg-background/80 px-3 py-1.5 border border-border">
          <Battery className="w-4 h-4 text-hud-green" />
          <span className="text-hud-green">{batteryLevel}%</span>
        </div>
      </div>

      {/* Top Center - Exposure Settings */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-4 transition-all duration-300 ${
          navScrolled
            ? "top-4 opacity-0 translate-y-2 pointer-events-none"
            : "top-4 opacity-100 translate-y-0"
        }`}
      >
        <div className="bg-background/80 px-3 py-1.5 border border-border">
          <span className="text-hud-white">ISO</span>
          <span className="text-hud-yellow ml-2">400</span>
        </div>
        <div className="bg-background/80 px-3 py-1.5 border border-border">
          <span className="text-hud-white">f/</span>
          <span className="text-hud-yellow">2.8</span>
        </div>
        <div className="bg-background/80 px-3 py-1.5 border border-border">
          <span className="text-hud-white">1/</span>
          <span className="text-hud-yellow">125</span>
        </div>
      </div>

      {/* Bottom Left - Mode & Format */}
      <div className="absolute bottom-4 left-4 flex items-center gap-3">
        <div className="bg-background/80 px-3 py-1.5 border border-border">
          <span className="text-hud-green">M</span>
          <span className="text-muted-foreground ml-2">MANUAL</span>
        </div>
      </div>

      {/* Bottom Right - Date & Mode */}
      <div className="absolute bottom-4 right-4 flex items-center gap-3">
        <div className="bg-background/80 px-3 py-1.5 border border-border hidden sm:block">
          <span className="text-muted-foreground">{date}</span>
        </div>
        <button
          type="button"
          className="bg-background/80 px-3 py-1.5 border border-border flex items-center gap-2 pointer-events-auto cursor-pointer"
          onClick={() => setTheme(isDarkMode ? "light" : "dark")}
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <span className="text-hud-white text-[10px] tracking-widest">MODE</span>
          {isDarkMode ? (
            <Moon className="w-3.5 h-3.5 text-hud-yellow" />
          ) : (
            <Sun className="w-3.5 h-3.5 text-hud-yellow" />
          )}
          <span className="text-hud-yellow text-[10px] uppercase">
            {isDarkMode ? "DARK" : "LIGHT"}
          </span>
        </button>
      </div>

      {/* Left Side - Scroll EV Meter */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-1">
        <span className="text-muted-foreground text-[10px] mb-1">EV</span>
        <div className="flex flex-col gap-0.5">
          {navItems.map((item, index) => {
            const isActive = index === activeIndex
            const isVisited = activeIndex >= 0 && index < activeIndex

            let barClass = "bg-hud-white/20"
            if (isVisited && !isActive) {
              barClass = "bg-hud-yellow/60"
            }
            if (isActive) {
              barClass = "bg-hud-green"
            }

            return (
              <div
                key={item.id}
                className={`w-1.5 h-3 transition-colors duration-200 ${barClass}`}
              />
            )
          })}
        </div>
        <span className="text-hud-green text-[10px] mt-1">
          {activeIndex >= 0 ? navItems[activeIndex].shortcut : "00"}
        </span>
      </div>

      {/* Right Side - Focus Distance */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-1">
        <span className="text-muted-foreground text-[10px] mb-1">m</span>
        <div className="flex flex-col gap-0.5">
          {['∞', '10', '5', '3', '2', '1.5', '1', '.7', '.5'].map((dist, i) => (
            <div key={i} className="flex items-center gap-1">
              <span className={`text-[8px] ${i === 3 ? 'text-hud-green' : 'text-muted-foreground'}`}>
                {dist}
              </span>
              <div className={`w-1 h-1 rounded-full ${i === 3 ? 'bg-hud-green' : 'bg-muted-foreground/30'}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Corner Brackets - Top Left */}
      <div className="absolute top-16 left-8 w-8 h-8 border-l-2 border-t-2 border-hud-white/40" />
      
      {/* Corner Brackets - Top Right */}
      <div className="absolute top-16 right-8 w-8 h-8 border-r-2 border-t-2 border-hud-white/40" />
      
      {/* Corner Brackets - Bottom Left */}
      <div className="absolute bottom-16 left-8 w-8 h-8 border-l-2 border-b-2 border-hud-white/40" />
      
      {/* Corner Brackets - Bottom Right */}
      <div className="absolute bottom-16 right-8 w-8 h-8 border-r-2 border-b-2 border-hud-white/40" />
    </div>
  )
}
