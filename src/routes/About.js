import AboutUs from "../components/AboutUs/AboutUs";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Header/Hero";
import Navbar from "../components/Navbar/Navbar";

function About() {
    return (
        <>
            {/* <Navbar /> */}
            <Hero
                cName="hero-mid"
                heroImg="https://imgs.heart.co.uk/images/67577?width=6000&crop=4_3&signature=YmxxCYoxSQC8aE8oYolYuQqipdc="
                title="About"
                btnClass="hide"
            />
            <AboutUs/>
            <Footer/>
        </>
    );
}

export default About;