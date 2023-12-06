import { useDispatch } from 'react-redux'
import {
  SButtonLogin,
  SCardLogin,
  SFormularioLogin,
  SInputLogin,
  SLabelLogin,
  SLink,
  STitulo
} from './style'
import { adicionarUser } from '../../store/reducers/user'
import { useState } from 'react'

const FormularioDeCadastro = ({ muda }: any) => {
  const dispatch = useDispatch()

  const [usuario, setUsuario] = useState({ username: '', password: '' })

  return (
    <SCardLogin>
      <STitulo>Cadastro</STitulo>
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
        <SLink onClick={muda}>já possui uma conta?</SLink>
        <SButtonLogin
          type="button"
          onClick={() => {
            dispatch(adicionarUser(usuario))
          }}
        >
          Cadastrar
        </SButtonLogin>
      </SFormularioLogin>
    </SCardLogin>
  )
}

export default FormularioDeCadastro
