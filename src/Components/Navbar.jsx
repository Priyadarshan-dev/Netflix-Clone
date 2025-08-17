import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../Services/Firebase';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await signOut(auth);
            console.log("User Logged Out Successfully");
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    }
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
                <div className='flex gap-7 ml-auto text-white text-xl'>
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    <button onClick={handleLogout}><i className="fa-solid fa-power-off  text-red-500"></i> </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
