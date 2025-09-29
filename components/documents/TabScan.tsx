import { TabsContent } from '@radix-ui/react-tabs'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Scan } from 'lucide-react'
import { Button } from '../ui/button'
import { tabsValues } from '@/lib/constants/documents'
import Webcam from 'react-webcam'

interface Document {
	id: string;
	image: string; // base64 string
	createdAt: string;
}

const TabScan = () => {
	const { SCAN } = tabsValues;
	const webcamRef = React.useRef<Webcam>(null);
	const [documents, setDocuments] = React.useState<Document[]>([]);

	const handleScanfile = () => {
		debugger
		const imageSrc = webcamRef.current?.getScreenshot();
		if (!imageSrc) return;

		const newDoc: Document = {
			id: crypto.randomUUID(),
			image: imageSrc,
			createdAt: new Date().toISOString(),
		};

		setDocuments((prev) => [...prev, newDoc]);
		alert('Foto tomada con éxito')
	}
	console.log(documents);
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
						{/* TODO: Center this */}
						<Webcam
							ref={webcamRef}
							screenshotFormat="image/jpeg"
							className="rounded-lg shadow-md mx-auto mb-6"
						/>
						<div className="space-x-4">
							<Button onClick={handleScanfile} >
								<Scan className="h-4 w-4 mr-2" />
								Iniciar Escaneo con webcam
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>
		</TabsContent>
	)
}

export default TabScan