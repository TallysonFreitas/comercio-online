import { ContainerPadrao } from '../../style'
import {
  SButtonLogin,
  SCardLogin,
  SFormularioLogin,
  SInputLogin,
  SLabelLogin,
  STitulo
} from './style'

const PaginaDeLogin = () => {
  return (
    <ContainerPadrao>
      <SCardLogin>
        <STitulo>Login</STitulo>
        <SFormularioLogin>
          <SLabelLogin>Username</SLabelLogin>
          <SInputLogin type="text" required autoComplete="off" />
          <SLabelLogin>Password</SLabelLogin>
          <SInputLogin type="password" required autoComplete="off" />
          <SButtonLogin type="submit">Confirmar</SButtonLogin>
        </SFormularioLogin>
      </SCardLogin>
    </ContainerPadrao>
  )
}

export default PaginaDeLogin
