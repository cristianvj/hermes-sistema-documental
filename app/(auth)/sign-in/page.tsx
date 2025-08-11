"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, LogIn } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Basic client-side validation
    const emailOk = /\S+@\S+\.\S+/.test(email)
    const passOk = password.length >= 6

    if (!emailOk) return setError("Ingresa un correo válido.")
    if (!passOk) return setError("La contraseña debe tener al menos 6 caracteres.")

    setLoading(true)
    // Simulate auth
    await new Promise((r) => setTimeout(r, 700))

    // Store a simple session (demo only)
    const session = { email, ts: Date.now() }
    if (remember) {
      localStorage.setItem("sigd_session", JSON.stringify(session))
    } else {
      // Session for current tab only
      sessionStorage.setItem("sigd_session", JSON.stringify(session))
    }

    router.push("/app")
  }

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-white">
      <header className="border-b bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-violet-900 " aria-label="Ir a inicio">
            <Shield className="h-6 w-6" />
            <span className="font-semibold">Hermes</span>
          </Link>
          <Button variant="ghost" asChild>
            <Link href="/">Volver</Link>
          </Button>
        </div>
      </header>

      <main className="flex items-center justify-center px-4 py-10">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Iniciar sesión</CardTitle>
            <CardDescription>Accede al sistema de gestión documental</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="alcaldia@municipio.gov"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember"
                    checked={remember}
                    onCheckedChange={(v) => setRemember(Boolean(v))}
                  />
                  <Label htmlFor="remember" className="text-sm text-muted-foreground">
                    Recordarme
                  </Label>
                </div>
                <Link href="#" className="text-sm text-violet-700 hover:underline">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>

              {error && (
                <p role="alert" className="text-sm text-red-600">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full"
              >
                <LogIn className="mr-2 h-4 w-4" />
                {loading ? "Ingresando…" : "Ingresar"}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Demo: puedes usar cualquier correo y una contraseña de 6 caracteres
              </p>
            </form>
          </CardContent>
        </Card>
      </main>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Hermes
        </div>
      </footer>
    </div>
  )
}
