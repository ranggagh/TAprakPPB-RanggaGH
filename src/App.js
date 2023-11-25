import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Profile from "./routes/Profile";
import Favorite from "./routes/Favorite";
import Detail from './routes/Detail';
import { HiHome } from "react-icons/hi";
import { MdGroup } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import {MdFavoriteBorder} from "react-icons/md"


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/detail/:idDrink" element={<Detail />} />
        </Routes>
        <footer>
          <NavLink to="/home" className="iconWrapper">
            <HiHome className="icon">
              Home
            </HiHome>
          </NavLink>
          <NavLink to="/favorite" className="iconWrapper">
            <MdFavoriteBorder className="icon">
              Favorite
            </MdFavoriteBorder>
          </NavLink>
          <NavLink to="/about" className="iconWrapper">
            <FaQuestionCircle className="icon">
              About
            </FaQuestionCircle>
          </NavLink>
          <NavLink to="/profile" className="iconWrapper">
            <MdGroup className="icon">
              Profile
            </MdGroup>
          </NavLink>
        </footer>
      </BrowserRouter>
    </div>
  )
}