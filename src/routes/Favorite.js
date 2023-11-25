import Footer from "../components/Footer/Footer";
import Hero from "../components/Header/Hero";
import Navbar from "../components/Navbar/Navbar";
import Menu from "../components/Menu";
import { Link, useNavigate } from "react-router-dom";


function Favorite() {
    
    return (
        <>
            {/* <Navbar /> */}
            <Hero
                cName="hero-mid"
                heroImg="https://restaurantclicks.com/wp-content/uploads/2021/06/20-Classic-Cocktails-To-Order-At-Any-Bar.jpg"
                title="Favorite"
                btnClass="hide"
            />
            <Menu />
            <Footer/>
        </>
    );
}

export default Favorite;