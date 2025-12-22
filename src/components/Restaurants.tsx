import {data} from '../modules/data.tsx';
function Restaurants() {
    return (
        <div className="restaurants"><h2>Restaurants</h2>
            <div className="restaurants-items-container">
                <RestaurantsItem imageUrl={data.restaurants[0].imageUrl} imageAlt={data.restaurants[0].imageUrlAlt} restaurantName={data.restaurants[0].name} />
                <RestaurantsItem imageUrl={data.restaurants[1].imageUrl} imageAlt={data.restaurants[1].imageUrlAlt} restaurantName={data.restaurants[1].name}/>
                <RestaurantsItem imageUrl={data.restaurants[2].imageUrl} imageAlt={data.restaurants[2].imageUrlAlt} restaurantName={data.restaurants[2].name}/>
      
            </div>
        </div>
    );
  }
  export default Restaurants

  function RestaurantsItem(props) {
    return (
        
            <div className="restaurants-item">
                <h1>{props.restaurantName}</h1>
                <img src={props.imageUrl || 'https://placehold.co/400x200'} alt={props.imageAlt} />

            </div>

       
    );
  }