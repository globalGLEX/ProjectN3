// src/components/Header.jsx
// import React from 'react';
import { useEffect } from "react";
import cart from '../assets/cart32.png';

function Header() {
/*   useEffect(() => {
    
    console.log(document.getElementById("header").offsetHeight);
    const defaultHeight = parseInt( document.getElementById("header").offsetHeight );
    window.onscroll = function () {
	    const h = document.getElementById('header');
	    h.style.height = (defaultHeight - document.documentElement.scrollTop / 10) + "px"
    }
},[])
   */
  return (
    <header id="header" >
    
    
    <a href={`/restaurant/johnscafe`}><h1>ProjectN3</h1></a>
        <HeaderRight />
    </header>
  );
}

function HeaderRight() {
  
  
    return (
        <div className="header-right">
                  <button className="cart"><img src={cart}></img></button>
                  <button className="login-button">Log in</button>
                  <button className="signup-button">Sign up</button>
                  
        </div>
    );
  }
export default Header

