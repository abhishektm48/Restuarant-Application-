const SpecialDishes = (props) =>
{
    // console.log('props are',props);
    let menuItems = props.allMenus.map((item) =>
    {
        return(
                <li>
                    <img src={item.strMealThumb} alt="food _image" />
                    <h4>{item.strMeal}</h4>
                </li>
        )
    })

    return(
        <section className="special-dishes">
            <div className="container">
                <div className="special-dishes-content">
                    <h2 className="text-3xl">About Us</h2>
                    <p className="text-orange-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum doloribus, omnis quo labore perferendis unde tempora harum exercitationem at officia modi, aspernatur non quisquam sapiente maiores tempore molestiae hic dolorum aut beatae officiis aliquid. Dignissimos sint, laudantium vel beatae temporibus libero eius rerum facilis placeat reiciendis harum quod! Odit, quod.</p>
                </div>
                <div className="special-dishes-list">
                    <h1 className="text-3xl">Special Dishes</h1>
                    <div className="">
                    <ul className="">
                        {menuItems}
                    </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpecialDishes;