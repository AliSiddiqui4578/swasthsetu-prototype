"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm">
            <Sparkles className="h-4 w-4 text-accent-foreground" />
            <span>AI-Powered Hospital Information System</span>
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-balance md:text-7xl">
            The Complete Platform for <span className="text-primary">Modern Healthcare</span>
          </h1>

          <p className="mb-10 text-xl text-muted-foreground text-balance leading-relaxed">
            SwasthyaSetu unifies clinical, administrative, and financial workflows into a single intelligent platform.
            Reduce documentation time, eliminate revenue leakage, and deliver exceptional patient care—all without
            disrupting your operations.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
