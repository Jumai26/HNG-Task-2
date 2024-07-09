import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ShopPage from './components/ShopPage'
import Likes from './components/Likes'
import BestSellers from './components/BestSellers'
import Explore from './components/Explore'
import Trending from './components/Trending'
import AllProducts from './components/AllProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <ShopPage/>
        <Likes/>
        <BestSellers/>
        <Explore/>
        <Trending/>
        <AllProducts/>
      </div>  
    </>
  )
}

export default App
