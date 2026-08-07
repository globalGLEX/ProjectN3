import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState } from 'react';
import './index.css'
import App from './App.tsx'
import myState2 from './App.tsx'
import ErrorPage from "./error-page";

import Categories from "./components/Categories";
import Header from "./components/Header";

import Footer from "./components/Footer";
import Restaurants from "./components/Restaurants";
import Restaurant from "./components/Restaurant";
import { createContext } from 'react';
import { useContext } from 'react';

import Login from './components/Login'; 

export const MyContext = createContext(null);
/* const cart = useContext(CartContext); */

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <><Header /> <Restaurants /> <Login /> <Footer /> </>,
    errorElement: <ErrorPage />,
  },
  {
    path: "restaurant/:restaurantId",
    element: <><Header /> <Restaurant /><Footer /></>,
  },
]);
//export function CtxFunction(){
  //const CartContext = createContext(null);
  
  
 
  //const [currentCart, setCurrentCart] = useState({ productAmount: 1, productName: 'Cheeseburger', productPrice: 1,  });
//}

const myState = [{amount: 1, name: "Cheeseburger", price: 3},
                  {amount: 4, name: "Sushi", price: 4}
]; //useState must be in func component

 
createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <MyContext value={myState}>
      {/* <App /> */}
    <RouterProvider router={router} />
    </MyContext>
   {/*  <App /> */} {/* uncomment this if you want to see the rest of the app */}
    
  </StrictMode>
)
  
