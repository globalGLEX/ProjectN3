import {data} from '../modules/data.tsx';
import OrderModal from './OrderModal.tsx';
import type {OrderModalProps} from './OrderModal.tsx';


import { useState } from 'react';
import { createPortal } from 'react-dom';


interface RestaurantImageProps {
    /* list of props */
    imageUrl: string;
    imageUrlAlt: string;
    logoUrl: string;
    restaurantName: string;
}
interface FoodCategoryItemProps{
    
    catName: string;
   
}
interface ProductProps {
    imageUrl: string;
    imageAlt: string;
    name: string;
    desc: string;
    price: number;
    id: number;
    
    
   
    
}

function Restaurant() {
    return (
        <div className="restaurant">
          
            <RestaurantImage imageUrl={data.restaurants[2].imageUrl} 
                             imageUrlAlt={data.restaurants[2].imageUrlAlt} 
                             logoUrl={data.restaurants[2].logoUrl} 
                             restaurantName={data.restaurants[2].name}/>
            <FoodCategories />
            <Products />
            
            
            

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
  function FoodCategories() {
    return (
        <div className="restaurant-categories">
            <FoodCategoryItem catName={data.restaurants[0].categories[0]}/>
            <FoodCategoryItem catName={data.restaurants[0].categories[1]}/>
            <FoodCategoryItem catName={data.restaurants[0].categories[2]}/>
            <FoodCategoryItem catName={data.restaurants[0].categories[3]}/>
            
        </div>
    );
  }
  function FoodCategoryItem(props: FoodCategoryItemProps) {
    
    return (
        <button className="restaurant-category-item"><p>{props.catName}</p></button>
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


  function Products() {
    

    return (
        
        <div>
            
            <div className="products-category-title">
                <h1>{data.restaurants[0].categories[0]}</h1>
            </div>       
            <div className="products">
                        
                <Product 
                    id={data.restaurants[2].products[0].id}
                    name={data.restaurants[2].products[0].name}
                    desc={data.restaurants[2].products[0].desc}
                    price={data.restaurants[2].products[0].price}
                    imageUrl={data.restaurants[2].products[0].imageUrl}
                    imageAlt={data.restaurants[2].products[0].alt}
                    />
                <Product 
                     id={data.restaurants[2].products[1].id}
                     name={data.restaurants[2].products[1].name}
                     desc={data.restaurants[2].products[1].desc}
                     price={data.restaurants[2].products[1].price}
                     imageUrl={data.restaurants[2].products[1].imageUrl}
                     imageAlt={data.restaurants[2].products[1].alt}
                     />
                <Product 
                    id={data.restaurants[2].products[2].id}
                    name={data.restaurants[2].products[2].name}
                    desc={data.restaurants[2].products[2].desc}
                    price={data.restaurants[2].products[2].price}
                    imageUrl={data.restaurants[2].products[2].imageUrl}
                    imageAlt={data.restaurants[2].products[2].alt}
                    />
                <Product 
                    id={data.restaurants[2].products[3].id}
                    name={data.restaurants[2].products[3].name}
                    desc={data.restaurants[2].products[3].desc}
                    price={data.restaurants[2].products[3].price}
                    imageUrl={data.restaurants[2].products[3].imageUrl}
                    imageAlt={data.restaurants[2].products[3].alt}
                    />
                <Product 
                    id={data.restaurants[2].products[4].id}
                    name={data.restaurants[2].products[4].name}
                    desc={data.restaurants[2].products[4].desc}
                    price={data.restaurants[2].products[4].price}
                    imageUrl={data.restaurants[2].products[4].imageUrl}
                    imageAlt={data.restaurants[2].products[4].alt}
                    />
                <Product 
                    id={data.restaurants[2].products[5].id}
                    name={data.restaurants[2].products[5].name}
                    desc={data.restaurants[2].products[5].desc}
                    price={data.restaurants[2].products[5].price}
                    imageUrl={data.restaurants[2].products[5].imageUrl}
                    imageAlt={data.restaurants[2].products[5].alt}
                    
                    />
                
            

            </div>
        </div>
    );
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
            <AddToCartButton />
        </div>
        <div className="product-image"><img src={props.imageUrl || 'https://placehold.co/200x200'} alt={props.imageAlt} /></div>
        
    </div>
        {showModal && createPortal(
          <OrderModal id={id} onClose={() => (setShowModal(false), setShowBackdrop(false))} />,
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
