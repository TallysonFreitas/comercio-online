import { useState } from 'react'
import FormularioDeCadastro from '../../components/FormularioCadastro'
import { ContainerPadrao } from '../../style'
import FormularioDeLogin from '../../components/FormularioLogin'

const PaginaDeCadastro = () => {
  const [alteraForm, setAlteraForm] = useState(true)

  const Muda = () => {
    setAlteraForm(!alteraForm)
  }

  return (
    <ContainerPadrao>
      {alteraForm === true ? (
        <FormularioDeCadastro muda={Muda} />
      ) : (
        <FormularioDeLogin muda={Muda} />
      )}
    </ContainerPadrao>
  )
}

export default PaginaDeCadastro
