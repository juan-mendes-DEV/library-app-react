import { Conteudo } from './components/Container/style'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Fotter'
import Header from './components/Header'
import Cardi from './components/Card'
import { GlobalCss } from './styles'
import Home from './pages/Home'
import Rotas from './routes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalCss />
        <Header />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
