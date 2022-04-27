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
import ExtraMeals from './ExtraMeals';


function Meals() {

  const [food, setFood] = useState(true);
  const [foodSelect, SetFoodSelect] = useState(0);

  const selectFood = (nr) => {
    SetFoodSelect(nr);
  }

  const showFood = () => {
    setFood(true);
  }

  const hideFood = () => {
    setFood(false);
  }

  return (
    <>

      <MealSummary />
      <div className='meals-top'>
        <h1>Beställ hem till din dörr snabbt och enkelt</h1>
      </div>
      <div className='flex'>
        <div className='food-button' onClick={() => selectFood(0)}>
          <h2>Mat</h2>
          <span><FontAwesomeIcon icon={faBowlFood}/></span>
        </div>
        <div className='food-button' onClick={() => selectFood(1)}>
          <h2>Dryck</h2>
          <span><FontAwesomeIcon icon={faWhiskeyGlass}/></span>
        </div>
        <div className='food-button' onClick={() => selectFood(2)}>
          <h2>Tillbehör</h2>
          <span><FontAwesomeIcon icon={faCirclePlus}/></span>
        </div>
        {/* <div className='food-button' onClick={hideFood}>
          <h2>Tillbehör</h2>
          <span><FontAwesomeIcon icon={faCirclePlus}/></span>
        </div> */}
      </div>
      {(() => {
        switch(foodSelect){
          case 0:
          return <AvailableMeals />
          case 1:
          return <Drinks />
          case 2:
          return <ExtraMeals />
      }})()}
      <MidBanner />
      <BottomBanner />
    </>
  )
}

export default Meals
