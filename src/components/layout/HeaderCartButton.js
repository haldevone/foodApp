import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../store/cart-context';


function HeaderCartButton(props) {

  const cartCtx = useContext(CartContext);
  const [btnHighlight, setBtnHighhight] = useState(false);
  
  const {items} = cartCtx;

  const constNrOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount
  }, 0)

  const btnClass = `cart-button ${btnHighlight ? "bump" : ""}`

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnHighhight(true);
    const timer = setTimeout(() => {
      setBtnHighhight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [items])

  return (
    <button className={btnClass} onClick={props.onClick}>
        <span className='icon'>
          <FontAwesomeIcon icon={faCartShopping} />
        </span>
        {/* <span>
          Varukorg
        </span> */}
        <span className='badge'>
          {constNrOfCartItems}
        </span>
    </button>
  )
}

export default HeaderCartButton