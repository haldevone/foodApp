import React, { useState } from 'react'
import Drinks from '../checkout/Drinks';
import AvailableMeals from './AvailableMeals'
import MealSummary from './MealSummary'
import Sallad from "../../images/sallad.png"
import Cola from "../../images/cola.png"
import MidBanner from '../layout/MidBanner';
import BottomBanner from '../layout/BottomBanner';


function Meals() {

  const [food, setFood] = useState(true);

  const showFood = () => {
    setFood(true);
  }

  const hideFood = () => {
    setFood(false);
  }

  return (
    <>
      <MealSummary />
      <div className='flex'>
        <div className='food-button'>
          <img onClick={showFood} src={Sallad} alt="sallad image" className='food-button-img'/>
        </div>
        <div className='food-button'>
          <img onClick={hideFood} src={Cola} alt="cola image" className='food-button-img'/>
        </div>
      </div>
      {food ? <AvailableMeals /> : <Drinks />}
      <MidBanner />
      <BottomBanner />
    </>
  )
}

export default Meals
