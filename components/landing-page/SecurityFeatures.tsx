import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, UserCheck, Clock, FileCheck } from "lucide-react"

export default function SecurityFeatures() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Autenticación Segura",
      description: "Sistema de autenticación multi-factor para acceso seguro",
      status: "Activo",
      key: "authentication",
    },
    {
      icon: Lock,
      title: "Encriptación de Datos",
      description: "Todos los documentos están encriptados en reposo y en tránsito",
      status: "Activo",
      key: "encryption",
    },
    {
      icon: Eye,
      title: "Auditoría de Accesos",
      description: "Registro completo de todos los accesos y modificaciones",
      status: "Activo",
      key: "audit",
    },
    {
      icon: UserCheck,
      title: "Control de Permisos",
      description: "Sistema granular de permisos por usuario y rol",
      status: "Activo",
      key: "permissions",
    },
    {
      icon: Clock,
      title: "Backup Automático",
      description: "Respaldos automáticos cada 6 horas con retención de 30 días",
      status: "Activo",
      key: "backup",
    },
    {
      icon: FileCheck,
      title: "Integridad de Documentos",
      description: "Verificación de integridad mediante checksums",
      status: "Activo",
      key: "integrity",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {securityFeatures.map(feature => (
        <Card key={feature.key}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <feature.icon className="h-8 w-8 text-primary" />
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                {feature.status}
              </Badge>
            </div>
            <CardTitle className="text-lg">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{feature.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
