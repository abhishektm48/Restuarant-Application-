import React from 'react'

const AddToCart = ({cartItem}) => {
    let items = cartItem.map((item) =>
    {
        return(
                <div className="flex flex-col justify-center items-center bg-green-600 m-4 w-3/4 rounded-md shadow-lg">
                    <img src={item.image} alt="" className="rounded-lg w-60 px-6 pt-6 pb-3" />
                    <h2 className='text-center font-semibold text-white pb-4'>{item.dishName}</h2>
                </div>
            )
    })

    return (
        <div>
            <h1 className="text-3xl text-center font-semibold text-green-600 mb-4">Your Cart</h1>
            <div className="flex flex-col justify-center items-center md:grid grid-cols-2 place-items-center bg-white rounded-md ml-4 p-5 shadow-lg">
                    {items}
            </div>
        </div>
    )
}

export default AddToCart;