import ListaLivros from '../../../components/CardLivros'
import { Conteudo } from '../../../components/Container/style'
import TodosLivros from '../TodosLivros/TodosLivros'


const LivrosAventura = () => {
  const livrosAventura = TodosLivros.filter(
    (livro) => livro.category === 'aventura'
  )

  return (
    <Conteudo>
      <ListaLivros livros={livrosAventura} />
    </Conteudo>
  )
}

export default LivrosAventura
