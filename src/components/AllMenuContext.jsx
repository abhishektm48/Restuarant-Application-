import React, { useEffect, useState } from 'react'
import Preloader from './Preloader';

// Global state for child components

export const AllMenuContext = React.createContext();

export const AllMenu = (props) => {

    //State 

    const [menu, setMenu] = useState([]);
    const [preloader, setPreloader] = useState(false);

    // Data fetching for all menus

    const mealData = async () => {
        setPreloader(true);
        const API_KEY = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c'
        const response = await fetch(API_KEY)
        const data = await response.json()
        setMenu(data.meals)
        setPreloader(false);
    }
    console.log('Data is',menu);

    // useEffect Hook

   useEffect(() =>
   {
    mealData()
   },[])

  return (
    <AllMenuContext.Provider value={menu}>
        { !preloader ? props.children  : <Preloader />}
    </AllMenuContext.Provider>
  )
}

