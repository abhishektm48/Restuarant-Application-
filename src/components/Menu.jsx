import { useState, useEffect } from 'react';
import Hero from './Hero';
import SpecialDishes from './SpecialDishes';
import About from './About';
import FilteredDishes from './FilteredDishes';
import Preloader from './Preloader';

function Menu() {

    const [menu, setMenu] = useState([]);
    const [categories, setCategories] = useState([]);
    const [oneDish, setOneDish] = useState([]);
    const [preloader, setPreloader] = useState(false);

    const mealData = async () => {
        setPreloader(true);
        const API_KEY = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c'
        const response = await fetch(API_KEY)
        const data = await response.json()
        setMenu(data.meals)
        setPreloader(false);
    }

    const mealDataCategories = async () => {
        const API_KEY = 'https://www.themealdb.com/api/json/v1/1/categories.php'
        const response = await fetch(API_KEY)
        const categoryData = await response.json()
        setCategories(categoryData.categories)
    }
    
    const getOneDish = async () => {
        const API_KEY = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef'
        const response = await fetch(API_KEY)
        const oneDishData = await response.json()
        setOneDish(oneDishData.meals)
    }
    console.log('Beef is', oneDish);

    useEffect(() => {
        mealData()
        mealDataCategories()
        getOneDish()
    }, [])
    return (
        <div>
           <Hero />
           <About />
           { !preloader ? (
           <SpecialDishes allMenus={menu}/> ) : (
           <Preloader />)}
           {!preloader ? (
            <FilteredDishes  
            allCategories={categories} 
            allMenus={menu} 
            oneDish={oneDish}
            setOneDish={setOneDish}
            />
           ) : null}
           
        </div>
    )
}

export default Menu;