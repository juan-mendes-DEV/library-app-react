import Livros from '../../models/livros'
import ListaLivros from '../../components/CardLivros'
import hobit from '../../assets/images/acao/SenhorDosAneis2.jpeg'
import { Conteudo } from '../../components/Container/style'
const acao: Livros[] = [
  {
    id: 1,
    description:
      'Resident Evil 4 é uma experiência inesquecível que combina terror psicológico, ação frenética e uma história envolvente. Se você gosta de jogos de sobrevivência com uma boa dose de suspense e tiroteios, este é um título imperdível.',
    title: 'Resident Evil 4',
    image: hobit,
    category: 'Categorias/Acao',
    botao: 'saiba mais'
  },
  {
    id: 2,
    description:
      'Resident Evil 4 é uma experiência inesquecível que combina terror psicológico, ação frenética e uma história envolvente. Se você gosta de jogos de sobrevivência com uma boa dose de suspense e tiroteios, este é um título imperdível.',
    title: 'Resident Evil 4',
    image: hobit,
    category: 'Categorias/Suspense',
    botao: 'saiba mais'
  },
  {
    id: 3,
    description:
      'Resident Evil 4 é uma experiência inesquecível que combina terror psicológico, ação frenética e uma história envolvente. Se você gosta de jogos de sobrevivência com uma boa dose de suspense e tiroteios, este é um título imperdível.',
    title: 'Resident Evil 4',
    image: hobit,
    category: 'Categorias/Romance',
    botao: 'saiba mais'
  },
  {
    id: 4,
    description:
      'Resident Evil 4 é uma experiência inesquecível que combina terror psicológico, ação frenética e uma história envolvente. Se você gosta de jogos de sobrevivência com uma boa dose de suspense e tiroteios, este é um título imperdível.',
    title: 'Resident Evil 4',
    image: hobit,
    category: 'Categorias/Aventura',
    botao: 'saiba mais'
  }
]

const Home = () => (
  <>
    <Conteudo>
      <ListaLivros livros={acao} />
    </Conteudo>
  </>
)

export default Home
