import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BasicsSlides from './pages/BasicsSlides'
import StructureSlides from './pages/StructureSlides'
import TablesSlides from './pages/TablesSlides'
import FormsSlides from './pages/FormsSlides'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/basics" element={<BasicsSlides />} />
      <Route path="/structure" element={<StructureSlides />} />
      <Route path="/tables" element={<TablesSlides />} />
      <Route path="/forms" element={<FormsSlides />} />
    </Routes>
  )
}

export default App
