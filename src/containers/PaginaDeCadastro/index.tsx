import { useState } from 'react'
import FormularioDeCadastro from '../../components/FormularioCadastro'
import FormularioDeLogin from '../../components/FormularioLogin'

const PaginaDeCadastro = () => {
  const [alteraForm, setAlteraForm] = useState(true)

  const Muda = () => {
    setAlteraForm(!alteraForm)
  }

  return (
    <>
      {alteraForm === true ? (
        <FormularioDeCadastro muda={Muda} />
      ) : (
        <FormularioDeLogin muda={Muda} />
      )}
    </>
  )
}

export default PaginaDeCadastro
