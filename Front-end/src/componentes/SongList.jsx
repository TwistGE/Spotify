import React from 'react'
import SongItem from './SongItem'
import { songsArray } from '../assets/database/songs'
import { useState } from 'react'

const SongList = ({songsList}) => {
  // const items =5;
  const [items,setItems] = useState(5)
  console.log(items)
  return (
    <div className="song-list">
      {songsList.filter((currentValue,index) => index <items).map((currenteSongObj,index) => (

        <SongItem {...currenteSongObj} index={index} key={index}/>
      ))
      }
      
        <a className='song-list__see-more' onClick={() => {setItems(items+5)}}>Veja mais</a>
    </div>
  )
}

export default SongList