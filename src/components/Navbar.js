import React from 'react'
export const Navbar = ({setShowFav}) => {
    return (
    <header className='header-container'>
        <nav className="nav-container">
                <h1> Gallery </h1>
                <ul className="">

                    <li><a onClick={() => setShowFav(true)}> Fav </a></li>
                    <li><a onClick={() => setShowFav(false)}> Home </a></li>
                </ul>
        </nav>
    </header>
    )
}
