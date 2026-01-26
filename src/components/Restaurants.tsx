import {data} from '../modules/data.tsx';
import { Link } from 'react-router-dom'
import { useState } from 'react';
export interface RestaurantsItemProps {
    restId: number;
    restaurantName: string;
    imageUrl: string;
    imageAlt: string;
}
function Restaurants() {
    return (
        <div className="restaurants"><h1>Restaurants</h1>
            <div className="restaurants-items-container">
                <Link to="restaurant/johnscafe">
                <RestaurantsItem restId={data.restaurants[0].restId} 
                                 imageUrl={data.restaurants[0].imageUrl} 
                                 imageAlt={data.restaurants[0].imageUrlAlt} 
                                 restaurantName={data.restaurants[0].name} />
                </Link>
                <Link to="restaurant/johnscafe">
                <RestaurantsItem restId={data.restaurants[1].restId} 
                                imageUrl={data.restaurants[1].imageUrl} 
                                imageAlt={data.restaurants[1].imageUrlAlt} 
                                restaurantName={data.restaurants[1].name}/>
                </Link>
                <Link to="restaurant/johnscafe">
                <RestaurantsItem restId={data.restaurants[2].restId} 
                                imageUrl={data.restaurants[2].imageUrl} 
                                imageAlt={data.restaurants[2].imageUrlAlt} 
                                restaurantName={data.restaurants[2].name}/>
                </Link>
            </div>
        </div>
    );
  }
  export default Restaurants

  function RestaurantsItem(props: RestaurantsItemProps) {
    const [restId, setRestId] = useState({});
/*     console.log(restId); */
    return (
        
            <div className="restaurants-item" onClick={() => (setRestId(props.restId)) }>

                
                <h1>{props.restaurantName} restId {props.restId}</h1>
                <img src={props.imageUrl || 'https://placehold.co/400x200'} alt={props.imageAlt} />

            </div>

       
    );
  }