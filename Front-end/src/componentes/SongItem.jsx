import React from 'react'
import { Link } from 'react-router-dom'
const SongItem = ({id,image,name,duration,index}) => {
  return (
    <Link to={`/song/${id}`} style={{textDecoration:"none"}}>
      <div  className='song-item'>
        <div className="song-item__number__album">
            <p>{index+1}</p>
          <div className="song-item__album">
            <img className='song-item__image'src={image} alt={`imagem musica ${name}`} />
            <p>{name}</p>
          </div>
        </div>
        <p>{duration}</p>
      </div>
    </Link>
  )
}

export default SongItem