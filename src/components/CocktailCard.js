import "./CocktailCard.css";
import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function CocktailCard() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const navigate = useNavigate();
    const goToDetail = (idDrink) => {
        navigate("/detail/"+idDrink);
    }

    const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";

    const fetchCocktailHandler = useCallback(() => {
        setLoading(true);

        axios
            .get(url)
            .then((res) => {
                console.log(res.data);
                setData(res.data.drinks);
            })
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        fetchCocktailHandler();
    }, [fetchCocktailHandler]);

    if (loading) {
        return <h2>...</h2>;
    }
    return <div className="card">
        {data.map((cocktail) => (
                <div key={cocktail.idDrink} className="card-img" onClick={()=>goToDetail(cocktail.idDrink)}>
                    <img className="imageCard" src={cocktail.strDrinkThumb} alt="#" />
                    <h2 className="titlecard">{cocktail.strDrink}</h2>
                </div>
        ))}


    </div>;
}

export default CocktailCard;
