import Home from "./Pages/Home";
import WelcomePage from "./Pages/WelcomePage";
import { Routes, Route } from "react-router-dom";
import TvShows from "./Pages/TvShows"
import Movies from "./Pages/Movies"
import MyList from "./Pages/MyList"
import Navbar from "./Components/Navbar";

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/home' element={<><Navbar /> <Home /></>} />
          <Route path='/tvshows' element={<><Navbar /><TvShows /></>} />
          <Route path='/movies' element={<><Navbar /><Movies /></>} />
          <Route path='/mylist' element={<><Navbar /> <MyList /></>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
