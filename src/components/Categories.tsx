import burger from '../assets/categories-burger.jpg';
import american from '../assets/categories-american.jpg';
import japanese from '../assets/categories-japanese.jpg';
import pizza from '../assets/categories-pizza.jpg';
import wraps from '../assets/categories-wraps.jpg';
import cafe from '../assets/categories-cafe.jpg';
import {RestaurantsCatContext} from './Restaurants.tsx';
import {data} from '../modules/data.tsx';
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

interface CategoryItemProps {
    img: string;
    alt: string;
    text: string;
    cat: any;
    restaurantsCatState: any;
   setRestaurantsCatState: any;
   restaurantsCategory: any;

    
}

export function Categories() {
   /*  const [catId, setCatId] = useState('all'); */
  
   console.log(RestaurantsCatContext)
    return (
        <div className="categories"><h2>Categories</h2>
            <div className="category-items-container">
           
                <CategoryItem cat="all" img={japanese} alt={"Japanese ramen"} text={"All"}  />
                <CategoryItem cat="burger" img={burger} alt={"Burger"} text={"Burger"}  />
                <CategoryItem cat="american" img={american} alt={"American BBQ"} text={"American"} />
                <CategoryItem cat="cafe" img={cafe} alt={"Cafe food"} text={"Cafe"} />
                <CategoryItem cat="japanese" img={japanese} alt={"Japanese ramen"} text={"Japanese"} />
            
{/*                 <CategoryItem cat="wraps" img={wraps} alt={"Wraps"} text={"Wraps"} />
                <CategoryItem cat="pizza" img={pizza} alt={"Pizza"} text={"Pizza"} /> */}
            </div>
            
        </div>
    );
  }
function CategoryItem(props: CategoryItemProps){
    
    /* const [catId, setCatId] = useState('all'); */
/*     console.log(catId) */
const restaurantsCategory = useContext(RestaurantsCatContext);
  console.log(restaurantsCategory)
    return (
            <> 
            
                <div className="category-item" onClick={() => {(restaurantsCategory.setRestaurantsCatState(props.cat)); console.log("ddds")} }> <img src={props.img} alt={props.alt} /><p>{props.text}</p></div>
             
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
  