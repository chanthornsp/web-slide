import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BasicsSlides from './pages/BasicsSlides'
import StructureSlides from './pages/StructureSlides'
import TablesSlides from './pages/TablesSlides'
import FormsSlides from './pages/FormsSlides'
import CssSlides from './pages/CssSlides'
import CssDisplaySlides from './pages/CssDisplaySlides'
import CssVariablesSlides from './pages/CssVariablesSlides'
import CssPracticeSlides from './pages/CssPracticeSlides'
import ResponsiveSlides from './pages/ResponsiveSlides'
import CssFrameworksSlides from './pages/CssFrameworksSlides'
import TailwindSlides from './pages/TailwindSlides'
import JavascriptSlides from './pages/JavascriptSlides'
import ReactSlides from './pages/ReactSlides'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/basics" element={<BasicsSlides />} />
      <Route path="/structure" element={<StructureSlides />} />
      <Route path="/tables" element={<TablesSlides />} />
      <Route path="/forms" element={<FormsSlides />} />
      <Route path="/css" element={<CssSlides />} />
      <Route path="/css-display" element={<CssDisplaySlides />} />
      <Route path="/css-variables" element={<CssVariablesSlides />} />
      <Route path="/css-practice" element={<CssPracticeSlides />} />
      <Route path="/responsive" element={<ResponsiveSlides />} />
      <Route path="/css-frameworks" element={<CssFrameworksSlides />} />
      <Route path="/tailwind" element={<TailwindSlides />} />
      <Route path="/javascript" element={<JavascriptSlides />} />
      <Route path="/react" element={<ReactSlides />} />
    </Routes>
  )
}

export default App
