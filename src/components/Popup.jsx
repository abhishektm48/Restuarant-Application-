import React, { useContext } from 'react'
import { AllMenuContext } from './AllMenuContext';

const Popup = ({closePopUp, currentDish, allMenu}) => 
{
  const allMenus = useContext(AllMenuContext);

  let popUpItems = allMenus.filter((item) => {
   return currentDish === item.strMeal
  }).map((dish) =>
  {
    return (
      <div>
        <div>
          <img src={dish.strMealThumb} alt="food_img" className='w-60 h-60 rounded-md' />
          <h5 className='text-white text-center my-4'>{dish.strMeal}</h5>
        </div>
      </div>
    )
  })
  return (
    <div className='w-full h-full relative'>
        <div className='flex flex-col justify-center items-center bg-orange-500 rounded-md w-1/2 h-1/2 absolute p-52 overflow-hidden'>
            {popUpItems}
            <button className='bg-black text-white px-2 py-1 rounded-md text-sm hover:bg-transparent duration-300 hover:border-black hover:border border border-transparent hover:text-black'>Order Now</button>
            <button onClick={closePopUp} className='font-semibold'>X</button>
        </div>
    </div>
  )
}

export default Popup;