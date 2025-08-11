import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Clock, FileText, Scan, Search, Shield, UserCheck } from 'lucide-react'

const FeaturesSection = () => {
  return (
    <>
			<section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Todo lo que necesitas</h2>
					<p className="mt-2 text-muted-foreground">
						Diseñado para la administración pública: trazabilidad completa, indexación avanzada y acceso seguro.
					</p>
				</div>

				<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{[
						{ icon: FileText, title: "Repositorio central", desc: "Unifica decretos, ordenanzas, resoluciones y actas." },
						{ icon: Scan, title: "Escaneo y OCR", desc: "Digitaliza y extrae texto de documentos físicos." },
						{ icon: Search, title: "Búsqueda avanzada", desc: "Encuentra por título, alcalde, palabras clave o contenido." },
						{ icon: UserCheck, title: "Permisos por rol", desc: "Control granular de acceso y auditoría." },
						{ icon: Clock, title: "Flujos y estados", desc: "Revisión, publicación y archivado con historial." },
						{ icon: Shield, title: "Seguridad", desc: "Cifrado, backups y registros de acceso." },
					].map((f, i) => (
						<Card key={i}>
							<CardHeader className="flex flex-row items-center gap-3 space-y-0">
								<f.icon className="h-6 w-6 text-primary" />
								<CardTitle className="text-lg">{f.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>{f.desc}</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>
				</section>
				<section id="how-it-works" className="border-y bg-muted/20">
				<div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
					{[
						{ step: "1", title: "Escanea o sube", desc: "Carga PDFs, imágenes o digitaliza desde el escáner." },
						{ step: "2", title: "Indexa y clasifica", desc: "OCR automático, categorías, palabras clave y metadatos." },
						{ step: "3", title: "Busca y comparte", desc: "Encuentra en segundos y comparte con permisos." },
					].map((s, i) => (
						<div key={i} className="relative rounded-lg border bg-white p-6">
							<div className="absolute -top-4 left-6 rounded-full bg-violet-600 px-3 py-1 text-sm font-semibold text-white">
								Paso {s.step}
							</div>
							<h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
							<p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
						</div>
					))}
				</div>
			</section>
    </>
  )
}

export default FeaturesSection