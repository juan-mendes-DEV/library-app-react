import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SaibaMais from './pages/SaibaMais'
import LivrosAcao from './pages/Categorias/Acao'
import LivrosSuspense from './pages/Categorias/Suspense'
import LivrosRomance from './pages/Categorias/Romance'
import LivrosAventura from './pages/Categorias/Aventura'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Categorias/Acao" element={<LivrosAcao />} />
    <Route path="/Categorias/Suspense" element={<LivrosSuspense />} />
    <Route path="/Categorias/Romance" element={<LivrosRomance />} />
    <Route path="/Categorias/Aventura" element={<LivrosAventura />} />
  </Routes>
)

export default Rotas
