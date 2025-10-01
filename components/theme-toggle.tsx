"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    // Inicializar el tema desde localStorage o sistema
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)

    if (newMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors hover:bg-muted/80"
      aria-label="Toggle dark mode"
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-primary transition-transform ${
          darkMode ? "translate-x-6" : "translate-x-1"
        }`}
      >
        {darkMode ? (
          <Moon className="w-3 h-3 text-primary-foreground ml-0.5 mt-0.5" />
        ) : (
          <Sun className="w-3 h-3 text-primary-foreground ml-0.5 mt-0.5" />
        )}
      </span>
    </button>
  )
}
