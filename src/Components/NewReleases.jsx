import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getNewReleases } from '../Services/Api'

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
            <div className='px-10 pt-10'>
                <div className='text-white font-bold text-3xl'>
                    New Release
                </div>
                <div className='flex mt-5 gap-5 overflow-x-auto hide-scrollbar'>
                    {movies.map(movie =>
                    (<img
                        key={movie.id}
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        className='h-[200px] w-[150px] object-cover rounded flex-shrink-0'>
                    </img>))}
                </div>
            </div>
        </>
    )
}

export default NewReleases