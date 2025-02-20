import React from 'react'
import SingleItem from './SingleItem';

import { Link, useLocation } from 'react-router-dom';
const ItemList = ({tittle, items, itemsArray, path,idPath}) => {


  const {pathname} = useLocation();

  const isHome = pathname === "/"
  const finalItems = isHome ? items : Infinity
  console.log(finalItems)

  return (
     <div className='item-list'>
        <nav className="item-list__header">
                            <h2>{tittle} Populares</h2>
                            {isHome ? <Link to={path}>Mostrar tudo</Link> : <></>}
                            
        </nav>
                        
        <div className="item-list__container">
    
            {itemsArray.filter((corrurentValue, index)=> index < finalItems).map((currObj, index)=> (<SingleItem idPath={idPath} {...currObj} key = {`${tittle}-${index}`} />)) }
    
            </div>
        </div>
  )
}

export default ItemList