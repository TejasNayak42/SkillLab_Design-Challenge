import { BrowserRouter, Routes, Route,} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";

function App() {
  return (
   <div>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
   </div>
  )
}

export default App;
