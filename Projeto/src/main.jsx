import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import './vars.css'
import './reset.css'
import './main_content.css'

import Sidebar from './componentes/sidebar.jsx'
import Footer from './componentes/Footer.jsx'
import Main from './componentes/Main.jsx'

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Artists from './pages/Artists'
import Artist from './pages/Artist'
import Songs from './pages/Songs'
import Song from './pages/Song'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
      <Sidebar />
      <Footer />
      

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/artists' element ={<Artists />}></Route>
        <Route path='/artist/:id' element ={<Artist />}></Route>
        <Route path='/songs' element ={<Songs />}></Route>
        <Route path='/song/:id' element ={<Song />}></Route>*/
      </Routes>
    
    
    </BrowserRouter>
  </StrictMode>
)
