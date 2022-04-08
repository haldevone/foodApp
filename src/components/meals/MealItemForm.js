import React, { useRef, useState } from 'react'
import Input from '../UI/Input'

function MealItemForm(props) {

  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  
  function submitHandler(e){
    e.preventDefault();
    
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    
    if (enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCartHandler(enteredAmountNumber);
  }

  return (
    <form className='mealItem-form' onSubmit={submitHandler}>
        <Input label="Antal" ref={amountInputRef} input={{
            id:props.id,
            type:"number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1"
        }}/>
        <button>+ Lägg Till</button>
        {!amountIsValid && <p>Får beställas mellan 1-5st</p>}
    </form>
  )
}

export default MealItemForm