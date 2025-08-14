import React from 'react'
import Navbar from '../Components/Navbar'
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
        <Navbar></Navbar>
        <div className="px-30 py-100  text-white" style={{
          backgroundImage: `url(${'/assets/images/C.jpg'})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
          <div className='flex gap-4 justify-start'>
            <button className="bg-white px-10 py-2 rounded text-xl font-semibold text-black flex items-center" >
              <i class="fa-solid fa-play  mr-2"></i>
              Play
            </button>
            <button className="bg-white ml-5 px-10 py-2 rounded text-xl font-semibold text-black  flex items-center" >
              <i class="fa-solid fa-circle-info  mr-2"></i>
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