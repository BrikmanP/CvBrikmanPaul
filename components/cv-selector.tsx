"use client"

import { useCV } from "@/contexts/cv-context"
import { ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export function CVSelector() {
  const { currentVersion, loadCV } = useCV()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const versions = [
    { id: "frontend", label: "Frontend Developer" },
    { id: "proyectos-personales", label: "Proyectos Personales" },
    { id: "backend", label: "Backend Developer" },
  ]

  const currentLabel = versions.find((v) => v.id === currentVersion)?.label || "Frontend Developer"

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleVersionChange = (versionId: string) => {
    loadCV(versionId)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-md transition-colors text-sm font-medium"
        aria-label="Seleccionar versión del CV"
      >
        <span>{currentLabel}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-background border border-border rounded-md shadow-lg min-w-[200px] z-50">
          {versions.map((version) => (
            <button
              key={version.id}
              onClick={() => handleVersionChange(version.id)}
              className={`w-full text-left px-4 py-2 hover:bg-muted transition-colors text-sm ${
                currentVersion === version.id ? "bg-muted font-medium" : ""
              }`}
            >
              {version.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
