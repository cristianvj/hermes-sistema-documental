import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const CallToActionSection = () => {
  return (
    <section className="border-y bg-gradient-to-b from-white to-violet-50/60">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold">Listo para modernizar la gestión documental</h3>
            <p className="max-w-2xl text-muted-foreground">
              Implementa un sistema confiable para tu municipalidad. Escalable y seguro desde el primer día.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
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
          </div>
        </section>
  )
}

export default CallToActionSection