import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages.tsx/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Checkout from "./pages.tsx/Checkout";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";
function App() {
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  return (
    <div>
      <Toaster/>
      <RecoilRoot>
        <Router>
          <Navbar cartQuantity={cartQuantity} />
          <Routes>
            <Route
              path="/"
              element={<Home setCartQuantity={setCartQuantity} />}
            />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
