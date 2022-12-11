import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(true);

  const handleShow = () => {
    setShowCart(true);
  };
  const handleHide = () => {
    setShowCart(false);
  };
  return (
    <CartContext.Provider value={{ ui: { showCart, handleShow, handleHide } }}>
      {children}
    </CartContext.Provider>
  );
};
