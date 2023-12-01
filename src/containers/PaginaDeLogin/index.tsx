import { ContainerPadrao } from '../../style'
import { SCardLogin, SInputLogin } from './style'

const PaginaDeLogin = () => {
  return (
    <ContainerPadrao>
      <SCardLogin>
        <h1>ola, voce esta na pagina de login</h1>
        <SInputLogin />
      </SCardLogin>
    </ContainerPadrao>
  )
}

export default PaginaDeLogin
