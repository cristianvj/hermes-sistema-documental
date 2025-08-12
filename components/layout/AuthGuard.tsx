"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export function AuthGuard({ children }: { readonly children: React.ReactNode }) {
  const router = useRouter()
  const [ready, setReady] = useState(false)

  // TODO: Replace with real auth check whrn Appwrite is integrated
  // This is a simple check for demo purposes
  // It checks if a session exists in localStorage
  // and redirects to the login page if not found.

  useEffect(() => {
    const session = typeof window !== "undefined" ? localStorage.getItem("sigd_session") : null
    if (!session) {
      router.replace("/login")
    } else {
      setReady(true)
    }
  }, [router])

  if (!ready) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm text-muted-foreground">Verificando sesión…</p>
      </div>
    )
  }

  return <>{children}</>
}