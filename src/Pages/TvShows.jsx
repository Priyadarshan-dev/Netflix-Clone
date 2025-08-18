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