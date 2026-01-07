"use client"

import { Card } from "@/components/ui/card"

const techCategories = [
  {
    category: "Frontend",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend & Services",
    technologies: ["Firebase Auth", "Firestore", "Google Gemini AI", "LiveKit", "jsPDF"],
  },
  {
    category: "Security",
    technologies: ["Role-Based Access Control", "Encrypted Data", "Audit Logs", "NABH Compliance"],
  },
]

export function TechStackSection() {
  return (
    <section id="technology" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-balance">Built on Modern Technology</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
            Enterprise-grade stack ensuring performance, security, and scalability
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {techCategories.map((tech) => (
            <Card key={tech.category} className="p-6">
              <h3 className="mb-4 text-lg font-semibold">{tech.category}</h3>
              <div className="flex flex-wrap gap-2">
                {tech.technologies.map((technology) => (
                  <span key={technology} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    {technology}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
