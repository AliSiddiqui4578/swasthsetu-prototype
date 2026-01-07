"use client"

import { Card } from "@/components/ui/card"
import {
  Users,
  FileHeart,
  Pill,
  BedDouble,
  CreditCard,
  BarChart3,
  Shield,
  Stethoscope,
  FlaskConical,
  Ambulance,
  Building2,
  FileCheck,
} from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Patient Management",
    description: "Centralized profiles with complete visit history, vitals, and clinical notes",
  },
  {
    icon: FileHeart,
    title: "Electronic Medical Records",
    description: "Digital health records with document uploads and retrieval",
  },
  {
    icon: Stethoscope,
    title: "OPD Management",
    description: "Registration, queue tracking, and consultation workflows",
  },
  {
    icon: BedDouble,
    title: "IPD & Bed Management",
    description: "Real-time bed availability, ward categorization, and patient assignments",
  },
  {
    icon: Ambulance,
    title: "Emergency Care",
    description: "Priority workflows for emergency department operations",
  },
  {
    icon: Building2,
    title: "Operation Theatre",
    description: "OT scheduling, tracking, and surgical procedure management",
  },
  {
    icon: FlaskConical,
    title: "Lab & Diagnostics",
    description: "Lab and radiology integration with result tracking",
  },
  {
    icon: Pill,
    title: "Pharmacy & Inventory",
    description: "Real-time stock tracking with reorder thresholds and expiry management",
  },
  {
    icon: CreditCard,
    title: "Billing & Insurance",
    description: "Point-of-care billing with insurance approval and claim tracking",
  },
  {
    icon: BarChart3,
    title: "Analytics & MIS",
    description: "Operational dashboards with revenue and performance reports",
  },
  {
    icon: FileCheck,
    title: "Compliance & Audit",
    description: "NABH-aligned documentation with full traceability",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    description: "Granular permissions for admin, doctors, nurses, and staff",
  },
]

export function FeaturesGrid() {
  return (
    <section id="features" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-balance">Comprehensive Hospital Operations</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
            Every department, every workflow, unified in one intelligent platform
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="p-6 hover:shadow-md transition-shadow">
                <Icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
