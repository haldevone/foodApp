import React from 'react'
import Card from '../UI/Card'
import MealItem from './MealItem'
import Sallad from "../../images/sallad.png"
import Sushi from "../../images/sushi.png"

const DUMMY_MEALS = [
    {
        id: 1,
        name: "Sushi 8 bitar",
        description: "8 bitar blandat Sushi",
        price: 89,
        image: Sushi,
    },
    {
        id: 2,
        name: "Sushi 12 bitar",
        description: "12 bitar blandat Sushi",
        price: 109,
        image: Sushi,
    },
    {
        id: 3,
        name: "Sushi 15 bitar",
        description: "15 bitar blandat Sushi",
        price: 129,
        image: Sushi,
    },
    {
        id: 4,
        name: "Sallad",
        description: "Mix grön sallad",
        price: 69,
        image: Sallad,
    },
    {
        id: 5,
        name: "Sallad Tonfisk",
        description: "Mix grön sallad med Tonfisk",
        price: 89,
        image: Sallad,
    },
    {
        id: 6,
        name: "Sallad Kyckling",
        description: "Mix grön sallad med Kyckling",
        price: 89,
        image: Sallad,
    },
]

function AvailableMeals() {

    const mealList = DUMMY_MEALS.map(meal => (
        <MealItem 
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            image={meal.image}
        />
    ))

  return (
    <section className='meals'>
        <Card>
            <ul>
                {mealList}
            </ul>
        </Card>
    </section>
  )
}

export default AvailableMeals