import React, { createContext, useState, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  ui: {},
});

//initial states
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    //find existing item index
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      //create new (immutabily update an item)
      updatedItems = [...state.items];
      //pick and override current item in index
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      //this is normally when adding new (first time)
      updatedItems = state.items.concat(action.item);
    }

    const itemsPrice = action.item.price * action.item.amount;
    //total up
    const updatedTotalAmount = state.totalAmount + itemsPrice;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);

  const handleShow = () => setShowCart(true);

  const handleHide = () => setShowCart(false);

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    ui: { showCart, handleShow, handleHide },
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
