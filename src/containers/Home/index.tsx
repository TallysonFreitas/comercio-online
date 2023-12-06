import { Link } from 'react-router-dom'
import { SHeader, SNavBar } from './style'

const Home = () => {
  return (
    <>
      <SHeader>
        <h1>Financess</h1>
        <SNavBar>
          <li>
            <Link to={'/'}>Login</Link>
          </li>
          <li>
            <Link to={'/'}>Projects</Link>
          </li>
          <li>
            <Link to={'/'}>About me</Link>
          </li>
        </SNavBar>
      </SHeader>
    </>
  )
}

export default Home
