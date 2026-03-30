import { cn } from "@/lib/utils"

interface HudTextProps {
  children: React.ReactNode
  variant?: "label" | "value" | "title" | "muted"
  className?: string
}

export function HudText({ children, variant = "label", className }: HudTextProps) {
  const variants = {
    label: "text-muted-foreground text-xs uppercase tracking-widest font-mono",
    value: "text-hud-white text-sm font-mono",
    title: "text-hud-white text-2xl md:text-4xl font-bold tracking-tight",
    muted: "text-muted-foreground text-xs font-mono"
  }

  return (
    <span className={cn(variants[variant], className)}>
      {children}
    </span>
  )
}
