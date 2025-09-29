import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRight, Shield, Server } from 'lucide-react'
import Image from 'next/image'

const HeroSection = () => {
	return (
		<section className="border-b bg-gradient-to-b from-violet-100/40 to-white">
			<div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:py-24 lg:px-8">
				<div className="space-y-6">
					<h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
						Gestión Documental municipal simple, segura y escalable
					</h1>
					<p className="text-balance text-muted-foreground">
						Centraliza decretos, ordenanzas, actas y más. Escanea, indexa y encuentra documentos en segundos,
						con foco en periodos y alcaldías.
					</p>
					<div className="flex flex-wrap gap-3">
						<Button asChild className="bg-primary text-white hover:bg-primary/90">
							<Link href="/documents">
								Probar demo
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
						<Button asChild variant="outline">
							<Link href="/login">Iniciar sesión</Link>
						</Button>
					</div>
					<div className="flex items-center gap-4 text-sm text-muted-foreground">
						<div className="flex items-center gap-2">
							<Shield className="h-4 w-4 text-violet-600" />
							Encriptación en tránsito y reposo
						</div>
						<div className="hidden items-center gap-2 md:flex">
							<Server className="h-4 w-4 text-violet-600" />
							Escalable por diseño
						</div>
					</div>
				</div>

				<div className="relative">
					<Image
						src="/dashboard.png"
						alt="Vista previa del sistema de gestión documental"
						width={800}
						height={520}
						priority
						className="rounded-xl border shadow-sm"
					/>
				</div>
			</div>
		</section>
	)
}

export default HeroSection