import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:name" element={<div>Country placeholder</div>} />
          <Route path="/favourites" element={<div>Favourites placeholder</div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
