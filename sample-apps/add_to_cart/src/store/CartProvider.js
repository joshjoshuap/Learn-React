import { useReducer } from "react";
import CartContext from "./cart-context";

// default cart state value
const defaultCartState = {
  items: [],
  totalAmount: 0
}

// cart reducer function to update cart state and total amount of cart items 
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {

    const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;


    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updateTotalAmount
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filte(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  };

  return defaultCartState;
};

const CartProvider = props => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState);

  // add item to cart state and update total amount of cart items 
  const addItemToCartHandler = item => {
    dispatchCartState({
      type: "ADD_ITEM",
      item: item
    });
  };

  // remove item from cart handler and update total amount of cart items
  const removeItemtoCartHandler = id => {
    dispatchCartState({
      type: "REMOVE_ITEM",
      id: id
    })
  };

  // return cart context provider with cart state and cart actions
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemtoCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
};

export default CartProvider;