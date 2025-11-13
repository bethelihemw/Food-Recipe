
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import NavBar from "./Component/NavBar"

import Footer from "./Component/Footer"
import Home from "./Pages/Home"
import Recipes from "./Pages/Recipes"
import Settings from "./Pages/Settings"

function App() {
  
  return(<div className="App">
    <Router>
      <NavBar />
      <div className="container main">
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/recipes" element = {<Recipes />} />
          <Route path = "/settings" element = {<Settings />} />
        </Routes>
        
      </div>
      <Footer />
    </Router>
      
  </div>)
}

export default App
