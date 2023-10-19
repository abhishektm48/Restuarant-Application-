import React, { useState } from 'react'

const FilteredDishes = (props) => {

    const [filterData, setFilterData] = useState(['']);
    const [activeDishes, setActiveDishes] = useState('Beef');

    // Filter the items.

    const FilterHandleSubmit = (category) =>
    {
            props.setOneDish([]);
            setActiveDishes(category);
            let filteredItems = props.allMenus.filter((item) => {
            // console.log('Items are',item);
            return item.strCategory === category
            }).map((dish) => {
            return (
                <li>
                    <img src={dish.strMealThumb} alt="" />
                    <h2>{dish.strMeal}</h2>
                </li>
            )
        })
        setFilterData(filteredItems);
        // console.log('Button clicked..!!');
    }

    //Display all categories..

    let allCategories = props.allCategories.map((item) => {
        return (
            <li onClick={() => FilterHandleSubmit(item.strCategory)} className={item.strCategory === activeDishes ? 'cursor-pointer text-center bg-black my-4 py-2 text-white font-semibold rounded-xl hover:bg-black duration-300' : 'cursor-pointer text-center bg-green-600 my-4 py-2 text-white font-semibold rounded-xl hover:bg-black duration-300'}>
                {item.strCategory}
            </li>
        )
    })

    // Display one item when the first rendering

    let oneAndOnlyDish = props.oneDish.map((item) =>
    {
        return(
            <li className="rounded-lg">
                    <img src={item.strMealThumb} />
                    <h4>{item.strMeal}</h4>
            </li>
        )
    })

    return (
        <div className='container px-10 md:px-28 mt-6'>
            <h1 className='text-green-600 text-center font-semibold text-3xl'>Dishes</h1>
            <div>
                <ul>
                    {allCategories}
                </ul>
            </div>
            <div>
                {oneAndOnlyDish}
            </div>
            <div>
                <ul>
                    {filterData.length !== 0 ? filterData : <div><h2>Please select anonther dish..!!</h2></div>}
                </ul>
            </div>
        </div>
    )
}

export default FilteredDishes;