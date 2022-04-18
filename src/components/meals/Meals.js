import React, { useState } from 'react'
import Drinks from '../checkout/Drinks';
import AvailableMeals from './AvailableMeals'
import MealSummary from './MealSummary'
import Sallad from "../../images/sallad.png"
import Cola from "../../images/cola.png"
import MidBanner from '../layout/MidBanner';
import BottomBanner from '../layout/BottomBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBowlFood, faW} from "@fortawesome/free-solid-svg-icons"
import {faWhiskeyGlass} from "@fortawesome/free-solid-svg-icons"
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons"


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
      <div className='flex meals-btns'>
        <div className='food-button' onClick={showFood}>
          <h2>Mat</h2>
          <span><FontAwesomeIcon icon={faBowlFood}/></span>
        </div>
        <div className='food-button' onClick={hideFood}>
          <h2>Dryck</h2>
          <span><FontAwesomeIcon icon={faWhiskeyGlass}/></span>
        </div>
        {/* <div className='food-button' onClick={hideFood}>
          <h2>Tillbehör</h2>
          <span><FontAwesomeIcon icon={faCirclePlus}/></span>
        </div> */}
      </div>
      {food ? <AvailableMeals /> : <Drinks />}
      <MidBanner />
      <BottomBanner />
    </>
  )
}

export default Meals
