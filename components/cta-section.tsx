"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-background to-background p-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-balance">Ready to Transform Your Hospital?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground text-balance">
            Join leading hospitals that trust SwasthyaSetu for their digital transformation. Schedule a demo to see how
            we can streamline your operations.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2">
              <Calendar className="h-4 w-4" />
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent">
              Contact Sales
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
