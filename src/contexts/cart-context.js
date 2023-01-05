import React, { createContext, useState, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
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
  if (action.type === "REMOVE") {
    //find existing item index
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    //the item
    const existingItem = state.items[existingCartItemIndex];
    //carts total
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      //remove it out by filtering items list
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      //then just decrease by 1
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      //update it back to the state immutabily
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type == "CLEAR") {
    return defaultCartState;
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
  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
    ui: { showCart, handleShow, handleHide },
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
