import "./DetailCard.css";

export default function DetailCard({drink}){
    return (
        <div className="detail-container">
            <p className="card-text">{drink.idDrink + " - "+ drink.strDrink}</p>
            <div className="child-container">
                <div className="image-container">
                    <img alt="img" src={drink.strDrinkThumb}/>
                </div>
                <div className="instruction-container">
                    <div className="instructions">
                        <h2>Instructions</h2>
                        <p>{drink.strInstructions}</p>
                    </div>
                    <div className="lists">
                        <h2>Ingredients</h2>
                        <ul>
                            <li>{drink.strIngredient1}</li>
                            <li>{drink.strIngredient2}</li>
                            <li>{drink.strIngredient3}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
