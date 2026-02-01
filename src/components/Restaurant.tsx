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
    productCatId: any;
    LevelContext: any;
   
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
   productCatId: any; 
   setProductCatId: any;
   category: any;
   
}
export const CatContext = createContext("");
function Restaurant({restId}: restIdProps) {
    
    const [productCatId, setProductCatId] = useState({});
    const [catState, setCatState] = useState("Seafood"); ///needs to reset when going to other restos etc
    const category = useContext(CatContext);
    
    const  params  = useParams();
     restId = params.restaurantId;
  console.log(restId)
    return (
        <div className="restaurant">
          
            <RestaurantImage  
                             imageUrl={data.restaurants[restId].imageUrl} 
                             imageUrlAlt={data.restaurants[restId].imageUrlAlt} 
                             logoUrl={data.restaurants[restId].logoUrl} 
                             restaurantName={data.restaurants[restId].name}/>
             <CatContext value={catState}> {/* lets all inside these to access catState */}

            <FoodCategories restId={restId} productCatId={productCatId}/>
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
  function FoodCategories({restId, productCatId, category}: restIdProps) {
    
    return (
        <div className="restaurant-categories">
            
            <FoodCategoryItem productCatId={productCatId} catName={data.restaurants[restId].categories[0]}/>
            <FoodCategoryItem productCatId={productCatId} catName={data.restaurants[restId].categories[1]}/>
            <FoodCategoryItem productCatId={productCatId} catName={data.restaurants[restId].categories[2]}/>
            <FoodCategoryItem productCatId={productCatId} catName={data.restaurants[restId].categories[3]}/>
            
        </div>
    );
  }
  function FoodCategoryItem(props: FoodCategoryItemProps) {
    const category = useContext(CatContext); //the comp asks LevelContext's closest value, so can send 11 here from outside.
    
    return (
        <button  className="restaurant-category-item" ><p>{props.catName}</p></button>
    );
  }



  /* function ModalTest(){
    const dialog = document.getElementsByClassName("dial");
    const showButton = document.querySelector("dialog + button");
    const closeButton = document.querySelector("dialog button");
    const shoot = () => {
        
      alert("test");
      console.log(dialog);
     
      } 
    return(
        <div>
        <dialog className="dial">
        <button onClick={shoot}>Close</button>
        <p>This modal dialog has a groovy backdrop!</p>
        </dialog>
        <button onClick={shoot}>Show the dialog </button>
        </div>
    )
  }
*/  


  function Products({restId, productCatId}: restIdProps) {
    /* for(let i=0, i<5, i++) loops through the 5 products */
    /* if(productCatId !== data.restaurants[restId].products[i].productCategory){  etc here ig*/
    const category = useContext(CatContext);

    const productArr = [];
    for( let i=0; i<5; i++){
        if(category == data.restaurants[restId].products[i].productCategory){
            productArr.push(
                            
                    <Product 
                        restId={restId}
                        id={data.restaurants[restId].products[i].id}
                        name={data.restaurants[restId].products[i].name}
                        desc={data.restaurants[restId].products[i].desc}
                        price={data.restaurants[restId].products[i].price}
                        imageUrl={data.restaurants[restId].products[i].imageUrl}
                        imageAlt={data.restaurants[restId].products[i].alt}
                        />
                    )}





   
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
    <div className="product" onClick={() => (setId(props.id),setShowModal(true), setShowBackdrop(true))}>
        <div className="product-text"> 
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            
            <h3 className="product-price">{props.price} €</h3>
            {/* <AddToCartButton /> */}
        </div>
        <div className="product-image"><img src={props.imageUrl || 'https://placehold.co/200x200'} alt={props.imageAlt} /></div>
        
    </div>
        {showModal && createPortal(
          <OrderModal  restId={props.restId} id={id} onClose={() => (setShowModal(false), setShowBackdrop(false))} />,
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

  /*  function ModalContent({ onClose }) {
    return (
      <div className="modal">
        <div>I'm a modal dialog</div>
        <button onClick={onClose}>Close</button>
      </div>
    );
  } */
  /*  function PortalExample() {
    const [showModal, setShowModal] = useState(false);
    return (
      <>
        <button onClick={() => setShowModal(true)}>
          Show modal using a portal
        </button>
        {showModal && createPortal(
          <OrderModal onClose={() => setShowModal(false)} />,
          document.body
        )}
      </>
    );
  } */
  export default Restaurant
