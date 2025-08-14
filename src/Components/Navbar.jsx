import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='flex bg-black px-20 py-8 gap-10'>
                <div className="text-4xl font-bold text-red-600">NETFLIX </div>
                <NavLink
                    to="/home"
                    className="text-white py-3">
                    Home
                </NavLink>

                <NavLink
                    to="/tvshows"
                    className="text-white py-3">
                    Tv Shows
                </NavLink>

                <NavLink
                    to="/movies"
                    className="text-white py-3">
                    Movies
                </NavLink>

                <NavLink
                    to="/mylist"
                    className="text-white py-3">
                    My List
                </NavLink>
                <div className='flex gap-7 ml-auto text-white text-xl py-3'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-solid fa-power-off text-red-500"></i>
                </div>
            </nav>
        </>
    )
}

export default Navbar

// // <NavLink to='/products'
//                         className={({ isActive }) =>
//                             isActive ? 'text-2xl text-white hover:text-orange-500' :
//                                 'text-white  hover:text-orange-500 text-2xl font-semibold'}>
//                         Products
//                     </NavLink>