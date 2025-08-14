import React from 'react'
import TrendingNow from '../Components/TrendingNow'
import NewReleases from '../Components/NewReleases'
import Blockbuster from '../Components/BlockBusterMovies'
import PopularonNetflix from '../Components/PopularonNetflix'
import ActionMovies from '../Components/ActionMovies'
import Epic from '../Components/Epic'

function TvShows() {
  return (
    <>
      <div className='bg-black'>
        <div className='flex px-15  pt-5'>
          <select
            className='bg-black border border-gray-500 text-white text-xl px-6 rounded focus:outline-none'>
            <option value="">Actions</option>
          </select>
        </div>
        <TrendingNow></TrendingNow>
        <NewReleases></NewReleases>
        <Blockbuster></Blockbuster>
        <PopularonNetflix></PopularonNetflix>
        <ActionMovies></ActionMovies>
        <Epic></Epic>
      </div>
    </>
  )
}

export default TvShows