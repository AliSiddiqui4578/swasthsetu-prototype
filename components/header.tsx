"use client"

import { Button } from "@/components/ui/button"
import { Activity } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Activity className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold">SwasthyaSetu</span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#modules" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Modules
            </a>
            <a href="#technology" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Technology
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
            <Button size="sm">Request Demo</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
