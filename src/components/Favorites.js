import React from 'react'
import FavPic from './FavPic'
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs'
export const Favorites = ({img}) => {

    return (
        <>
        <section className="photos" >

            <div className='div-arrow'>
                <h2>Favorites</h2>  
            </div>

            <div className='div-art2'>          
                {img.length === 0 && (<p> No tenes favoritos</p>)} 
                {img.length > 0
                        && (<>
                            {img.map((oneFav) => {
                                return(
                                    <FavPic key={oneFav.id} oneFav={oneFav} /* setFav={setFav}  fav={fav*//>
                                )
                            })}
                        </>)}  
            </div>
            <div className='div-btn'>
                <button /*onClick={() => setFav([])}*/>Eliminar todos</button> 
            </div>
        </section>
        </>
    )
}

