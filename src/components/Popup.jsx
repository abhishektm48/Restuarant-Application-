import React, { useContext } from 'react'
import { AllMenuContext } from './AllMenuContext';

const Popup = ({closePopUp, currentDish, addToCartHandler}) => 
{
  const allMenus = useContext(AllMenuContext);

  let popUpItems = allMenus.filter((item) => {
   return currentDish === item.strMeal
  }).map((dish) =>
  {
    // console.log('Images...', dish.strMealThumb);
    return (
        <>
          <img src={dish.strMealThumb} alt="food_img" className='w-60 h-60 rounded-md' />
          <h5 className='text-white text-center my-4 font-semibold'>{dish.strMeal}</h5>
          <button onClick={() => addToCartHandler(dish.strMealThumb, dish.strMeal)} className='bg-black text-white font-semibold px-2 py-1 rounded-md text-sm hover:bg-transparent duration-300 hover:border-black hover:border border border-transparent hover:text-black'>Add To Cart</button>
          <button onClick={closePopUp} className='font-semibold mt-2'>Close</button>
       </>
    )
  })
  return (
    <div className='w-full h-full relative'>
        <div className='flex flex-col justify-center items-center bg-orange-500 rounded-md w-1/2 h-1/2 absolute p-52 overflow-hidden'>
            {popUpItems}
        </div>
    </div>
  )
}

export default Popup;