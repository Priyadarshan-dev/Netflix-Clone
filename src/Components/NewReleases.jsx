import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getNewReleases } from '../Services/api'

function NewReleases() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const loadNewMovies = async () => {
            const newMovies = await getNewReleases()
            setMovies(newMovies)
        }
        loadNewMovies()
    }, [])
    return (
        <>
            <div className='pt-10'>
                <div className='text-white font-bold text-3xl px-9 '>
                    New Release
                </div>
                 <div className='flex mt-5 gap-7 overflow-x-auto hide-scrollbar px-9'>
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
        </>
    )
}

export default NewReleases