import React from 'react'

const CardDish = (props) => {

  return (
        <li className='bg-yellow-400 rounded-md shadow-lg w-3/4'>
            <div className='p-6 md:flex justify-center items-center'>
              <a href="javascript:;" onClick={() => props.showPopUp(props.item.strMeal)}>
                <img src={props.item.strMealThumb} className='w-60 rounded-md'/>
                  <h4 className='text-center mt-2 font-semibold text-black'>{props.item.strMeal}</h4>
              </a>
            </div>
        </li>
  )
}

export default CardDish;