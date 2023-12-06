import { useDispatch } from 'react-redux'
import {
  SButtonLogin,
  SCardLogin,
  SFormularioLogin,
  SInputLogin,
  SLabelLogin,
  SLink,
  STitulo
} from '../FormularioCadastro/style'
import { adicionarUser } from '../../store/reducers/user'
import { useState } from 'react'

const FormularioDeLogin = ({ muda }: any) => {
  const dispatch = useDispatch()

  const [usuario, setUsuario] = useState({ username: '', password: '' })

  return (
    <SCardLogin>
      <STitulo>Login</STitulo>
      <SFormularioLogin>
        <SLabelLogin>Crie um Username:</SLabelLogin>
        <SInputLogin
          type="text"
          required
          autoComplete="off"
          value={usuario.username}
          onChange={(e) => {
            setUsuario({ ...usuario, username: e.target.value })
          }}
        />
        <SLabelLogin>Crie um Password:</SLabelLogin>
        <SInputLogin
          type="password"
          required
          autoComplete="off"
          value={usuario.password}
          onChange={(e) => {
            setUsuario({ ...usuario, password: e.target.value })
          }}
        />
        <SLink onClick={muda}>ainda nao possui uma conta?</SLink>
        <SButtonLogin
          type="button"
          onClick={() => {
            dispatch(adicionarUser(usuario))
          }}
        >
          Logar
        </SButtonLogin>
      </SFormularioLogin>
    </SCardLogin>
  )
}

export default FormularioDeLogin
