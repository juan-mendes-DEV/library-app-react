import ListaLivros from '../../../components/CardLivros'
import { Conteudo } from '../../../components/Container/style'
import TodosLivros from '../TodosLivros/TodosLivros'

const LivrosRomance = () => {
  const livrosRomance = TodosLivros.filter(
    (livro) => livro.category === 'romance'
  )

  return (
    <Conteudo>
      <ListaLivros livros={livrosRomance} />
    </Conteudo>
  )
}

export default LivrosRomance
