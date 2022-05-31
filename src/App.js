import './App.css';
import React, {useEffect, useState} from 'react';
import { Navbar } from './components/Navbar';
import { PhotoList } from './components/PhotoList';
import {Favorites} from './components/Favorites';
import {useGlobalContext} from './components/context'
import { Loading } from './components/Loading.js'
import Footer from './components/Footer';

function App() {
  const [img, setImg] = useState([]);
  const [fav, setFav] = useState([]);
  const [showFav, setShowFav] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch( `https://api.unsplash.com/photos/?client_id=KXji445Ehw8wuQbtC-E-AXEM1g79gvtbohLoyMkj1mo&page=${page}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setImg(data);
        setIsLoading(false)
      })
  }, [])


  return (
    <div>
      <Navbar /* fav={fav} */ setShowFav={setShowFav}/>
      {isLoading && <Loading />}
      {!isLoading && !showFav && img && <PhotoList img={img} setPage={setPage}/>}
      {!isLoading && showFav && <Favorites img={img} /*setFav={setFav} fav={fav}*//> }
      <Footer />
    </div>
  );
}

export default App;
