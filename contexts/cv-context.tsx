"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Tipos para la estructura del CV
export interface CVExperience {
  titulo: string
  periodo: string
  descripcion: string
  empresa: string | null
  link: string | null
}

export interface CVEducation {
  titulo: string
  institucion: string
  descripcion: string | null
}

export interface CVProject {
  titulo: string
  descripcion: string
  tecnologias: string[]
  imagen?: string
}

export interface CVData {
  version: string
  perfil: string
  experiencia: CVExperience[]
  educacion: CVEducation[]
  habilidades_tecnicas: Record<string, string[]>
  habilidades_blandas: string[]
  proyectos: CVProject[]
}

interface CVContextType {
  cvData: CVData | null
  currentVersion: string
  loadCV: (version: string) => Promise<void>
  isLoading: boolean
}

const CVContext = createContext<CVContextType | undefined>(undefined)

import cvFrontend from "@/data/cv-frontend.json"
import cvProyectosPersonales from "@/data/cv-proyectos-personales.json"
import cvBackend from "@/data/cv-backend.json"

export function CVProvider({ children }: { children: ReactNode }) {
  const [cvData, setCvData] = useState<CVData | null>(null)
  const [currentVersion, setCurrentVersion] = useState("frontend")
  const [isLoading, setIsLoading] = useState(true)

  const cvVersions: Record<string, CVData> = {
    frontend: cvFrontend as CVData,
    "proyectos-personales": cvProyectosPersonales as CVData,
    backend: cvBackend as CVData,
  }

  const loadCV = async (version: string) => {
    setIsLoading(true)
    try {
      const data = cvVersions[version]
      if (data) {
        setCvData(data)
        setCurrentVersion(version)
      } else {
        console.error("[v0] CV version not found:", version)
      }
    } catch (error) {
      console.error("[v0] Error loading CV data:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadCV(currentVersion)
  }, [])

  return <CVContext.Provider value={{ cvData, currentVersion, loadCV, isLoading }}>{children}</CVContext.Provider>
}

export function useCV() {
  const context = useContext(CVContext)
  if (context === undefined) {
    throw new Error("useCV must be used within a CVProvider")
  }
  return context
}
