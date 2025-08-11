import React from 'react'

const ContactSection = () => {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-2xl text-center">
				<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contáctanos</h2>
				<p className="mt-2 text-muted-foreground">
					¿Tienes preguntas o quieres una demo guiada? Estamos para ayudarte.
				</p>
				<div className="mt-6">
					<a
						className="text-primary underline underline-offset-4"
						href="mailto:contacto@hermes.com"
					>
						contacto@hermes.com
					</a>
				</div>
			</div>
		</section>
  )
}

export default ContactSection