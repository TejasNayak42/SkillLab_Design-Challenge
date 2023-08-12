import { BrowserRouter, Routes, Route,} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Footer from "./Components/Footer";

function App() {
  return (
   <div>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
   </div>
  )
}

export default App;
