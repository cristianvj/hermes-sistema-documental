import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">Hermes - Gestión Documental</h3>
          <p className="text-sm text-muted-foreground">
            Sistema de Gestión Documental. Escalable, seguro y fácil de usar.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Recursos</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link href="#features" className="hover:text-foreground">Características</Link></li>
            <li><Link href="#security" className="hover:text-foreground">Seguridad</Link></li>
            <li><Link href="#contact" className="hover:text-foreground">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link href="#" className="hover:text-foreground">Términos</Link></li>
            <li><Link href="#" className="hover:text-foreground">Privacidad</Link></li>
            <li><Link href="#" className="hover:text-foreground">Accesibilidad</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-xs text-muted-foreground sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Hermes - Gestión Documental</p>
          <p>Hecho con Next.js y shadcn/ui</p>
        </div>
      </div>
    </footer>
  )
}
