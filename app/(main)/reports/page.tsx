"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Shield, ArrowLeft, Download, BarChart3, Calendar, Filter, FileText, Scan, Search } from 'lucide-react'

type CategorySummary = {
  category: string
  total: number
  active: number
  archived: number
}

type TrendPoint = { label: string; value: number }

export default function ReportsPage() {
  const [from, setFrom] = useState<string>("2025-08-01")
  const [to, setTo] = useState<string>(new Date().toISOString().slice(0, 10))
  const [status, setStatus] = useState<"all" | "Activo" | "En Revisión" | "Archivado">("all")

  // Datos de ejemplo para demo
  const kpis = useMemo(
    () => ({
      uploaded: 1247,
      processed: 1156,
      avgProcessTimeDays: 2.4,
      ocrCoverage: Math.round((1156 / 1247) * 100),
    }),
    []
  )

  const categories: CategorySummary[] = useMemo(
    () => [
      { category: "Decretos", total: 312, active: 220, archived: 92 },
      { category: "Ordenanzas", total: 274, active: 190, archived: 84 },
      { category: "Actas", total: 198, active: 110, archived: 88 },
      { category: "Resoluciones", total: 231, active: 180, archived: 51 },
      { category: "Informes", total: 175, active: 150, archived: 25 },
      { category: "Contratos", total: 57, active: 42, archived: 15 },
    ],
    []
  )

  const trend: TrendPoint[] = useMemo(
    () => [
      { label: "Lun", value: 32 },
      { label: "Mar", value: 45 },
      { label: "Mié", value: 28 },
      { label: "Jue", value: 60 },
      { label: "Vie", value: 54 },
      { label: "Sáb", value: 15 },
      { label: "Dom", value: 9 },
    ],
    []
  )

  const filteredCategories = categories // en demo, no alteramos por status

  const exportCSV = () => {
    const headers = ["Categoría", "Total", "Activos", "Archivados"]
    const rows = filteredCategories.map((c) => [c.category, c.total, c.active, c.archived])
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n")
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `reporte_documentos_${from}_a_${to}.csv`
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gray-50">

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Filtros */}
        <Card>
          <CardHeader className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                Reportes y analítica
              </CardTitle>
              <CardDescription>Filtra por rango de fechas, estado y categoría</CardDescription>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="outline" className="gap-2" disabled>
                <Filter className="h-4 w-4" />
                Filtros avanzados
              </Button>
              <Button className="gap-2" onClick={exportCSV}>
                <Download className="h-4 w-4" />
                Exportar CSV
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="from">Desde</Label>
                <Input id="from" type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="to">Hasta</Label>
                <Input id="to" type="date" value={to} onChange={(e) => setTo(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label className="sr-only" htmlFor="status">
                  Estado
                </Label>
                <Select value={status} onValueChange={(v: any) => setStatus(v)}>
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los estados</SelectItem>
                    <SelectItem value="Activo">Activo</SelectItem>
                    <SelectItem value="En Revisión">En Revisión</SelectItem>
                    <SelectItem value="Archivado">Archivado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="q">Búsqueda</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="q" placeholder="Palabra clave, alcalde, categoría..." className="pl-9" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* KPIs */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Documentos subidos</CardDescription>
              <CardTitle className="text-2xl">{kpis.uploaded.toLocaleString()}</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                En el período seleccionado
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Procesados (con OCR)</CardDescription>
              <CardTitle className="text-2xl">{kpis.processed.toLocaleString()}</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={kpis.ocrCoverage} />
              <p className="mt-2 text-xs text-muted-foreground">Cobertura OCR: {kpis.ocrCoverage}%</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Tiempo promedio</CardDescription>
              <CardTitle className="text-2xl">{kpis.avgProcessTimeDays} días</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground">De subida a publicación</CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Estado general</CardDescription>
              <CardTitle className="text-2xl">Estable</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-2 text-xs">
              <Badge className="bg-green-100 text-green-800">Operativo</Badge>
              <span className="text-muted-foreground">Sin incidencias</span>
            </CardContent>
          </Card>
        </div>

        {/* Tendencia semanal y distribución */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Tendencia semanal de documentos</CardTitle>
              <CardDescription>Documentos publicados por día</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-3">
                {trend.map((t, i) => {
                  const max = Math.max(...trend.map((x) => x.value))
                  const h = Math.max(8, Math.round((t.value / max) * 140))
                  return (
                    <div key={i} className="flex flex-col items-center">
                      <div
                        className="w-6 rounded-t bg-emerald-600"
                        style={{ height: `${h}px` }}
                        aria-label={`Barra ${t.label} con valor ${t.value}`}
                        role="img"
                      />
                      <span className="mt-2 text-xs text-muted-foreground">{t.label}</span>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Distribución por tipo</CardTitle>
              <CardDescription>Activos vs. Archivados</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {filteredCategories.map((c) => {
                const pctActive = Math.round((c.active / c.total) * 100)
                return (
                  <div key={c.category}>
                    <div className="flex justify-between text-sm">
                      <span>{c.category}</span>
                      <span className="text-muted-foreground">{c.total}</span>
                    </div>
                    <div className="mt-1 h-2 w-full overflow-hidden rounded bg-gray-200">
                      <div className="h-2 bg-emerald-600" style={{ width: `${pctActive}%` }} />
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{pctActive}% activos</div>
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </div>

        {/* Tabla de categorías */}
        <Card className="mt-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Documentos por categoría</CardTitle>
              <CardDescription>Totales y estado</CardDescription>
            </div>
            <Button variant="outline" className="gap-2" onClick={exportCSV}>
              <Download className="h-4 w-4" />
              Exportar CSV
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Categoría</TableHead>
                    <TableHead>Totales</TableHead>
                    <TableHead>Activos</TableHead>
                    <TableHead>Archivados</TableHead>
                    <TableHead>% Activos</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCategories.map((c) => {
                    const pctActive = Math.round((c.active / c.total) * 100)
                    return (
                      <TableRow key={c.category}>
                        <TableCell className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-blue-600" />
                          <span className="font-medium">{c.category}</span>
                        </TableCell>
                        <TableCell>{c.total}</TableCell>
                        <TableCell>{c.active}</TableCell>
                        <TableCell>{c.archived}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{pctActive}%</Badge>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
