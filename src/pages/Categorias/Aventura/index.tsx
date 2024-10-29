import Livros from '../../../models/livros'
import ListaLivros from '../../../components/CardLivros'
import { Conteudo } from '../../../components/Container/style'
import harrypotter from '../../../assets/images/aventura/HarryPotter2.jpg'
import asCronicasDeNarnia from '../../../assets/images/aventura/asCronicasDeNarnia1.jpg'

const aventura: Livros[] = [
  {
    id: 1,
    description:
      'funfa Evil 4 é uma experiência inesquecível que combina terror psicológico, ação frenética e uma história envolvente. Se você gosta de jogos de sobrevivência com uma boa dose de suspense e tiroteios, este é um título imperdível.',
    title: 'Resident Evil 4',
    image: harrypotter,
    category: 'aventura',
    botao: 'adicionar no carrinho'
  },
  {
    id: 2,
    description:
      'funfa Evil 4 é uma experiência inesquecível que combina terror psicológico, ação frenética e uma história envolvente. Se você gosta de jogos de sobrevivência com uma boa dose de suspense e tiroteios, este é um título imperdível.',
    title: 'Resident Evil 4',
    image: asCronicasDeNarnia,
    category: 'aventura',
    botao: 'adicionar no carrinho'
  },
  {
    id: 3,
    description:
      'funfa Evil 4 é uma experiência inesquecível que combina terror psicológico, ação frenética e uma história envolvente. Se você gosta de jogos de sobrevivência com uma boa dose de suspense e tiroteios, este é um título imperdível.',
    title: 'Resident Evil 4',
    image: harrypotter,
    category: 'aventura',
    botao: 'adicionar no carrinho'
  },
  {
    id: 4,
    description:
      'funfa Evil 4 é uma experiência inesquecível que combina terror psicológico, ação frenética e uma história envolvente. Se você gosta de jogos de sobrevivência com uma boa dose de suspense e tiroteios, este é um título imperdível.',
    title: 'Resident Evil 4',
    image: asCronicasDeNarnia,
    category: 'aventura',
    botao: 'adicionar no carrinho'
  }
]
console.log(aventura)
const LivrosAventura = () => (
  <>
    <Conteudo>
      <ListaLivros livros={aventura} />
    </Conteudo>
  </>
)
console.log('passou')

export default LivrosAventura
