import "./FoodCard.css";
import {addCartItemToCart} from "./service/CartItemApi";
import { useState } from "react";
import { useCart } from "./context/CartContext";
export default function FoodCard({ data }) {
    const [quantity,setQuantity] = useState(0);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPopUp,setShowPopUp] = useState(false);
    const [pendingItem,setPendingItem] = useState(null);
    const { fetchCart } = useCart();



     const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };

const addFoodItemToCart = async () => {
    if (!quantity || quantity <= 0) {
        setError("Please enter valid quantity");
        setMessage("");
        return;
    }

    try {
        setLoading(true);
        setError("");
        setMessage("");

        const response = await addCartItemToCart(data.id, quantity,false);
        await fetchCart();

        setMessage("Added to cart ✅");

    } catch (err) {
            if (err.status === 409) {
                setShowPopUp(true);
                setPendingItem({ id: data.id, quantity });
                return;
            }

        setError("Failed to add item ❌");
        setMessage("");

    } finally {
        setLoading(false);
    }
};

const handleReplace = async () => {
        if (!pendingItem) return;

        try {
            setLoading(true);
            await addCartItemToCart(pendingItem.id, pendingItem.quantity, true);
            setMessage("Cart replaced & item added");
            fetchCart(); 
        } catch (err) {
            setError("Failed to replace cart");
        } finally {
            setShowPopUp(false);
            setLoading(false);
        }
    };

        
    return (
    <>
     {showPopUp && (
    <div className="popup">
        <div>
            <p>Your cart has items from another restaurant.</p>
            <p>Do you want to replace the cart?</p>

            <div className="popup-buttons">
                <button onClick={handleReplace} disabled={loading}>
                            {loading ? "Replacing..." : "Yes"}
                            </button>

                <button onClick={() => setShowPopUp(false)} disabled={loading}>No</button>
            </div>
        </div>
    </div>
)}
        <div className="restaurant-food-item">
        <img className="food-image" src = {data.foodItemImageUrl}></img>
        <h3>{data.name}</h3>
        <p>₹ {data.price}</p>
        <p>{data.foodType}</p>
  
            <div className="quantity-control">
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
            </div>

        <button type="button"  onClick={addFoodItemToCart} disabled={loading}>{loading ? "Adding..." : "Add to Cart"}</button>
        {message && <p className="success-msg">{message}</p>}
    {error && <p className="error-msg">{error}</p>}

    </div>
    </>
    );
}