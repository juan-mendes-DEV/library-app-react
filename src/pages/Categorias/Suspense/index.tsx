import ListaLivros from '../../../components/CardLivros'
import { Conteudo } from '../../../components/Container/style'
import TodosLivros from '../TodosLivros/TodosLivros'

const LivrosSuspense = () => {
  const livrosSuspense = TodosLivros.filter(
    (livro) => livro.category === 'romance'
  )

  return (
    <Conteudo>
      <ListaLivros livros={livrosSuspense} />
    </Conteudo>
  )
}

export default LivrosSuspense
