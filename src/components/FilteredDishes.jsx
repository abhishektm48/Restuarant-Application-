import React, { useState } from 'react'
import Pagination from './Pagination';

const FilteredDishes = (props) => {

    const [filterData, setFilterData] = useState([]);
    const [activeDishes, setActiveDishes] = useState('Beef');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);

    let indexOfLastPosition = currentPage * itemsPerPage;
    let indexOfFirstPosition = indexOfLastPosition -itemsPerPage;
   
    let showAllDishes = filterData.slice(indexOfFirstPosition, indexOfLastPosition);

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

    let oneAndOnlyDish = props.oneDish.map((item, index) =>
    {
        let maxItems = 4
        if(index < maxItems)
        {
            return(
                <li className="rounded-lg">
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
            <div>
                {oneAndOnlyDish}
            </div>
            <div>
                <ul>
                    {oneAndOnlyDish !==0 || filterData.length !== 0 ? showAllDishes: <div><h2>Please select anonther dish..!!</h2></div>}
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