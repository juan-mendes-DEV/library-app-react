import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  description: string
  image: string
  category: string
  botao: string
}

const Cardi = ({ title, description, image, category, botao }: Props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>

        <Link className="btn btn-danger" to={`/${category}`}>
          {botao}
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Cardi
