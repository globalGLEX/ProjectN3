import {data} from '../modules/data.tsx';
import OrderModal from './OrderModal.tsx';
import type {OrderModalProps} from './OrderModal.tsx';
import type {RestaurantsItemProps }from './Restaurants.tsx';
import type Restaurants from './Restaurants.tsx';
import { createContext } from 'react';
import { useContext } from 'react';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useParams } from "react-router-dom"


export interface RestaurantImageProps {
    /* list of props */
    
    imageUrl: string;
    imageUrlAlt: string;
    logoUrl: string;
    restaurantName: string;
}
interface FoodCategoryItemProps{
    
    catName: string;
    catState?: any;
   
}
interface ProductProps {
    imageUrl: string;
    imageAlt: string;
    name: string;
    desc: string;
    price: number;
    id: number;
    restId: number;
   
}
interface restIdProps {
   restId: number;
   category?: any;
   catState?: any;
   setCatState?: any;
  
}
export const CatContext = createContext(null);
function Restaurant({restId}: restIdProps) {
    
    
    const [catState, setCatState] = useState("All"); ///needs to reset when going to other restos etc
    const category = useContext(CatContext);
    
    const  params  = useParams();
     restId = Number(params.restaurantId); 
  /* console.log(restId) */
    return (
        <div className="restaurant">
          
            <RestaurantImage  
                             imageUrl={data.restaurants[restId].imageUrl} 
                             imageUrlAlt={data.restaurants[restId].imageUrlAlt} 
                             logoUrl={data.restaurants[restId].logoUrl} 
                             restaurantName={data.restaurants[restId].name}/>
             <CatContext value={{catState, setCatState}}> {/* lets all inside these to access catState */}

            <FoodCategories restId={restId}/>
            <Products restId={restId}/>
            
            </CatContext> 
            

    </div>
    );
  }

  function RestaurantImage(props: RestaurantImageProps) {
    return (
        <div className="restaurant-image">
            <img src={props.imageUrl || 'https://placehold.co/1920x600'} alt={props.imageUrlAlt} />
            <div className="restaurant-logo">
            <img src={props.logoUrl || 'https://placehold.co/150x150'}  />
            </div>
            <h1> {props.restaurantName} </h1>
        </div>
    );
  }
  function FoodCategories({restId}: restIdProps) {
    /* console.log(data.restaurants[restId].categories[0]) */
    const foodCatArr = [];
    console.log("arr length "+ data.restaurants[restId].categories.length)
    for( let i=0; i < data.restaurants[restId].categories.length; i++){
        foodCatArr.push(
            <FoodCategoryItem catName={data.restaurants[restId].categories[i]}/>
        )
    }
    return( <div className="restaurant-categories">
            <FoodCategoryItem catName={"All"}/>
            {foodCatArr}
            </div>)
    
  }
  function FoodCategoryItem(props: FoodCategoryItemProps) {
    const category = useContext(CatContext); //the comp asks LevelContext's closest value, so can send 11 here from outside.
    
    return (
        
        <button  className="restaurant-category-item" 
        onClick={() => {(category.setCatState(props.catName)); console.log(props.catName)} }><p>{props.catName}</p></button>
       
        );
  }

  function Products({restId}: restIdProps) {
    
    const category = useContext(CatContext);
    const productArr = [];
      
    for( let i=0; i<data.restaurants[restId].products.length; i++){
        
            if(category.catState == "All"){
                productArr.push(
                <Product 
                                restId={restId}
                                id={data.restaurants[restId].products[i].id}
                                name={data.restaurants[restId].products[i].name}
                                desc={data.restaurants[restId].products[i].desc}
                                price={data.restaurants[restId].products[i].price}
                                imageUrl={data.restaurants[restId].products[i].imageUrl}
                                imageAlt={data.restaurants[restId].products[i].alt}
                                />)
                        
                    } else if(category.catState == data.restaurants[restId].products[i].productCategory){
                        productArr.push(
                         
                         
                            <Product 
                                restId={restId}
                                id={data.restaurants[restId].products[i].id}
                                name={data.restaurants[restId].products[i].name}
                                desc={data.restaurants[restId].products[i].desc}
                                price={data.restaurants[restId].products[i].price}
                                imageUrl={data.restaurants[restId].products[i].imageUrl}
                                imageAlt={data.restaurants[restId].products[i].alt}
                                />)
                    }
  
} return(
    <div>
              {/*   <div className="products-category-title">
                    <h1>{data.restaurants[restId].categories[]}</h1>
                </div>   */}  
                <div className="products">
                {productArr}
                </div>
    </div>)
        
  }

  function Product(props: ProductProps) {
    const [showModal, setShowModal] = useState(false);
    const [showBackdrop, setShowBackdrop] = useState(false);
    const [id, setId] = useState({});
     
    return (
    <>
    <button className="product" onClick={() => (setId(props.id),setShowModal(true), setShowBackdrop(true))}>
        <div className="product-text"> 
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            
            <h3 className="product-price">{props.price} €</h3>
            {/* <AddToCartButton /> */}
        </div>
        <div className="product-image"><img src={props.imageUrl || 'https://placehold.co/200x200'} alt={props.imageAlt} /></div>
        
    </button>
        {showModal && createPortal(
          <OrderModal  restId={props.restId} id={props.id} onClose={() => (setShowModal(false), setShowBackdrop(false))} />,
          document.getElementById('modal-root')
        )}
        {showBackdrop && createPortal(
          <Backdrop onClose={() => (setShowModal(false), setShowBackdrop(false))} />,
          document.getElementById('backdrop-root')
        )}
        
    </>   
    );
  }
  function Backdrop({ onClose }: OrderModalProps) {
    return <div className="backdrop" onClick={onClose}/>
  }

  function AddToCartButton() {
    return (
       
            <button className="add-to-cart-button"> + </button>
        
    );
  }

  export default Restaurant
