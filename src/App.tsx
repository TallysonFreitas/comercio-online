import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PaginaDeCadastro from './containers/PaginaDeCadastro'
import { ContainerPadrao, EstiloGlobal } from './style'
import { Provider } from 'react-redux'
import store from './store'
import Home from './containers/Home'

function App() {
  const rotas = createBrowserRouter([
    { path: '/', element: <PaginaDeCadastro /> },
    {
      path: 'home',
      element: <Home />
    }
  ])

  return (
    <Provider store={store}>
      <EstiloGlobal />
      <ContainerPadrao>
        <RouterProvider router={rotas} />
      </ContainerPadrao>
    </Provider>
  )
}

export default App
