import {data} from '../modules/data.tsx';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { createContext } from 'react';
import Categories from "./Categories";
import type { Dispatch, SetStateAction } from 'react';



export interface RestaurantsItemProps {
    restId: number;
    restaurantName: string;
    imageUrl: string;
    imageAlt: string;
    
}
export const RestaurantsCatContext = createContext<{
    restaurantsCatState: string;
    setRestaurantsCatState: Dispatch<SetStateAction<string>>;
  } | null>(null);

function Restaurants() {
    const [restaurantsCatState, setRestaurantsCatState] = useState("all"); 
   // const restaurantsCategory = useContext(RestaurantsCatContext);
    const restaurantsArr = [];
    console.log("")
    for( let i=0; i<data.restaurants.length; i++){
    //if the category is "all", show all restaurants
    if(restaurantsCatState == "all"){
        restaurantsArr.push(
            //Link is a React Router component, navigates without a full page reload
            <Link to={"restaurant/" + [i]}>
                <RestaurantsItem restId={data.restaurants[i].restId} 
                                 imageUrl={data.restaurants[i].imageUrl} 
                                 imageAlt={data.restaurants[i].imageUrlAlt} 
                                 restaurantName={data.restaurants[i].name} />
                </Link>)
    //show restaurants that belong in the selected category
    }else if(data.restaurants[i].category.includes(restaurantsCatState)){
        
            restaurantsArr.push(
                <Link to={"restaurant/" + [i]}>
                <RestaurantsItem restId={data.restaurants[i].restId} 
                                 imageUrl={data.restaurants[i].imageUrl} 
                                 imageAlt={data.restaurants[i].imageUrlAlt} 
                                 restaurantName={data.restaurants[i].name} />
                </Link>)
        }
    
    }return(
    <>
     <RestaurantsCatContext value={{restaurantsCatState, setRestaurantsCatState}}>
    <Categories />
    
    <div className="restaurants"><h1>Restaurants</h1>
    
        <div className="restaurants-items-container" tabIndex={-1}>
            {restaurantsArr}
        </div>
    </div>
    </RestaurantsCatContext>
    </>);
}    

    
export default Restaurants

function RestaurantsItem(props: RestaurantsItemProps) {
    const [restId, setRestId] = useState({});
/*     console.log(restId); */
    return (
        
            <div className="restaurants-item" onClick={() => (setRestId(props.restId)) }>

                
                <h1>{props.restaurantName} </h1>
                <img src={props.imageUrl || 'https://placehold.co/400x200'} alt={props.imageAlt} />

            </div>

       
    );
}