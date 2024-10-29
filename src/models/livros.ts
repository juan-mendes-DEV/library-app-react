class Livros {
  description: string
  category: string
  image: string
  title: string
  id: number
  botao: string

  constructor(
    id: number,
    description: string,
    image: string,
    title: string,
    category: string,
    botao: string
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.title = title
    this.category = category
    this.botao = botao
  }
}

export default Livros
