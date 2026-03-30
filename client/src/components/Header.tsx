// src/components/Header.jsx
// import React from 'react';
import { useEffect } from "react";
import cart from '../assets/cart32.png';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { createPortal } from 'react-dom';



interface CartContentItemProps {
 // index: number;
  amount: string | number;
  productName: string;
  productPrice: string | number;
  productOptions: string[];
  setAllCart?: React.Dispatch<React.SetStateAction<any[]>>;
  indexToRemove?: number;
 
}


function Header() {
  
  return (
    <header id="header" >
    
    
    <Link to="/"><h1>ProjectN3</h1></Link>
        <HeaderRight />
       
       
    </header>
  );
}

function HeaderRight() {
  const [showModal, setShowModal] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  let [answer, setAnswer] = useState<any[]>([]);
  let [allCart, setAllCart] = useState<any[]>([]);
  
  async function requestCart(answer: string | number,
                             setAnswer: React.Dispatch<React.SetStateAction<any>>,
                             allCart: any[],
                             setAllCart: React.Dispatch<React.SetStateAction<any[]>> 
                            ){
                             
    

  /*   const response2 = await fetch("http://localhost:3000/addtoorder", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    let resp = await response2.json(); */
    let resp = JSON.parse(localStorage.getItem('cart'))
    setAllCart(resp); // just set the raw data
    
  }
 


    return (
        <div className="header-right">
                  <button className="cart" onClick={() => (requestCart(answer, setAnswer, allCart, setAllCart),setShowModal(true), setShowBackdrop(true))}><img src={cart} ></img></button>
                  <button className="login-button">Log in</button>
                  <button className="signup-button">Sign up</button>
                  {showModal && createPortal(
          <Cart answer={answer} allCart={allCart} setAllCart={setAllCart} onClose={() => (setShowModal(false), setShowBackdrop(false))} />,
          document.getElementById('modal2-root')
        )}
        {showBackdrop && createPortal(
          <CartBackdrop onClose={() => (setShowModal(false), setShowBackdrop(false))} />,
          document.getElementById('backdrop2-root')
        )}    
        </div>
    );
  }
export function Cart({onClose, answer, allCart, setAllCart}: {onClose: React.MouseEventHandler<HTMLButtonElement> | undefined, answer:any, allCart: any[], setAllCart: React.Dispatch<React.SetStateAction<any[]>>}){
 // var orderJSON = JSON.stringify(document.getElementsByClassName("cart-content").innerText);
console.log("in cart " + allCart)
  async function onSubmit(){
    console.log("clicked");
    const element: HTMLCollectionOf<Element> = document.getElementsByClassName("cart-content")
    const orderText = JSON.parse(localStorage.getItem('cart'))
    let orderID = localStorage.getItem('cartId');
    var timeNow = new Date();
    var timeLocal = ( timeNow.getMonth() + 1 ) + '/' + timeNow.getDate() + '/' + timeNow.getFullYear() + ' ' + timeNow.getHours() + ':' + timeNow.getMinutes();
    

    console.log(JSON.stringify( element[0].textContent))
    const response = await fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify({ "orderID": orderID,"orderTime": timeLocal, "order": orderText}) 
      // …
    });
    /* const answer = await response.json();
    console.log( answer.order) */
    
  }

  return(
    <>
    <div className="cart-modal">
    <button className="cart-close-button" onClick={onClose} autoFocus><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 13"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path></svg></button>
      <h2>Your order:</h2>
    <CartContent allCart= {allCart} setAllCart={setAllCart} answer={answer} />
    <button className="checkout-button" onClick={onSubmit}>Checkout</button>
    </div>
    </>

  )
}
function CartBackdrop( {onClose}: {onClose: React.MouseEventHandler<HTMLDivElement> | undefined} ) {
  return <div className="backdrop" onClick={onClose}/>
}

function CartContent({ answer, allCart, setAllCart}: { answer: any, allCart: any[], setAllCart: React.Dispatch<React.SetStateAction<any[]>>}) {
  //const ct = useContext(MyContext);
 // useEffect(() => {
    console.log("in cartcontent " + allCart)
    // },[allCart]); 
  
  
  
  const priceArr: number[] = [];
  return (
  <>
  <div className="cart-content">
    
{/*     {allCart.map((item: any, index: number) => (
  <CartContentItem
    key={index}
    index={index}
    amount={item.amount}
    productName={item.product}
    productPrice={item.productPrice}
    productOptions={item.options}
    setAllCart={setAllCart}
  />
))} */}
        {allCart.map((item: any, index: number) => (
  <CartContentItem
    key={index}
    indexToRemove={index}
    setAllCart={setAllCart}
    amount={item.amount}
    productName={item.product}
    productPrice={item.productPrice}
    productOptions={item.options}
  />
))}

        
   
  </div>
  <div className="cart-total"> <b>&nbsp; Total: </b> 
    {allCart.reduce((acc: number, item: any) => acc + item.amount * item.productPrice, 0)} € &nbsp;
    </div>
  </>)
}
function CartContentItem(props: CartContentItemProps) {
  function removeItem(  indexToRemove: number, setAllCart: React.Dispatch<React.SetStateAction<any[]>>){
    //removes if index 1 or sth but a wont work. items come back on reopen. needs "index: number" in brackets before.
    /* console.log("item removed"+ index)
    const element = document.getElementsByClassName("cart-content");
    console.log(element[0].children.item(indexToRemove))
    element[0].children.item(index).remove(); */
  
    
    //removes from cart if no index in removeitem round brackets. visually gone only on reopen. setallcart line not working.
    //using [a] works too.
    const cart: object[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setAllCart(updatedCart);  
    console.log("newcart" + updatedCart )
  
    
  
  }
  
  return (
    <div className="cart-content-item">
  <div className="cart-product-line"><p> x{props.amount} - <b>{props.productName}</b> - <b>{props.productPrice}€</b> </p>
  <button onClick={() => removeItem(props.indexToRemove, props.setAllCart)}>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"  viewBox="0 0 16 13">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
  </button></div>
  <p className="cart-option-line">  {props.productOptions?.join(', ') ?? ''}</p> 
  </div>
)
}

export default Header

