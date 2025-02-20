//Nomear componentes segue o PascalCase
//Todas as palavras sao juntas e com inicial da palavra Maiscula
//Ex: MainSection

import React from 'react'
import spotifyLogo from '../assets/logo/spotify-logo.png' 

import { Link } from 'react-router-dom'

const Sidebar = () => {
  return <>
      <div className='sidebar'>
        <nav className="sidebar_navigation">
          <div className="logo">
            <Link to="/">
              <img src={spotifyLogo} alt="Logo Spotify"/>
            </Link>
          </div>


          <div>
            <ul>
              <li>
                <Link to="/">
                  <span className="fa fa-home"></span>
                  <span>Início</span>
                </Link>
              </li>

              <li>
                <a href="#search_input">
                  <span className="fa fa-search"></span>
                  <span>Buscar</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="library">
          <div className="library_content">
            <button className="library_btn">
              <span className="fa fas fa-book"></span>
              <span>Sua biblioteca</span>
            </button>
            <span className="fa fa-plus"></span>
          </div>

          <section className="section_playlist">
            <div className="section_playlist_content">
              <span className="text tittle">Crie sua primeira playlist</span>
              <span className="text subtiitle">Vamos te ajudar!</span>
              <button className="section_playlist_btn">
                <span>Criar playlist</span>
              </button>

            </div>
          </section>

          <div className="cookies">
            <Link href="/">Cookies</Link>
          </div>

          <div className="languages">
            <button className="languages_btn">
              <span className="fa fa-globe"></span>
              <span>Portugues do Brasil</span>
            </button>
          </div>

        </div>
      </div>
    </>
}

export default Sidebar