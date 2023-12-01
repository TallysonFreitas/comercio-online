import { ContainerPadrao } from '../../style'
import { SCardLogin, SFormularioLogin, SInputLogin } from './style'

const PaginaDeLogin = () => {
  return (
    <ContainerPadrao>
      <SCardLogin>
        <h1>olá, voce esta na pagina de login</h1>
        <SFormularioLogin>
          <SInputLogin />
        </SFormularioLogin>
      </SCardLogin>
    </ContainerPadrao>
  )
}

export default PaginaDeLogin
