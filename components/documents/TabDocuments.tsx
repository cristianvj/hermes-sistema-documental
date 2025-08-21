import { categories, documents, statuses, tabsValues } from "@/lib/constants/documents";
import { TabsContent } from "@radix-ui/react-tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Download, Edit, Eye, Filter, Search, Trash2 } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";
import { Select } from "../ui/select";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Button } from "../ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from "../ui/badge";

const TabDocuments = () => {
	const { DOCUMENTS } = tabsValues;

	  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all");
	const [selectedStatus, setSelectedStatus] = useState("all");

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
    <TabsContent value={DOCUMENTS} className="space-y-6">
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
  )
}

export default TabDocuments