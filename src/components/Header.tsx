// src/components/Header.jsx
// import React from 'react';
import { useEffect } from "react";
import cart from '../assets/cart32.png';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { createPortal } from 'react-dom';
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
  
    return (
        <div className="header-right">
                  <button className="cart" onClick={() => (setShowModal(true), setShowBackdrop(true))}><img src={cart} ></img></button>
                  <button className="login-button">Log in</button>
                  <button className="signup-button">Sign up</button>
                  {showModal && createPortal(
          <Cart  onClose={() => (setShowModal(false), setShowBackdrop(false))} />,
          document.getElementById('modal2-root')
        )}
        {showBackdrop && createPortal(
          <CartBackdrop onClose={() => (setShowModal(false), setShowBackdrop(false))} />,
          document.getElementById('backdrop2-root')
        )}    
        </div>
    );
  }
export function Cart({onClose}){


  return(
    <>
    <div className="cart-modal">
    <button className="cart-close-button" onClick={onClose} autoFocus>X</button>
      <h2>Your order</h2>
    <div className="cart-content">
      <p> Product1 - amount - price </p>
      <p> Product2 - amount - price </p>
      <p> Product3 - amount - price </p>
      <p> Product1 - amount - price </p>
      <p> Product2 - amount - price </p>
      <p> Product3 - amount - price </p>
      <p> Product1 - amount - price </p>
      <p> Product2 - amount - price </p>
      <p> Product3 - amount - price </p>
      <p> Product1 - amount - price </p>
      <p> Product2 - amount - price </p>
      <p> Product3 - amount - price </p>
      <p> Product1 - amount - price </p>
     
    
    </div>
    <button className="checkout-button">Checkout</button>
    </div>
    </>

  )
}
function CartBackdrop( {onClose} ) {
  return <div className="backdrop" onClick={onClose}/>
}
export default Header

