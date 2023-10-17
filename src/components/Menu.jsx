import { useState, useEffect } from 'react';
import Hero from './Hero';
import SpecialDishes from './SpecialDishes';
import About from './About';

function Menu() {

    const [menu, setMenu] = useState([]);

    const apiFetch = async () => {
        const API_KEY = 'https://www.themealdb.com/api/json/v1/1/search.php?f=r'
        const response = await fetch(API_KEY)
        const data = await response.json()
        setMenu(data.meals)
    }

    // console.log(menu)
    // const itemDetails = menu.map((item) => {
    //     return <section>
    //         <img src={item.strMealThumb} alt='img' />
    //         <h4>{item.strCategory}</h4>
    //     </section>

    // })


    useEffect(() => {
        apiFetch()
    }, [])
    return (
        <div>
           <Hero />
           <About />
           <SpecialDishes allMenus={menu}/>
        </div>
    )
}

export default Menu;