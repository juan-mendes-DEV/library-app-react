import { ContainerHeader, TitleHeader } from './styles'
import { Link } from 'react-router-dom'
import { GlobalCss } from '../../styles'
const Header = () => (
  <ContainerHeader>
    <TitleHeader>
      <Link className="linki" to={'/'}>
        Biblioteca Online <br /> library pirate
      </Link>
    </TitleHeader>
    <p>carrinho</p>
  </ContainerHeader>
)

export default Header
