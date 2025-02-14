import React from 'react';
import SmallLeft from '../assets/logo/small-left.png';
import SmallRight from '../assets/logo/small-right.png';
import Search from '../assets/logo/search.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCirclePlay} from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return <>
        <div class="main_container">
            <nav class="header_navigation">
                <div class="navigation">
                    <button class="arrow_left">
                        <img src={SmallLeft} alt="Seta esquerda" />
                    </button>

                    <button class="arrow_right">
                        <img src={SmallRight} alt="Seta direita" />
                    </button>
                </div>
                    
                <div class="header_search">
                        <img src={Search} alt="" />
                        <input maxlength="800" placeholder="O que voce quer ouvir?" i d="search_input" type="text" />
                </div>

                <div class="header_login">
                        <button class="subscribe">Inscreva-se</button>
                        <button class="login">Entrar</button>
                </div>
            </nav>

            <div className="main_spotify">
                <div className='item-list'>
                    <nav className="item-list__header">
                        <h2>Artistas Populares</h2>
                        <a href="/">Mostrar tudo</a>
                    </nav>
                    
                    <div className="item-list__container">


                        <div className="single-item">
                            <div className="single-item_div-image-button">

                            <div className="single-item__div-img">
                                <img className="single-item__img" src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Artista X" />
                            </div>
                                <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                            </div>
                            
                            <div className="single-item__texts">
                                <div className="single-item__2lines">
                                    <p className='single-item__title'>Nome Artista</p>
                                </div>
                                <p className='single-item__type'>Subtitulo</p>
                            </div>

                        </div>

                        <div className="single-item">
                            <div className="single-item_div-image-button">

                            <div className="single-item__div-img">
                                <img className="single-item__img" src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Artista X" />
                            </div>
                                <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                            </div>
                            
                            <div className="single-item__texts">
                                <div className="single-item__2lines">
                                    <p className='single-item__title'>Nome Artista</p>
                                </div>
                                <p className='single-item__type'>Subtitulo</p>
                            </div>

                        </div>

                        <div className="single-item">
                            <div className="single-item_div-image-button">

                            <div className="single-item__div-img">
                                <img className="single-item__img" src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Artista X" />
                            </div>
                                <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                            </div>
                            
                            <div className="single-item__texts">
                                <div className="single-item__2lines">
                                    <p className='single-item__title'>Nome Artista</p>
                                </div>
                                <p className='single-item__type'>Subtitulo</p>
                            </div>

                        </div>

                        <div className="single-item">
                            <div className="single-item_div-image-button">

                            <div className="single-item__div-img">
                                <img className="single-item__img" src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Artista X" />
                            </div>
                                <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                            </div>
                            
                            <div className="single-item__texts">
                                <div className="single-item__2lines">
                                    <p className='single-item__title'>Nome Artista</p>
                                </div>
                                <p className='single-item__type'>Subtitulo</p>
                            </div>

                        </div>

                        <div className="single-item">
                            <div className="single-item_div-image-button">

                            <div className="single-item__div-img">
                                <img className="single-item__img" src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Artista X" />
                            </div>
                                <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                            </div>
                            
                            <div className="single-item__texts">
                                <div className="single-item__2lines">
                                    <p className='single-item__title'>Nome Artista</p>
                                </div>
                                <p className='single-item__type'>Subtitulo</p>
                            </div>

                        </div>

                        <div className="single-item">
                            <div className="single-item_div-image-button">

                            <div className="single-item__div-img">
                                <img className="single-item__img" src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Artista X" />
                            </div>
                                <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                            </div>
                            
                            <div className="single-item__texts">
                                <div className="single-item__2lines">
                                    <p className='single-item__title'>Nome Artista</p>
                                </div>
                                <p className='single-item__type'>Subtitulo</p>
                            </div>

                        </div>

                        <div className="single-item">
                            <div className="single-item_div-image-button">

                            <div className="single-item__div-img">
                                <img className="single-item__img" src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="Artista X" />
                            </div>
                                <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
                            </div>
                            
                            <div className="single-item__texts">
                                <div className="single-item__2lines">
                                    <p className='single-item__title'>Nome Artista</p>
                                </div>
                                <p className='single-item__type'>Subtitulo</p>
                            </div>

                        </div>


                    </div>

                    <nav className="item-list__header">
                        <h2>Musicas Populares</h2>
                        <a href="/">Mostrar tudo</a>
                    </nav>
            
                </div>
            </div>            
        </div>
    </>
}

export default SearchBar