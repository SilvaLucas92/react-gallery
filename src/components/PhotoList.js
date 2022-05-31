import React from 'react'
import Photo from './Photo';
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs'
import { useGlobalContext } from './context';
export const PhotoList = ({img, setPage, page}) => {
    return (
    <>
      <section className='photos'>
        <div className='div-arrow'>
                <BsFillArrowLeftSquareFill color='#101223' fontSize='35px' cursor='pointer'/>
                <h2>Home</h2>
                <BsFillArrowRightSquareFill color='#101223' fontSize='35px' cursor='pointer'/>        
        </div>
        <div className="div-art2"> 
                        {img && (
                            img.map(theImg => {
                                return(
                                    <Photo /*fav={fav}  key={theImg.id} setFav={setFav}*/ theImg={theImg} />
                                )
                            })
                        )} 
            </div>                            
        </section>
        </> 
    )
}
