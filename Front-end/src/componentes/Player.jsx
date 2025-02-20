import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCirclePlay, faBackwardStep, faForwardStep} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

import {songsArray} from "../assets/database/songs"
import {artistArray} from "../assets/database/artists"

const Player = (songActual) => {

    const artistActual = artistArray.filter((currentValue) => currentValue.name === songActual.artist)[0]

    const songsArtist = songsArray.filter((currentValue) => currentValue.artist === artistActual.name)
    console.log(songsArtist)

    const randomindex = Math.floor(Math.random()*(10-1))
    const randomIdArtistSong = songsArtist[randomindex].id
    const randomindex2 = Math.floor(Math.random()*(10-1))
    const randomIdArtistSong2 = songsArtist[randomindex2].id
    const songId = songActual.id

  return <>
    <div className="player">
        <div className="player__controllers">
            <Link to={`/song/${randomIdArtistSong}`}>
                <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
            </Link>
            <FontAwesomeIcon className="player__icon player__icon--play" icon={faCirclePlay} />
            
            <Link to={`/song/${randomIdArtistSong2}`}>
                <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
            </Link>
        </div>
        <div className="player__progress">
            <p className='player__time'>00:00</p>
            <div className="player__bar">
                <div className="player__bar-progress">

                </div>
            </div>
            <p className="player__time">{songActual.duration}</p>
        </div>
    </div>
  </>
}

export default Player