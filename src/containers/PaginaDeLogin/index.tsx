import { useDispatch } from 'react-redux'
import { ContainerPadrao } from '../../style'
import {
  SButtonLogin,
  SCardLogin,
  SFormularioLogin,
  SInputLogin,
  SLabelLogin,
  STitulo
} from './style'
import { adicionarUser } from '../../store/reducers/user'
import { useState } from 'react'

const PaginaDeLogin = () => {
  const dispatch = useDispatch()

  const [usuario, setUsuario] = useState({ username: '', password: '' })

  function SubmitUser() {
    dispatch(adicionarUser(usuario))
  }

  return (
    <ContainerPadrao>
      <SCardLogin>
        <STitulo>Login</STitulo>
        <SFormularioLogin>
          <SLabelLogin>Username</SLabelLogin>
          <SInputLogin
            type="text"
            required
            autoComplete="off"
            value={usuario.username}
            onChange={(e) => {
              setUsuario({ ...usuario, username: e.target.value })
            }}
          />
          <SLabelLogin>Password</SLabelLogin>
          <SInputLogin
            type="password"
            required
            autoComplete="off"
            value={usuario.password}
            onChange={(e) => {
              setUsuario({ ...usuario, password: e.target.value })
            }}
          />
          <SButtonLogin
            type="button"
            onClick={() => {
              SubmitUser()
            }}
          >
            Confirmar
          </SButtonLogin>
        </SFormularioLogin>
      </SCardLogin>
    </ContainerPadrao>
  )
}

export default PaginaDeLogin
