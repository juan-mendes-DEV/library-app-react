import Livros from '../../../models/livros'
import ListaLivros from '../../../components/CardLivros'
import { Conteudo } from '../../../components/Container/style'
import romance1 from '../../../assets/images/romance/romance1.jpg'
import romance2 from '../../../assets/images/romance/romance2.jpg'
import romance3 from '../../../assets/images/romance/romance3.jpg'

const romance: Livros[] = [
  {
    id: 1,
    description:
      'funfa Evil 4 é uma experiência inesquecível que combina terror psicológico, ação frenética e uma história envolvente. Se você gosta de jogos de sobrevivência com uma boa dose de suspense e tiroteios, este é um título imperdível.',
    title: 'Resident Evil 4',
    image: romance1,
    category: 'romance',
    botao: 'adicionar no carrinho'
  },
  {
    id: 2,
    description:
      'funfa Evil 4 é uma experiência inesquecível que combina terror psicológico, ação frenética e uma história envolvente. Se você gosta de jogos de sobrevivência com uma boa dose de suspense e tiroteios, este é um título imperdível.',
    title: 'Resident Evil 4',
    image: romance2,
    category: 'romance',
    botao: 'adicionar no carrinho'
  },
  {
    id: 3,
    description:
      'funfa Evil 4 é uma experiência inesquecível que combina terror psicológico, ação frenética e uma história envolvente. Se você gosta de jogos de sobrevivência com uma boa dose de suspense e tiroteios, este é um título imperdível.',
    title: 'Resident Evil 4',
    image: romance3,
    category: 'romance',
    botao: 'adicionar no carrinho'
  },
  {
    id: 4,
    description:
      'funfa Evil 4 é uma experiência inesquecível que combina terror psicológico, ação frenética e uma história envolvente. Se você gosta de jogos de sobrevivência com uma boa dose de suspense e tiroteios, este é um título imperdível.',
    title: 'Resident Evil 4',
    image: romance1,
    category: 'romance',
    botao: 'adicionar no carrinho'
  }
]
console.log(romance)
const LivrosRomance = () => (
  <>
    <Conteudo>
      <ListaLivros livros={romance} />
    </Conteudo>
  </>
)
console.log('passou')

export default LivrosRomance
