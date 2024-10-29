import Livros from '../../models/livros'
import ListaLivros from '../../components/CardLivros'
import senhorDosaneis from '../../assets/images/acao/SenhorDosAneis2.jpeg'
import harryPotter from '../../assets/images/aventura/HarryPotter2.jpg'

import { Conteudo } from '../../components/Container/style'
const aventura: Livros[] = [
  {
    id: 1,
    description:
      'Resident Evil 4 é uma experiência inesquecível que combina terror psicológico, ação frenética e uma história envolvente. Se você gosta de jogos de sobrevivência com uma boa dose de suspense e tiroteios, este é um título imperdível.',
    title: 'Resident Evil 4',
    image: harryPotter,
    category: 'aventura',
    botao: 'saiba'
  },
  {
    id: 2,
    description:
      'Resident Evil 4 é uma experiência inesquecível que combina terror psicológico, ação frenética e uma história envolvente. Se você gosta de jogos de sobrevivência com uma boa dose de suspense e tiroteios, este é um título imperdível.',
    title: 'Resident Evil 4',
    image: harryPotter,
    category: 'aventura',
    botao: 'saiba'
  },
  {
    id: 3,
    description:
      'Resident Evil 4 é uma experiência inesquecível que combina terror psicológico, ação frenética e uma história envolvente. Se você gosta de jogos de sobrevivência com uma boa dose de suspense e tiroteios, este é um título imperdível.',
    title: 'Resident Evil 4',
    image: harryPotter,
    category: 'aventura',
    botao: 'saiba'
  }
]

const SaibaMais = () => (
  <>
    <Conteudo>
      <ListaLivros livros={aventura} />
    </Conteudo>
  </>
)

export default SaibaMais
