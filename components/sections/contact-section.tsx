"use client"

import { FocusFrame } from "@/components/camera-hud/focus-frame"
import { HudText } from "@/components/camera-hud/hud-text"
import { useState } from "react"
import { Send, Github, Linkedin, Mail } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact" className="min-h-screen py-20 relative hud-grid">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-2">
            <Send className="w-4 h-4 text-hud-red" />
            <HudText variant="label">Transmit Signal</HudText>
          </div>
          <div className="flex-1 h-px bg-border" />
          <HudText variant="muted">CONTACT INTERFACE</HudText>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Form */}
          <div>
            <FocusFrame active={focused !== null} size="md" className="bg-card border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-hud-green" />
                    <HudText variant="label">Identifier</HudText>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    placeholder="Enter your name..."
                    className="w-full bg-secondary border border-border px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-hud-green focus:outline-none transition-colors"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-hud-green" />
                    <HudText variant="label">Signal Address</HudText>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    placeholder="Enter your email..."
                    className="w-full bg-secondary border border-border px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-hud-green focus:outline-none transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-hud-green" />
                    <HudText variant="label">Message Payload</HudText>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    placeholder="Enter your message..."
                    rows={5}
                    className="w-full bg-secondary border border-border px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-hud-green focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-hud-green text-primary-foreground px-6 py-4 font-mono text-sm hover:bg-hud-green/90 transition-colors group"
                >
                  <span className="w-2 h-2 rounded-full bg-primary-foreground group-hover:animate-pulse" />
                  TRANSMIT MESSAGE
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </FocusFrame>
          </div>

          {/* Right - Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">
                Let&apos;s Connect
              </h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Want to connect? Send me a message and let's start a conversation. I&apos;m always open to 
                discussing new opportunities and ideas.
              </p>
            </div>

            {/* Direct Contact */}
            <div className="space-y-4 mb-8">
              <a 
                href="mailto:vmiezah17@gmail.com" 
                className="flex items-center gap-4 p-4 bg-card border border-border hover:border-hud-green/50 transition-colors group"
              >
                <div className="w-10 h-10 bg-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5 text-hud-green" />
                </div>
                <div>
                  <HudText variant="label">Email</HudText>
                  <p className="font-mono text-foreground group-hover:text-hud-green transition-colors">
                    vmiezah17@gmail.com 
                  </p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <HudText variant="label" className="mb-4 block">External Links</HudText>
              <div className="flex gap-4">
                {[
                  { icon: Github, label: "GitHub", href: "#" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/vmiezah/", target:"_blank"},
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.target}
                    className="w-12 h-12 bg-card border border-border flex items-center justify-center hover:border-hud-green hover:bg-hud-green/10 transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-hud-green transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Status Indicator */}
            <div className="mt-8 flex items-center gap-3 p-4 border border-hud-green/30 bg-hud-green/5">
              <span className="w-3 h-3 rounded-full bg-hud-green animate-pulse" />
              <span className="font-mono text-sm text-hud-green">
                SIGNAL RECEIVER: ONLINE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
