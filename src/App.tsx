import { Route, Routes } from 'react-router-dom'
import { NotFound } from './components/NotFound'
import { AccessPage } from './pages/AccessPage'
import { HomePage } from './pages/HomePage'
import { ReviewPage } from './pages/ReviewPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/access" element={<AccessPage />} />
      <Route path="/r" element={<NotFound />} />
      <Route path="/r/:slug" element={<ReviewPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
