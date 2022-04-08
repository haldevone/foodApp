import React from 'react'

function CartItem(props) {
    const price = `${props.price}kr`
  return (<li className='cart-item'>
    <div>
        <h2>{props.name}</h2>
        <div className='cart-item-summary'>
            <span className='cart-item-price'>{price}</span>
            <span className='cart-item-amount'>{props.amount}</span>
        </div>
    </div>
    <div className='cart-item-actions'>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
    </div>
  </li>
  )
}

export default CartItem