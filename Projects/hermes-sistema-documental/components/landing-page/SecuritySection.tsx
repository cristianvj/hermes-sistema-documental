import React from 'react'
import SecurityFeatures from './SecurityFeatures'

const SecuritySection = () => {
  return (
    <section id="security" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-2xl text-center">
				<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Seguridad y cumplimiento</h2>
				<p className="mt-2 text-muted-foreground">
					Cumple con estándares de seguridad del sector público. Registro de auditoría, cifrado y respaldos.
				</p>
			</div>
			<div className="mt-10">
				<SecurityFeatures />
			</div>
		</section>
  )
}

export default SecuritySection