import { TabsContent } from '@radix-ui/react-tabs'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Label } from '@radix-ui/react-label'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select'
import { categories, statuses, tabsValues } from '@/lib/constants/documents'
import { Upload } from 'lucide-react'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'

const TabUpload = () => {
	const { UPLOAD } = tabsValues;
  return (
    <TabsContent value={UPLOAD} className="space-y-6">
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
  )
}

export default TabUpload