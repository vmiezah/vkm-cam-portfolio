"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

interface FocusFrameProps {
  children: React.ReactNode
  className?: string
  active?: boolean
  size?: "sm" | "md" | "lg"
}

export function FocusFrame({ children, className, active = false, size = "md" }: FocusFrameProps) {
  const sizeClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  }

  const cornerSize = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  }

  const isMobile = useIsMobile()
  const frameRef = React.useRef<HTMLDivElement | null>(null)
  const [offset, setOffset] = React.useState({ x: 0, y: 0 })

  const handleMouseMove = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (isMobile) return
      const rect = frameRef.current?.getBoundingClientRect()
      if (!rect) return

      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const dx = (event.clientX - centerX) / (rect.width / 2)
      const dy = (event.clientY - centerY) / (rect.height / 2)

      const clamp = (value: number, min: number, max: number) =>
        Math.min(max, Math.max(min, value))

      const maxOffset = 8 // max pixels to move from center

      const x = clamp(dx, -1, 1) * maxOffset
      const y = clamp(dy, -1, 1) * maxOffset

      setOffset({ x, y })
    },
    [isMobile]
  )

  const handleMouseLeave = React.useCallback(() => {
    setOffset({ x: 0, y: 0 })
  }, [])

  return (
    <div
      ref={frameRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative transition-transform duration-150 ease-out",
        sizeClasses[size],
        className
      )}
      style={{
        transform: isMobile
          ? undefined
          : `translate3d(${offset.x}px, ${offset.y}px, 0)`
      }}
    >
      {/* Corner brackets */}
      <div 
        className={cn(
          "absolute top-0 left-0 border-l-2 border-t-2 transition-colors duration-300",
          cornerSize[size],
          active ? "border-hud-green" : "border-hud-white/50"
        )} 
      />
      <div 
        className={cn(
          "absolute top-0 right-0 border-r-2 border-t-2 transition-colors duration-300",
          cornerSize[size],
          active ? "border-hud-green" : "border-hud-white/50"
        )} 
      />
      <div 
        className={cn(
          "absolute bottom-0 left-0 border-l-2 border-b-2 transition-colors duration-300",
          cornerSize[size],
          active ? "border-hud-green" : "border-hud-white/50"
        )} 
      />
      <div 
        className={cn(
          "absolute bottom-0 right-0 border-r-2 border-b-2 transition-colors duration-300",
          cornerSize[size],
          active ? "border-hud-green" : "border-hud-white/50"
        )} 
      />
      
      {/* Center crosshair on active */}
      {active && (
        <>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-hud-green" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-4 bg-hud-green" />
        </>
      )}
      
      {children}
    </div>
  )
}
