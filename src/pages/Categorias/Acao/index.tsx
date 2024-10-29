import ListaLivros from '../../../components/CardLivros'
import { Conteudo } from '../../../components/Container/style'
import TodosLivros from '../TodosLivros/TodosLivros'

const LivrosAcao = () => {
  const livrosAcao = TodosLivros.filter((livro) => livro.category === 'acao')

  return (
    <Conteudo>
      <ListaLivros livros={livrosAcao} />
    </Conteudo>
  )
}

export default LivrosAcao
