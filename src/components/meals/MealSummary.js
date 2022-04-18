import React, { useState } from 'react'

function MealSummary() {

  const [close, setClose] = useState(false);

  const closeHandler = () => {
    setClose(true);
  }

  return (
   <>
    {!close &&
      (<section className='summary'>
        <button onClick={closeHandler} className={"close-button"}>
          <p className='close-button-x'>x</p>
        </button>
        <h2>Note. This is a DEMO site</h2>
        <p>You cannot order anything from this site. No information is stored or sent!</p>
       </section>)
    }
   </>
  )
}
export default MealSummary