import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AppJS from './app.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AppJS />
  </StrictMode>,
)
