import { useState, useEffect } from 'react';
import Hero from './Hero';
import SpecialDishes from './SpecialDishes';
import About from './About';
import FilteredDishes from './FilteredDishes';

function Menu() {

    const [menu, setMenu] = useState([]);
    const [categories, setCategories] = useState([]);

    const mealData = async () => {
        const API_KEY = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c'
        const response = await fetch(API_KEY)
        const data = await response.json()
        setMenu(data.meals)
    }

    const mealDataCategories = async () => {
        const API_KEY = 'https://www.themealdb.com/api/json/v1/1/categories.php'
        const response = await fetch(API_KEY)
        const categoryData = await response.json()
        setCategories(categoryData.categories)
    }
    // console.log('Categories are',categories);

    useEffect(() => {
        mealData()
        mealDataCategories()
    }, [])
    return (
        <div>
           <Hero />
           <About />
           <SpecialDishes allMenus={menu}/>
           <FilteredDishes  allCategories={categories} allMenus={menu}/>
        </div>
    )
}

export default Menu;