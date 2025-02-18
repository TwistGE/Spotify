import React from 'react'
import SmallLeft from '../assets/logo/small-left.png';
import SmallRight from '../assets/logo/small-right.png';
import Search from '../assets/logo/search.png';

const Header = () => {
  return (
    <div className="main_container">

        <nav className="header_navigation">
                    <div className="navigation">
                        <button className="arrow_left">
                            <img src={SmallLeft} alt="Seta esquerda" />
                        </button>
    
                        <button className="arrow_right">
                            <img src={SmallRight} alt="Seta direita" />
                        </button>
                    </div>
                        
                    <div className="header_search">
                            <img src={Search} alt="" />
                            <input maxLength="800" placeholder="O que voce quer ouvir?" id="search_input" type="text" />
                    </div>
    
                    <div className="header_login">
                            <button className="subscribe">Inscreva-se</button>
                            <button className="login">Entrar</button>
                    </div>
                </nav>
    </div>
  )
}

export default Header