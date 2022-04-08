import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import MealItemForm from './MealItemForm'

function MealItem(props) {

    const cartCtx = useContext(CartContext)
    const price = `${props.price.toFixed(2)}kr`

    const addToCartHandler = (amount) => {
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      });
    }

  return (
    <li className='meal'>
        <div className='flex'>
          <div className='meal-icon-container'>
            <img src={props.image} alt="" className='meal-Icon'/>
          </div>
          <div>
            <h3>{props.name}</h3>
            <div className='description'>{props.description}</div>
            <div className='price'>{price}</div>
          </div>
        </div>
        <MealItemForm onAddToCartHandler={addToCartHandler}/>
    </li>
  )
}

export default MealItem