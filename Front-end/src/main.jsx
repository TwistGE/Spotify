import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import './styles.css'
import './vars.css'
import './main_content.css'


import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Artists from './pages/Artists'
import Artist from './pages/Artist'
import Songs from './pages/Songs'
import Song from './pages/Song'
import Header from './componentes/Header.jsx'
import Sidebar from './componentes/Sidebar.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
      <Sidebar />
      <Header />

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
