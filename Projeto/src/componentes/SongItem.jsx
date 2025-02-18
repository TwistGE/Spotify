import React from 'react'
import { Link } from 'react-router-dom'
const SongItem = () => {
  return (
    <Link to="/song/1" style={{textDecoration:"none"}}>
      <div  className='song-item'>
        <div className="song-item__number__album">
            <p>1</p>
          <div className="song-item__album">
            <img className='song-item__image'src="https://i.scdn.co/image/ab67616d00001e0299ca4be43858f41a3bad9728" alt="imagem musica x" />
            <p>2025</p>
          </div>
        </div>
        <p>2:52</p>
      </div>
    </Link>
  )
}

export default SongItem