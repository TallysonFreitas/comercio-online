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
import { logaUser } from '../../store/reducers/user'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useNavigate } from 'react-router-dom'

const FormularioDeLogin = ({ muda }: any) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { usuarios } = useSelector((state: RootReducer) => state.user)

  const [usuario, setUsuario] = useState({ username: '', password: '' })

  function validaUser() {
    const usuarioExiste = usuarios.find(
      (each) => each.username == usuario.username
    )
    if (usuarioExiste?.password == usuario.password) {
      dispatch(logaUser(usuario)), navigate('/home')
    } else {
      alert('senha ou username incorretos')
    }
  }

  return (
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
        <SLink onClick={muda}>ainda nao possui uma conta?</SLink>
        <SButtonLogin
          type="button"
          onClick={() => {
            validaUser()
          }}
        >
          Logar
        </SButtonLogin>
      </SFormularioLogin>
    </SCardLogin>
  )
}

export default FormularioDeLogin
