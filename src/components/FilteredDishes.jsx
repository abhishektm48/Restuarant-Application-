import React, { useState } from 'react'

const FilteredDishes = (props) => {

    const [filterData, setFilterData] = useState([]);
    // Filter the items.
    
    function FilterHandleSubmit(category)
    {
        let filteredItems = props.allMenus.filter((item) =>
        {
            // console.log('Items are',item);
            return item.strCategory === category
        }).map((dish) =>
        {
            return(
                <li>
                    <img src={dish.strMealThumb} alt="" />
                    <h2>{dish.strMeal}</h2>
                </li>
            )
        })
        setFilterData(filteredItems);
        console.log('Button clicked..!!');
    }


    let allCategories = props.allCategories.map((item) =>
    {
        return(
            <li onClick={() => FilterHandleSubmit(item.strCategory)} className='cursor-pointer'>
                {item.strCategory}
            </li>
        )
    })
  return (
    <div className='container px-10 md:px-28 mt-6'>
        <h1 className='text-orange-600 text-center font-semibold text-3xl'>Dishes</h1>
        <div>
            <ul>
                {allCategories}
            </ul>
        </div>
        <div>
            <ul>
                {filterData}
            </ul>
        </div>
    </div>
  )
}

export default FilteredDishes;