import Home from "./Pages/Home";
import WelcomePage from "./Pages/WelcomePage";
import { Routes, Route } from "react-router-dom";
import TvShows from "./Pages/TvShows"
import Movies from "./Pages/Movies"
import MyList from "./Pages/MyList"

function App() {
  
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/tvshows' element={<TvShows />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/mylist' element={<MyList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
