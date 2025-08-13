import { ArrowBigLeft, LogOut } from "lucide-react"
import { Button } from "../ui/button"
import { FC } from "react"
import Link from "next/link"

interface ActionButtonProps {
  isLoggedIn: boolean
  isLoginPage: boolean
  isLandingPage: boolean
  handleLogOut: () => void
}

const HeaderActionButtons: FC<ActionButtonProps> = ({isLoggedIn, isLoginPage, isLandingPage, handleLogOut}) => {
  if (isLoginPage) {
    return (
      <Button asChild variant={"secondary"}>
        <Link href="/" aria-label="Volver a inicio"> <ArrowBigLeft/> Volver a inicio</Link>
      </Button>
    )
  } else if (isLoggedIn && !isLandingPage) {
    return (
      <Button variant="destructive" onClick={handleLogOut}>
        <LogOut/> Cerrar sesión
      </Button>
    )
  } else {
    return (
      <Button asChild>
        <Link href="/login" aria-label="Iniciar sesión">Iniciar sesión</Link>
      </Button>
    )
  }
}

export default HeaderActionButtons