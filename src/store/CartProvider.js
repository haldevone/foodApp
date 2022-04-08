import { useReducer } from "react";
import CartContext from "./cart-context"

function CartProvider(props) {

  const defualtCartState = {
    items: [],
    totalAmount: 0
  }

  function cartReducer(state, action){
    switch (action.type) {
      case "ADD":
        // console.log(action, state)
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(item => 
          item.id === action.item.id);

        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        if (existingCartItem) {
          const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + action.item.amount
          }
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        }else{
          updatedItems = state.items.concat(action.item);
        }
        
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount
        }
      case "REMOVE":
        console.log(state, action)
        const existingCartItemIndexR = state.items.findIndex(item => 
          item.id === action.id);

          const existingItem = state.items[existingCartItemIndexR];
          const updatedTotalAmountR = state.totalAmount - existingItem.price
          let updatedItemsR;
          if (existingItem.amount === 1) {
            updatedItemsR = state.items.filter(item => item.id !== action.id);
          }else{
            const updatedItemR = {...existingItem, amount: existingItem.amount - 1};
            updatedItemsR = [...state.items];
            updatedItemsR[existingCartItemIndexR] = updatedItemR;
          }
          return {
            items: updatedItemsR,
            totalAmount: updatedTotalAmountR
          }
    }
    return defualtCartState
  }
    
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defualtCartState);

    const addItemToCartHandler = (item) => {
      dispatchCartAction({type:"ADD", item:item});
    };

    const removeItemFromCartHandler = (id) => {
      dispatchCartAction({type:"REMOVE", id:id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider