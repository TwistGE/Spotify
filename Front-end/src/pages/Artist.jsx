import React from 'react'
import SongList from '../componentes/SongList'
import {Link,useParams} from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCirclePlay} from '@fortawesome/free-solid-svg-icons';
import {artistArray} from "../assets/database/artists"
import {songsArray} from "../assets/database/songs"

const Artist = () => {
  const {id} =useParams()
// Variavel que armazenara = Filtro ((Cada parametro) => o ID do parametro === condição)[primeiro item da lista]
  const artistObj = artistArray.filter((currentArtistObj) => currentArtistObj.id === Number(id))[0]
  // const {image} = artistObj
  const {name} = artistObj
  const {banner} = artistObj

   const songsArtist = songsArray.filter((currentsongObj) => currentsongObj.artist === name)
   const randomIndex = Math.floor(Math.random()*(songsArtist.length-1))
   const randomIdSongArtist = songsArtist[randomIndex].id

   return <>
  <div className="main_container">
      <div className="artist">
        <div className="artist__header"
        style={{backgroundImage:`linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${banner})`}}>
          <h2 className='artist__title'>{name}</h2>
        </div>


        <div className="artist__body">
          <h2>Populares</h2>
          
          <SongList songsList={songsArtist}/>

          <Link to={`/song/${randomIdSongArtist}`}>
            <FontAwesomeIcon className="single-item__icon single-item__icon--artist" icon={faCirclePlay} />
          </Link>
          
        </div>
      </div>
    
  </div>
  </>
}

export default Artist