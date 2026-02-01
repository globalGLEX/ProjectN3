import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState } from 'react';
import './index.css'
import App from './App.tsx'
import ErrorPage from "./error-page";

import Categories from "./components/Categories";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Restaurants from "./components/Restaurants";
import Restaurant from "./components/Restaurant";


const router = createBrowserRouter([
  {
    path: "/",
    element: <><Header /> <Categories /> <Restaurants /> <Footer /></>,
    errorElement: <ErrorPage />,
  },
  {
    path: "restaurant/:restaurantId",
    element: <><Header /> <Restaurant /><Footer /></>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
   {/*  <App /> */} {/* uncomment this if you want to see the rest of the app */}
    
  </StrictMode>
)
