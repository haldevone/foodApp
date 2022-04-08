import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import Modal from '../UI/Modal'
import CartItems from '../cart/CartItem'

function Cart(props) {

    const cartCtx = useContext(CartContext);

    const totalAmount = `${cartCtx.totalAmount}kr`;
    // console.log(cartCtx)

    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) =>{
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler = (item) =>{
        cartCtx.addItem({...item, amount: 1})
    }

    const cartItems = <ul className='cart-items'>
    {cartCtx.items.map((item) =>(
        <CartItems 
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={() => cartItemRemoveHandler(item.id)}
        onAdd={() => cartItemAddHandler(item)}
        />
    ))}</ul>

  return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className='cart-total'>
            <span>Summa:</span>
            <span>{totalAmount}</span>
        </div>
        <div className='actions'>
            <button className='actions-button-alt' onClick={props.onClose}>Stäng</button>
            {hasItems && <button className='actions-button' onClick={props.onOrder}>Beställ</button>}
        </div>
    </Modal>
  )
}

export default Cart