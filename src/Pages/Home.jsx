import React from 'react'
import TrendingNow from '../Components/TrendingNow'
import NewReleases from '../Components/NewReleases'
import Blockbuster from '../Components/BlockBusterMovies'
import PopularonNetflix from '../Components/PopularonNetflix'
import ActionMovies from '../Components/ActionMovies'
import Epic from '../Components/Epic'

const Home = () => {
  return (
    <>
      <div className=' bg-black'>
        <div
          className="px-6 md:px-20 py-20 md:py-40 text-white h-[60vh] md:h-[80vh] lg:h-screen"
          style={{
            backgroundImage: `url('/assets/images/C.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
          <div className="flex flex-col sm:flex-row gap-3 mt-40">
            <button className="bg-white px-10 py-2 rounded text-lg font-semibold text-black flex items-center self-start">
              <i className="fa-solid fa-play mr-2"></i>
              Play
            </button>
            <button className="bg-white px-8 py-2 rounded text-lg font-semibold text-black flex items-center self-start">
              <i className="fa-solid fa-circle-info mr-2"></i>
              More Info
            </button>
          </div>
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

export default Home