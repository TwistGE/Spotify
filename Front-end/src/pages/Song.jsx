import React from 'react'
import Player from '../componentes/Player'
import { Link,useParams } from 'react-router-dom'
import {songsArray} from "../assets/database/songs"
import {artistArray} from "../assets/database/artists"

const Song = () => {
  const {id} = useParams()

  const songActual = songsArray.filter((currentValue) => currentValue._id === id)[0]

  const artistActual = artistArray.filter((currentValue) => currentValue.name === songActual.artist)[0]
  console.log(artistActual)
  return <>
    <div className="main_container">
      <div className="main_spotify">

        <div className="song">
          <div className="song__container">
              <div className="song__image-container">
                <img width={300} height={300} src={songActual.image} alt={`Imagem da musica ${songActual.name}`} />
              </div>
          </div>

          <div className="song__bar">
            <Link to={`/artist/${artistActual.id}`} className="song__artist-image">
              <img width={75} height={75} src={artistActual.image} alt={`Imagem do artista ${artistActual.name}`} />
            </Link>

              <Player {...songActual}/>


            <div>
              <p className='song__name'>{songActual.name}</p>
              <p>{songActual.artist}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </>
}
export default Song