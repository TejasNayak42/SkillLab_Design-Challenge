import { BrowserRouter, Routes, Route,} from "react-router-dom";
import NavBar from "./Components/NavBar";

function App() {
  return (
   <div>
    <BrowserRouter>
      <NavBar/>
    </BrowserRouter>
   </div>
  )
}

export default App;
