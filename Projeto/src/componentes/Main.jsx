import React from 'react';

import Header from './Header';
import ItemList from './ItemList';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';

const SearchBar = () => {
  return <>
        <div class="main_container">
            <Header />

            <div className="main_spotify">
                <ItemList tittle="Artistas" items={5} itemsArray={artistArray} path="/artists" idPath="/artists"/>

                <ItemList tittle="Músicas" items={10} itemsArray={songsArray} path="/songs" idPath="/songs"/>
            </div>

        </div>            
    </>
}

export default SearchBar