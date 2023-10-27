import { useContext, useState } from "react";
import Popup from "./Popup";
import CardDish from "./CardDish";
import { AllMenuContext } from "./AllMenuContext";

const SpecialDishes = (props) =>
{
    // console.log('Menus are', props);
    const [showPopUp, setShowPopUp] = useState(false);
    const [currentDish, setCurrentDish] = useState('');

    // useContext Hook

    const allMenus = useContext(AllMenuContext);
    console.log('All menu show here',allMenus);
    
    // Popup Handler function

    const showPopUpHandler = (dishName) =>
    {
        // console.log('Dish name is', dishName);
        setShowPopUp(true)
        setCurrentDish(dishName);
    }

    const closePopupWindow = () =>
    {
        setShowPopUp(false)
    }

    let menuItems = allMenus.map((item,index) =>
    {
        let maxNumber = 8;
        if(index < maxNumber)
        {
            return(
                <CardDish 
                item = {item}
                showPopUp = {showPopUpHandler}
                />
        )
        }
    })

    return(
            <div className="container mt-6 px-10 md:px-28">
                <h1 className="text-3xl text-center font-semibold text-green-600">Special Dishes</h1>
                    {showPopUp && <Popup 
                    closePopUp={closePopupWindow} 
                    currentDish={currentDish}
                    />}
                    <div className="w-44 md:w-fit mt-6">
                        <ul className="flex">
                            {menuItems}
                        </ul>
                    </div>
                </div>
    )
}

export default SpecialDishes;