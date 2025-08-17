import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getTrendingMovies } from '../Services/api'

function TrendingNow() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const loadTrendingMovies = async () => {
            const trendingMovies = await getTrendingMovies()
            setMovies(trendingMovies)
        }
        loadTrendingMovies()
    }, [])
    
    return (
        <>
            <div className='px-10 pt-10'>
                <div className='text-white font-bold text-3xl'>
                    Trending Now
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

export default TrendingNow