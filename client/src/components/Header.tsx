// src/components/Header.jsx
// import React from 'react';
import { useEffect } from "react";
import cart from '../assets/cart32.png';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { createPortal } from 'react-dom';

interface CartContentItemProps {
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
    <CartContent />
    <button className="checkout-button">Checkout</button>
    </div>
    </>

  )
}
function CartBackdrop( {onClose} ) {
  return <div className="backdrop" onClick={onClose}/>
}

function CartContent() {
  return (
  <>
  <div className="cart-content">
    <CartContentItem amount={1} productName="Cheeseburger" productPrice={3}/>
    <CartContentItem amount={1} productName="Fries" productPrice={3}/>
    
  </div>
  <div className="cart-total"><p> <b>Total: 12 € </b></p></div>
  </>)
}
function CartContentItem(props: CartContentItemProps) {
  return (
    <>
  <p> x{props.amount} - <b>{props.productName}</b> - <b>{props.productPrice}€</b> </p>
  <p className="cart-option-line"> • without buns</p>
  </>
)
}
export default Header

