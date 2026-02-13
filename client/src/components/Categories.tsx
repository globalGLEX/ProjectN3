import burger from '../assets/categories-burger.jpg';
import american from '../assets/categories-american.jpg';
import japanese from '../assets/categories-japanese.jpg';
import cafe from '../assets/categories-cafe.jpg';
import all from '../assets/categories-all.jpg';
import {RestaurantsCatContext} from './Restaurants.tsx';
import {data} from '../modules/data.tsx';
import { useContext } from 'react';


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
  
   console.log(data.restaurants.length)
    return (
        <div className="categories"><h2>Categories</h2>
            <div className="category-items-container" tabIndex="-1">
           
                <CategoryItem cat="all" img={all} alt={"Wide selection of foods"} text={"All"}  />
                <CategoryItem cat="burger" img={burger} alt={"Burger"} text={"Burger"}  />
                <CategoryItem cat="american" img={american} alt={"American BBQ"} text={"American"} />
                <CategoryItem cat="cafe" img={cafe} alt={"Cafe food"} text={"Cafe"} />
                <CategoryItem cat="japanese" img={japanese} alt={"Japanese ramen"} text={"Japanese"} />
            
            </div>
            
        </div>
    );
  }
function CategoryItem(props: CategoryItemProps){
    
    const restaurantsCategory = useContext(RestaurantsCatContext);
  
    return (
            <> 
            
                <button className="category-item" onClick={() => {(restaurantsCategory.setRestaurantsCatState(props.cat)); console.log("ddds")} }> <img src={props.img} alt={props.alt} /><p>{props.text}</p></button>
             
            </>  
    );
}

  export default Categories
  