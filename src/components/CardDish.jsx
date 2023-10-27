import React from 'react'

const CardDish = (props) => {

  return (
        <li>
            <a href="javascript:;" onClick={() => props.showPopUp(props.item.strMeal)}>
            <img src={props.item.strMealThumb} />
            <h4>{props.item.strMeal}</h4>
            </a>
        </li>
  )
}

export default CardDish;