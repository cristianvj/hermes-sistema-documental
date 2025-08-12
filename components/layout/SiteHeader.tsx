"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { FolderKey, Menu, X, ArrowBigLeft } from 'lucide-react'
import { useEffect, useState } from "react"
import path from "path"

const links = [
  { href: "#features", label: "Características" },
  { href: "#how-it-works", label: "Cómo funciona" },
  { href: "#security", label: "Seguridad" },
  { href: "#contact", label: "Contacto" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const onLanding = pathname === "/"
  const [mobileOpen, setMobileOpen] = useState(false)
  const isLoginPage = path.basename(pathname) === "login"

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-violet-900" aria-label="Ir a inicio">
          <FolderKey className="h-6 w-6" />
          <span className="font-semibold hidden md:block">Hermes - Gestión Documental</span>
          <span className="font-semibold md:hidden">Hermes</span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Navegación principal"
          role="navigation"
        >
          {links.map((l) => {
            const href = onLanding ? l.href : `/${l.href}`
            return (
              <a
                key={l.href}
                href={href}
                className={cn(
                  "text-sm text-muted-foreground transition-colors hover:text-foreground"
                )}
              >
                {l.label}
              </a>
            )
          })}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          { 
            isLoginPage ? (
              <Button asChild variant={"secondary"}>
                  <Link href="/" aria-label="Volver a inicio"> <ArrowBigLeft/> Volver a inicio</Link>
              </Button>
            ) : (
                <Button asChild>
                  <Link href="/login" aria-label="Iniciar sesión">Iniciar sesión</Link>
                </Button>
            )
          }
        </div>
        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            size="icon"
            variant="ghost"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-nav"
        className={cn(
          "md:hidden",
          mobileOpen ? "block" : "hidden"
        )}
      >
        <div className="border-t bg-white px-4 py-4 sm:px-6">
          <nav className="grid gap-2" aria-label="Navegación móvil" role="navigation">
            {links.map((l) => {
              const href = onLanding ? l.href : `/${l.href}`
              return (
                <a
                  key={l.href}
                  href={href}
                  className="rounded-md px-2 py-2 text-base text-foreground hover:bg-muted/50"
                >
                  {l.label}
                </a>
              )
            })}
          </nav>
          <div className="mt-4 grid gap-2">
            {isLoginPage ? (
              <Button asChild variant={"secondary"} className="w-full">
                <Link href="/" aria-label="Volver a inicio"> <ArrowBigLeft/> Volver a inicio</Link>
              </Button>
            ) : (
              <Button asChild className="w-full">
                <Link href="/login" aria-label="Iniciar sesión">Iniciar sesión</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
