import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './Mock'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form></Form>
  </StrictMode>,
)