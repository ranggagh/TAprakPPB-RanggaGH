import { useRef } from "react";
import "./HeroStyles.css";

function Hero (props){
    const searchValue = useRef();
    
    

    return(
    <>
        <div className={props.cName}>
            <img alt="HerpImg" src={props.heroImg} />
        
        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>        
        </div>       
       </> 
    )
}

export default Hero;