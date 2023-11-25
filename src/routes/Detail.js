import CocktailCard from "../components/CocktailCard";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import DetailCard from "../components/DetailCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Detail() {
    const {idDrink} =  useParams();
    const [data,setData] = useState(null);
    useEffect(function(){
        const fetchData = async ()=>{
            try{
                const response = await axios.get(
                    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php",
                    {
                        params:{
                            i:idDrink
                        }
                    }
                )
                if(response.status === 200){
                    console.log(response.data.drinks[0]);
                    setData(response.data.drinks[0]);
                }
            }catch(err){
                console.log('err',err);
            }
        }
        fetchData();
    },[idDrink]);

    return (
        <>
            {/* <Navbar /> */}
            {
                !data?
                 <p></p>
                    : 
                <DetailCard drink={data}/>
            }
            
            <Footer/>
        </>
    );
}

export default Detail;
