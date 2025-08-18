import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../Services/Firebase'
import { searchMovies } from '../Services/api'

const Navbar = () => {
    const navigate = useNavigate()
    const [showSearch, setShowSearch] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        const results = await searchMovies(searchQuery)
        setMovies(results)
    }

    const handleLogout = async () => {
        try {
            await signOut(auth)
            console.log("User Logged Out Successfully")
            navigate("/")
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <nav className='flex bg-black px-20 py-8 gap-10'>
                <div className="text-4xl font-bold text-red-600">NETFLIX</div>
                <NavLink to="/home" className="text-white py-3">Home</NavLink>
                <NavLink to="/tvshows" className="text-white py-3">Tv Shows</NavLink>
                <NavLink to="/movies" className="text-white py-3">Movies</NavLink>
                <NavLink to="/mylist" className="text-white py-3">My List</NavLink>

                <div className='flex gap-7 ml-auto text-white text-xl items-center'>
                    {showSearch ? (
                        <form onSubmit={handleSearch} className='flex items-center bg-gray-800 rounded'>
                            <i className="fa-solid fa-magnifying-glass px-2"></i>
                            <input
                                type="text"
                                value={searchQuery}
                                placeholder='Search'
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-gray-800 py-1 focus:outline-none text-white w-32"
                            />
                        </form>
                    ) : (
                        <button onClick={() => setShowSearch(true)}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    )}
                    <button onClick={handleLogout}>
                        <i className="fa-solid fa-power-off text-red-500"></i>
                    </button>
                </div>
            </nav>
            {movies.length > 0 && (
                <div className='bg-black px-9 py-5'>
                    <div className='flex gap-5 overflow-x-auto hide-scrollbar'>
                        {movies.map(movie => (
                            <div
                                key={movie.id}
                                className="group relative flex-shrink-0 w-[220px]" >
                                <div className="relative h-[130px] w-full overflow-hidden rounded-lg">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                        className="h-full w-full object-cover rounded transition-transform duration-300 group-hover:scale-110" />
                                </div>
                                <div className="absolute top-0 left-0 w-full h-[130px] bg-black opacity-0 group-hover:opacity-100 transition duration-300 p-3 flex flex-col justify-between z-50">
                                    <h3 className="text-white text-sm font-bold truncate">
                                        {movie.title}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <button className="bg-white text-black px-2 py-1 rounded-full text-xs"><i class="fa-solid fa-play"></i></button>
                                        <button className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs"><i class="fa-solid fa-thumbs-up"></i></button>
                                        <button className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs"><i class="fa-solid fa-thumbs-down"></i></button>
                                        <button className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs"><i class="fa-solid fa-plus"></i></button>
                                        <button className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs"><i class="fa-solid fa-angle-down"></i></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar
