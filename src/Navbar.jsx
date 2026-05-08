import ProfileMenu from "./ProfileMenu";
import "./navbar.css";
import { useCart } from "./context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ user }) {

    const { cart } = useCart();

    const navigate = useNavigate();

    const [showCart, setShowCart] = useState(false);

    return (
        <div className="navbar">

            <div className="navbar-left">
                <img
                    src="src/khaanow-logo.png"
                    alt="logo"
                    className="logo"
                    onClick={() => navigate("/khaaonow")}
                />
            </div>

            <div className="navbar-right">

                <div className="nav-item">
                    Offers
                </div>

                <div
                    className="nav-item cart-btn"
                    onMouseEnter={() => setShowCart(true)}
                    onMouseLeave={() => setShowCart(false)}
                >

                    Cart 🛒 ({cart?.cartLength || 0})

                    {showCart && (
                        <div
                            className="cart-popup"
                            onMouseEnter={() => setShowCart(true)}
                            onMouseLeave={() => setShowCart(false)}
                        >

                            <h3>Cart Items</h3>

                            {cart?.cartItems?.length > 0 ? (

                                cart.cartItems.map((item, index) => (

                                    <div
                                        key={index}
                                        className="cart-item"
                                    >

                                        <div>
                                            {item.foodItemDto?.itemName}
                                        </div>

                                        <div>
                                            ₹{item.foodItemDto?.itemPrice}
                                        </div>

                                        <div>
                                            Qty : {item.quantity}
                                        </div>

                                        <hr />
                                    </div>
                                ))
                                

                            ) : (

                                <div>Cart is Empty</div>

                            )}

                            <div className="cart-total">
                                Total : ₹{cart?.cartPrice}
                            </div>
                            <button onClick={() => navigate("/checkout")}>checkOut</button>
                        </div>
                    )}

                </div>

                <ProfileMenu LoggedInuser={user} />

            </div>

        </div>
    );
}