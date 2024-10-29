import Livros from '../../../models/livros'
import ListaLivros from '../../../components/CardLivros'
import harryPotter from '../../../assets/images/aventura/HarryPotter2.jpg'
import { Conteudo } from '../../../components/Container/style'

const acaoo: Livros[] = [
  {
    id: 1,
    description:
      'funfa Evil 4 é uma experiência inesquecível que combina terror psicológico, ação frenética e uma história envolvente. Se você gosta de jogos de sobrevivência com uma boa dose de suspense e tiroteios, este é um título imperdível.',
    title: 'Resident Evil 4',
    image: harryPotter,
    category: 'acao',
    botao: 'adicionar no carrinho'
  },
  {
    id: 2,
    description:
      'funfa Evil 4 é uma experiência inesquecível que combina terror psicológico, ação frenética e uma história envolvente. Se você gosta de jogos de sobrevivência com uma boa dose de suspense e tiroteios, este é um título imperdível.',
    title: 'Resident Evil 4',
    image: harryPotter,
    category: 'acao',
    botao: 'adicionar no carrinho'
  },
  {
    id: 3,
    description:
      'funfa Evil 4 é uma experiência inesquecível que combina terror psicológico, ação frenética e uma história envolvente. Se você gosta de jogos de sobrevivência com uma boa dose de suspense e tiroteios, este é um título imperdível.',
    title: 'Resident Evil 4',
    image: harryPotter,
    category: 'acao',
    botao: 'adicionar no carrinho'
  },
  {
    id: 4,
    description:
      'funfa Evil 4 é uma experiência inesquecível que combina terror psicológico, ação frenética e uma história envolvente. Se você gosta de jogos de sobrevivência com uma boa dose de suspense e tiroteios, este é um título imperdível.',
    title: 'Resident Evil 4',
    image: harryPotter,
    category: 'acao',
    botao: 'adicionar no carrinho'
  }
]
console.log(acaoo)
const LivrosAcao = () => (
  <>
    <Conteudo>
      <ListaLivros livros={acaoo} />
    </Conteudo>
  </>
)
console.log('passou')

export default LivrosAcao
