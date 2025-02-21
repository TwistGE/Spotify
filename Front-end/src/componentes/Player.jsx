import React, { useState, useEffect } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCirclePlay, faCirclePause ,faBackwardStep, faForwardStep} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

import {songsArray} from "../assets/database/songs"
import {artistArray} from "../assets/database/artists"

import { useRef } from 'react';
const Player = (songActual) => {

    const artistActual = artistArray.filter((currentValue) => currentValue.name === songActual.artist)[0]

    const songsArtist = songsArray.filter((currentValue) => currentValue.artist === artistActual.name)


    const randomindex = Math.floor(Math.random()*(10-1))
    const randomIdArtistSong = songsArtist[randomindex]._id
    const randomindex2 = Math.floor(Math.random()*(10-1))
    const randomIdArtistSong2 = songsArtist[randomindex2]._id
    const songId = songActual._id

    
    const formatTime =(timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds/60).toString().padStart(2,0);
        const seconds = Math.floor(timeInSeconds - minutes*60).toString().padStart(2,0);
        
        return `${minutes}:${seconds}`
    }
    
    const timeInSecond = (timeString) => {
        const splitArray = timeString.split(":");
        const minutes = Number(splitArray[0]);
        const seconds = Number(splitArray[1]);
        
        return seconds + minutes*60;
    }
    
    const durantionInSeconds = timeInSecond(songActual.duration);


    const audioPlayer = useRef();
    const barProgress = useRef();

    const [isPlaying, setIsPlaying] = useState(false); //Apos dar o setIsPlayingo (true), vai mudar o isPlaying, e usamos o useState para /renderizar a pagina automaticao
    const [currentTime, setCurrentTime] = useState(formatTime(0));


    const playPause = () => {
        isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
        setIsPlaying(!isPlaying);
        
    };

    const changeMusic = () =>{
        setIsPlaying(false);
        return audioPlayer.current.pause();
    }

    useEffect(() => {
      const intervalId = setInterval(() => {
        if (isPlaying) 
            setCurrentTime(formatTime(audioPlayer.current.currentTime))
            barProgress.current.style.setProperty("--_progress", ((audioPlayer.current.currentTime/durantionInSeconds)*100)+"%");
      },1000);
    
      return () => clearInterval(intervalId);
    }, [isPlaying]);
    
  return <>
    <div className="player">
        <div className="player__controllers">
            <Link to={`/song/${randomIdArtistSong}`}>
                <FontAwesomeIcon className="player__icon" icon={faBackwardStep} onClick={() => changeMusic()}/>
            </Link>
            <FontAwesomeIcon className="player__icon player__icon--play"  icon={isPlaying ? faCirclePause:faCirclePlay} onClick={() => playPause()} />
            
            <Link to={`/song/${randomIdArtistSong2}`}>
                <FontAwesomeIcon className="player__icon" icon={faForwardStep} onClick={() => changeMusic()}/>
            </Link>
        </div>
        <div className="player__progress">
            <p className='player__time'>{currentTime}</p>
            <div className="player__bar">
                <div ref={barProgress} className="player__bar-progress">

                </div>
            </div>
            <p className="player__time">{songActual.duration}</p>
        </div>

        <audio ref={audioPlayer} src={songActual.audio}></audio>
    </div>
  </>
}

export default Player