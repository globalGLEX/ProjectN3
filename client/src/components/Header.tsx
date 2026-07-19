
import cart from '../assets/cart32.png';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { createPortal } from 'react-dom';
import CartContentItem from './CartContentItem'
import Cart from './Cart.tsx'



function Header() {
  
  return (
    <header id="header" >
    <Link to="/"><h1>ProjectN3</h1></Link>
        <HeaderRight />    
    </header>
  );
}

//The right side of header, containing cart, login, signup buttons
function HeaderRight() {
  const [showModal, setShowModal] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  let [answer, setAnswer] = useState<any[]>([]);
  let [allCart, setAllCart] = useState<any[]>([]);
  
  //Gets the current cart contents from localStorage
  async function requestCart(setAllCart: React.Dispatch<React.SetStateAction<any[]>>){
                             
  /*   const response2 = await fetch("http://localhost:3000/addtoorder", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    let resp = await response2.json(); */
    let resp = JSON.parse(localStorage.getItem('cart') || '[]')
    setAllCart(resp); // just set the raw data
    
  }

    return (
        <div className="header-right">
                  <button className="cart" onClick={() => (requestCart(setAllCart),setShowModal(true), setShowBackdrop(true))}><img src={cart} ></img></button>
                  <button className="login-button">Log in</button>
                  <button className="signup-button">Sign up</button>
                  {showModal && createPortal(
          <Cart answer={answer} allCart={allCart} setAllCart={setAllCart} onClose={() => (setShowModal(false), setShowBackdrop(false))} />,
          document.getElementById('modal2-root')!
        )}
        {showBackdrop && createPortal(
          <CartBackdrop onClose={() => (setShowModal(false), setShowBackdrop(false))} />,
          document.getElementById('backdrop2-root')!
        )}    
        </div>
    );
  }

function CartBackdrop( {onClose}: {onClose: React.MouseEventHandler<HTMLDivElement> | undefined} ) {
  return <div className="backdrop" onClick={onClose}/>
}



export default Header

