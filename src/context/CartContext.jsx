import { createContext, useContext, useEffect, useState } from "react";
import { cartDetails } from "../service/CartApi";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(null);

  const fetchCart = async () => {
    try {
      const data = await cartDetails();
      setCart(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{ cart, setCart, fetchCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}