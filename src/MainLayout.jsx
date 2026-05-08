import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useEffect, useState,useContext } from "react";
import { useCart } from "./context/CartContext";

export default function MainLayout() {

    const [user, setUser] = useState(null);
    const [showCart, setShowCart] = useState(false);
    const { cart } = useCart();

    return (
        <>
            <Navbar
                user={user}
                onCartClick={() => setShowCart(true)}
            />
            <Outlet />
        </>
    );
}