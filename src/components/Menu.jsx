import React from 'react';
import Hero from './Hero';
import SpecialDishes from './SpecialDishes';
import About from './About';
import FilteredDishes from './FilteredDishes';
import { AllMenu } from './AllMenuContext';

function Menu() {
    return (
        <div>
           <Hero />
           <About />
           <AllMenu>
           <SpecialDishes />
           <FilteredDishes />
           </AllMenu>
        </div>
    )
}

export default Menu;