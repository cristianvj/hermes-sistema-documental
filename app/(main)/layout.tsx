import type React from "react"
import { AuthGuard } from "@/components/layout/AuthGuard"


export default function AppLayout({ children }: { readonly children: React.ReactNode }) {
  return <AuthGuard>{children}</AuthGuard>
}