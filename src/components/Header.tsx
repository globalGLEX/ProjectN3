// src/components/Header.jsx
// import React from 'react';


function Header() {
  return (
    <header>
    <h1>ProjectN3</h1>
        <HeaderRight />
    </header>
  );
}

function HeaderRight() {
    return (
        <div className="header-right">
                  <button className="signup-button">Sign up</button>
                  <button className="login-button">Log in</button>
        </div>
    );
  }
export default Header

