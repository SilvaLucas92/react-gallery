import React from 'react'
import { FaHeart } from 'react-icons/fa'

const FavPic = ({oneFav}) => {
    // const deleteFavorite = (id) => {
    //     const fileteredArray = fav.filter(oneFav => oneFav.id !== id);
    //     return setFav(fileteredArray);
    // }
    return (
        <article className='photo'>
            <img src={oneFav.urls.full} alt="ok" />
            <button /*onClick={() => {addFav(theImg.id)}}*/ >  <FaHeart color='white' fontSize='20px' /> </button>
        </article>
    )
}

export default FavPic
