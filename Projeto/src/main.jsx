import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import './vars.css'
import './reset.css'
import './main_content.css'

import SearchBar from './componentes/SearchBar.jsx'
import Sidebar from './componentes/sidebar.jsx'
import Footer from './componentes/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sidebar />
    <SearchBar />
    <Footer />
  </StrictMode>
)
