import React, { createContext, useState } from "react";
import { useContext } from "react";

const cartContext = createContext();
function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  return (
    <cartContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  const { cartProducts, setCartProducts } = useContext(cartContext);
  return { cartProducts, setCartProducts };
}

export default CartProvider;
