//Nomear componentes segue o PascalCase
//Todas as palavras sao juntas e com inicial da palavra Maiscula
//Ex: MainSection

import React from 'react'
import spotifyLogo from '../assets/logo/spotify-logo.png' 
const Sidebar = () => {
  return <>
      <div className='sidebar'>
        <nav className="sidebar_navigation">
          <div className="logo">
            <a href="/">
              <img src={spotifyLogo} alt="Logo Spotify"/>
            </a>
          </div>


          <div>
            <ul>
              <li>
                <a href="">
                  <span className="fa fa-home"></span>
                  <span>Início</span>
                </a>
              </li>

              <li>
                <a href="">
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

          <div class="cookies">
            <a href="">Cookies</a>
          </div>

          <div class="languages">
            <button class="languages_btn">
              <span class="fa fa-globe"></span>
              <span>Portugues do Brasil</span>
            </button>
          </div>

        </div>
      </div>
    </>
}

export default Sidebar