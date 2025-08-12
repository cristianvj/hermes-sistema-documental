"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Search, Upload, Users, Calendar, Archive, Filter, Download, Eye, Edit, Trash2, Scan, FolderOpen, Shield, BarChart3, LogOut } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function HermesApp() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)

  const router = useRouter()

  // Datos de ejemplo para documentos
  const documents = [
    {
      id: "DOC-2024-001",
      title: "Decreto Municipal N° 001-2024",
      category: "Decretos",
      mayor: "María González",
      date: "2024-01-15",
      status: "Activo",
      type: "PDF",
      size: "2.3 MB",
      description: "Decreto sobre regulación de construcciones urbanas",
    },
    {
      id: "DOC-2024-002",
      title: "Ordenanza de Tránsito Municipal",
      category: "Ordenanzas",
      mayor: "María González",
      date: "2024-01-20",
      status: "En Revisión",
      type: "PDF",
      size: "1.8 MB",
      description: "Nueva ordenanza para regulación del tránsito vehicular",
    },
    {
      id: "DOC-2024-003",
      title: "Acta de Sesión Ordinaria",
      category: "Actas",
      mayor: "María González",
      date: "2024-01-25",
      status: "Archivado",
      type: "PDF",
      size: "3.1 MB",
      description: "Acta de la sesión ordinaria del consejo municipal",
    },
    {
      id: "DOC-2024-004",
      title: "Resolución Administrativa N° 015",
      category: "Resoluciones",
      mayor: "María González",
      date: "2024-02-01",
      status: "Activo",
      type: "PDF",
      size: "1.5 MB",
      description: "Resolución sobre contratación de personal municipal",
    },
    {
      id: "DOC-2024-005",
      title: "Informe de Gestión Trimestral",
      category: "Informes",
      mayor: "María González",
      date: "2024-02-10",
      status: "Activo",
      type: "PDF",
      size: "4.2 MB",
      description: "Informe de gestión del primer trimestre 2024",
    },
  ]

  const categories = ["Decretos", "Ordenanzas", "Actas", "Resoluciones", "Informes", "Contratos"]
  const statuses = ["Activo", "En Revisión", "Archivado", "Borrador"]

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.mayor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory
    const matchesStatus = selectedStatus === "all" || doc.status === selectedStatus
    return matchesSearch && matchesCategory && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Activo":
        return "bg-green-100 text-green-800"
      case "En Revisión":
        return "bg-yellow-100 text-yellow-800"
      case "Archivado":
        return "bg-gray-100 text-gray-800"
      case "Borrador":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-900">Hermes</h1>
              </div>
              <Badge variant="secondary">Sistema de Gestión Documental</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="/app/users" aria-label="Gestionar usuarios">
                  <Users className="h-4 w-4 mr-2" />
                  Usuarios
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/app/reports" aria-label="Ver reportes">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Reportes
                </Link>
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => {
                  try {
                    localStorage.removeItem("sigd_session")
                    sessionStorage.removeItem("sigd_session")
                  } catch {}
                  router.push("/login")
                }}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Cerrar sesión
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Documentos</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">+12% desde el mes pasado</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Documentos Activos</CardTitle>
              <Archive className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">892</div>
              <p className="text-xs text-muted-foreground">71% del total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">En Revisión</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">Pendientes de aprobación</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Alcalde Actual</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold">María González</div>
              <p className="text-xs text-muted-foreground">Período 2024-2027</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="documents" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="documents">Documentos</TabsTrigger>
            <TabsTrigger value="upload">Subir Documento</TabsTrigger>
            <TabsTrigger value="scan">Escanear</TabsTrigger>
            <TabsTrigger value="archive">Archivo</TabsTrigger>
          </TabsList>

          <TabsContent value="documents" className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardHeader>
                <CardTitle>Búsqueda y Filtros</CardTitle>
                <CardDescription>Encuentra documentos por título, descripción, alcalde o contenido</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Buscar documentos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas las categorías</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los estados</SelectItem>
                      {statuses.map((status) => (
                        <SelectItem key={status} value={status}>
                          {status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtros Avanzados
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Documents Table */}
            <Card>
              <CardHeader>
                <CardTitle>Documentos Municipales</CardTitle>
                <CardDescription>{filteredDocuments.length} documentos encontrados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Título</TableHead>
                        <TableHead>Categoría</TableHead>
                        <TableHead>Alcalde</TableHead>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead>Tamaño</TableHead>
                        <TableHead>Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredDocuments.map((doc) => (
                        <TableRow key={doc.id}>
                          <TableCell className="font-mono text-sm">{doc.id}</TableCell>
                          <TableCell>
                            <div>
                              <div className="font-medium">{doc.title}</div>
                              <div className="text-sm text-muted-foreground">{doc.description}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{doc.category}</Badge>
                          </TableCell>
                          <TableCell>{doc.mayor}</TableCell>
                          <TableCell>{doc.date}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(doc.status)}>{doc.status}</Badge>
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">{doc.size}</TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Download className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upload" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Subir Nuevo Documento</CardTitle>
                <CardDescription>Agregue un nuevo documento al sistema municipal</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title">Título del Documento</Label>
                      <Input id="title" placeholder="Ej: Decreto Municipal N° 001-2024" />
                    </div>
                    <div>
                      <Label htmlFor="category">Categoría</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar categoría" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="mayor">Alcalde</Label>
                      <Input id="mayor" placeholder="Nombre del alcalde" />
                    </div>
                    <div>
                      <Label htmlFor="date">Fecha del Documento</Label>
                      <Input id="date" type="date" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="description">Descripción</Label>
                      <Textarea id="description" placeholder="Descripción detallada del documento..." rows={4} />
                    </div>
                    <div>
                      <Label htmlFor="keywords">Palabras Clave</Label>
                      <Input id="keywords" placeholder="Separadas por comas" />
                    </div>
                    <div>
                      <Label htmlFor="status">Estado</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar estado" />
                        </SelectTrigger>
                        <SelectContent>
                          {statuses.map((status) => (
                            <SelectItem key={status} value={status}>
                              {status}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* File Upload Area */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Subir Archivo</h3>
                  <p className="text-gray-500 mb-4">Arrastra y suelta tu archivo aquí, o haz clic para seleccionar</p>
                  <Button>Seleccionar Archivo</Button>
                  <p className="text-sm text-gray-400 mt-2">
                    Formatos soportados: PDF, DOC, DOCX, JPG, PNG (Máx. 10MB)
                  </p>
                </div>

                <div className="flex justify-end space-x-4">
                  <Button variant="outline">Cancelar</Button>
                  <Button>Guardar Documento</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scan" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Escanear Documento</CardTitle>
                <CardDescription>Digitalice documentos físicos directamente al sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Scan className="h-24 w-24 text-gray-400 mx-auto mb-6" />
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Función de Escaneo</h3>
                  <p className="text-gray-500 mb-6 max-w-md mx-auto">
                    Conecte su escáner o use la cámara de su dispositivo para digitalizar documentos físicos
                  </p>
                  <div className="space-x-4">
                    <Button>
                      <Scan className="h-4 w-4 mr-2" />
                      Iniciar Escaneo
                    </Button>
                    <Button variant="outline">Usar Cámara</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="archive" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Archivo Histórico</CardTitle>
                <CardDescription>Documentos archivados y gestión de períodos administrativos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Período 2020-2023</CardTitle>
                      <CardDescription>Alcalde: Juan Pérez</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Documentos:</span>
                          <span className="font-medium">456</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Estado:</span>
                          <Badge variant="secondary">Archivado</Badge>
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-transparent" variant="outline">
                        <FolderOpen className="h-4 w-4 mr-2" />
                        Ver Archivo
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Período 2016-2019</CardTitle>
                      <CardDescription>Alcalde: Ana Rodríguez</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Documentos:</span>
                          <span className="font-medium">389</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Estado:</span>
                          <Badge variant="secondary">Archivado</Badge>
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-transparent" variant="outline">
                        <FolderOpen className="h-4 w-4 mr-2" />
                        Ver Archivo
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Período 2012-2015</CardTitle>
                      <CardDescription>Alcalde: Carlos López</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Documentos:</span>
                          <span className="font-medium">312</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Estado:</span>
                          <Badge variant="secondary">Archivado</Badge>
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-transparent" variant="outline">
                        <FolderOpen className="h-4 w-4 mr-2" />
                        Ver Archivo
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
