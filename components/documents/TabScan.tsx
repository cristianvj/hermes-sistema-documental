import { TabsContent } from '@radix-ui/react-tabs'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Scan } from 'lucide-react'
import { Button } from '../ui/button'
import { tabsValues } from '@/lib/constants/documents'

const TabScan = () => {
	const { SCAN } = tabsValues;
  return (
    <TabsContent value={SCAN} className="space-y-6">
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
  )
}

export default TabScan