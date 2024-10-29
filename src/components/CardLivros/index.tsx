import Livros from '../../models/livros'
import Cardi from '../Card'
import { Conteudo } from '../Container/style'

export type Props = {
  livros: Livros[]
}

const ListaLivros = ({ livros }: Props) => {
  return (
    <Conteudo>
      {livros.map((livro) => (
        <Cardi
          key={livro.id}
          description={livro.description}
          image={livro.image}
          title={livro.title}
          category={livro.category}
          botao={livro.botao}
        />
      ))}
    </Conteudo>
  )
}

export default ListaLivros
