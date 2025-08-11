"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, Users, Plus, ArrowLeft, SearchIcon } from 'lucide-react'

type User = {
  id: string
  name: string
  email: string
  role: "Administrador" | "Revisor" | "Lector"
  status: "Activo" | "Suspendido"
  lastAccess: string
}

export default function UsersPage() {
  const [query, setQuery] = useState("")
  const [role, setRole] = useState<"all" | User["role"]>("all")
  const [status, setStatus] = useState<"all" | User["status"]>("all")

  const users: User[] = [
    { id: "U-001", name: "Ana Pérez", email: "ana.perez@municipio.gov", role: "Administrador", status: "Activo", lastAccess: "2025-08-05 10:22" },
    { id: "U-002", name: "Carlos Gómez", email: "carlos.gomez@municipio.gov", role: "Revisor", status: "Activo", lastAccess: "2025-08-08 08:10" },
    { id: "U-003", name: "Lucía Ríos", email: "lucia.rios@municipio.gov", role: "Lector", status: "Suspendido", lastAccess: "2025-07-28 16:45" },
    { id: "U-004", name: "María González", email: "maria.gonzalez@municipio.gov", role: "Administrador", status: "Activo", lastAccess: "2025-08-08 11:05" },
    { id: "U-005", name: "Jorge Silva", email: "jorge.silva@municipio.gov", role: "Revisor", status: "Activo", lastAccess: "2025-08-07 09:30" },
  ]

  const filtered = users.filter((u) => {
    const q = query.toLowerCase()
    const matchesQuery = [u.name, u.email, u.role, u.status].some((v) => String(v).toLowerCase().includes(q))
    const matchesRole = role === "all" || u.role === role
    const matchesStatus = status === "all" || u.status === status
    return matchesQuery && matchesRole && matchesStatus
  })

  const statusBadge = (s: User["status"]) =>
    s === "Activo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple header for the users section */}
      <header className="border-b bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-semibold">SiGeDo Municipal</span>
            <span className="text-muted-foreground">/ Usuarios</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/app">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al panel
              </Link>
            </Button>
            <Button className="hidden sm:flex" disabled>
              <Plus className="mr-2 h-4 w-4" />
              Agregar usuario
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="flex items-center gap-2 text-2xl font-bold">
            <Users className="h-5 w-5 text-blue-600" />
            Usuarios
          </h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Buscar y filtrar</CardTitle>
            <CardDescription>Encuentra usuarios por nombre, correo, rol o estado</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  className="pl-9"
                  placeholder="Buscar usuarios…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div>
                <Label className="sr-only" htmlFor="role">Rol</Label>
                <Select value={role} onValueChange={(v: any) => setRole(v)}>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Rol" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los roles</SelectItem>
                    <SelectItem value="Administrador">Administrador</SelectItem>
                    <SelectItem value="Revisor">Revisor</SelectItem>
                    <SelectItem value="Lector">Lector</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="sr-only" htmlFor="status">Estado</Label>
                <Select value={status} onValueChange={(v: any) => setStatus(v)}>
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los estados</SelectItem>
                    <SelectItem value="Activo">Activo</SelectItem>
                    <SelectItem value="Suspendido">Suspendido</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Listado</CardTitle>
              <CardDescription>{filtered.length} usuarios encontrados</CardDescription>
            </div>
            <Button className="sm:hidden" disabled>
              <Plus className="mr-2 h-4 w-4" />
              Agregar
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Correo</TableHead>
                    <TableHead>Rol</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Último acceso</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((u) => (
                    <TableRow key={u.id}>
                      <TableCell className="font-mono text-xs">{u.id}</TableCell>
                      <TableCell className="font-medium">{u.name}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{u.email}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{u.role}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={statusBadge(u.status)}>{u.status}</Badge>
                      </TableCell>
                      <TableCell className="text-sm">{u.lastAccess}</TableCell>
                    </TableRow>
                  ))}
                  {filtered.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center text-sm text-muted-foreground">
                        No se encontraron usuarios con los filtros actuales.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
