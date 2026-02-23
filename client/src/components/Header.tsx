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
  amount: number;
  productName: string;
  productPrice: number;
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
  var [answer, setAnswer] = useState("empty");
  async function requestCart(answer, setAnswer){
    

    const response2 = await fetch("http://localhost:3000/cart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    let resp = await response2.json();
    setAnswer(resp.order);
    console.log(answer);
  }



    return (
        <div className="header-right">
                  <button className="cart" onClick={() => (requestCart(answer, setAnswer),setShowModal(true), setShowBackdrop(true))}><img src={cart} ></img></button>
                  <button className="login-button">Log in</button>
                  <button className="signup-button">Sign up</button>
                  {showModal && createPortal(
          <Cart answer={answer} onClose={() => (setShowModal(false), setShowBackdrop(false))} />,
          document.getElementById('modal2-root')
        )}
        {showBackdrop && createPortal(
          <CartBackdrop onClose={() => (setShowModal(false), setShowBackdrop(false))} />,
          document.getElementById('backdrop2-root')
        )}    
        </div>
    );
  }
export function Cart({onClose, answer}){
 // var orderJSON = JSON.stringify(document.getElementsByClassName("cart-content").innerText);

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
      <h2>Your order from server: {answer}</h2>
    <CartContent answer={answer} />
    <button className="checkout-button" onClick={onSubmit}>Checkout</button>
    </div>
    </>

  )
}
function CartBackdrop( {onClose} ) {
  return <div className="backdrop" onClick={onClose}/>
}

function CartContent(answer) {
  const ct = useContext(MyContext);
  //console.log( ct[0].amount + ct[0].name)
  
  return (
  <>
  <div className="cart-content">
    <CartContentItem index={0} amount={ct[1].amount} productName={ct[1].name} productPrice={ct[1].price}/>
    <CartContentItem index={1} amount={1} productName="fries" productPrice={3}/>
    
    <div className="cart-total"><p> <b>Total: 12 € </b></p></div>
  </div>
  
  </>)
}
function CartContentItem(props: CartContentItemProps) {
  
  return (
    <div className="cart-content-item">
  <div className="cart-product-line"><p> x{props.amount} - <b>{props.productName}</b> - <b>{props.productPrice}€</b> </p>
  <button onClick={() => removeItem(props.index)}>X</button></div>
  <p className="cart-option-line"> • without buns</p> 
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

