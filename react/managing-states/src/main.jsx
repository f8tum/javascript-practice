import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Form from './Mock'
import Accordion from './SharingState';
import App from './PreservingState';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
    <Accordion />
    <App />
  </StrictMode>,
)