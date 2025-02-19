import React from 'react'
import SongList from '../componentes/SongList'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCirclePlay} from '@fortawesome/free-solid-svg-icons';

const Artist = () => {
  return <>
  <div className="main_container">
      <div className="artist">
        <div className="artist__header"
        style={{backgroundImage:"linear-gradient(to bottom, var(--_shade), var(--_shade)), url(https://www.hashtagtreinamentos.com/wp-content/uploads/2025/02/mc-tuto.png)"}}>
          <h2 className='artist__title'>MC TUTO</h2>
        </div>


        <div className="artist__body">
          <h2>Populares</h2>
          
          <SongList />
          <FontAwesomeIcon className="single-item__icon single-item__icon--artist" icon={faCirclePlay} />
          
        </div>
      </div>
    
  </div>
  </>
}

export default Artist