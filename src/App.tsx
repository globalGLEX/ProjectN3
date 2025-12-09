import { useState } from 'react'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Categories from './components/Categories'
import Restaurants from './components/Restaurants'
import Restaurant from './components/Restaurant'
import OrderModal from './components/OrderModal'

function App() {
  
  return (
    <>
       
<Header />
<Categories />
<Restaurants />
<Footer />

<Restaurant />

<OrderModal />

    </>
  )
}

export default App

