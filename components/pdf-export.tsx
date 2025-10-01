"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PDFExport() {
  const handleExport = () => {
    // Implementación básica de exportación a PDF usando window.print()
    // En producción, se podría usar una librería como jsPDF o react-pdf
    window.print()
  }

  return (
    <Button onClick={handleExport} variant="secondary" size="lg" className="flex items-center gap-2">
      <Download className="w-4 h-4" />
      Descargar PDF
    </Button>
  )
}
