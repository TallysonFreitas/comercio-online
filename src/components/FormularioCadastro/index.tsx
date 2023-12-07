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
import { adicionarUser, logaUser } from '../../store/reducers/user'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FormularioDeCadastro = ({ muda }: any) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [usuario, setUsuario] = useState({ username: '', password: '' })

  return (
    <SCardLogin>
      <STitulo>Cadastro</STitulo>
      <SFormularioLogin>
        <SLabelLogin>Crie um Username:</SLabelLogin>
        <SInputLogin
          type="text"
          required
          autoComplete="off"
          minLength={1}
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
          minLength={1}
          value={usuario.password}
          onChange={(e) => {
            setUsuario({ ...usuario, password: e.target.value })
          }}
        />
        <SLink onClick={muda}>já possui uma conta?</SLink>
        <SButtonLogin
          type="button"
          onClick={() => {
            dispatch(adicionarUser(usuario)),
              dispatch(logaUser(usuario)),
              navigate('/home')
          }}
        >
          Cadastrar
        </SButtonLogin>
      </SFormularioLogin>
    </SCardLogin>
  )
}

export default FormularioDeCadastro
