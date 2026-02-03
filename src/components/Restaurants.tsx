import {data} from '../modules/data.tsx';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
import Categories from "./Categories";


export interface RestaurantsItemProps {
    restId: number;
    restaurantName: string;
    imageUrl: string;
    imageAlt: string;
    
}
export const RestaurantsCatContext = createContext(null);

function Restaurants() {
    const [restaurantsCatState, setRestaurantsCatState] = useState("all"); 
    const restaurantsCategory = useContext(RestaurantsCatContext);
    const restaurantsArr = [];
    console.log("")
    for( let i=0; i<3; i++){
    if(restaurantsCatState == "all"){
        restaurantsArr.push(
            <Link to={"restaurant/" + [i]}>
                <RestaurantsItem restId={data.restaurants[i].restId} 
                                 imageUrl={data.restaurants[i].imageUrl} 
                                 imageAlt={data.restaurants[i].imageUrlAlt} 
                                 restaurantName={data.restaurants[i].name} />
                </Link>)
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
    
        <div className="restaurants-items-container">
            {restaurantsArr}
        </div>
    </div>
    </RestaurantsCatContext>
    </>);
}    

    {/* return (
        <>
        <RestaurantsCatContext value={{restaurantsCatState, setRestaurantsCatState}}>
        <Categories />
        <div className="restaurants"><h1>Restaurants</h1>
        
            <div className="restaurants-items-container">
                
               <Link to="restaurant/0">
                <RestaurantsItem restId={data.restaurants[0].restId} 
                                 imageUrl={data.restaurants[0].imageUrl} 
                                 imageAlt={data.restaurants[0].imageUrlAlt} 
                                 restaurantName={data.restaurants[0].name} />
                </Link>
                 <Link to="restaurant/1">
                <RestaurantsItem restId={data.restaurants[1].restId} 
                                imageUrl={data.restaurants[1].imageUrl} 
                                imageAlt={data.restaurants[1].imageUrlAlt} 
                                restaurantName={data.restaurants[1].name}/>
                </Link>
                <Link to="restaurant/2">
                <RestaurantsItem restId={data.restaurants[2].restId} 
                                imageUrl={data.restaurants[2].imageUrl} 
                                imageAlt={data.restaurants[2].imageUrlAlt} 
                                restaurantName={data.restaurants[2].name}/>
                </Link> 

            </div>
        </div>
        </RestaurantsCatContext>
        </>
    );} else if {
         
         console.log(catId);
    }
}
  } */}
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