import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import './vars.css'
import './reset.css'
import './main_content.css'

import Sidebar from './componentes/sidebar.jsx'
import Footer from './componentes/Footer.jsx'
import Main from './componentes/Main.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sidebar />
    <Footer />
    <Main />
  </StrictMode>
)
