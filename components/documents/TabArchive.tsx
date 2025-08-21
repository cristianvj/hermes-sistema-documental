import React from 'react'
import { TabsContent } from '../ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { tabsValues } from '@/lib/constants/documents';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { FolderOpen } from 'lucide-react';

const TabArchive = () => {
	const { ARCHIVE } = tabsValues;
  return (
    <TabsContent value={ARCHIVE} className="space-y-6">
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
  )
}

export default TabArchive