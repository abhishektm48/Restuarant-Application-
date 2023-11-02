import React, { useContext, useEffect, useState } from 'react'
import Pagination from './Pagination';
import CardDish from './CardDish';
import { AllMenuContext } from './AllMenuContext';
import AddToCart from './AddToCart';
import Popup from './Popup';

const FilteredDishes = () => {

    const [filterData, setFilterData] = useState([]);
    const [activeDishes, setActiveDishes] = useState('Beef');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const [categories, setCategories] = useState([]);
    const [oneDish, setOneDish] = useState([]);
    const [cartItem, setCartItem] = useState([]);
    const [showPopUp, setShowPopUp] = useState(false);
    const [currentDish, setCurrentDish] = useState('');


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

    useEffect(() => {
        mealDataCategories()
        getOneDish()
    }, [])

    const FilterHandleSubmit = (category) => {
        setOneDish([]);
        setActiveDishes(category);
        let filteredItems = allMenus.filter((item) => {
            // console.log('Items are',item);
            return item.strCategory === category
        }).map((dish) => {
            return (
                <CardDish item={dish} />
            )
        })
        setFilterData(filteredItems);
        // console.log('Button clicked..!!');
    }

    //Display all categories..

    let allCategories = categories.map((item) => {
        return (
            <li onClick={() => FilterHandleSubmit(item.strCategory)} className={item.strCategory === activeDishes ? 'cursor-pointer text-center bg-black my-4 py-2 px-4 text-white font-semibold rounded-3xl hover:bg-black duration-300' : 'cursor-pointer text-center bg-green-600 my-4 py-2 px-4 text-white font-semibold rounded-3xl hover:bg-black duration-300'}>
                {item.strCategory}
            </li>
        )
    })

    // Display one item when the first rendering

    let oneAndOnlyDish = oneDish.map((item, index) => {
        let maxItems = 4
        if (index < maxItems) {
            return (
                <li className='bg-green-600 rounded-md shadow-lg w-3/4'>
                    <div className='p-6 md:flex-col justify-center items-center'>
                        <img className='w-60 rounded-md' src={item.strMealThumb} />
                        <h4 className='text-center mt-2 font-semibold text-white'>{item.strMeal}</h4>
                    </div>
                </li>
            )
        }
    })


    const showPopUpHandler = (dishName) => {
        // console.log('Dish name is', dishName);
        setShowPopUp(true)
        setCurrentDish(dishName);
    }

    const closePopupWindow = () => {
        setShowPopUp(false)
    }

    // Cart Handler function

    const addToCartHandler = (cartImage, cartItemName) => {
        setCartItem([
            ...cartItem,
            {
                image: cartImage,
                dishName: cartItemName
            }])
    }

    return (
        <div className='container px-10 md:px-28 mt-6'>

            {/* Dishes based on categories */}

            <div className='md:grid grid-cols-2'>
                <div className='flex flex-col'>
                    <h1 className='text-center font-semibold text-green-600 text-3xl my-10'>Select Dishes Based on your taste..!!</h1>
                    <div>
                        <ul className='flex gap-4 flex-wrap'>
                            {allCategories}
                        </ul>
                        {showPopUp && <Popup
                            closePopUp={closePopupWindow}
                            currentDish={currentDish}
                            addToCartHandler={addToCartHandler}
                        />}
                    </div>
                    <div className='mt-6'>
                        <ul className='flex flex-col justify-between items-center gap-10 md:grid grid-cols-3'>
                            {oneAndOnlyDish}
                            {oneAndOnlyDish != 0 || filterData.length !== 0 ? showAllDishes :
                                <div className='border-2 border-green-600 rounded-md mt-6'>
                                    <h2 className='py-4 px-4 text-xl font-semibold text-red-600'>The item you are selected is unavailable now.. Please exolore another one..</h2>
                                </div>}
                        </ul>
                    </div>
                </div>

                {/* Cart section */}

                <div className='my-10'>
                    <div>
                        <AddToCart cartItem={cartItem} />
                    </div>
                </div>

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