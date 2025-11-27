import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './token/primitive.css'
import './token/semantic.css'
import './token/component.css'
import './styles/components.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)