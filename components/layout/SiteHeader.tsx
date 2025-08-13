"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { FolderKey, Menu, X } from 'lucide-react'
import { useEffect, useState } from "react"
import path from "path"
import HeaderActionButtons from "./HeaderActionButtons"
import LinksHeader from "./LinksHeader"

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const isLoginPage = path.basename(pathname) === "login"
  const isLandingPage = pathname === "/"
  
  const handleLogOut = () => {
    localStorage.removeItem("sigd_session")
    setIsLoggedIn(false)
    window.location.href = "/login"
  }
  
  useEffect(() => {
    const session = typeof window !== "undefined" ? localStorage.getItem("sigd_session") : null
    setIsLoggedIn(!!session)
  }, [ pathname ])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={isLoggedIn ? "/documents" : "/"} className="flex items-center gap-2 text-violet-900" aria-label="Ir a inicio">
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
          <LinksHeader 
            isLandingPage={isLandingPage}
            isLoginPage={isLoginPage} 
            isLoggedIn={isLoggedIn} 
            setMobileOpen={setMobileOpen} 
          />
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <HeaderActionButtons isLoggedIn={isLoggedIn} isLoginPage={isLoginPage} isLandingPage={isLandingPage} handleLogOut={handleLogOut} />
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
          <LinksHeader 
            isLandingPage={isLandingPage} 
            isLoginPage={isLoginPage} 
            isLoggedIn={isLoggedIn} 
            isMobile={true} setMobileOpen={setMobileOpen} 
          />
          <div className="mt-4 grid gap-2">
            <HeaderActionButtons isLoggedIn={isLoggedIn} isLoginPage={isLoginPage} isLandingPage={isLandingPage} handleLogOut={handleLogOut} />  
          </div>
        </div>
      </div>
    </header>
  )
}
