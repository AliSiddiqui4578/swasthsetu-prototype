"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const modules = [
  {
    title: "Clinical Workflows",
    items: ["OPD Management", "IPD Management", "Emergency Care", "Operation Theatre", "EMR & Prescriptions"],
    badge: "Core",
  },
  {
    title: "Diagnostics",
    items: ["Laboratory Management", "Radiology Integration", "Result Tracking", "Sample Management"],
    badge: "Diagnostic",
  },
  {
    title: "Finance & Revenue",
    items: [
      "Point-of-Care Billing",
      "Insurance Management",
      "Revenue Analytics",
      "Payment Tracking",
      "Zero Revenue Leakage™",
    ],
    badge: "Finance",
  },
  {
    title: "Resource Management",
    items: ["Bed Management", "Inventory Control", "Pharmacy Integration", "Staff Scheduling"],
    badge: "Operations",
  },
  {
    title: "AI & Intelligence",
    items: ["Clinical Decision Support", "Drug Interaction Alerts", "Predictive Analytics", "Risk Stratification"],
    badge: "AI",
  },
  {
    title: "Administration",
    items: ["HR Management", "Role-Based Access", "Audit Trails", "NABH Compliance", "MIS Reports"],
    badge: "Admin",
  },
]

export function ModulesSection() {
  return (
    <section id="modules" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-balance">Complete Modular Architecture</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
            Flexible modules that work together seamlessly to cover every aspect of hospital operations
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <Card key={module.title} className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{module.title}</h3>
                <Badge variant="secondary">{module.badge}</Badge>
              </div>
              <ul className="space-y-2">
                {module.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
