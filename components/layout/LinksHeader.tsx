import { usePathname } from "next/navigation"
import { FC } from "react"
import { Button } from "../ui/button"
import Link from "next/link"
import { BarChart3, Folder, Users } from "lucide-react"
import { links } from "@/lib/constants/landingPage"
import { cn } from "@/lib/utils"

interface LinksHeaderProps {
  isLandingPage: boolean
  isLoginPage: boolean
  isLoggedIn: boolean
  isMobile?: boolean
  setMobileOpen: (open: boolean) => void
}

const LinksHeader: FC<LinksHeaderProps> = ({
  isLandingPage, 
  isLoginPage, 
  isLoggedIn, 
  isMobile = false, 
  setMobileOpen
}) => {
  const pathname = usePathname()

  if (isLandingPage || isLoginPage) {
  return  (<nav className={isMobile ? "grid gap-2" : "hidden items-center gap-6 md:flex"} aria-label="Navegación principal" role="navigation">
      { links.map((l) => {
        const href = `/${l.href}`
        return (
          <a
            key={l.href}
            href={href}
            className={cn(
              "text-sm text-muted-foreground transition-colors hover:text-foreground"
            )}
            onClick={() => setMobileOpen(false)}
          >
            {l.label}
          </a>
        )
      })}
    </nav>)
  }
  if (isLoggedIn && !isLandingPage && !isLoginPage) {
    return (
      <nav className={isMobile ? "grid gap-2" : "hidden items-center gap-6 md:flex"} aria-label="Navegación principal" role="navigation">
        <div className={isMobile ? "flex flex-col gap-3" : "flex items-center space-x-4"}>
          <Button variant={pathname === '/documents' ? 'default': 'outline' } size="sm" asChild>
            <Link href="/documents" aria-label="Gestionar usuarios">
              <Folder className="h-4 w-4 mr-2" />
              Documentos
            </Link>
          </Button>
          <Button variant={pathname === '/users' ? 'default': 'outline' } size="sm" asChild>
            <Link href="/users" aria-label="Gestionar usuarios">
              <Users className="h-4 w-4 mr-2" />
              Usuarios
            </Link>
          </Button>
          <Button variant={pathname === '/reports' ? 'default': 'outline' } size="sm" asChild>
            <Link href="/reports" aria-label="Ver reportes">
              <BarChart3 className="h-4 w-4 mr-2" />
              Reportes
            </Link>
          </Button>
        </div>
      </nav>
    )
  }
  return null
}

export default LinksHeader