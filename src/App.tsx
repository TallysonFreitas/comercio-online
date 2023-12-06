import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PaginaDeCadastro from './containers/PaginaDeCadastro'
import { EstiloGlobal } from './style'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  const rotas = createBrowserRouter([
    { path: '/', element: <PaginaDeCadastro /> },
    {
      path: 'home',
      element: (
        <div>
          <h1>ola mundo</h1>
        </div>
      )
    }
  ])

  return (
    <Provider store={store}>
      <EstiloGlobal />
      <RouterProvider router={rotas} />
    </Provider>
  )
}

export default App
