import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Home from "./pages.tsx/Home"
import Navbar from "./components/Navbar"
function App() {

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
