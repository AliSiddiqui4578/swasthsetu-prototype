"use client"

import { Card } from "@/components/ui/card"
import { Mic, FileText, DollarSign, Sparkles } from "lucide-react"

const usps = [
  {
    icon: Mic,
    title: "Voice-Based Appointment Booking",
    description:
      "Conversational AI for scheduling appointments. Hands-free interaction powered by LiveKit for seamless patient experience.",
    color: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-50 dark:bg-teal-950/30",
  },
  {
    icon: FileText,
    title: "Smart Prescription System",
    description:
      "Disease-based templates with one-click modifications. Prescription entry takes seconds, not minutes. Auto-converts to billing and pharmacy orders.",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    icon: DollarSign,
    title: "Zero Revenue Leakage™",
    description:
      "Automatic capture of consultations, procedures, consumables, and medications. Real-time alerts for unbilled services with full audit trails.",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Intelligence",
    description:
      "Clinical decision support with drug interaction alerts, risk stratification, and predictive analytics. Powered by Google Gemini AI.",
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/30",
  },
]

export function UspsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-balance">Key Differentiators</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
            Built with doctors and hospitals in mind, SwasthyaSetu delivers features that truly make a difference
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {usps.map((usp) => {
            const Icon = usp.icon
            return (
              <Card key={usp.title} className="p-8 hover:shadow-lg transition-shadow">
                <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl ${usp.bg}`}>
                  <Icon className={`h-7 w-7 ${usp.color}`} />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{usp.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{usp.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
