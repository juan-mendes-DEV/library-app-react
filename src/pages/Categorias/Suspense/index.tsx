import Livros from '../../../models/livros'
import ListaLivros from '../../../components/CardLivros'
import aCasaAssombrada from '../../../assets/images/suspense/a_casa_assombrada.jpg'
import caixaDePassaros from '../../../assets/images/suspense/caixadepassaros.jpg'
import coraline from '../../../assets/images/suspense/coraline.jpg'

import { Conteudo } from '../../../components/Container/style'

const suspense: Livros[] = [
  {
    id: 1,
    description:
      'funfa Evil 4 é uma experiência inesquecível que combina terror psicológico, ação frenética e uma história envolvente. Se você gosta de jogos de sobrevivência com uma boa dose de suspense e tiroteios, este é um título imperdível.',
    title: 'Resident Evil 4',
    image: coraline,
    category: 'suspense',
    botao: 'adicionar no carrinho'
  },
  {
    id: 2,
    description:
      'funfa Evil 4 é uma experiência inesquecível que combina terror psicológico, ação frenética e uma história envolvente. Se você gosta de jogos de sobrevivência com uma boa dose de suspense e tiroteios, este é um título imperdível.',
    title: 'Resident Evil 4',
    image: aCasaAssombrada,
    category: 'suspense',
    botao: 'adicionar no carrinho'
  },
  {
    id: 3,
    description:
      'funfa Evil 4 é uma experiência inesquecível que combina terror psicológico, ação frenética e uma história envolvente. Se você gosta de jogos de sobrevivência com uma boa dose de suspense e tiroteios, este é um título imperdível.',
    title: 'Resident Evil 4',
    image: caixaDePassaros,
    category: 'suspense',
    botao: 'adicionar no carrinho'
  },
  {
    id: 4,
    description:
      'funfa Evil 4 é uma experiência inesquecível que combina terror psicológico, ação frenética e uma história envolvente. Se você gosta de jogos de sobrevivência com uma boa dose de suspense e tiroteios, este é um título imperdível.',
    title: 'Resident Evil 4',
    image: coraline,
    category: 'suspense',
    botao: 'adicionar no carrinho'
  }
]
console.log(suspense)
const LivrosSuspense = () => (
  <>
    <Conteudo>
      <ListaLivros livros={suspense} />
    </Conteudo>
  </>
)
console.log('passou')

export default LivrosSuspense
