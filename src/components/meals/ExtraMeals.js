import React from 'react'
import MealItem from "../meals/MealItem"
import Card from '../UI/Card'
import ChopSticks from "../../images/chopsticks.png"



const dummyDrinks = [
    {
        id: 60,
        name: "Misosoppa",
        description: "Med salladslök & tofu",
        price: 10,
        image: ChopSticks,
    },
    {
        id: 61,
        name: "Ris",
        description: "Extra ris",
        price: 12,
        image: ChopSticks,
    },
    {
        id: 62,
        name: "Bröd",
        description: "Nybakad bröd",
        price: 10,
        image: ChopSticks,
    },
    {
        id: 63,
        name: "Såser",
        description: "Extra såser",
        price: 15,
        image: ChopSticks,
    },
]


function ExtraMeals() {

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

export default ExtraMeals