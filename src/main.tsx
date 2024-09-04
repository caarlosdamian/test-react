import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './pages/index.ts'
import './index.css'

createRoot(document.getElementById('testing')!).render(
  // <StrictMode>
    <Home />
  // </StrictMode>,
)
