import React from 'react'
import Player from '../componentes/player'
import { Link } from 'react-router-dom'

const Song = () => {
  return <>
    <div className="main_container">
      <div className="main_spotify">

        <div className="song">
          <div className="song__container">
              <div className="song__image-container">
                <img width={300} height={300} src="https://i.scdn.co/image/ab67616d00001e0299ca4be43858f41a3bad9728" alt="imagem musica X" />
              </div>
          </div>

          <div className="song__bar">
            <Link to="/artist/2" className="song__artist-image">
              <img width={75} height={75} src="https://i.scdn.co/image/ab6761610000517499c26e8fb91634b00764bbb9" alt="Imagem artista X" />
            </Link>

              <Player />


            <div>
              <p className='song__name'>2025</p>
              <p>MC Tuto</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </>
}
export default Song