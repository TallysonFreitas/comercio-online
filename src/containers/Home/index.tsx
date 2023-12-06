import { Link } from 'react-router-dom'
import {
  SBotaoContact,
  SContexto,
  SHeader,
  SImagePerfil,
  SNavBar,
  SSessaoHome,
  STextoDestaque,
  STituloDestaque
} from './style'

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
      <SSessaoHome>
        <div>
          <STextoDestaque>ALUNO FRONT-END</STextoDestaque>
          <STituloDestaque>Web Developer</STituloDestaque>
          <SContexto>
            Conquiste sua liberdade financeira e entre para o mundo dos
            investimentos com os maiores especialistas do mercado.
          </SContexto>
          <SBotaoContact>Contact</SBotaoContact>
          <SContexto>
            Entre em contato pelo <span>Email</span>
          </SContexto>
        </div>
        <SImagePerfil
          src="https://media.licdn.com/dms/image/D4D03AQEcxYXuL6pzHg/profile-displayphoto-shrink_800_800/0/1692718684966?e=1707350400&v=beta&t=QlRX4PRmwMmwkbidOPuXSRCShmATHhk5tDTY9GE1fHQ"
          alt=""
        />
      </SSessaoHome>
    </>
  )
}

export default Home
