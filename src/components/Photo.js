import React from 'react'
import { FaHeart } from 'react-icons/fa'

const Photo = ({theImg/*, fav, setFav*/}) => {

    // const addFav = (id) => {
    //     setFav([...fav, {id: theImg.id, img: theImg.urls.full}])
    //     console.log(id)
    // }
    
    return (

            <article className='photo'>
                <img src={theImg.urls.full} alt="ok" />
                <button /*onClick={() => {addFav(theImg.id)}}*/ >  <FaHeart color='#f3f4f8' fontSize='20px' /> </button>
            </article>

        )
}

export default Photo


