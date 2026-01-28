import burger from '../assets/categories-burger.jpg';
import american from '../assets/categories-american.jpg';
import japanese from '../assets/categories-japanese.jpg';
import pizza from '../assets/categories-pizza.jpg';
import wraps from '../assets/categories-wraps.jpg';
import cafe from '../assets/categories-cafe.jpg';
import { useState } from 'react';
interface CategoryItemProps {
    img: string;
    alt: string;
    text: string;
}

function Categories() {


    return (
        <div className="categories"><h2>Categories</h2>
            <div className="category-items-container">
                <CategoryItem img={burger} alt={"Burger"} text={"Burger"}  />
                <CategoryItem img={american} alt={"American BBQ"} text={"American"} />
                <CategoryItem img={cafe} alt={"Cafe food"} text={"Cafe"} />
                <CategoryItem img={japanese} alt={"Japanese ramen"} text={"Japanese"} />
                <CategoryItem img={wraps} alt={"Wraps"} text={"Wraps"} />
                <CategoryItem img={pizza} alt={"Pizza"} text={"Pizza"} />
            </div>
            
        </div>
    );
  }
function CategoryItem(props: CategoryItemProps){
    return (
            <>  
                <div className="category-item"> <img src={props.img} alt={props.alt} /><p>{props.text}</p></div>
                
            </>  
    );
}
 /*  function CategoriesCarousel() {
    return (
            
        <div className="categories-carousel">
            <ul>
            <li>
                <h2>Page 1</h2>
            </li>
            <li>
                <h2>Page 2</h2>
            </li>
            <li>
                <h2>Page 3</h2>
            </li>
            <li>
                <h2>Page 4</h2>
            </li>
            </ul>
        </div>
    );
  }  */
  export default Categories
  