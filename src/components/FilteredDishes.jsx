import React, { useContext, useEffect, useState } from 'react'
import Pagination from './Pagination';
import CardDish from './CardDish';
import { AllMenuContext } from './AllMenuContext';

const FilteredDishes = () => {

    const [filterData, setFilterData] = useState([]);
    const [activeDishes, setActiveDishes] = useState('Beef');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const [categories, setCategories] = useState([]);
    const [oneDish, setOneDish] = useState([]);

    const allMenus = useContext(AllMenuContext);

    let indexOfLastPosition = currentPage * itemsPerPage;
    let indexOfFirstPosition = indexOfLastPosition - itemsPerPage;
   
    let showAllDishes = filterData.slice(indexOfFirstPosition, indexOfLastPosition);


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
    // console.log('Beef is', oneDish);

    useEffect(() =>
    {
        mealDataCategories()
        getOneDish()
    },[])

    const FilterHandleSubmit = (category) =>
    {
            setOneDish([]);
            setActiveDishes(category);
            let filteredItems = allMenus.filter((item) => {
            // console.log('Items are',item);
            return item.strCategory === category
            }).map((dish) => {
            return (
                <CardDish item = {dish}/>
            )
        })
        setFilterData(filteredItems);
        // console.log('Button clicked..!!');
    }

    //Display all categories..

    let allCategories = categories.map((item) => {
        return (
            <li onClick={() => FilterHandleSubmit(item.strCategory)} className={item.strCategory === activeDishes ? 'cursor-pointer text-center bg-black my-4 py-2 text-white font-semibold rounded-xl hover:bg-black duration-300' : 'cursor-pointer text-center bg-green-600 my-4 py-2 text-white font-semibold rounded-xl hover:bg-black duration-300'}>
                {item.strCategory}
            </li>
        )
    })

    // Display one item when the first rendering

    let oneAndOnlyDish = oneDish.map((item, index) =>
    {
        let maxItems = 4
        if(index < maxItems)
        {
            return(
                <li>
                    <img src={item.strMealThumb} />
                    <h4>{item.strMeal}</h4>
                </li>
            )
        }
    })

    return (
        <div className='container px-10 md:px-28 mt-6'>
            <h1 className='text-green-600 text-center font-semibold text-3xl'>Dishes</h1>
            <div>
                <ul>
                    {allCategories}
                </ul>
            </div>
            <div className='w-44 md:w-fit mt-6'>
                <ul className='flex'>
                {oneAndOnlyDish}
                    {oneAndOnlyDish !=0 || filterData.length !== 0 ? showAllDishes: <div><h2>Please select anonther dish..!!</h2></div>}
                </ul>
            </div>
            <Pagination 
            filteredData={filterData} 
            itemsPerPage={itemsPerPage}
            setCurrentPage={setCurrentPage}
            />
        </div>
    )
}

export default FilteredDishes;