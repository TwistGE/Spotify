import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Sidebar from './componentes/sidebar.jsx'
import Footer from './componentes/Footer.jsx'

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home.jsx'
import Artists from "./pages/Artists.jsx"
import Artist from "./pages/Artist.jsx"
import Songs from "./pages/Songs.jsx"
import Song from "./pages/Song.jsx"

const App =() => {
    <BrowserRouter>
    <Sidebar />
    <Footer />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/artists" element={<Artists />}/>
        <Route path="/artist/:id" element={<Artist />}/>
        <Route path="/songs" element={<Songs />}/>
        <Route path="/song/:id" element={<Song />}/>

      </Routes>
    </BrowserRouter>
}

export default App
    
