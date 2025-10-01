"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCV } from "@/contexts/cv-context";
import { CVSelector } from "@/components/cv-selector";
import { ThemeToggle } from "@/components/theme-toggle";
import { PDFExport } from "@/components/pdf-export";
import Image from "next/image";
import { N8nWorkflow } from "@/components/n8n-workflow";

export default function CVPage() {
  const { cvData, isLoading, currentVersion } = useCV();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  if (isLoading || !cvData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Cargando CV...</p>
        </div>
      </div>
    );
  }

  const isPersonalProjects = currentVersion === "proyectos-personales";
  const headerTitle = isPersonalProjects
    ? "Productor Musical"
    : "Ingeniero de Sistemas";

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-left">
            <h1 className="text-2xl font-bold text-balance break-words max-w-[200px] sm:max-w-none">
              Brikman Paul{" "}
              <span className="block sm:inline">Morales</span>
            </h1>
            <p className="text-muted-foreground">{headerTitle}</p>
          </div>

          <div className="flex items-center gap-4">
            <CVSelector />

            {!isPersonalProjects && (
              <a
                href="https://www.linkedin.com/in/brikmanpaulmorales/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}

            <a
              href="https://github.com/BrikmanP"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=brikmanpaul34@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>

            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Perfil Profesional */}
        {cvData.perfil && (
          <motion.section {...fadeIn} className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">
              Perfil Profesional
            </h2>
            <div className="h-px bg-border mb-6"></div>
            <p className="text-lg leading-relaxed text-pretty">
              {cvData.perfil}
            </p>
          </motion.section>
        )}

        {/* Experiencia Profesional */}
        {cvData.experiencia && cvData.experiencia.length > 0 && (
          <motion.section
            {...fadeIn}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-balance">
              Experiencia Profesional
            </h2>
            <div className="h-px bg-border mb-6"></div>

            <div className="space-y-8">
              {cvData.experiencia.map((exp, index) => (
                <Card key={index} className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.titulo}</h3>
                      {exp.empresa && (
                        <>
                          {exp.link ? (
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {exp.empresa}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{exp.empresa}</p>
                          )}
                        </>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {exp.periodo}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.descripcion}
                  </p>
                </Card>
              ))}
            </div>
          </motion.section>
        )}

        {/* Educación */}
        {cvData.educacion && cvData.educacion.length > 0 && (
          <motion.section
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-balance">Educación</h2>
            <div className="h-px bg-border mb-6"></div>

            <div className="space-y-4">
              {cvData.educacion.map((edu, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{edu.titulo}</h3>
                  <p className="text-muted-foreground">{edu.institucion}</p>
                  {edu.descripcion && (
                    <p className="text-muted-foreground mt-2">
                      {edu.descripcion}
                    </p>
                  )}
                </Card>
              ))}
            </div>
          </motion.section>
        )}

        {/* Habilidades Técnicas */}
        {cvData.habilidades_tecnicas && (
          <motion.section
            {...fadeIn}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-balance">
              Habilidades Técnicas
            </h2>
            <div className="h-px bg-border mb-6"></div>

            <div className="space-y-6">
              {Object.entries(cvData.habilidades_tecnicas).map(
                ([categoria, habilidades]) => (
                  <div key={categoria}>
                    <h3 className="text-lg font-semibold mb-3 text-primary">
                      {categoria}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {habilidades.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-primary/10 text-primary rounded-md text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </motion.section>
        )}

        {/* Habilidades Blandas */}
        {cvData.habilidades_blandas && (
          <motion.section
            {...fadeIn}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-balance">
              Habilidades Blandas
            </h2>
            <div className="h-px bg-border mb-6"></div>

            <div className="flex flex-wrap gap-2">
              {cvData.habilidades_blandas.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-muted text-foreground rounded-md text-sm font-medium border border-border hover:bg-muted/80 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.section>
        )}

        {/* Proyectos */}
        {cvData.proyectos && cvData.proyectos.length > 0 && (
          <motion.section
            {...fadeIn}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-balance">
              {isPersonalProjects
                ? "Producciones Musicales"
                : "Proyectos Destacados"}
            </h2>
            <div className="h-px bg-border mb-6"></div>

            <div className="space-y-6">
              {cvData.proyectos.map((proyecto, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {proyecto.titulo}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {proyecto.descripcion}
                  </p>

                  {proyecto.titulo.includes("n8n") ? (
                    <div className="mb-4 p-6 rounded-lg bg-muted/30">
                      <N8nWorkflow />
                    </div>
                  ) : proyecto.imagen ? (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={proyecto.imagen || "/placeholder.svg"}
                        alt={`Diagrama de ${proyecto.titulo}`}
                        width={1200}
                        height={600}
                        className="w-full h-auto mix-blend-lighten dark:mix-blend-screen"
                      />
                    </div>
                  ) : null}

                  <div className="flex gap-2 flex-wrap">
                    {proyecto.tecnologias.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </motion.section>
        )}

        {/* Contacto */}
        <motion.section
          {...fadeIn}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-balance">Contacto</h2>
          <div className="h-px bg-border mb-6"></div>

          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center md:items-stretch">
              <Button asChild variant="default" size="lg" className="w-full md:w-auto">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=brikmanpaul34@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 justify-center"
                >
                  <Mail className="w-4 h-4" />
                  Enviar Email
                </a>
              </Button>

              {!isPersonalProjects && (
                <>
                  <Button asChild variant="outline" size="lg" className="w-full md:w-auto">
                    <a
                      href="https://www.linkedin.com/in/brikmanpaulmorales/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 justify-center"
                    >
                      <Linkedin className="w-4 h-4" />
                      Ver LinkedIn
                    </a>
                  </Button>

                  {/* Botón PDF centrado en móviles */}
                  <div className="flex justify-center w-full md:w-auto">
                    <PDFExport />
                  </div>
                </>
              )}
            </div>
          </Card>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Brikman Paul Morales. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
