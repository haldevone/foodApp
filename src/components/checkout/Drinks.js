import React from 'react'
import MealItem from "../meals/MealItem"
import Card from '../UI/Card'
import Drink from "../../images/drink.png"

const dummyDrinks = [
    {
        id: 10,
        name: "Coca Cola",
        description: "",
        price: 15,
        image: Drink,
    },
    {
        id: 11,
        name: "Coca Cola Zero",
        description: "",
        price: 15,
        image: Drink,
    },
    {
        id: 12,
        name: "Fanta",
        description: "",
        price: 15,
        image: Drink,
    },
    {
        id: 13,
        name: "Pepsi",
        description: "",
        price: 15,
        image: Drink,
    },
    {
        id: 14,
        name: "Pepsi Light",
        description: "",
        price: 15,
        image: Drink,
    }
]


function Drinks() {

    const drinkItems = dummyDrinks.map(drink => 
       ( <MealItem 
            key={drink.id}
            id={drink.id}
            name={drink.name}
            description={drink.description}
            price={drink.price}
            image={drink.image}
        />)
    )

  return (
    <section className='meals'>
        <Card>
            <ul>
                {drinkItems}
            </ul>
        </Card>
    </section>
  )
}

export default Drinks