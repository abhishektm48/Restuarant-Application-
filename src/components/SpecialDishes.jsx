const SpecialDishes = (props) =>
{
    // console.log('props are',props);
    let menuItems = props.allMenus.map((item,index) =>
    {
        let maxNumber = 8;
        if(index < maxNumber)
        {
            return(
                <li className="rounded-lg">
                    <img src={item.strMealThumb} />
                    <h4>{item.strMeal}</h4>
                </li>
        )
        }
    })

    return(
            <div className="container mt-6 px-10 md:px-28">
                <h1 className="text-3xl text-center font-semibold text-green-600">Special Dishes</h1>
                    <div className="w-44 md:w-fit mt-6">
                        <ul className="flex">
                        {menuItems}
                        </ul>
                    </div>
                </div>
    )
}

export default SpecialDishes;