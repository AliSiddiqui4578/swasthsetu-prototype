"use client"

import { TrendingDown, Clock, Target, Zap } from "lucide-react"

const stats = [
  {
    icon: Clock,
    value: "60%",
    label: "Reduction in prescription time",
    description: "Faster documentation",
  },
  {
    icon: Target,
    value: "95%",
    label: "Billing capture accuracy",
    description: "Zero revenue leakage",
  },
  {
    icon: TrendingDown,
    value: "100%",
    label: "Digital workflows",
    description: "End-to-end coverage",
  },
  {
    icon: Zap,
    value: "<1s",
    label: "Response time",
    description: "Lightning-fast OPD",
  },
]

export function StatsSection() {
  return (
    <section className="border-y border-border bg-muted/30 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="mb-2 text-4xl font-bold">{stat.value}</div>
                <div className="mb-1 text-sm font-medium">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
