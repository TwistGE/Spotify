import React from 'react'
import SongItem from './SongItem'

const SongList = () => {
  return (
    <div className="song-list">
        <SongItem />
        <SongItem />
        <SongItem />
        <a href="/" className='song-list__see-more'>Veja mais</a>
    </div>
  )
}

export default SongList