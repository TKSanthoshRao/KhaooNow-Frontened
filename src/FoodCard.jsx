import "./FoodCard.css";
import {addCartItemToCart} from "./service/CartApi";
import { useState } from "react";
export default function FoodCard({ data }) {
    const [quantity,setQuantity] = useState(0);
    const addFoodItemToCart = async () => {
        const response = await addCartItemToCart(data.id,quantity);
    }
        
    return <div className="restaurant-food-item">
        <img className="food-image" src = {data.foodItemImageUrl}></img>
        <h3>Item name : {data.name}</h3>
        <p>Item Cost : {data.price}</p>
        <p>Type of Item : {data.foodType}</p>
                <label>
        Enter Quantity :
        <input type="number" onChange={(e) => setQuantity(e.target.value)} />

        <button type="button"  onClick={addFoodItemToCart}>Add to Cart</button>
        </label>

    </div>
}