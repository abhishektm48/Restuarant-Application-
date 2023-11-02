import React from 'react'

const AddToCart = ({cartItem}) => {
    let items = cartItem.map((item) =>
    {
        return(
                <div className="md:w-fit mb-2">
                    <img src={item.image} alt="" className="rounded-md" />
                    <h2 className='text-center mt-1 font-semibold text-green-600'>{item.dishName}</h2>
                </div>
            )
    })

    return (
        <div>
            <h1 className="text-3xl text-center font-semibold text-green-600 mb-4">Cart</h1>
            <div className="bg-white rounded-md ml-4 p-5 shadow-lg">
                {items}
            </div>
        </div>
    )
}

export default AddToCart;