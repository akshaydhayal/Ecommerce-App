import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Home from "./pages.tsx/Home"
import Navbar from "./components/Navbar"
import { useState } from "react";
import Checkout from "./pages.tsx/Checkout";
function App() {
  const [cartQuantity,setCartQuantity]=useState(0);
  return (

    <div>
      <Router>
        <Navbar cartQuantity={cartQuantity}/>
        <Routes>
          <Route path="/" element={<Home setCartQuantity={setCartQuantity}/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
