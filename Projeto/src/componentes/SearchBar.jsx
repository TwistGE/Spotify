import React from 'react'
import SmallLeft from '../assets/logo/small-left.png'
import SmallRight from '../assets/logo/small-right.png'
import Search from '../assets/logo/search.png'
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
        </div>
    </>
}

export default SearchBar