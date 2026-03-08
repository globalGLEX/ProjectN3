// src/components/Header.jsx
// import React from 'react';
import { useEffect } from "react";
import cart from '../assets/cart32.png';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { createContext } from 'react';
import { useContext } from 'react';

import { MyContext } from "../main.tsx";

interface CartContentItemProps {
  index: number;
  amount: string | number;
  productName: string;
  productPrice: string | number;
  productOptions: string;
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
  var [answer, setAnswer] = useState("");
  let [allCart, setAllCart] = useState<any[]>([]);
  
  async function requestCart(answer: string | number,
                             setAnswer: React.Dispatch<React.SetStateAction<any>>,
                             allCart: any[]){
    

    const response2 = await fetch("http://localhost:3000/addtoorder", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    let resp = await response2.json();
/*     setAnswer("product:" + " " + resp.product + 
              " price:" + " " + resp.productPrice +
              " options:" + " " + resp.options +
              " amount:" + " " + resp.amount + 
              " total price:" + " " + resp.totalPrice);  */
             /*  setAnswer(["product"+ resp.product, 
                " price"+  resp.productPrice,
                " options"+ resp.options,
                " amount"+  resp.amount, 
                " total price"+  resp.totalPrice]); */
                
                setAnswer([resp.product, 
                  resp.productPrice,
                  resp.options,
                  resp.amount, 
                  resp.totalPrice]);
                  //setallcart was here
    console.log(answer)            
    console.log(allCart);
  }
  useEffect(() => { 
    if(answer.length > 1){
    setAllCart(allCart => [...allCart,
      <CartContentItem index={0} amount={answer[3]} productName={answer[0]} productPrice={answer[1]} productOptions={answer[2]}/>
     
    ])
    }//setAllcart was originally answer[3] + answer[2] + etc
   },[answer]); 


    return (
        <div className="header-right">
                  <button className="cart" onClick={() => (requestCart(answer, setAnswer, allCart),setShowModal(true), setShowBackdrop(true))}><img src={cart} ></img></button>
                  <button className="login-button">Log in</button>
                  <button className="signup-button">Sign up</button>
                  {showModal && createPortal(
          <Cart answer={answer} allCart={allCart} onClose={() => (setShowModal(false), setShowBackdrop(false))} />,
          document.getElementById('modal2-root')
        )}
        {showBackdrop && createPortal(
          <CartBackdrop onClose={() => (setShowModal(false), setShowBackdrop(false))} />,
          document.getElementById('backdrop2-root')
        )}    
        </div>
    );
  }
export function Cart({onClose, answer, allCart}){
 // var orderJSON = JSON.stringify(document.getElementsByClassName("cart-content").innerText);
console.log("in cart " + allCart)
  async function onSubmit(){
    console.log("clicked");
    const element: HTMLCollectionOf<Element> = document.getElementsByClassName("cart-content")
    const orderText = element[0].textContent;
    let orderID = 1;
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
    <button className="cart-close-button" onClick={onClose} autoFocus>X</button>
      <h2>Your order:</h2>
    <CartContent allCart= {allCart} answer={answer} />
    <button className="checkout-button" onClick={onSubmit}>Checkout</button>
    </div>
    </>

  )
}
function CartBackdrop( {onClose} ) {
  return <div className="backdrop" onClick={onClose}/>
}

function CartContent({answer, allCart}) {
  //const ct = useContext(MyContext);
 // useEffect(() => {
    console.log("in cartcontent " + allCart)
    // },[allCart]); 
  
  
  
  
  return (
  <>
  <div className="cart-content">
   {/*  <CartContentItem index={0} amount={answer[3]} productName={answer[0]} productPrice={answer[1]} productOptions={answer[2]}/>
    <CartContentItem index={0} amount={answer[3]} productName={answer[0]} productPrice={answer[1]} productOptions={answer[2]}/>
 */}
    
    {allCart}

    <div className="cart-total"><p> <b>Total: {answer[3] * answer[1]} € </b></p></div>
  </div>
  
  </>)
}
function CartContentItem(props: CartContentItemProps) {
  
  return (
    <div className="cart-content-item">
  <div className="cart-product-line"><p> x{props.amount} - <b>{props.productName}</b> - <b>{props.productPrice}€</b> </p>
  <button onClick={() => removeItem(props.index)}>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"  viewBox="0 0 16 13">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
  </button></div>
  <p className="cart-option-line">  {props.productOptions}</p> 
  </div>
)
}
function removeItem(index: number){
  console.log("item removed"+ index)
  const element = document.getElementsByClassName("cart-content");
  //console.log(element[0].children[index])
  element[0].children[index].remove();

  

}
export default Header

