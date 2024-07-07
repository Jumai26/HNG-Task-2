import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ShopPage from './components/ShopPage'
import Likes from './components/Likes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <ShopPage/>
        <Likes/>
      </div>  
    </>
  )
}

export default App
