import { useContext, useState } from "react";
import Popup from "./Popup";
import CardDish from "./CardDish";
import { AllMenuContext } from "./AllMenuContext";

const SpecialDishes = (props) => {
    // console.log('Menus are', props);
    const [showPopUp, setShowPopUp] = useState(false);
    const [currentDish, setCurrentDish] = useState('');
    const [cartItem, setCartItem] = useState([]);

    // useContext Hook

    const allMenus = useContext(AllMenuContext);
    // console.log('All menu show here', allMenus);

    // Popup Handler function

    const showPopUpHandler = (dishName) => {
        // console.log('Dish name is', dishName);
        setShowPopUp(true)
        setCurrentDish(dishName);
    }

    const closePopupWindow = () => {
        setShowPopUp(false)
    }

    let menuItems = allMenus.map((item, index) => {
        let maxNumber = 8;
        if (index < maxNumber) {
            return (
                <CardDish
                    item={item}
                    showPopUp={showPopUpHandler}
                />
            )
        }
    })

    const addToCartHandler = (cartImage, cartItemName) =>
    {
        setCartItem([
            ...cartItem,
            {
            image: cartImage,
            dishName: cartItemName
        }])
    }


    return (
        <div className="container mt-14 px-10 md:px-28">
            <h1 className="text-4xl text-center font-semibold text-green-600">Special Dishes</h1>
            {showPopUp && <Popup
                closePopUp={closePopupWindow}
                currentDish={currentDish}
                addToCartHandler={addToCartHandler}
            />}
                <div className="mt-14">
                    <ul className="flex flex-col justify-between items-center gap-10 md:grid grid-cols-4">
                        {menuItems}
                    </ul>
                </div>
            </div>
    )
}

export default SpecialDishes;