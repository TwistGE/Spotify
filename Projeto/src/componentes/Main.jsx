import React from 'react';

import Header from './Header';
import ItemList from './ItemList';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';

const SearchBar = ({type}) => {
  return <>
        <div className="main_container">

            <div className="main_spotify">
                {type === "artists" || type === undefined ? (
                    <ItemList 
                        tittle="Artistas" 
                        items={5}
                        itemsArray={artistArray} 
                        path="/artists" 
                        idPath="/artist"
                    />) : (<></>)
                }

                {type === "songs" || type === undefined ? (
                    <ItemList
                        tittle="Músicas"
                        items={10}
                        itemsArray={songsArray}
                        path="/songs"
                        idPath="/song"
                    />) : (<></>)}
            </div>

        </div>            
    </>
}

export default SearchBar